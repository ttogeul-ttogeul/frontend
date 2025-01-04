import { BlogType } from "../types";

export const BLOGS: BlogType[] = [
  {
    id: "tistory",
    name: "Tistory",
    bgColor: "bg-blog-tistory",
    textColor: "text-blog-tistory",
    urlExample: "https://blogid.tistory.com",
    homeUrl: "https://www.tistory.com",
  },
  {
    id: "velog",
    name: "Velog",
    bgColor: "bg-blog-velog",
    textColor: "text-blog-velog",
    urlExample: " https://velog.io/@userid",
    homeUrl: "https://velog.io",
  },
] as const;
