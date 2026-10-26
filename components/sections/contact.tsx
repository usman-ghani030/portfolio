import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/sections/contact-form";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-line/70 py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Start a conversation"
          titleId="contact-title"
          description="Tell me what you are building, or just say hello. I answer every message."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-steel">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 block break-all font-display display-wide text-2xl font-semibold text-bone transition-colors hover:text-signal sm:text-3xl"
            >
              {profile.email}
            </a>

            <dl className="mt-8 divide-y divide-line/70 border-y border-line/70">
              <div className="flex items-baseline justify-between gap-4 py-3">
                <dt className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-steel">
                  Location
                </dt>
                <dd className="text-right text-sm text-bone">
                  {profile.location}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3">
                <dt className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-steel">
                  Status
                </dt>
                <dd className="max-w-[62%] text-right text-sm text-bone">
                  {profile.availability}
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {profile.socials.map((social) => {
                const isExternal = social.url.startsWith("http");

                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-steel transition-colors hover:text-signal"
                  >
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
