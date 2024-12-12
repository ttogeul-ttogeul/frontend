"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";
import Text from "../ui/text";
import Seperator from "../ui/seperator";

export default function QuoteCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const COUNT = 3;

  const handleSelect = (api: CarouselApi) => {
    if (api) {
      setCurrent(api.selectedScrollSnap());
    }
  };
  return (
    <div className={"flex w-[312px] flex-col items-center justify-center"}>
      <Text as="h2" className={"text-2xl font-bold"}>
        이 블로거의 올해 명언
      </Text>
      <Seperator className={"h-4"} />
      <Carousel
        setApi={(api) => {
          setApi(api);
          handleSelect(api);
          api?.on("select", () => handleSelect(api));
        }}
        className="mb-4 h-[400px] w-full max-w-[300px]"
      >
        <CarouselContent>
          {Array.from({ length: COUNT }).map((_, index) => (
            <CarouselItem key={index} className={"h-[400px]"}>
              <Card className={"relative h-full rounded-2xl border-none"}>
                <CardContent className="flex aspect-square h-full w-full items-center justify-center p-0">
                  <Image
                    src={
                      "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ftistory1.daumcdn.net%2Ftistory%2F1956816%2Fattach%2F414ad072fd374f72ab96491b2773a29f"
                    }
                    alt="sample"
                    width={300}
                    height={400}
                    className={"h-full rounded-2xl object-cover opacity-60"}
                    priority
                  />
                  <div
                    role="overlay"
                    className={
                      "absolute h-full w-full rounded-2xl bg-black opacity-60"
                    }
                  />
                  <Text
                    className={"absolute text-center font-ridibatang text-lg"}
                  >
                    {
                      '"사람을 이해하는 능력은 PM의 가장\n중요한 자질이자, 제품의 성공을\n좌우하는 힘이다."\n-움채채-'
                    }
                  </Text>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className={"flex gap-2"}>
        {Array.from({ length: COUNT }).map((_, idx) => (
          <button
            key={idx + 1 * 9}
            className={`h-[6px] w-[6px] rounded-full ${current === idx ? "bg-gray-50" : "bg-gray-600"} `}
            onClick={() => api?.scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}
