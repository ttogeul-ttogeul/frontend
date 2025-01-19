import { atom } from "jotai";

const alert = atom(false);

export const alertState = atom(
  (get) => get(alert),
  (_, set, update: boolean) => set(alert, update),
);

const alertMessage = atom("서버 에러입니다");

export const alertMessageState = atom(
  (get) => get(alertMessage),
  (_, set, update: string) => set(alertMessage, update),
);
