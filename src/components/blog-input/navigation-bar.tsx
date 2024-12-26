"use client";

import ArrowLeft from "@/src/components/icons/svgs/arrow-left.svg";
import { Button } from "../ui/button";

type NavigationBarProps = {
  onClickHandler: () => void;
};

export default function NavigationBar({ onClickHandler }: NavigationBarProps) {
  return (
    <div className="mb-5 mt-6">
      <Button variant="ghost" size={"md"} onClick={onClickHandler}>
        <ArrowLeft width={24} height={24} />
        뒤로
      </Button>
    </div>
  );
}
