import Image from "next/image";
import StatCard from "../ui/stat-card";
import Text from "../ui/text";

export default function CharCountCard() {
  return (
    <StatCard
      className={"relative items-start justify-start"}
      height={"h-[150px]"}
      label={<Text>평균 글자 수</Text>}
      title={<Text>n자</Text>}
      description={
        <Text className={"max-w-[212px] text-gray-400"}>
          테크블로거들은 평균 2000자를 써요
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
