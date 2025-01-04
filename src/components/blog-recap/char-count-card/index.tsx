import Image from "next/image";
import StatCard from "../../ui/stat-card";
import Text from "../../ui/text";
import { BlogAnalytics } from "@/app/api/lib/blog-recap/types";

interface CharCountCardProps {
  averageWordCount: BlogAnalytics["result"]["averageWordCount"];
}

export default function CharCountCard({
  averageWordCount,
}: CharCountCardProps) {
  return (
    <StatCard
      className={"relative items-start justify-start"}
      height={"h-[150px]"}
      label={<Text>평균 글자 수</Text>}
      title={<Text>{`${averageWordCount}자`}</Text>}
      description={
        <Text className={"max-w-[212px] text-gray-400"}>
          테크블로거들은 평균 3189자의 글을 써요
        </Text>
      }
    >
      <Image
        className={"absolute bottom-2 right-2"}
        src={"/images/Pencil@3x.png"}
        alt="pencil"
        width={64}
        height={64}
      />
    </StatCard>
  );
}
