"use client";

import NavigationBar from "@/src/components/blog-input/navigation-bar";
import BlogInputMode from "@/src/components/blog-input/blog-input-mode";
import BlogSelectMode from "@/src/components/blog-input/blog-select-mode";
import { useAtomValue } from "jotai";
import { selectModeState } from "@/src/components/blog-input/store";

export default function Page() {
  const selectMode = useAtomValue(selectModeState);

  return (
    <>
      <NavigationBar />
      <div className="flex h-[calc(100dvh-5.25rem)] flex-col justify-between">
        {selectMode ? <BlogSelectMode /> : <BlogInputMode />}
      </div>
    </>
  );
}
