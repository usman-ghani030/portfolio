import Image from "next/image";
import { ArrowUpRight, CodeXml } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="group/link inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-bone transition-colors hover:text-signal"
        >
          Live site
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      ) : null}

      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="group/link inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-steel transition-colors hover:text-bone"
        >
          Source
          <CodeXml className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

export function Projects() {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-t border-line/70 py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          titleId="projects-title"
          description="A selection of recent systems and tools."
        />

        {featured ? (
          <article className="mt-14 overflow-hidden rounded-xs border border-line/80 bg-panel/40">
            <div className="grid md:grid-cols-12">
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line/70 md:col-span-7 md:aspect-auto md:min-h-[26rem] md:border-b-0 md:border-r">
                <Image
                  src={featured.image}
                  alt={`${featured.title} project preview`}
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-void/40 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-between p-6 md:col-span-5 md:p-8">
                <div>
                  <Badge tone="signal">Featured project</Badge>
                  <h3 className="mt-4 font-display display-wide text-3xl font-semibold text-bone">
                    {featured.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-steel">
                    {featured.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <li key={tag}>
                        <Badge>{tag}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <ProjectLinks project={featured} />
                </div>
              </div>
            </div>
          </article>
        ) : null}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((project) => (
            <Card
              key={project.slug}
              interactive
              className="group h-full overflow-hidden"
            >
              <article className="flex h-full flex-col">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line/70">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-void/30 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display display-wide text-2xl font-semibold text-bone">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <Badge>{tag}</Badge>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-line/70 pt-4">
                    <ProjectLinks project={project} />
                  </div>
                </div>
              </article>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
