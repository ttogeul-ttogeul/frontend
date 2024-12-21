export const dynamic = "force-dynamic";

import { Button } from "@/components/ui/button";
import ArrowRight from "@/components/icons/arrow-right";
import Link from "next/link";
import Title from "@/components/home/highlighted-title";
import { fetchTotalPostCount } from "./api/lib/actions";
import KakaoAdfit from "@/components/shared/kakao-adfit";

export default async function Home() {
  const { totalPostCount } = await fetchTotalPostCount();

  return (
    <main className="mt-100pxr px-6">
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

        <div className="mt-4 text-base/5 text-gray-400">
          지금까지 <span className="font-bold">{totalPostCount}</span>건의 글을
          분석했어요!
        </div>
      </div>
      <Link href="/blog-input">
        <Button>
          분석 시작하기
          <ArrowRight />
        </Button>
      </Link>
      <KakaoAdfit
        adUnit="DAN-uBhuPeUmZcdr66qz"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 transform"
      />
    </main>
  );
}
