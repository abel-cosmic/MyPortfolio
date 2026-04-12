"use client";

import { useEffect, useRef } from "react";
import { useInView, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CounterProps {
  value: number;
  direction?: "up" | "down";
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export function Counter({
  value,
  direction = "up",
  prefix = "",
  suffix = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  return (
    <span className="tabular-nums">
      {prefix}
      <motion.span ref={ref}>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}
