"use client";

import ArrowLeft from "@/src/components/icons/svgs/arrow-left.svg";
import { Button } from "../ui/button";
import { useAtom } from "jotai";
import { selectModeState } from "./store";
import { useRouter } from "next/navigation";

export default function NavigationBar() {
  const router = useRouter();
  const [selectMode, setSelectMode] = useAtom(selectModeState);

  const handleClickBackButton = () => {
    if (selectMode) router.push("/");
    if (!selectMode) setSelectMode(!selectMode);
  };
  return (
    <div className="mb-5 mt-6">
      <Button variant="ghost" size={"md"} onClick={handleClickBackButton}>
        <ArrowLeft width={24} height={24} />
        뒤로
      </Button>
    </div>
  );
}
