import { ReactNode } from "react";

export default function TitleSection({ children }: { children: ReactNode }) {
  return (
    <div className="mb-20 text-2xl/[1.875rem] font-medium">{children}</div>
  );
}
