import { cn } from "@/lib/utils";

type TitleProps = {
  highlight: string;
  children: string;
  className?: string;
};

export default function HighlightedTitle({
  highlight,
  children,
  className,
}: TitleProps) {
  return (
    <span className={cn("text-5xl/[3.5rem] font-bold", className)}>
      <span className="text-[#8B5CF6]">{highlight}</span>
      {children}
    </span>
  );
}
