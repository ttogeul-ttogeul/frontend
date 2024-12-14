import { PropsWithChildren } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./card";
import Seperator from "./seperator";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  label?: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
}

export default function StatCard({
  title,
  description,
  children,
  className,
  label,
  width = "w-[312px]",
  height = "h-[312px]",
}: PropsWithChildren<StatCardProps>) {
  return (
    <Card
      className={cn(
        "flex flex-col items-center justify-between border-none bg-slate-800 p-[20px]",
        width,
        height,
        className,
      )}
    >
      <CardHeader className={"p-0"}>
        <div className={"text-sm leading-[21px]"}>{label}</div>
        <CardTitle className={"m-0 flex flex-col text-2xl leading-[28.8px]"}>
          {title}
        </CardTitle>
        <CardDescription className={"text-sm leading-[21px] text-gray-400"}>
          {description}
        </CardDescription>
      </CardHeader>
      <Seperator className={"h-4"} />
      <CardContent className={"flex w-full items-end gap-2.5 p-0"}>
        {children}
      </CardContent>
    </Card>
  );
}
