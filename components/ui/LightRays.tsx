"use client";

import * as React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import cn from "@/utils/cn";

type CSSVars = { [key in `--${string}`]?: string | number };
type StyleWithVars = React.CSSProperties & CSSVars;

type ColorsProp = string[] | string[][];

interface LightRaysProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  colors?: ColorsProp;
  blur?: number;
  speed?: number; // seconds per cycle
  length?: string;

  portal?: boolean;
  zIndex?: number;

  followRef?: React.RefObject<HTMLElement>;
  followSelector?: string;
}

type LightRay = {
  id: string;
  left: number;
  rotate: number;
  width: number;
  swing: number;
  delay: number;
  duration: number;
  intensity: number;
  colorSeed: number;
};

function normalizePalettes(colors?: ColorsProp): string[][] {
  const fallback = ["rgba(160, 210, 255, 0.2)"];
  if (!colors) return [fallback];

  if (typeof colors[0] === "string") {
    const p = (colors as string[]).filter(Boolean);
    return [p.length ? p : fallback];
  }

  const palettes = (colors as string[][])
    .map((p) => p.filter(Boolean))
    .filter((p) => p.length > 0);

  return palettes.length ? palettes : [fallback];
}

function resolveColor(seed: number, palette: string[]): string {
  if (!palette.length) return "rgba(160, 210, 255, 0.2)";
  const idx = Math.floor(seed * palette.length) % palette.length;
  return palette[idx];
}

const createRays = (
  count: number,
  cycle: number,
  coarse: boolean
): LightRay[] => {
  if (count <= 0) return [];

  const widthMin = coarse ? 110 : 160;
  const widthRange = coarse ? 130 : 160;

  const rotateRange = coarse ? 40 : 56;
  const swingMin = coarse ? 0.6 : 0.8;
  const swingRange = coarse ? 1.2 : 1.8;

  const intensityMin = coarse ? 0.45 : 0.6;
  const intensityRange = coarse ? 0.35 : 0.5;

  return Array.from({ length: count }, (_, index) => {
    const left = 8 + Math.random() * 84;
    const rotate = -(rotateRange / 2) + Math.random() * rotateRange;
    const width = widthMin + Math.random() * widthRange;
    const swing = swingMin + Math.random() * swingRange;
    const delay = Math.random() * cycle;
    const duration = cycle * (0.75 + Math.random() * 0.5);
    const intensity = intensityMin + Math.random() * intensityRange;
    const colorSeed = Math.random();

    return {
      id: `${index}-${Math.round(left * 10)}`,
      left,
      rotate,
      width,
      swing,
      delay,
      duration,
      intensity,
      colorSeed,
    };
  });
};

const Ray = ({
  left,
  rotate,
  width,
  swing,
  delay,
  duration,
  intensity,
  color,
}: Omit<LightRay, "colorSeed"> & { color: string }) => {
  return (
    <motion.div
      className="pointer-events-none absolute -top-[12%] left-[var(--ray-left)] h-[var(--light-rays-length)] w-[var(--ray-width)] origin-top -translate-x-1/2 rounded-full opacity-0"
      style={
        {
          "--ray-left": `${left}%`,
          "--ray-width": `${width}px`,
          backgroundImage: `linear-gradient(to bottom, ${color}, transparent)`,
          willChange: "transform, opacity",
        } as StyleWithVars
      }
      initial={{ rotate }}
      animate={{
        opacity: [0, intensity, 0],
        rotate: [rotate - swing, rotate + swing, rotate - swing],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
        repeatDelay: duration * 0.1,
      }}
    />
  );
};

function setForwardedRef<T>(ref: React.ForwardedRef<T>, value: T) {
  if (typeof ref === "function") ref(value);
  else if (ref) (ref as React.MutableRefObject<T>).current = value;
}

