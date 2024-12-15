"use client";

import { useMemo } from "react";
import Bar from "../ui/bar";
import StatCard from "../ui/stat-card";
import Text from "../ui/text";
import { BlogAnalytics } from "@/app/api/lib/blog-recap/types";
import { useAtom } from "jotai";
import { monthlyDistributionAtom } from "./store/atom";

interface TotalPostingCardProps {
  totalPostCount: BlogAnalytics["result"]["totalPostCount"];
}

export default function TotalPostingCard({
  totalPostCount,
}: TotalPostingCardProps) {
  const [monthlyDistribution] = useAtom(monthlyDistributionAtom);
  const MAX_VALUE = useMemo(
    () => Math.max(...Object.values(monthlyDistribution)),
    [monthlyDistribution],
  );

  const MAX_HEIGHT = 173;

  return (
    <StatCard
      title={
        totalPostCount > 0 ? (
          <Text as="h3" className={"text-center font-light"}>
            {"올해 총 "}
            <span className={"font-bold"}>{`${totalPostCount}개`}</span>
            {"의\n글을 썼어요"}
          </Text>
        ) : (
          <Text as="h3">올해 글을 쓰지 않으셨군요</Text>
        )
      }
      description={
        <Text className={"text-gray-400"}>
          테크블로거들은 평균 13.8개의 글을 썼어요
        </Text>
      }
    >
      <>
        {Object.entries(monthlyDistribution).map(([key, value], idx) => (
          <Bar
            key={`${key}-${idx}`}
            className={"rounded"}
            height={
              value > 0 ? Math.floor((MAX_HEIGHT * value) / MAX_VALUE) : 2
            }
            color={
              value > 0
                ? "bg-gradient-to-b from-violet-600 to-blue-600"
                : "bg-slate-700"
            }
          />
        ))}
      </>
    </StatCard>
  );
}
