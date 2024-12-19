"use client";

import Seperator from "@/components/ui/seperator";
import FooterSection from "./footer-section";
import PersonaSection from "./persona-section";
import QuoteSection from "./quote-section";
import StatSection from "./stat-section";
import TitleSection from "./title-section";
import { BlogAnalytics } from "@/app/api/lib/blog-recap/types";
import { blogAnalyticsAtom } from "@/components/blog-recap/store/atom";
import { useHydrateAtoms } from "jotai/utils";
import VisitBlogSection from "./visit-blog-section";
import KakaoAdfit from "@/components/shared/kakao-adfit";

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
      <KakaoAdfit adUnit="DAN-Ii1fxGn0kfNlq63k" />
    </main>
  );
}
