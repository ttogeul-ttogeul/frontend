"use client";

// import { useState } from "react";
// import { fetchRoot } from "../api/lib/actions";
import SampleSection from "./SampleSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});
export default function Page() {
  // const message = await fetchRoot();
  // const [queryClient] = useState(
  //   () =>
  //     new QueryClient({
  //       defaultOptions: {
  //         queries: {
  //           refetchOnWindowFocus: false,
  //           retry: 1,
  //         },
  //       },
  //     }),
  // );
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {/* <div>{message}</div> */}
        <SampleSection />
      </div>
    </QueryClientProvider>
  );
}
