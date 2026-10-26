import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 field-grid opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-16 h-72 w-72 rounded-full bg-signal/5 blur-3xl"
      />

      <Container className="relative grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-7">
          <div className="flex animate-rise flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-steel">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            <span>{profile.role}</span>
            <span className="text-line">/</span>
            <span>{profile.location}</span>
          </div>

          <h1
            id="hero-title"
            className="mt-6 animate-rise text-balance font-display display-wide text-hero font-semibold text-bone [animation-delay:80ms]"
          >
            {profile.name}
          </h1>

          <p className="mt-6 max-w-xl animate-rise text-lead text-steel [animation-delay:160ms]">
            {profile.tagline}
          </p>

          <div className="mt-9 flex animate-rise flex-col gap-3 sm:flex-row sm:flex-wrap [animation-delay:240ms]">
            <ButtonLink
              href="#projects"
              className="w-full justify-center sm:w-auto"
            >
              View selected work
              <ArrowDownRight
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />
            </ButtonLink>
            <ButtonLink
              href="#contact"
              variant="secondary"
              className="w-full justify-center sm:w-auto"
            >
              Contact me
              <ArrowUpRight
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />
            </ButtonLink>
          </div>

          <div className="mt-10 flex animate-rise flex-wrap items-center gap-x-6 gap-y-3 [animation-delay:320ms]">
            {profile.socials.map((social) => {
              const isExternal = social.url.startsWith("http");

              return (
                <a
                  key={social.label}
                  href={social.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-steel transition-colors hover:text-bone"
                >
                  {social.label}
                  <ArrowUpRight
                    className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="animate-rise lg:col-span-5 [animation-delay:200ms]">
          <div className="mx-auto w-full max-w-[22rem] lg:ml-auto">
            <div className="relative border border-line bg-panel p-2">
              <span
                className="absolute -left-px -top-px h-3 w-3 border-l border-t border-signal/60"
                aria-hidden="true"
              />
              <span
                className="absolute -right-px -top-px h-3 w-3 border-r border-t border-signal/60"
                aria-hidden="true"
              />
              <span
                className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-signal/60"
                aria-hidden="true"
              />
              <span
                className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-signal/60"
                aria-hidden="true"
              />

              <div className="relative aspect-[4/5] overflow-hidden bg-void">
                <Image
                  src="/profile.png"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 352px, 80vw"
                  className="object-cover object-[center_22%]"
                />
              </div>

              <div className="relative mt-2 h-12 overflow-hidden border-y border-line/70 bg-void">
                <svg
                  viewBox="0 0 320 48"
                  className="h-full w-full"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 24H52L60 14L68 34L76 24H132L141 10L150 38L159 24H218L227 16L236 32L245 24H320"
                    stroke="var(--color-signal)"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="bevel"
                    strokeDasharray="1200"
                    className="animate-trace"
                  />
                  <circle
                    cx="320"
                    cy="24"
                    r="2.5"
                    fill="var(--color-signal)"
                    className="animate-pulse-soft"
                  />
                </svg>
              </div>

              <div className="flex items-center justify-between gap-3 px-2 py-3">
                <div>
                  <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-steel">
                    Field unit
                  </p>
                  <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-bone">
                    {profile.availability}
                  </p>
                </div>
                <span className="flex items-center gap-2 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-steel">
                  <span
                    className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-signal"
                    aria-hidden="true"
                  />
                  Open
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[0.6rem] uppercase tracking-[0.18em] text-steel">
              <span>{profile.location}</span>
              <span>Portrait / 01</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
