"use client";

import * as React from "react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import cn from "@/utils/cn";

type CSSVars = { [key in `--${string}`]?: string | number };
type StyleWithVars = React.CSSProperties & CSSVars;

interface LightRaysProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  colors?: string[];
  blur?: number;
  speed?: number;
  length?: string;

  /** Render into document.body to escape transformed ancestors */
  portal?: boolean;

  /** z-index for the container */
  zIndex?: number;

  /** If provided, rays will track this element and scroll past with it */
  followRef?: React.RefObject<HTMLElement>;
  followSelector?: string; // e.g. "#about"
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
  color: string;
};

const createRays = (
  count: number,
  cycle: number,
  colors: string[]
): LightRay[] => {
  if (count <= 0) return [];
  const palette = colors?.length ? colors : ["rgba(160, 210, 255, 0.2)"];

  return Array.from({ length: count }, (_, index) => {
    const left = 8 + Math.random() * 84;
    const rotate = -28 + Math.random() * 56;
    const width = 160 + Math.random() * 160;
    const swing = 0.8 + Math.random() * 1.8;
    const delay = Math.random() * cycle;
    const duration = cycle * (0.75 + Math.random() * 0.5);
    const intensity = 0.6 + Math.random() * 0.5;
    const color = palette[Math.floor(Math.random() * palette.length)];

    return {
      id: `${index}-${Math.round(left * 10)}`,
      left,
      rotate,
      width,
      swing,
      delay,
      duration,
      intensity,
      color,
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
}: LightRay) => {
  return (
    <motion.div
      className="pointer-events-none absolute -top-[12%] left-[var(--ray-left)] h-[var(--light-rays-length)] w-[var(--ray-width)] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-[color-mix(in_srgb,var(--ray-color)_70%,transparent)] to-transparent opacity-0 mix-blend-screen blur-[var(--light-rays-blur)]"
      style={
        {
          "--ray-left": `${left}%`,
          "--ray-width": `${width}px`,
          "--ray-color": color,
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

    // mounted gate for portal (avoid SSR mismatch)
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    const [rays, setRays] = useState<LightRay[]>([]);
    const cycleDuration = Math.max(speed, 0.1);

    // Avoid regenerating if caller passes inline array every render
    const paletteKey = useMemo(() => colors.join("|"), [colors]);

    useEffect(() => {
      setRays(createRays(count, cycleDuration, colors));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count, cycleDuration, paletteKey]);

    const hostRef = useRef<HTMLDivElement | null>(null);

    // Follow loop: fixed + rect in RAF (smooth-scroll safe)
    useEffect(() => {
      if (!followEnabled) return;

      let raf = 0;
      let el: HTMLElement | null =
        followRef?.current ??
        (followSelector
          ? (document.querySelector(followSelector) as HTMLElement | null)
          : null);

      const tick = () => {
        const host = hostRef.current;
        if (!host) {
          raf = requestAnimationFrame(tick);
          return;
        }

        // If element wasn't found yet, keep trying
        if (!el) {
          el =
            followRef?.current ??
            (followSelector
              ? (document.querySelector(followSelector) as HTMLElement | null)
              : null);
          raf = requestAnimationFrame(tick);
          return;
        }

        const rect = el.getBoundingClientRect();
        const br = window.getComputedStyle(el).borderRadius || "0px";

        // Important: neutralize "inset-0" and similar classes
        host.style.inset = "auto";
        host.style.top = `${rect.top}px`;
        host.style.left = `${rect.left}px`;
        host.style.right = "auto";
        host.style.bottom = "auto";
        host.style.width = `${rect.width}px`;
        host.style.height = `${rect.height}px`;
        host.style.borderRadius = br;

        raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [followEnabled, followRef, followSelector]);

    const node = (
      <div
        ref={(node) => {
          hostRef.current = node;
          setForwardedRef(forwardedRef, node as any);
        }}
        className={cn(
          "pointer-events-none fixed isolate overflow-hidden",
          !followEnabled && "inset-0",
          className
        )}
        style={
          {
            zIndex,
            // Prevent flash before RAF positions it (follow mode)
            ...(followEnabled
              ? { inset: "auto", top: -9999, left: -9999, width: 0, height: 0 }
              : null),
            "--light-rays-blur": `${blur}px`,
            "--light-rays-length": length,
            ...style,
          } as StyleWithVars
        }
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          {rays.map((ray) => (
            <Ray key={ray.id} {...ray} />
          ))}
        </div>
      </div>
    );

    if (!portal) return node;
    if (!mounted) return null;

    return createPortal(node, document.body);
  }
);
