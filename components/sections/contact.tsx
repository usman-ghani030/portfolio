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
          description="Send a note about a role or a project, and I will reply."
        />

        <div className="mt-14 border-y border-line/70 py-8">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-steel">
            Email
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 block break-words font-display display-wide text-[clamp(1rem,4.8vw,2.25rem)] font-semibold leading-tight text-bone transition-colors hover:text-signal"
          >
            {profile.email}
          </a>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <dl className="divide-y divide-line/70 border-b border-line/70">
              <div className="flex items-baseline justify-between gap-4 py-3">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-steel">
                  Location
                </dt>
                <dd className="text-right text-sm text-bone">
                  {profile.location}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3">
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-steel">
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
                    className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-steel transition-colors hover:text-signal"
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
