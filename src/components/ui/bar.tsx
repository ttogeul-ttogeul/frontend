"use client";

import { cn } from "@/src/lib/utils";

interface BarProps {
  className?: string;
  height: number;
  color: string;
}

export default function Bar({ className, height, color }: BarProps) {
  return (
    <div
      className={cn(`w-full rounded-lg ${color}`, height, className)}
      style={{ height: `${height}px` }}
    />
  );
}
