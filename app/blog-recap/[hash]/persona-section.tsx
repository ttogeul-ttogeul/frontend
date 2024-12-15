import { personaAtom } from "@/components/blog-recap/store/atom";
import Seperator from "@/components/ui/seperator";
import Text from "@/components/ui/text";
import { useAtom } from "jotai";
import Image from "next/image";

export default function PersonaSection() {
  const [persona] = useAtom(personaAtom);
  return (
    <section className={"flex w-full flex-col items-center"}>
      <Text as="h2" className={"text-2xl font-bold"}>
        2024년, 이 블로그는👀
      </Text>
      <Seperator className="h-4" />
      <div
        className={
          "flex flex-col items-center rounded-lg border border-solid border-gray-700 p-2 font-bold"
        }
      >
        <div className={"flex h-12 w-full items-center justify-center"}>
          <Text as="h3" className={"text-2xl"}>
            {persona.title}
          </Text>
        </div>
        <Image
          className={"my-2 object-cover"}
          priority
          src={persona.imageUrl}
          alt="persona"
          width={312}
          height={312}
        />
        <div className={"flex h-12 w-full items-center justify-center"}>
          {persona.category ? (
            <Text>
              <span className={"font-bold"}>{persona.category}</span>
              {` 글을 가장 많이 작성하셨어요`}
            </Text>
          ) : (
            <Text className="text-center">
              {
                "아직 12월 한 발 남았다! 2024년 가기 전에,\n올해 회고글 하나쯤 어떨까요?"
              }
            </Text>
          )}
        </div>
      </div>
    </section>
  );
}
