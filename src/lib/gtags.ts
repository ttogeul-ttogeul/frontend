import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// 페이지 조회 전송을 위한 태그
export const pageView = (url: URL) => {
  window.gtag("config", GA_TRACKING_ID as string, {
    page_path: url, // 페이지의 url
    // page_path 말고도 page_title, page_location, send_page_view 등을 보낼 수 있습니다.
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// 이벤트 전송을 위한 태그로 위의 링크에서 더욱더 자세한 내용을 참조하실 수 있습니다.
export const event = (
  action: Gtag.EventNames,
  { event_category, event_label, value }: Gtag.EventParams,
) => {
  if (process.env.NODE_ENV === "development") return true;
  window.gtag("event", action, {
    event_category,
    event_label,
    value,
  });
};

export const useGtag = () => {
  const pathname = usePathname(); // Get current route

  // Save pathname on component mount into a REF
  const savedPathNameRef = useRef(pathname);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;

    const handleRouteChange = (url: URL) => {
      pageView(url);
    };

    if (savedPathNameRef.current !== pathname) {
      handleRouteChange(new URL(pathname, window.location.origin));
      // Update REF
      savedPathNameRef.current = pathname;
    }
  }, [pathname]);
};
