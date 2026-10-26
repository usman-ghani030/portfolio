import { skillGroups } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="border-t border-line/70 py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Stack"
          title="Skills"
          titleId="skills-title"
          description="Grouped by where I work in the stack. No scorecards."
        />

        <ul className="mt-14 border-t border-line/70">
          {skillGroups.map((group) => (
            <li
              key={group.category}
              className="grid gap-4 border-b border-line/70 py-6 md:grid-cols-12 md:gap-6"
            >
              <div className="flex items-center gap-3 md:col-span-3">
                <span
                  className="h-1 w-1 shrink-0 bg-signal"
                  aria-hidden="true"
                />
                <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-bone">
                  {group.category}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2 md:col-span-9">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge>{item}</Badge>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
