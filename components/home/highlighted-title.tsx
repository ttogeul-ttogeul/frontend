import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  className?: string;
};

function Highlighted({ children, className }: TitleProps) {
  return <span className={cn("text-violet-500", className)}>{children}</span>;
}

export default function Title({ children, className }: TitleProps) {
  return (
    <h1 className={cn("text-5xl/[3.5rem] font-bold", className)}>{children}</h1>
  );
}

Title.Highlighted = Highlighted;
