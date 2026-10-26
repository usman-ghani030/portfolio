import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-signal text-void hover:brightness-110 active:brightness-95",
  secondary:
    "border border-line bg-panel/60 text-bone hover:border-steel/50 hover:bg-panel",
  ghost: "text-steel hover:text-bone",
} as const;

const sizes = {
  sm: "h-9 px-4 text-[0.65rem]",
  md: "h-11 px-5 text-[0.7rem]",
  lg: "h-12 px-6 text-[0.75rem]",
} as const;

type StyleOptions = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: StyleOptions = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-xs font-mono uppercase tracking-[0.16em] transition-[color,background-color,border-color,filter] duration-200 disabled:pointer-events-none disabled:opacity-50",
    sizes[size],
    variants[variant],
    className,
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & StyleOptions;

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & StyleOptions;

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={buttonStyles({ variant, size, className })} {...props} />
  );
}
