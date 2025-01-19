import { AnalysisFormData, BlogAnalyticsResponse } from "@/app/api/lib/types";

import { useMutation, useQuery } from "@tanstack/react-query";
import { ApiError } from "../types";
import API from "@/app/api";
import { useAlert } from "@/src/components/shared/alert/hooks";
import { BlogAnalyticsIdResponse } from "@/src/components/blog-input/types";

export const useBlogAnalytics = () => {
  const { setAlertMessage, handleAlert } = useAlert();

  const postAnalytics = async (formData: AnalysisFormData) => {
    const res = await API.post<AnalysisFormData, BlogAnalyticsIdResponse>(
      "/v2/blog-analytics",
      formData,
    );
    return res;
  };

  const fetchBlogAnalytics = async (blogAnalyticsId: string) => {
    const res = await API.get<BlogAnalyticsResponse>("/v2/blog-analytics", {
      params: { id: blogAnalyticsId ?? "" },
    });

    if (res.status === 202) {
      throw Error("PENDING");
    }
    return res.data;
  };

  const {
    mutate,
    isPending: isMutatePending,
    isSuccess: isMutateSuccess,
    status: mutateStatus,
    data: blogAnalyticsIdResponse,
  } = useMutation<BlogAnalyticsIdResponse, ApiError, AnalysisFormData>({
    mutationFn: postAnalytics,
    onError: (err) => {
      handleAlert(true);
      if (err.message === "Network Error") {
        setAlertMessage(
          `인터넷 연결을 확인하거나,\n잠시 후 다시 시도해주세요.`,
        );
      } else {
        setAlertMessage(err.message);
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
};
