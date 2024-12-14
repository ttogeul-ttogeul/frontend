import { Button } from "@/components/ui/button";
import ArrowRight from "@/components/icons/arrow-right";
import Link from "next/link";
import Title from "@/components/home/highlighted-title";

export default function Home() {
  return (
    <main className="mt-100pxr">
      <div className="mb-10">
        <div className="text-2xl/[30px] font-medium">2024</div>
        <Title className="mt-4 flex flex-col">
          <div>
            <Title.Highlighted>테</Title.Highlighted>크
          </div>
          <div>
            <Title.Highlighted>블</Title.Highlighted>로그
          </div>
          <div>
            <Title.Highlighted>리</Title.Highlighted>포트
          </div>
        </Title>
      </div>
      <Link href="/blog-input">
        <Button>
          분석 시작하기
          <ArrowRight />
        </Button>
      </Link>
    </main>
  );
}
