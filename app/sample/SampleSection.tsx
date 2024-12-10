"use client";

import { useSuspenseQuery } from "@tanstack/react-query"; // react-query 사용 추천
import { useCallback } from "react";
import API from "../api";
import { RootResponse } from "../api/lib/types";
import { Suspense, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function SampleContents() {
  const fetchData = useCallback(async () => {
    const { message } = await API.get<RootResponse>("/");
    return message;
  }, []);

  const { data } = useSuspenseQuery({
    queryKey: ["sample"],
    queryFn: fetchData,
  });

  return <div>{data}</div>;
}

export default function SampleSection() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>...loading</div>}>
        <SampleContents />
      </Suspense>
    </QueryClientProvider>
  );
}
