"use server";

import API from "@/app/api";
import { BlogAnalyticsResponse } from "../types";

export const fetchBlogAnalytics = async (id: string) => {
  const response = await API.get<BlogAnalyticsResponse>(`/v2/blog-analytics`, {
    params: { id },
  });
  return response.data;
};