export const LightRays = React.forwardRef<HTMLDivElement, LightRaysProps>(
  function LightRays(
    {
      className,
      style,
      count = 7,
      colors = ["rgba(160, 210, 255, 0.2)"],
      blur = 36,
      speed = 14,
      length = "90vh",
      portal = true,
      zIndex = 0,
      followRef,
      followSelector,
      ...props
    },
    forwardedRef
  ) {
    const followEnabled = !!followRef || !!followSelector;

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const [coarse, setCoarse] = useState(false);
    useEffect(() => {
      const mq = window.matchMedia?.("(pointer: coarse)");
      if (!mq) return;
      const onChange = () => setCoarse(mq.matches);
      onChange();
      mq.addEventListener?.("change", onChange);
      return () => mq.removeEventListener?.("change", onChange);
    }, []);

    const cycleDuration = Math.max(speed, 0.1);

    const palettes = useMemo(() => normalizePalettes(colors), [colors]);
    const palettesKey = useMemo(
      () => palettes.map((p) => p.join("|")).join("||"),
      [palettes]
    );

    const [cycleIndex, setCycleIndex] = useState(0);
    useEffect(() => {
      setCycleIndex(0);
      if (palettes.length <= 1) return;

      const t0 = performance.now();
      let timer = 0;

      const schedule = () => {
        const elapsed = (performance.now() - t0) / 1000;
        const nextIn = cycleDuration - (elapsed % cycleDuration);

        timer = window.setTimeout(
          () => {
            setCycleIndex((i) => (i + 1) % palettes.length);
            schedule();
          },
          Math.max(0, nextIn) * 1000
        );
      };

      schedule();
      return () => window.clearTimeout(timer);
    }, [palettes.length, cycleDuration, palettesKey]);

    const activePalette = palettes[cycleIndex] ?? palettes[0];

    const enableBlend = !coarse;
    const effectiveBlur = coarse ? Math.min(blur, 12) : blur;
    const effectiveLength = coarse ? "60vh" : length;

    const [rays, setRays] = useState<LightRay[]>([]);
    useEffect(() => {
      setRays(createRays(count, cycleDuration, coarse));
    }, [count, cycleDuration, coarse]);

    const hostRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!followEnabled) return;
      if (portal && !mounted) return;

      const getScrollParent = (
        node: HTMLElement | null
      ): HTMLElement | null => {
        let p = node?.parentElement ?? null;
        while (p) {
          const s = window.getComputedStyle(p);
          const oy = s.overflowY;
          const isScrollable =
            /(auto|scroll|overlay)/.test(oy) &&
            p.scrollHeight > p.clientHeight + 1;
          if (isScrollable) return p;
          p = p.parentElement;
        }
        return null;
      };

      let el: HTMLElement | null =
        followRef?.current ??
        (followSelector
          ? (document.querySelector(followSelector) as HTMLElement | null)
          : null);

      const host = hostRef.current;
      if (!host) return;

      host.style.inset = "auto";
      host.style.top = "0px";
      host.style.left = "0px";
      host.style.right = "auto";
      host.style.bottom = "auto";
      host.style.willChange = "transform";

      let raf = 0;
      let scrollParent: HTMLElement | null = null;
      let last = { x: NaN, y: NaN, w: NaN, h: NaN, br: "" };

      const apply = () => {
        raf = 0;

        if (!el) {
          el =
            followRef?.current ??
            (followSelector
              ? (document.querySelector(followSelector) as HTMLElement | null)
              : null);
          if (!el) return;
        }

        // (re)bind scroll parent if needed
        const sp = getScrollParent(el);
        if (sp !== scrollParent) {
          scrollParent?.removeEventListener("scroll", schedule as any);
          scrollParent = sp;
          scrollParent?.addEventListener(
            "scroll",
            schedule as any,
            { passive: true } as any
          );
        }

        const rect = el.getBoundingClientRect();

        const x = rect.left;
        const y = rect.top;
        const w = rect.width;
        const h = rect.height;

        if (x !== last.x || y !== last.y) {
          host.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          last.x = x;
          last.y = y;
        }
        if (w !== last.w) {
          host.style.width = `${w}px`;
          last.w = w;
        }
        if (h !== last.h) {
          host.style.height = `${h}px`;
          last.h = h;
        }

        const br = window.getComputedStyle(el).borderRadius || "0px";
        if (br !== last.br) {
          host.style.borderRadius = br;
          last.br = br;
        }

        // Optional: hide when offscreen (prevents bleeding during snap transitions)
        const visible = rect.bottom > 0 && rect.top < window.innerHeight;
        host.style.opacity = visible ? "1" : "0";
      };

      const schedule = () => {
        if (raf) return;
        raf = requestAnimationFrame(apply);
      };

      const ro = new ResizeObserver(schedule);
      if (el) ro.observe(el);

      window.addEventListener("resize", schedule);
      window.addEventListener("scroll", schedule, { passive: true });

      schedule();

      return () => {
        ro.disconnect();
        scrollParent?.removeEventListener("scroll", schedule as any);
        window.removeEventListener("resize", schedule);
        window.removeEventListener("scroll", schedule as any);
        if (raf) cancelAnimationFrame(raf);
      };
    }, [followEnabled, followRef, followSelector, portal, mounted]);

    const node = (
      <div
        ref={(node) => {
          hostRef.current = node;
          setForwardedRef(forwardedRef, node as any);
        }}
        className={cn(
          "pointer-events-none fixed isolate overflow-hidden",
          className,
          // FORCE the correct inset semantics LAST so user classes can't override it.
          followEnabled ? "inset-auto" : "inset-0"
        )}
        style={
          {
            ...style,
            zIndex,
            "--light-rays-length": effectiveLength,

            // FORCE follow-mode constraints LAST so user inline styles can't override.
            ...(followEnabled
              ? {
                  inset: "auto",
                  transform: "translate3d(-9999px,-9999px,0)",
                  width: 0,
                  height: 0,
                }
              : null),
          } as StyleWithVars
        }
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            filter: `blur(${effectiveBlur}px)`,
            mixBlendMode: enableBlend ? "screen" : "normal",
            willChange: "filter",
          }}
        >
          {rays.map((ray) => (
            <Ray
              key={ray.id}
              {...ray}
              color={resolveColor(ray.colorSeed, activePalette)}
            />
          ))}
        </div>
      </div>
    );

    if (!portal) return node;
    if (!mounted) return null;

    return createPortal(node, document.body);
  }
);
