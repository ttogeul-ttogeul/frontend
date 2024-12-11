"use server";

import API from "..";
import { BlogAnalyticsOut, RootResponse } from "./types";

export const fetchRoot = async () => {
  const { message } = await API.get<RootResponse>("/");
  return message;
};

export const fetchBlogAnaylytics = async (blogId: string) => {
  try {
    const response = await API.get<BlogAnalyticsOut>(
      `/v1/blog-analytics?id=${blogId}`,
    );
    return response;
  } catch (err: unknown) {
    throw err;
  }
};
