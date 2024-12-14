export type BlogType = {
  id: "tistory" | "velog";
  name: string;
  bgColor: string;
  textColor: string;
  urlExample: string;
  homeUrl: string;
};

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

export type BlogDomain = (typeof BLOGS)[number]["id"];
