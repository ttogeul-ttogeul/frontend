import { BlogAnalytics } from "@/app/api/lib/blog-recap/types";
import { atom } from "jotai";

const blogAnalytics = atom<BlogAnalytics | undefined>();

export const blogAnalyticsAtom = atom(null, (_, set, update: BlogAnalytics) =>
  set(blogAnalytics, update),
);

export const totalPostCountAtom = atom(
  (get) => get(blogAnalytics)?.result.totalPostCount ?? 0,
);

export const blogTitleAtom = atom((get) => get(blogAnalytics)?.blogTitle ?? "");

export const blogImageUrlAtom = atom(
  (get) => get(blogAnalytics)?.blogImageUrl ?? "",
);

export const blogUrlAtom = atom((get) => get(blogAnalytics)?.blogUrl ?? "");

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
  (get) => get(blogAnalytics)?.result.weekdayDistribution ?? {},
);

export const monthlyDistributionAtom = atom(
  (get) => get(blogAnalytics)?.result.monthlyDistribution ?? {},
);

export const quotesAtom = atom(
  (get) => get(blogAnalytics)?.result.quotes ?? [],
);

export const personaAtom = atom(
  (get) =>
    get(blogAnalytics)?.result.persona ?? {
      category: "",
      imageUrl: "",
      title: "",
    },
);
