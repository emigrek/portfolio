"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { motion } from "motion/react";

import cn from "@/utils/cn";

interface LightRaysProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  count?: number;
  colors?: string[]; // 👈 instead of color
  blur?: number;
  speed?: number;
  length?: string;
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
  color: string; // 👈 per-ray color
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
          "--ray-color": color, // 👈 per-ray var
        } as CSSProperties
      }
      initial={{ rotate: rotate }}
      animate={{
        opacity: [0, intensity, 0],
        rotate: [rotate - swing, rotate + swing, rotate - swing],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
        repeatDelay: duration * 0.1,
      }}
    />
  );
};

export function LightRays({
  className,
  style,
  count = 7,
  colors = ["rgba(160, 210, 255, 0.2)"], // 👈 default palette
  blur = 36,
  speed = 14,
  length = "90vh",
  ref,
  ...props
}: LightRaysProps) {
  const [rays, setRays] = useState<LightRay[]>([]);
  const cycleDuration = Math.max(speed, 0.1);

  useEffect(() => {
    setRays(createRays(count, cycleDuration, colors));
  }, [count, cycleDuration, colors]);

  return (
    <div
      ref={ref}
      className={cn(
        "pointer-events-none absolute inset-0 isolate overflow-hidden rounded-[inherit]",
        className
      )}
      style={
        {
          "--light-rays-blur": `${blur}px`,
          "--light-rays-length": length,
          ...style,
        } as CSSProperties
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
}
