import Seperator from "@/components/ui/seperator";
import Text from "@/components/ui/text";
import Image from "next/image";

export default function PersonaSection() {
  return (
    <section className={"flex flex-col items-center"}>
      <Text as="h2" className={"text-2xl font-bold"}>
        이 블로거의 올해 성향
      </Text>
      <Seperator className="h-4" />
      <div className={"border border-solid"}>
        <Image
          src={"/images/sample-og.jpg"}
          alt="persona"
          width={312}
          height={0}
        />
      </div>
    </section>
  );
}
