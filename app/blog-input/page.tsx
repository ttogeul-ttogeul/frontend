"use client";

import NavigationBar from "@/src/components/blog-input/navigation-bar";
import { useRouter } from "next/navigation";
import BlogInputMode from "@/src/components/blog-input/blog-input-mode";
import BlogSelectMode from "@/src/components/blog-input/blog-select-mode";
import { useAtom } from "jotai";
import { selectModeState } from "@/src/components/blog-input/store";

export default function Page() {
  const router = useRouter();
  const [selectMode, setSelectMode] = useAtom(selectModeState);

  const onClickHandler = () => {
    if (selectMode) router.push("/");
    if (!selectMode) setSelectMode(!selectMode);
  };

  return (
    <>
      <NavigationBar onClickHandler={onClickHandler} />
      <div className="flex h-[calc(100dvh-5.25rem)] flex-col justify-between">
        {selectMode ? <BlogSelectMode /> : <BlogInputMode />}
      </div>
    </>
  );
}
