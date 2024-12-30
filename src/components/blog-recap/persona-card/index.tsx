import { useAtom } from "jotai";
import { personaAtom } from "../store/atom";
import Text from "@/src/components/ui/text";
import Image from "next/image";
import React from "react";

const PersonaCard = () => {
  const [persona] = useAtom(personaAtom);
  return (
    <div
      className={
        "flex flex-col items-center rounded-2xl border border-solid border-gray-700 py-2 font-bold"
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
            <span className="font-medium">{` 글을 가장 많이 작성하셨어요`}</span>
          </Text>
        ) : (
          <Text className="text-center">
            {"2025년에는 꼭 테크블로그의 첫 장을 열어보아요"}
          </Text>
        )}
      </div>
    </div>
  );
};

export default React.memo(PersonaCard);
