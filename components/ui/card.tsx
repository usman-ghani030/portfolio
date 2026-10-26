import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export function Card({
  className,
  interactive = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xs border border-line/80 bg-panel/40",
        interactive &&
          "transition-colors duration-300 hover:border-steel/40 hover:bg-panel/70",
        className,
      )}
      {...props}
    />
  );
}
