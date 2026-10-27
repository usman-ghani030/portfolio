import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-signal text-void shadow-[0_0_24px_-12px_var(--color-signal)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/35 before:content-[''] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-14px_var(--color-signal)] hover:brightness-110 active:translate-y-0 active:brightness-95",
  secondary:
    "border border-line bg-panel/60 text-bone hover:-translate-y-0.5 hover:border-signal/45 hover:bg-panel hover:text-signal hover:shadow-[0_14px_34px_-18px_var(--color-signal)] active:translate-y-0",
  ghost:
    "text-steel hover:-translate-y-0.5 hover:text-bone active:translate-y-0",
} as const;

const sizes = {
  sm: "h-9 px-4 text-[0.7rem]",
  md: "h-11 px-5 text-[0.76rem]",
  lg: "h-12 px-6 text-[0.82rem]",
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
    "relative inline-flex items-center justify-center gap-2 rounded-xs font-mono font-medium uppercase tracking-[0.15em] transition-[color,background-color,border-color,box-shadow,transform,filter] duration-200 ease-out-expo disabled:pointer-events-none disabled:opacity-50",
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
