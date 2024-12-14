import { cn } from "@/lib/utils";
import React from "react";

type TextProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

const Text = <T extends React.ElementType = "p">({
  as,
  children,
  className,
  ...props
}: TextProps<T>) => {
  const Tag = as || "p";
  return (
    <Tag
      className={cn("whitespace-pre-wrap break-keep text-gray-50", className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Text;
