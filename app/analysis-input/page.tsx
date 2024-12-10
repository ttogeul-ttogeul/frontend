"use client";

import { useState } from "react";
import { SelectBlogSection, InputBlogSection } from ".";
import Title from "@/components/analysis-input/title";

export default function Page() {
  const [selectMode] = useState(true);

  return (
    <div>
      <Title selectMode={selectMode} />

      {selectMode ? <SelectBlogSection /> : <InputBlogSection />}
    </div>
  );
}
