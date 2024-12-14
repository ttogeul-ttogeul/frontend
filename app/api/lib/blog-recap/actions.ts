"use server";

import API from "@/app/api";
import { BlogAnalytics } from "./types";

export const fetchBlogAnalytics = async (id: string) => {
  const response = await API.get<BlogAnalytics>(`/v1/blog-analytics`, {
    params: { id },
  });
  return response;
};
