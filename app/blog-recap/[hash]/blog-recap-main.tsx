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

export default function BlogRecapMain({
  initialData,
}: {
  initialData: BlogAnalytics;
}) {
  console.log(initialData);
  useHydrateAtoms([[blogAnalyticsAtom, initialData]]);

  return (
    <main className={"flex flex-col items-center"}>
      <TitleSection />
      <Seperator className={"h-20"} />
      <PersonaSection />
      <Seperator className={"h-20"} />
      <QuoteSection />
      <Seperator className={"h-20"} />
      <StatSection />
      <Seperator className={"h-20"} />
      <FooterSection />
    </main>
  );
}
