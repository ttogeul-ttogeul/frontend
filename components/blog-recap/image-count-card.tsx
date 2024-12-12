import StatCard from "../ui/stat-card";
import Image from "next/image";
import Text from "../ui/text";

export default function ImageCountCard() {
  return (
    <StatCard
      className={"relative items-start justify-start"}
      label={<Text>평균 이미지 수</Text>}
      title={<Text>{"n개"}</Text>}
      description={
        <Text className={"max-w-[212px] text-gray-400"}>
          테크블로거들은 평균 3개의 이미지를 사용해요
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
