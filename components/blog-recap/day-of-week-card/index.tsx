import Bar from "@/components/ui/bar";
import StatCard from "@/components/ui/stat-card";
import Text from "@/components/ui/text";
import { useMemo } from "react";
import { DAY_MAPPING } from "./constants";

export default function DayOfWeekCard() {
  const data = useMemo(
    () => ({
      monday: 3,
      tuesday: 4,
      wednesday: 5,
      thursday: 4,
      friday: 6,
      saturday: 2,
      sunday: 1,
    }),
    [],
  );
  const MAX_DAY = useMemo(() => Math.max(...Object.values(data)), [data]);
  const MAX_HEIGHT = 173;

  const mappedData: [string, number][] = useMemo(
    () => Object.entries(data).map(([key, value]) => [DAY_MAPPING[key], value]),
    [data],
  );

  return (
    <StatCard
      title={
        <Text as="h3" className={"text-center font-light"}>
          {"올해 주로 "}
          <span className={"font-bold"}>몇요일</span>
          {"에 글을\n포스팅하셨어요"}
        </Text>
      }
      description={
        <Text className={"text-gray-400"}>
          테크블로거들은 <span className={"underline"}>주로 몇요일</span>에
          업로드했어요
        </Text>
      }
    >
      {mappedData.map(([key, value]) => (
        <Bar
          height={value > 0 ? Math.floor((value * MAX_HEIGHT) / MAX_DAY) : 2}
          key={key}
          color={
            value === MAX_DAY
              ? "bg-gradient-to-r from-violet-600 to-blue-600"
              : "bg-slate-700"
          }
        >
          <Text
            className={`mb-2 ${value === MAX_DAY ? "text-gray-50" : "text-gray-400"} `}
          >
            {key}
          </Text>
        </Bar>
      ))}
    </StatCard>
  );
}
