import { type BlogDomain } from "@/src/constants/blogs";
import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";

export type BlogInputModeProps = {
  blogDomain: BlogDomain;
};

export type BlogSelectModeProps = {
  setBlogDomain: Dispatch<SetStateAction<BlogDomain>>;
  setSelectMode: Dispatch<SetStateAction<boolean>>;
};

export type BlogAnalyticsId = { blogAnalyticsId: string };

export type BlogAnalyticsIdResponse = AxiosResponse<BlogAnalyticsId>;
