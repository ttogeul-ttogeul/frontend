export const BLOGS = [
  {
    id: "naver",
    name: "네이버 블로그",
    icon: "",
    bgColor: "bg-blog-naver",
    urlExample: "https://blog.naver.com/example",
    homeUrl: "https://blog.naver.com",
  },
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
