type TitleProps = {
  highlight: string;
  children: string;
};

export default function HighlightedTitle({ highlight, children }: TitleProps) {
  return (
    <span className="text-5xl/[3.5rem] font-bold">
      <span className="text-[#8B5CF6]">{highlight}</span>
      {children}
    </span>
  );
}
