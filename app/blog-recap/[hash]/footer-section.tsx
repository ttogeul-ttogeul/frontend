import { Button } from "@/components/ui/button";
import Seperator from "@/components/ui/seperator";

export default function FooterSection() {
  return (
    <>
      <Button>결과 공유하기</Button>
      <Seperator className={"h-3"} />
      <Button>홈으로</Button>
    </>
  );
}
