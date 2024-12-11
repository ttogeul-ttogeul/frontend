type TitleProps = {
  highlight: string;
  title: string;
};

export default function Title({ highlight, title }: TitleProps) {
  return (
    <span className="text-5xl/[3.5rem] font-bold">
      <span className="text-indigo-500">{highlight}</span>
      {title}
    </span>
  );
}
