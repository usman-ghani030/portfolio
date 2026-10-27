import Image from "next/image";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  const paragraphs = profile.bio.split("\n\n");

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-line/70 py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Profile"
          title="About"
          titleId="about-title"
          description="Who I am, what I build, and the details worth knowing at a glance."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <div className="relative overflow-hidden rounded-xl border border-line bg-panel p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-void">
                <Image
                  src={profile.image}
                  alt={`Portrait of ${profile.name}`}
                  width={768}
                  height={1364}
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="h-full w-full object-cover object-[center_18%]"
                />
              </div>
            </div>

            <dl className="mt-8 divide-y divide-line/70 border-y border-line/70">
              <div className="flex items-baseline justify-between gap-4 py-3">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-steel">
                  Based
                </dt>
                <dd className="text-right text-sm text-bone">
                  {profile.location}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-steel">
                  Experience
                </dt>
                <dd className="text-right text-sm text-bone">
                  {profile.experienceYears}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-steel">
                  Education
                </dt>
                <dd className="max-w-[62%] text-right text-sm text-bone">
                  {profile.educationSummary}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-steel">
                  Focus
                </dt>
                <dd className="max-w-[62%] text-right text-sm text-bone">
                  {profile.focus}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-steel">
                  Status
                </dt>
                <dd className="text-right text-sm text-bone">
                  {profile.availability}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-steel">
                  Email
                </dt>
                <dd className="min-w-0 text-right text-sm">
                  <a
                    href={`mailto:${profile.email}`}
                    className="break-words text-bone transition-colors hover:text-signal"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="space-y-5">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? "text-lg leading-relaxed text-bone"
                      : "text-base leading-relaxed text-steel"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-line/70 pt-6">
              {profile.socials.map((social) => {
                const isExternal = social.url.startsWith("http");

                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-steel transition-colors hover:text-signal"
                  >
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
