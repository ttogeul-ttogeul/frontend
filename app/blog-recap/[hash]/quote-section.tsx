import QuoteCarousel from "@/src/components/blog-recap/quote-carousel";
import Seperator from "@/src/components/ui/seperator";
import Text from "@/src/components/ui/text";

export default function QuoteSection() {
  return (
    <section className="flex w-[312px] flex-col items-center justify-center">
      <Text as="h2" className={"text-2xl font-bold"}>
        올해 이 블로그의 명언💡
      </Text>
      <Seperator className={"h-4"} />
      <QuoteCarousel />
    </section>
  );
}
