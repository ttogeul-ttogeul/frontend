import StatCard from "@/src/components/ui/stat-card";
import Image from "next/image";
import Text from "@/src/components/ui/text";
import { BlogAnalytics } from "@/app/api/lib/blog-recap/types";

interface CodeBlockCardProps {
  averageCodeBlockCount: BlogAnalytics["result"]["averageCodeBlockCount"];
}

export default function CodeBlockCard({
  averageCodeBlockCount,
}: CodeBlockCardProps) {
  return (
    <StatCard
      className={"relative items-start justify-start"}
      height={"h-[150px]"}
      label={<Text>글별 코드블럭 개수</Text>}
      title={<Text>{`${averageCodeBlockCount}블럭`}</Text>}
      description={
        <Text className={"max-w-[212px] text-gray-400"}>
          테크블로거들은 글마다 4개의 코드블럭을 써요
        </Text>
      }
    >
      <Image
        className={"absolute bottom-2 right-2"}
        src={"/images/Code@3x.png"}
        alt="code"
        width={64}
        height={64}
      />
    </StatCard>
  );
}
