"use server";

import API from "@/app/api";
import { AnalysisFormData, RootResponse, TotalPostCount } from "./types";

export const fetchRoot = async () => {
  const { message } = await API.get<RootResponse>("/");
  return message;
};

export const fetchTotalPostCount = async () => {
  const response = await API.get<TotalPostCount>(
    `/v1/blog-analytics/total-post-count`,
    { headers: { "Cache-Control": "no-store" } },
  );

  return response;
};

export const postAnalysis = async (data: AnalysisFormData) => {
  try {
    const response = await API.post(`/v1/blog-analytics`, data);
    console.log("postaction-response: ", response);
    return response;
  } catch (error) {
    throw error;
  }
};
