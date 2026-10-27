import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SocialIcon({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  switch (label) {
    case "GitHub":
      return <GitHubIcon className={className} />;
    case "LinkedIn":
      return <LinkedInIcon className={className} />;
    case "Email":
      return <Mail className={className} aria-hidden="true" />;
    default:
      return <ArrowUpRight className={className} aria-hidden="true" />;
  }
}

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
          <div className="flex animate-rise flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-steel">
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

          <div className="mt-6 animate-rise [animation-delay:220ms]">
            <span className="inline-flex max-w-full flex-wrap items-center gap-x-2.5 gap-y-1 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-2 font-mono text-[0.65rem] uppercase leading-relaxed tracking-[0.1em] text-emerald-300 sm:rounded-full sm:text-[0.7rem] sm:tracking-[0.14em]">
              <span
                className="h-1.5 w-1.5 shrink-0 animate-pulse-soft rounded-full bg-emerald-400"
                aria-hidden="true"
              />
              {profile.availability}
            </span>
          </div>

          <div className="mt-9 flex animate-rise flex-col gap-3 sm:flex-row sm:flex-wrap [animation-delay:280ms]">
            <ButtonLink
              href="#projects"
              className="w-full justify-center sm:w-auto"
            >
              View Projects
              <ArrowDownRight className="h-3.5 w-3.5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href="#contact"
              variant="secondary"
              className="w-full justify-center sm:w-auto"
            >
              Contact Me
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </ButtonLink>
          </div>

          <ul className="mt-10 flex animate-rise flex-wrap items-center gap-3 [animation-delay:340ms]">
            {profile.socials.map((social) => {
              const isExternal = social.url.startsWith("http");

              return (
                <li key={social.label}>
                  <a
                    href={social.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel/40 text-steel transition-[color,background-color,border-color,transform] hover:-translate-y-0.5 hover:border-signal/50 hover:bg-signal/5 hover:text-signal"
                  >
                    <SocialIcon
                      label={social.label}
                      className="h-[1.1rem] w-[1.1rem]"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="animate-rise lg:col-span-5 [animation-delay:200ms]">
          <div className="relative mx-auto w-full max-w-[22rem] lg:ml-auto">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.25rem] bg-signal/10 blur-2xl"
            />
            <div className="relative rounded-2xl border border-line/80 bg-panel p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-void">
                <Image
                  src={profile.image}
                  alt={`Portrait of ${profile.name}`}
                  width={768}
                  height={1364}
                  priority
                  sizes="(min-width: 1024px) 352px, 80vw"
                  className="h-full w-full object-cover object-[center_18%]"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-steel">
                <span>{profile.location}</span>
                <span>Portrait</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
