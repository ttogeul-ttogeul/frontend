"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function NavigationBar() {
  const router = useRouter();

  return (
    <div className="my-2">
      <Button variant="ghost" onClick={() => router.back()}>
        {"< "}뒤로
      </Button>
    </div>
  );
}
