import type { Metadata } from "next";
import "./globals.css";
import ReactQueryClientProvider from "@/src/providers/queryclient-provider";
import GlobalJotaiProvider from "@/src/providers/global-jotai-provider";
import GoogleAnalytics from "@/src/components/GooglyAnalytics";

export const metadata: Metadata = {
  title: "2024 테블리 | 테크블로그 리포트",
  description: "테블리에서 24년 내 블로그 리포트 받아가세요😉",
  openGraph: {
    images: "/images/OG_Image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-gray-900">
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <GoogleAnalytics />
        ) : (
          <div>GA환경변수값필요</div>
        )}
        <ReactQueryClientProvider>
          <GlobalJotaiProvider>
            <div className="no-scrollbar mx-auto h-dvh w-full max-w-440pxr overflow-x-hidden bg-gray-950">
              {children}
            </div>
          </GlobalJotaiProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
