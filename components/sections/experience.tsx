import { education, experience } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-t border-line/70 py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Track record"
          title="Experience"
          titleId="experience-title"
          description="Work history and education, most recent first."
        />

        <ol className="mt-14">
          {experience.map((item) => (
            <li
              key={`${item.company}-${item.start}`}
              className="grid gap-4 border-b border-line/70 py-8 first:border-t md:grid-cols-12 md:gap-6"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-steel">
                  <time dateTime={item.start}>{item.start}</time>
                  <span className="mx-2 text-line">—</span>
                  {item.end === "Present" ? (
                    <span className="text-signal">Present</span>
                  ) : (
                    <time dateTime={item.end}>{item.end}</time>
                  )}
                </p>
              </div>

              <div className="relative md:col-span-9 md:border-l md:border-line/70 md:pl-8">
                <span
                  className="absolute -left-[3px] top-2 hidden h-1.5 w-1.5 bg-signal md:block"
                  aria-hidden="true"
                />
                <h3 className="font-display display-wide text-2xl font-semibold text-bone">
                  {item.role}
                </h3>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-signal">
                  {item.company}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-steel">
                  {item.summary}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-steel"
                    >
                      <span
                        className="mt-2 h-px w-3 shrink-0 bg-signal/70"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-steel">
              Education
            </p>
          </div>

          <ul className="md:col-span-9 md:border-l md:border-line/70 md:pl-8">
            {education.map((item) => (
              <li key={item.institution} className="relative">
                <span
                  className="absolute -left-[3px] top-2 hidden h-1.5 w-1.5 bg-signal md:block"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display display-wide text-xl font-semibold text-bone">
                    {item.institution}
                  </h3>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-steel">
                    <time dateTime={item.start}>{item.start}</time>
                    <span className="mx-2 text-line">—</span>
                    <time dateTime={item.end}>{item.end}</time>
                  </p>
                </div>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-signal">
                  {item.program}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-steel">
                  {item.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
