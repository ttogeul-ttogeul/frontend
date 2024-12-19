"use client";

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface BarProps {
  className?: string;
  height: number;
  color: string;
}

export default function Bar({
  children,
  className,
  height,
  color,
}: PropsWithChildren<BarProps>) {
  return (
    <div
      className={cn(
        `flex flex-1 items-end justify-center rounded-lg ${color}`,
        height,
        className,
      )}
      style={{ height: `${height}px` }}
    >
      {children}
    </div>
  );
}
