import { PropsWithChildren } from "react";
import { Provider } from "jotai";

export default function GlobalJotaiProvider({ children }: PropsWithChildren) {
  return <Provider>{children}</Provider>;
}
