"use client";

import Seperator from "@/src/components/ui/seperator";
import FooterSection from "./footer-section";
import PersonaSection from "./persona-section";
import QuoteSection from "./quote-section";
import StatSection from "./stat-section";
import TitleSection from "./title-section";
import { BlogAnalytics } from "@/app/api/lib/blog-recap/types";
import { blogAnalyticsAtom } from "@/src/components/blog-recap/store";
import { useHydrateAtoms } from "jotai/utils";
import VisitBlogSection from "./visit-blog-section";
import KakaoAdfit from "@/src/components/shared/kakao-adfit";
import Image from "next/image";

export default function BlogRecapMain({
  initialData,
}: {
  initialData: BlogAnalytics;
}) {
  useHydrateAtoms([[blogAnalyticsAtom, initialData]], {
    dangerouslyForceHydrate: true,
  });

  return (
    <main className={"relative flex flex-col items-center py-8 pb-[80px]"}>
      <Image
        priority
        src="/images/top-banner@3x.png"
        alt="banner"
        width={880} // 원본 이미지 너비
        height={480} // 원본 이미지 높이
        layout="responsive"
      />
      <Seperator className={"h-20"} />
      <TitleSection />
      <Seperator className={"h-20"} />
      <PersonaSection />
      <Seperator className={"h-20"} />
      <QuoteSection />
      <Seperator className={"h-20"} />
      <StatSection />
      <Seperator className={"h-20"} />
      <VisitBlogSection />
      <Seperator className={"h-20"} />
      <FooterSection />
      <Seperator className={"h-12"} />
      <KakaoAdfit
        adUnit="DAN-Ii1fxGn0kfNlq63k"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 transform"
      />
    </main>
  );
}
