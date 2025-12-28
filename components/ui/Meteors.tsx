"use client";

import React, { useCallback, useEffect, useState } from "react";
import cn from "@/utils/cn";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

const u32 = () => crypto.getRandomValues(new Uint32Array(1))[0];
const rand = (min: number, max: number) =>
  min + (u32() / 2 ** 32) * (max - min);

type Meteor = { key: number; style: React.CSSProperties };

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  const nextDelay = useCallback(() => {
    // Rare overall: usually waits multiple (minDelay..maxDelay) chunks
    let d = rand(minDelay, maxDelay);

    // Keep adding extra chunks most of the time (rarity knob)
    while (rand(0, 1) < 0.85) d += rand(minDelay, maxDelay);

    // But sometimes it can spawn almost instantly
    if (rand(0, 1) < 0.03) d = rand(0, 0.8);

    return d;
  }, [minDelay, maxDelay]);

  const makeMeteor = useCallback((): Meteor => {
    return {
      key: u32(),
      style: {
        ["--angle" as any]: `${-angle}deg`,
        top: "-5%",
        // viewport position + jitter so it doesn't "favor" the same spot
        left: `calc(${rand(0, 100)}vw + ${rand(-250, 250)}px)`,
        animationDelay: `${nextDelay()}s`,
        animationDuration: `${rand(minDuration, maxDuration)}s`,
        animationIterationCount: 1,
        animationFillMode: "both",
      },
    };
  }, [angle, minDuration, maxDuration, nextDelay]);

  useEffect(() => {
    setMeteors(Array.from({ length: number }, makeMeteor));
  }, [number, makeMeteor]);

  const respawn = useCallback(
    (idx: number) => {
      setMeteors((prev) => {
        if (!prev[idx]) return prev;
        const next = prev.slice();
        next[idx] = makeMeteor();
        return next;
      });
    },
    [makeMeteor]
  );

  return (
    <>
      {meteors.map((m, idx) => (
        <span
          key={m.key}
          style={m.style}
          onAnimationEnd={() => respawn(idx)}
          className={cn(
            "animate-meteor pointer-events-none absolute size-1 rotate-[var(--angle)] rounded-full bg-white shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-300 to-transparent" />
        </span>
      ))}
    </>
  );
};
