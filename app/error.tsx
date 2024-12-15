"use client";
import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h2 className="text-2xl">Something went wrong</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
