import { type BlogDomain } from "@/constants/blogs";
import { Dispatch, SetStateAction } from "react";

export type SectionProps = {
  setSelectMode: Dispatch<SetStateAction<boolean>>;
  blogDomain: BlogDomain;
  setBlogDomain: Dispatch<SetStateAction<BlogDomain>>;
};
