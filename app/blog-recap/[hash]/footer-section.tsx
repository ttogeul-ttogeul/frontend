import { Button } from "@/src/components/ui/button";
import Seperator from "@/src/components/ui/seperator";
import { useRouter } from "next/navigation";

export default function FooterSection() {
  const router = useRouter();

  const handleCopy = async () => {
    try {
      // 모던 브라우저용 clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(window.location.href);
      } else {
        // iOS 및 레거시 브라우저를 위한 fallback
        const tempLink = document.createElement("a");
        tempLink.href = window.location.href;
        tempLink.style.position = "fixed";
        tempLink.style.opacity = "0";
        tempLink.style.pointerEvents = "none";
        document.body.appendChild(tempLink);

        const range = document.createRange();
        range.selectNode(tempLink);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(range);

        document.execCommand("copy");
        document.body.removeChild(tempLink);
      }
      alert("링크가 복사되었습니다!");
    } catch (err) {
      console.error("클립보드 복사 실패:", err);
      alert("링크 복사에 실패했습니다.");
    }
  };

  return (
    <div className="w-[312px]">
      <Button onClick={handleCopy} className="w-full">
        결과 공유하기
      </Button>
      <Seperator className={"h-3"} />
      <Button
        onClick={() => {
          router.push("/");
          router.refresh();
        }}
        variant={"filled"}
        className={"w-full"}
      >
        다른 블로그 분석하기
      </Button>
    </div>
  );
}
