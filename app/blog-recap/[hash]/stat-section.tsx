import CharCountCard from "@/src/components/blog-recap/char-count-card";
import CodeBlockCard from "@/src/components/blog-recap/code-block-card";
import DayOfWeekCard from "@/src/components/blog-recap/day-of-week-card";
import ImageCountCard from "@/src/components/blog-recap/image-count-card";
import {
  averageCodeBlockCountAtom,
  averageImageCountAtom,
  averageWordCountAtom,
  totalPostCountAtom,
} from "@/src/components/blog-recap/store/atom";
import TotalPostingCard from "@/src/components/blog-recap/total-posting-card";
import Seperator from "@/src/components/ui/seperator";
import Text from "@/src/components/ui/text";
import { useAtom } from "jotai";

export default function StatSection() {
  const [totalPostCount] = useAtom(totalPostCountAtom);
  const [averageWordCount] = useAtom(averageWordCountAtom);
  const [averageCodeBlockCount] = useAtom(averageCodeBlockCountAtom);
  const [averageImageCount] = useAtom(averageImageCountAtom);

  return (
    <section className={"flex flex-col items-center"}>
      <Text as="h2" className={"text-2xl font-bold"}>
        수치로 돌아보는 2024년📈
      </Text>
      <Seperator className={"h-4"} />
      <TotalPostingCard totalPostCount={totalPostCount} />
      <Seperator className={"h-4"} />
      <DayOfWeekCard />
      <Seperator className={"h-4"} />
      <CharCountCard averageWordCount={averageWordCount} />
      <Seperator className={"h-4"} />
      <CodeBlockCard averageCodeBlockCount={averageCodeBlockCount} />
      <Seperator className={"h-4"} />
      <ImageCountCard averageImageCount={averageImageCount} />
    </section>
  );
}
