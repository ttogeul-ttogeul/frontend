import PersonaCard from "@/src/components/blog-recap/persona-card";
import Seperator from "@/src/components/ui/seperator";
import Text from "@/src/components/ui/text";

export default function PersonaSection() {
  return (
    <section className={"flex w-full flex-col items-center"}>
      <Text as="h2" className={"text-2xl font-bold"}>
        2024년, 이 블로그는👀
      </Text>
      <Seperator className="h-4" />
      <PersonaCard />
    </section>
  );
}
