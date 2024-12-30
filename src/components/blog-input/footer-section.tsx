import { ReactNode } from "react";

export default function FooterSection({ children }: { children: ReactNode }) {
  return (
    <div className="whitespace-pre text-center text-gray-500">{children}</div>
  );
}
