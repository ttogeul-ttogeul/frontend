import PersonaCard from "@/components/blog-recap/persona-card";
import Seperator from "@/components/ui/seperator";
import Text from "@/components/ui/text";

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
