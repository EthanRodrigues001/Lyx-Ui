"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CursorProps {
  color?: string;
}

const colorMap: Record<string, { fill: string; stroke: string }> = {
  sky: { fill: "#0ea5e9", stroke: "#38bdf8" },
  blue: { fill: "#3b82f6", stroke: "#60a5fa" },
  red: { fill: "#ef4444", stroke: "#f87171" },
  green: { fill: "#22c55e", stroke: "#4ade80" },
  emerald: { fill: "#10b981", stroke: "#34d399" },
  purple: { fill: "#a855f7", stroke: "#c084fc" },
  pink: { fill: "#ec4899", stroke: "#f472b6" },
  yellow: { fill: "#eab308", stroke: "#facc15" },
  orange: { fill: "#f97316", stroke: "#fb923c" },
  indigo: { fill: "#6366f1", stroke: "#818cf8" },
};

export const Cursor: React.FC<CursorProps> = ({ color = "sky" }) => {
  const colors = colorMap[color] || colorMap.sky;

  return (
    <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
      <path
        d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z"
        fill={colors.fill}
        stroke={colors.stroke}
        strokeWidth="1.5"
      />
    </svg>
  );
};

interface AnimatedCursorProps {
  className?: string;
  text: string;
  color?: string;
}

export const AnimatedCursor: React.FC<AnimatedCursorProps> = ({
  className,
  text,
  color = "sky",
}) => (
  <motion.div
    initial={{ translateX: "0", translateY: "0" }}
    animate={{ translateX: ["0", "20px", "0"], translateY: ["0", "40px", "0"] }}
    transition={{ duration: 4, repeat: Infinity, bounce: true }}
    className={"flex items-center gap-4"}
  >
    <div
      className={cn(
        `w-fit rounded-full py-1 px-2 bg-card border border-${color}-400 dark:text-white text-sm font-semibold shadow-lg text-black`,
        className
      )}
    >
      {text}
    </div>
    <Cursor color={color} />
  </motion.div>
);
