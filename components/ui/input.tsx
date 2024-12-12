import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-lg bg-gray-50 px-5 py-3 text-lg text-gray-950 caret-violet-600 transition-colors placeholder:text-gray-400 hover:ring-2 hover:ring-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:bg-gray-50/40",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
