import { atom } from "jotai";
import { type BlogDomain } from "../types";

const blogDomain = atom<BlogDomain>("tistory");

export const blogDomainState = atom(
  (get) => get(blogDomain),
  (_, set, update: BlogDomain) => set(blogDomain, update),
);

const selectMode = atom<boolean>(true);

export const selectModeState = atom(
  (get) => get(selectMode),
  (_, set, update: boolean) => set(selectMode, update),
);
