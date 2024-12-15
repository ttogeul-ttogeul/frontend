import { Button } from "@/components/ui/button";
import Seperator from "@/components/ui/seperator";
import { useRouter } from "next/router";

export default function FooterSection() {
  const router = useRouter();
  return (
    <>
      <Button className="w-full">결과 공유하기</Button>
      <Seperator className={"h-3"} />
      <Button
        onClick={() => router.push("/")}
        variant={"filled"}
        className={"w-full"}
      >
        홈으로
      </Button>
    </>
  );
}
