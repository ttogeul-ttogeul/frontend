export const BLOGS = [
  {
    id: "tistory",
    name: "Tistory",
    icon: "",
    bgColor: "bg-blog-tistory",
    textColor: "text-blog-tistory",
    urlExample: "https://example.tistory.com",
    homeUrl: "https://www.tistory.com",
  },
  {
    id: "velog",
    name: "Velog",
    icon: "",
    bgColor: "bg-blog-velog",
    textColor: "text-blog-velog",
    urlExample: "https://velog.io/@example",
    homeUrl: "https://velog.io",
  },
] as const;

export type BlogDomain = (typeof BLOGS)[number]["id"];
