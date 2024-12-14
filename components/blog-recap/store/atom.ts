import { BlogAnalytics } from "@/app/api/lib/blog-recap/types";
import { atom } from "jotai";

const blogAnalytics = atom<BlogAnalytics | undefined>();

export const blogAnalyticsAtom = atom(null, (_, set, update: BlogAnalytics) =>
  set(blogAnalytics, update),
);

export const totalPostCountAtom = atom(
  (get) => get(blogAnalytics)?.result.totalPostCount ?? 0,
);

export const averageWordCountAtom = atom(
  (get) => get(blogAnalytics)?.result.averageWordCount ?? 0,
);

export const averageImageCountAtom = atom(
  (get) => get(blogAnalytics)?.result.averageImageCount ?? 0,
);

export const averageCodeBlockCountAtom = atom(
  (get) => get(blogAnalytics)?.result.averageCodeBlockCount ?? 0,
);

export const weekdayDistributionAtom = atom(
  (get) => get(blogAnalytics)?.result.weekdayDistribution ?? undefined,
);

export const monthlyDistributionAtom = atom(
  (get) => get(blogAnalytics)?.result.monthlyDistribution ?? undefined,
);

export const quotesAtom = atom(
  (get) => get(blogAnalytics)?.result.quotes ?? [],
);

export const personaAtom = atom(
  (get) => get(blogAnalytics)?.result.persona ?? undefined,
);
