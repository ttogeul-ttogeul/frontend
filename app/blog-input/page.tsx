"use client";

import { useState } from "react";
import { type BlogDomain } from "@/constants/blogs";
import NavigationBar from "@/components/blog-input/navigation-bar";
import { useRouter } from "next/navigation";
import InputSection from "./input-section";
import SelectSection from "./select-section";

export default function Page() {
  const router = useRouter();
  const [selectMode, setSelectMode] = useState(true);
  const [blogDomain, setBlogDomain] = useState<BlogDomain>("tistory");

  const onClickHandler = () => {
    if (selectMode) router.push("/");
    if (!selectMode) setSelectMode((selectMode) => !selectMode);
  };

  return (
    <div>
      <NavigationBar onClickHandler={onClickHandler} />

      {selectMode ? (
        <SelectSection
          selectMode={selectMode}
          setSelectMode={setSelectMode}
          blogDomain={blogDomain}
          setBlogDomain={setBlogDomain}
        />
      ) : (
        <InputSection blogDomain={blogDomain} />
      )}
    </div>
  );
}
