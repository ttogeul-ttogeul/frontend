"use server";

import API from "@/app/api";
import {
  AnalysisFormData,
  BlogAnalyticsResponse,
  RootResponse,
  TotalPostCountResponse,
} from "./types";
import { BlogAnalyticsIdResponse } from "@/app/blog-input/type";

export const fetchRoot = async () => {
  const { message } = await API.get<RootResponse>("/");
  return message;
};

export const fetchTotalPostCount = async () => {
  const response = await API.get<TotalPostCountResponse>(
    `/v1/blog-analytics/total-post-count`,
    { headers: { "Cache-Control": "no-store" } },
  );

  return response.data;
};

export const postAnalytics = async (formData: AnalysisFormData) => {
  const res = await API.post<AnalysisFormData, BlogAnalyticsIdResponse>(
    "/v2/blog-analytics",
    formData,
  );
  return res;
};

export const fetchBlogAnalytics = async (blogAnalyticsId: string) => {
  const res = await API.get<BlogAnalyticsResponse>("/v2/blog-analytics", {
    params: { id: blogAnalyticsId ?? "" },
  });

  if (res.status === 202) {
    throw Error("PENDING");
  }
  return res.data;
};
