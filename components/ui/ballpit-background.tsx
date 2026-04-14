"use client";

import Ballpit from "@/components/ui/ballpit";
import { useTheme } from "next-themes";
import { useEffect, useLayoutEffect, useState } from "react";

/** Tailwind `md` — skip WebGL on phones / small tablets so the page scrolls normally. */
const DESKTOP_MEDIA = "(min-width: 1024px)";

/** Fallbacks match light theme tokens in app/globals.css */
const DEFAULT_BALL_COLORS: number[] = [
  0xc96442, 0x7c6faf, 0xd4a96a, 0x5c8a6f,
  0x5c8a6f, 0x5c8a6f, 0x5c8a6f, 0x5c8a6f,
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
    hexVar("--chart-5"),
    hexVar("--chart-6"),
    hexVar("--chart-7"),
    hexVar("--chart-8"),
  ].filter((n): n is number => n !== null);
  return next.length >= 2 ? next : DEFAULT_BALL_COLORS;
}

export function BallpitBackground() {
  const { resolvedTheme } = useTheme();
  const [isDesktop, setIsDesktop] = useState(false);
  const [ballColors, setBallColors] = useState<number[]>(DEFAULT_BALL_COLORS);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MEDIA);
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const apply = () => setBallColors(readThemeChartColors());
    apply();
    const id = requestAnimationFrame(apply);
    return () => cancelAnimationFrame(id);
  }, [isDesktop, resolvedTheme]);

  if (!isDesktop) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full overflow-hidden"
      aria-hidden
    >
      <Ballpit
        count={100}
        gravity={0.005}
        friction={0.999}
        wallBounce={0.99}
        followCursor={false}
        colors={ballColors}
      />
    </div>
  );
}
