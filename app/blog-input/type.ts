import { type BlogDomain } from "@/constants/blogs";
import { Dispatch, SetStateAction } from "react";

export type BlogInputModeProps = {
  blogDomain: BlogDomain;
};

export type BlogSelectModeProps = {
  setBlogDomain: Dispatch<SetStateAction<BlogDomain>>;
  setSelectMode: Dispatch<SetStateAction<boolean>>;
};

export type BlogAnalyticsResponse = { blogAnalyticsId: string };
