import StatCard from "../ui/stat-card";
import Image from "next/image";
import Text from "../ui/text";
import { BlogAnalytics } from "@/app/api/lib/blog-recap/types";

interface ImageCountCardProps {
  averageImageCount: BlogAnalytics["result"]["averageImageCount"];
}

export default function ImageCountCard({
  averageImageCount,
}: ImageCountCardProps) {
  return (
    <StatCard
      className={"relative items-start justify-start"}
      label={<Text>글별 이미지 개수</Text>}
      title={<Text>{`${averageImageCount}개`}</Text>}
      description={
        <Text className={"max-w-[212px] text-gray-400"}>
          테크블로거들은 글마다 4.2개의 이미지를 활용해요
        </Text>
      }
      height={"h-[150px]"}
    >
      <Image
        className={"absolute bottom-2 right-2"}
        src={"/images/Picture@3x.png"}
        alt="picture"
        width={64}
        height={64}
      />
    </StatCard>
  );
}
