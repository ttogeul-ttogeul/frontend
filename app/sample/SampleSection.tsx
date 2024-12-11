"use client";

import { useCallback } from "react";
import API from "../api";
import { BlogAnalyticsOut } from "../api/lib/types";
import { Suspense } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";

function SampleContents() {
  // const fetchData = useCallback(async () => {
  //   const { message } = await API.get<RootResponse>("/");
  //   return message;
  // }, []);

  const fetchBlog = useCallback(async () => {
    try {
      const data = await API.get<BlogAnalyticsOut>(
        "/v1/blog-analytics?id=123e4567-e89b-12d3-a456-426614174000",
      );
      return data;
    } catch (err) {
      // throw new Error("error");
      throw err;
    }
  }, []);

  const { data } = useSuspenseQuery({
    queryKey: ["blog-analytics"],
    queryFn: fetchBlog,
  });

  console.log(data);

  return <div>뭐지...</div>;
}

export default function SampleSection() {
  return (
    <Suspense fallback={<div>...loading</div>}>
      <SampleContents />
    </Suspense>
  );
}
