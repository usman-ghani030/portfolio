import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const tones = {
  neutral: "border-line bg-panel/40 text-steel",
  signal: "border-signal/30 bg-signal/5 text-signal",
} as const;

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: keyof typeof tones;
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xs border px-2.5 py-1 font-mono text-[0.7rem] uppercase leading-none tracking-[0.14em]",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
