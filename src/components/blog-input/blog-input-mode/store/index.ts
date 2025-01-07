import { atom } from "jotai";

const alertOpen = atom<boolean>(false);

export const alertOpenState = atom(
  (get) => get(alertOpen),
  (_, set, update: boolean) => set(alertOpen, update),
);

const alertMessage = atom<string>("");

export const alertMessageState = atom(
  (get) => get(alertMessage),
  (_, set, update: string) => set(alertMessage, update),
);
