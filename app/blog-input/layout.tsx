import NavigationBar from "@/components/blog-input/navigation-bar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}
