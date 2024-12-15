"use server";

import API from "@/app/api";
import { analysisFormData, RootResponse } from "./types";

export const fetchRoot = async () => {
  const { message } = await API.get<RootResponse>("/");
  return message;
};

export const postAnalysis = async (data: analysisFormData) => {
  console.log("post-data: ", data);
  try {
    const response = await API.post(`/v1/blog-analytics`, data);
    console.log("postaction-response: ", response);
    return response;
  } catch (error) {
    throw error;
  }
};

// export const test = async (data: analysisFormData) => {

// }
