import { AxiosResponse } from "axios";
import { Dispatch, SetStateAction } from "react";
import { BLOGS } from "../constants";

export type BlogInputModeProps = {
  blogDomain: BlogDomain;
};

export type BlogSelectModeProps = {
  setBlogDomain: Dispatch<SetStateAction<BlogDomain>>;
  setSelectMode: Dispatch<SetStateAction<boolean>>;
};

export type BlogAnalyticsId = { blogAnalyticsId: string };

export type BlogAnalyticsIdResponse = AxiosResponse<BlogAnalyticsId>;

export type BlogDomain = (typeof BLOGS)[number]["id"];

export type BlogType = {
  id: "tistory" | "velog";
  name: string;
  bgColor: string;
  textColor: string;
  urlExample: string;
  homeUrl: string;
};
