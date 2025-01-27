import { BlogAnalytics } from "@/app/api/lib/blog-recap/types";
import { atom } from "jotai";
import { initialBlogAnalytics } from "../model";

const blogAnalytics = atom<BlogAnalytics>(initialBlogAnalytics);

export const blogAnalyticsAtom = atom(null, (_, set, update: BlogAnalytics) => {
  set(blogAnalytics, update);
});

export const totalPostCountAtom = atom(
  (get) => get(blogAnalytics).result.totalPostCount,
);

export const blogTitleAtom = atom((get) => get(blogAnalytics).blogTitle);

export const blogImageUrlAtom = atom((get) => get(blogAnalytics).blogImageUrl);

export const blogUrlAtom = atom((get) => get(blogAnalytics).blogUrl);

export const averageWordCountAtom = atom(
  (get) => get(blogAnalytics).result.averageWordCount,
);

export const averageImageCountAtom = atom(
  (get) => get(blogAnalytics).result.averageImageCount,
);

export const averageCodeBlockCountAtom = atom(
  (get) => get(blogAnalytics).result.averageCodeBlockCount,
);

export const weekdayDistributionAtom = atom(
  (get) => get(blogAnalytics).result.weekdayDistribution,
);

export const monthlyDistributionAtom = atom(
  (get) => get(blogAnalytics).result.monthlyDistribution,
);

export const quotesAtom = atom((get) => get(blogAnalytics).result.quotes);

export const personaAtom = atom((get) => get(blogAnalytics).result.persona);
