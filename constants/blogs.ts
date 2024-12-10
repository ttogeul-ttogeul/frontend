export const BLOGS = [
  {
    id: "naver",
    name: "네이버 블로그",
    icon: "",
    bgColor: "bg-[#00C73C]",
    urlExample: "https://blog.naver.com/example",
    homeUrl: "https://blog.naver.com",
  },
  {
    id: "tistory",
    name: "티스토리",
    icon: "",
    bgColor: "bg-[#EB531F]",
    urlExample: "https://example.tistory.com",
    homeUrl: "https://www.tistory.com",
  },
  {
    id: "velog",
    name: "Velog",
    icon: "",
    bgColor: "bg-[#20C997]",
    urlExample: "https://velog.io/@example",
    homeUrl: "https://velog.io",
  },
] as const;

export type BlogType = (typeof BLOGS)[number]["id"];
