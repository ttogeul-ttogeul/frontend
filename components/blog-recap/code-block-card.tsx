import StatCard from "../ui/stat-card";
import Image from "next/image";
import Text from "../ui/text";

export default function CodeBlockCard() {
  return (
    <StatCard
      className={"relative items-start justify-start"}
      height={"h-[150px]"}
      label={<Text>평균 코드블럭 수</Text>}
      title={<Text>n자</Text>}
      description={
        <Text className={"max-w-[212px] text-gray-400"}>
          테크블로거들은 평균 4개의 코드블럭을 써요??
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
