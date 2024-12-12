import HighlightedTitle from "@/components/home/highlighted-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-100pxr">
      <div className="mb-10">
        <div className="text-2xl/[30px] font-medium">2024</div>
        <h1 className="mt-4 flex flex-col">
          <HighlightedTitle highlight="테">크</HighlightedTitle>
          <HighlightedTitle highlight="블">로그</HighlightedTitle>
          <HighlightedTitle highlight="리">포트</HighlightedTitle>
        </h1>
      </div>
      <Link href="/blog-input">
        <Button>분석하기</Button>
      </Link>
    </main>
  );
}
