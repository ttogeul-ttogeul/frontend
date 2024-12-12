"use client";

import { useState } from "react";
import { SelectBlogSection, InputBlogSection } from ".";
import Title from "@/components/blog-input/title";
import { type BlogType } from "@/constants/blogs";

export default function Page() {
  const [selectMode, setSelectMode] = useState(true);
  const [blogType, setBlogType] = useState<BlogType>("tistory");

  return (
    <div className="flex flex-col gap-20">
      <Title selectMode={selectMode} />

      {selectMode ? (
        <SelectBlogSection
          setSelectMode={setSelectMode}
          setBlogType={setBlogType}
        />
      ) : (
        <InputBlogSection blogType={blogType} />
      )}
    </div>
  );
}
