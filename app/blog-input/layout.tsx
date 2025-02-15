import { ReactNode } from "react";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="flex h-dvh flex-col px-6">{children}</div>;
}
