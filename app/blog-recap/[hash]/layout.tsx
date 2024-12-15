import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "blog-recap",
    description: "generated by create next app",
    openGraph: {
      images: "/images/sample-og.jpg",
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
