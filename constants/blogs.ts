export const BLOGS = [
  {
    id: "tistory",
    name: "티스토리",
    icon: "",
    bgColor: "bg-blog-tistory",
    urlExample: "https://example.tistory.com",
    homeUrl: "https://www.tistory.com",
  },
  {
    id: "velog",
    name: "Velog",
    icon: "",
    bgColor: "bg-blog-velog",
    urlExample: "https://velog.io/@example",
    homeUrl: "https://velog.io",
  },
] as const;

export type BlogType = (typeof BLOGS)[number]["id"];
