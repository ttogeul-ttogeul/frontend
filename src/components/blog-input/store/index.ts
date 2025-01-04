import { atom } from "jotai";
import { type BlogDomain } from "../types";

const blogDomain = atom<BlogDomain>("tistory");

export const blogDomainState = atom(
  (get) => get(blogDomain),
  (_, set, update: BlogDomain) => set(blogDomain, update),
);
