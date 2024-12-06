"use client";

import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div>
      <Button size={"sm"} className={"bg-red-500 text-white"}>
        공유하기
      </Button>
      <Button size={"default"} className={"bg-red-500 text-white"}>
        공유하기
      </Button>
      <Button size={"lg"} className={"bg-red-500 text-white"}>
        공유하기
      </Button>
    </div>
  );
}
