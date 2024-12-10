"use client";

import { useState } from "react";
import { SelectBlogSection, InputBlogSection } from ".";
import Title from "@/components/analysis-input/title";
import { type BlogType } from "@/constants/blogs";

export default function Page() {
  const [selectMode, setSelectMode] = useState(true);
  const [blogType, setBlogType] = useState<BlogType>("tistory");

  return (
    <div>
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
