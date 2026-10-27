import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const timelineItem =
  "relative border-l border-line/70 pb-10 pl-8 last:pb-0";
const accentDot =
  "absolute -left-[3px] top-2 h-1.5 w-1.5 bg-signal";

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

        <div className="mt-14 space-y-16">
          <div>
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-steel">
              Experience
            </h3>
            <p className="mt-2 text-sm text-steel">
              {profile.experienceYears} of experience
            </p>

            <ol className="mt-8">
              {experience.map((item) => (
                <li
                  key={`${item.company}-${item.start}`}
                  className={timelineItem}
                >
                  <span className={accentDot} aria-hidden="true" />

                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-steel">
                    <time dateTime={item.start}>{item.start}</time>
                    <span className="mx-2 text-line">—</span>
                    {item.end === "Present" ? (
                      <span className="text-signal">Present</span>
                    ) : (
                      <time dateTime={item.end}>{item.end}</time>
                    )}
                  </p>

                  <h4 className="mt-3 font-display display-wide text-2xl font-semibold text-bone">
                    {item.role}
                  </h4>
                  <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-signal">
                    {item.company}
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-steel">
                    {item.summary}
                  </p>

                  {item.highlights.length > 0 ? (
                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((highlight, index) => (
                        <li
                          key={`${item.company}-highlight-${index}`}
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
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-steel">
              Education
            </h3>

            <ol className="mt-8">
              {education.map((item) => (
                <li
                  key={`${item.degree}-${item.start}`}
                  className={timelineItem}
                >
                  <span className={accentDot} aria-hidden="true" />

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="font-display display-wide text-2xl font-semibold text-bone">
                      {item.degree}
                    </h4>
                    {item.end === "Present" ? (
                      <Badge tone="signal">Present</Badge>
                    ) : null}
                  </div>

                  {item.institution ? (
                    <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-signal">
                      {item.institution}
                    </p>
                  ) : null}

                  {item.start || item.end ? (
                    <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-steel">
                      {item.start ? (
                        <>
                          <time dateTime={item.start}>{item.start}</time>
                          <span className="mx-2 text-line">—</span>
                        </>
                      ) : null}
                      {item.end ? (
                        <span className="text-signal">{item.end}</span>
                      ) : null}
                    </p>
                  ) : null}

                  {item.note ? (
                    <p className="mt-3 text-sm leading-relaxed text-steel">
                      {item.note}
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
