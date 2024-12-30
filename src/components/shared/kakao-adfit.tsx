"use client";

import { cn } from "@/src/lib/utils";
import React, { useEffect, useRef } from "react";

interface KakaoAdFitProps {
  adUnit: string;
  className?: string;
}

function KakaoAdFit({ adUnit, className }: KakaoAdFitProps) {
  // 최초 1회만 광고를 불러오기 위한 변수
  const adRef = useRef<boolean>(false);

  useEffect(() => {
    // 로딩된 광고가 있으면, 추가 로딩 X
    if (adRef.current) {
      return;
    }

    const ins = document.createElement("ins");
    const script = document.createElement("script");

    ins.className = "kakao_ad_area";
    ins.style.display = "none;";

    ins.setAttribute("data-ad-width", "320");
    ins.setAttribute("data-ad-height", "50");
    ins.setAttribute("data-ad-unit", adUnit);

    script.async = true;
    script.type = "text/javascript";
    script.src = "//t1.daumcdn.net/kas/static/ba.min.js";

    document.querySelector(".aside__kakaoAdFit")?.appendChild(ins);
    document.querySelector(".aside__kakaoAdFit")?.appendChild(script);

    // 광고 로딩 여부 상태 변경
    adRef.current = true;
  }, [adUnit]);
  return (
    <>
      <aside className={cn("aside__kakaoAdFit border-2s", className)}></aside>
    </>
  );
}

export default React.memo(KakaoAdFit);
