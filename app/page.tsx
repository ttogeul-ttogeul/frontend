import Title from "@/components/home/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-100pxr">
      <div className="mb-10 text-gray-50">
        <div className="text-2xl/[30px] font-medium">2024</div>
        <h1 className="mt-4 flex flex-col">
          <Title highlight="테" title="크" />
          <Title highlight="블" title="로그" />
          <Title highlight="리" title="포트" />
        </h1>
      </div>
      <Link href="/analysis-input">
        <Button variant={"secondary"}>분석하기</Button>
      </Link>
    </main>
  );
}
