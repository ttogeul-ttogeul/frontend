import { AnalysisFormData } from "@/app/api/lib/types";
import { BlogAnalyticsIdResponse } from "@/app/blog-input/type";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ApiError } from "../types";
import useAlert from "./useAlert";
import { fetchBlogAnalytics, postAnalytics } from "@/app/api/lib/actions";

export default function useBlogAnalytics() {
  const { showAlert } = useAlert();

  const {
    mutate,
    isPending: isMutatePending,
    isSuccess: isMutateSuccess,
    status: mutateStatus,
    data: blogAnalyticsIdResponse,
  } = useMutation<BlogAnalyticsIdResponse, ApiError, AnalysisFormData>({
    mutationFn: postAnalytics,
    onError: (err) => {
      if (err.message === "Network Error") {
        showAlert(`인터넷 연결을 확인하거나,\n잠시 후 다시 시도해주세요.`);
      } else {
        showAlert(err.message || "서버 에러입니다");
      }
    },
  });

  const {
    data,
    isFetching,
    status: queryStatus,
  } = useQuery({
    queryKey: [
      "fetch-blog-analytics",
      blogAnalyticsIdResponse?.data.blogAnalyticsId,
    ],
    queryFn: () =>
      fetchBlogAnalytics(blogAnalyticsIdResponse?.data.blogAnalyticsId ?? ""),
    enabled: isMutateSuccess,
    refetchInterval: (query) =>
      query.state.error?.message === "PENDING" ? 2000 : false, // 202일 때만 2초마다 재시도
    retry: (failureCount, error) => {
      if (error.message === "PENDING" && failureCount < 30) return true;
      return false; // 400, 500 등 다른 에러는 재시도 X
    },
  });

  return {
    data,
    isFetching,
    queryStatus,
    mutate,
    isMutatePending,
    mutateStatus,
    isMutateSuccess,
  };
}
