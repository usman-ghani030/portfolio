"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { getInitials } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header
      id="top"
      className="sticky top-0 z-40 border-b border-line/70 bg-void/85 backdrop-blur-md"
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="#top"
          className="group flex min-w-0 items-center gap-3"
          aria-label={`${profile.name} — back to top`}
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xs border border-signal/40 bg-signal/10 font-mono text-[0.7rem] font-medium tracking-[0.1em] text-signal transition-colors group-hover:border-signal/70">
            {getInitials(profile.name)}
          </span>
          <span className="truncate font-display display-wide text-sm font-semibold uppercase tracking-[0.08em] text-bone">
            {profile.name}
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative font-mono text-[0.75rem] uppercase tracking-[0.16em] text-steel transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-signal after:content-[''] after:transition-[width] after:duration-300 hover:text-bone hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <span
              className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-signal"
              aria-hidden="true"
            />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-steel">
              {profile.availability}
            </span>
          </div>

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xs border border-line text-steel transition-colors hover:border-steel/50 hover:text-bone md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        ref={panelRef}
        className={`${
          open ? "block" : "hidden"
        } max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-line/70 bg-void md:hidden`}
      >
        <Container className="py-6">
          <nav aria-label="Mobile">
            <ul>
              {links.map((link) => (
                <li key={link.href} className="border-b border-line/60">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 font-display display-wide text-2xl font-semibold text-bone transition-colors hover:text-signal"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="h-4 w-4 text-steel"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8">
            <ButtonLink
              href="#contact"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              Start a conversation
            </ButtonLink>
            <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-steel">
              {profile.location}
              <span className="mx-2 text-line">/</span>
              {profile.availability}
            </p>
          </div>
        </Container>
      </div>
    </header>
  );
}
