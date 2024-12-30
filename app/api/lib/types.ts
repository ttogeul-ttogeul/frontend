import { AxiosResponse } from "axios";
import { BlogAnalytics } from "./blog-recap/types";

export type RootResponse = {
  message: string;
};

export type AnalysisFormData = {
  blog_url: string;
  blog_domain: string;
};

export type TotalPostCount = {
  totalPostCount: string;
};

export type BlogAnalyticsResponse = AxiosResponse<BlogAnalytics>;
