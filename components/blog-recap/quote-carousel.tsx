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
import { useAtom } from "jotai";
import { blogImageUrlAtom, blogTitleAtom, quotesAtom } from "./store/atom";

export default function QuoteCarousel() {
  const [blogTitle] = useAtom(blogTitleAtom);
  const [quotes] = useAtom(quotesAtom);
  const [blogImageUrl] = useAtom(blogImageUrlAtom);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const COUNT = quotes.length;

  const handleSelect = (api: CarouselApi) => {
    if (api) {
      setCurrent(api.selectedScrollSnap());
    }
  };

  return (
    <>
      <Carousel
        setApi={(api) => {
          setApi(api);
          handleSelect(api);
          api?.on("select", () => handleSelect(api));
        }}
        className="mb-4 h-[400px] w-full max-w-[300px]"
      >
        <CarouselContent>
          {quotes.map(({ quote, postTitle }) => (
            <CarouselItem key={quote} className={"h-[400px]"}>
              <Card className={"relative h-full rounded-2xl border-none"}>
                <CardContent className="flex aspect-square h-full w-full items-center justify-center p-0">
                  <Image
                    src={blogImageUrl}
                    alt="sample"
                    width={300}
                    height={400}
                    className={"h-full rounded-2xl object-cover opacity-60"}
                    priority
                  />
                  <div
                    role="overlay"
                    className={
                      "absolute h-full w-full rounded-2xl bg-black opacity-80"
                    }
                  />
                  <div className={"absolute px-6"}>
                    <Text
                      className={
                        "break-keep text-center font-ridibatang text-lg"
                      }
                    >
                      {quote}
                    </Text>
                    <Text>{`- ${blogTitle},\n<${postTitle}> 중 -`}</Text>
                  </div>
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
    </>
  );
}
