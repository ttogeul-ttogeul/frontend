"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function NavigationBar() {
  const router = useRouter();

  return (
    <div className="mb-5 mt-6">
      <Button variant="ghost" size={"md"} onClick={() => router.back()}>
        {"< "}뒤로
      </Button>
    </div>
  );
}
