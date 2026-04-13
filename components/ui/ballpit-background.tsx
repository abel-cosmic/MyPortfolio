"use client";

import Ballpit from "@/components/ui/ballpit";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/** Fallbacks match light theme tokens in app/globals.css */
const DEFAULT_BALL_COLORS: number[] = [
  0xc96442, 0x7c6faf, 0xd4a96a, 0x5c8a6f,
];

function readThemeChartColors(): number[] {
  const style = getComputedStyle(document.documentElement);
  const hexVar = (name: string): number | null => {
    const raw = style.getPropertyValue(name).trim();
    if (!raw.startsWith("#")) return null;
    return parseInt(raw.slice(1), 16);
  };
  const next = [
    hexVar("--primary"),
    hexVar("--chart-2"),
    hexVar("--chart-3"),
    hexVar("--chart-4"),
  ].filter((n): n is number => n !== null);
  return next.length >= 2 ? next : DEFAULT_BALL_COLORS;
}

export function BallpitBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [ballColors, setBallColors] = useState<number[]>(DEFAULT_BALL_COLORS);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const apply = () => setBallColors(readThemeChartColors());
    apply();
    const id = requestAnimationFrame(apply);
    return () => cancelAnimationFrame(id);
  }, [mounted, resolvedTheme]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full overflow-hidden"
      aria-hidden
    >
      <Ballpit
        count={100}
        gravity={0.01}
        friction={0.9975}
        wallBounce={0.95}
        followCursor={false}
        colors={ballColors}
      />
    </div>
  );
}
