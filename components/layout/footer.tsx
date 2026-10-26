import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { getInitials } from "@/lib/utils";
import { Container } from "@/components/ui/container";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-line/70">
      <Container className="py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Link
              href="#top"
              className="inline-flex items-center gap-3"
              aria-label={`${profile.name} — back to top`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xs border border-signal/40 bg-signal/10 font-mono text-[0.65rem] font-medium tracking-[0.1em] text-signal">
                {getInitials(profile.name)}
              </span>
              <span className="font-display display-wide text-sm font-semibold uppercase tracking-[0.08em] text-bone">
                {profile.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-steel">
              {profile.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-steel">
              Elsewhere
            </p>
            <ul className="mt-5 space-y-3">
              {profile.socials.map((social) => {
                const isExternal = social.url.startsWith("http");

                return (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 text-sm text-bone transition-colors hover:text-signal"
                    >
                      {social.label}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 text-steel transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-steel">
              Contact
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 inline-block break-all text-sm text-bone transition-colors hover:text-signal"
            >
              {profile.email}
            </a>
            <p className="mt-2 text-sm text-steel">{profile.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-steel">
            © {year} {profile.name}. All rights reserved.
          </p>
          <Link
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-steel transition-colors hover:text-bone"
          >
            Back to top
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
