import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>2024</div>
      <h1 className="flex flex-col">
        <span>
          내 <span className="text-red-500">블로그</span>
        </span>
        <span>돌아보기</span>
      </h1>
      <Link href="/analysis-input">
        <Button>분석하기</Button>
      </Link>
    </main>
  );
}
