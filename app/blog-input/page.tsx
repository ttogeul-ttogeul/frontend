"use client";

import { useState } from "react";
import { type BlogDomain } from "@/src/components/blog-input/types";
import NavigationBar from "@/src/components/blog-input/navigation-bar";
import { useRouter } from "next/navigation";
import BlogInputMode from "@/src/components/blog-input/blog-input-mode";
import BlogSelectMode from "./blog-select-mode";

export default function Page() {
  const router = useRouter();
  const [selectMode, setSelectMode] = useState(true);
  const [, setBlogDomain] = useState<BlogDomain>("tistory");

  const onClickHandler = () => {
    if (selectMode) router.push("/");
    if (!selectMode) setSelectMode((selectMode) => !selectMode);
  };

  return (
    <>
      <NavigationBar onClickHandler={onClickHandler} />

      <div className="flex h-[calc(100dvh-5.25rem)] flex-col justify-between">
        {selectMode ? (
          <>
            <BlogSelectMode
              setBlogDomain={setBlogDomain}
              setSelectMode={setSelectMode}
            />
          </>
        ) : (
          <BlogInputMode />
        )}
      </div>
    </>
  );
}
