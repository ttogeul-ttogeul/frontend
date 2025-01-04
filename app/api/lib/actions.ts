"use server";

import API from "@/app/api";
import { RootResponse, TotalPostCountResponse } from "./types";

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
