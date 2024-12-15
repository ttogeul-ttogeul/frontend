"use client";

import { Suspense, useState } from "react";
import { TitleSection, MainSection, FooterSection } from ".";
import { type BlogDomain } from "@/constants/blogs";
import NavigationBar from "@/components/blog-input/navigation-bar";
import { useRouter } from "next/navigation";
import AnalysisLoading from "@/components/blog-input/analysis-loading";

export default function Page() {
  const router = useRouter();
  const [selectMode, setSelectMode] = useState(true);
  const [blogDomain, setBlogDomain] = useState<BlogDomain>("tistory");
  // const [isLoading, setIsLoading] = useState(false);

  const onClickHandler = () => {
    if (selectMode) router.push("/");
    if (!selectMode) setSelectMode((selectMode) => !selectMode);
  };

  // if (isLoading) return <AnalysisLoading />;

  return (
    <Suspense fallback={<AnalysisLoading />}>
      <div className="relative">
        <NavigationBar onClickHandler={onClickHandler} />

        <div className="flex flex-col gap-20">
          <TitleSection selectMode={selectMode} blogDomain={blogDomain} />

          <MainSection
            selectMode={selectMode}
            setSelectMode={setSelectMode}
            blogDomain={blogDomain}
            setBlogDomain={setBlogDomain}
          />
        </div>

        <FooterSection selectMode={selectMode} blogDomain={blogDomain} />
      </div>
    </Suspense>
  );
}
