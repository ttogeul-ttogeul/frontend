import { fetchBlogAnalytics } from "@/app/api/lib/blog-recap/actions";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { hash: string };
}): Promise<Metadata> {
  const data = await fetchBlogAnalytics(params.hash);
  return {
    title: `2024 테크블로그 리포트 | ${data.blogTitle}`,
    description: "2024년, 이 테크블로그는?👀",
    openGraph: {
      images: data.result.persona.imageUrl ?? "/images/og-main.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
