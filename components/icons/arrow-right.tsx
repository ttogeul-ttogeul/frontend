import { SVGProps } from "react";

export default function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 12H21M21 12L14 5M21 12L14 19"
        stroke="#F9FAFB"
        stroke-width="1.5"
      />
    </svg>
  );
}
