import Bar from "@/components/ui/bar";
import StatCard from "@/components/ui/stat-card";
import Text from "@/components/ui/text";
import { useMemo } from "react";
import { DAY_MAPPING } from "./constants";
import { useAtom } from "jotai";
import { weekdayDistributionAtom } from "@/components/blog-recap/store/atom";

export default function DayOfWeekCard() {
  const [weekdayDistribution] = useAtom(weekdayDistributionAtom);
  const maxDay = useMemo(
    () => Math.max(...Object.values(weekdayDistribution)),
    [weekdayDistribution],
  );

  const MAX_HEIGHT = 145;

  const mappedData: [string, number][] = useMemo(
    () =>
      Object.entries(weekdayDistribution).map(([key, value]) => [
        DAY_MAPPING[key],
        value,
      ]),
    [weekdayDistribution],
  );

  const maxWeekday = useMemo(() => {
    const maxValue = mappedData.find(([, value]) => value === maxDay);
    return maxValue?.[0] ?? "";
  }, [maxDay, mappedData]);

  return (
    <StatCard
      title={
        maxDay > 0 ? (
          <Text as="h3" className={"text-center font-light"}>
            {"주로 "}
            <span className={"font-bold"}>{`${maxWeekday}요일`}</span>
            {"에 글을\n발행했어요"}
          </Text>
        ) : (
          <Text as="h3" className="text-center font-light">
            {"내년에는 무슨 요일에\n글을 쓰실 건가요?"}
          </Text>
        )
      }
      description={
        <Text className={"text-gray-400"}>
          테크블로거들은 주로 일요일에 글을 발행했어요
        </Text>
      }
    >
      {mappedData.map(([key, value]) => (
        <div key={key} className="flex flex-1 flex-col items-center">
          <Bar
            height={value > 0 ? Math.floor((value * MAX_HEIGHT) / maxDay) : 2}
            color={
              value === maxDay
                ? "bg-gradient-to-b from-violet-600 to-blue-600"
                : "bg-slate-700"
            }
          />
          <Text
            className={`mt-[7px] ${value === maxDay ? "text-gray-50" : "text-gray-400"} `}
          >
            {key}
          </Text>
        </div>
      ))}
    </StatCard>
  );
}
