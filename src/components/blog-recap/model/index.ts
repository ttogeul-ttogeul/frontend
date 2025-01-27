import { BlogAnalytics } from "@/app/api/lib/blog-recap/types";

export const initialBlogAnalytics: BlogAnalytics = {
  id: "",
  blogUrl: "",
  blogDomain: "",
  blogImageUrl: "",
  blogTitle: "",
  result: {
    totalPostCount: 0,
    totalWordCount: 0,
    totalImageCount: 0,
    totalCodeBlockCount: 0,
    averageWordCount: 0,
    averageImageCount: 0,
    averageCodeBlockCount: 0,
    weekdayDistribution: {},
    monthlyDistribution: {},
    quotes: [],
    persona: {
      title: "",
      category: "",
      imageUrl: "",
    },
  },
};
