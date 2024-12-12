import CharCountCard from "@/components/blog-recap/char-count-card";
import CodeBlockCard from "@/components/blog-recap/code-block-card";
import DayOfWeekCard from "@/components/blog-recap/day-of-week-card";
import ImageCountCard from "@/components/blog-recap/image-count-card";
import TotalPostingCard from "@/components/blog-recap/total-posting-card";
import Seperator from "@/components/ui/seperator";
import Text from "@/components/ui/text";

export default function StatSection() {
  return (
    <section className={"flex flex-col items-center"}>
      <Text as="h2" className={"text-2xl font-bold"}>
        수치로 돌아보는 2024년
      </Text>
      <Seperator className={"h-4"} />
      <TotalPostingCard />
      <Seperator className={"h-4"} />
      <DayOfWeekCard />
      <Seperator className={"h-4"} />
      <CharCountCard />
      <Seperator className={"h-4"} />
      <CodeBlockCard />
      <Seperator className={"h-4"} />
      <ImageCountCard />
    </section>
  );
}
