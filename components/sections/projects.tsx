import {
  ArrowUpRight,
  BookOpen,
  Bot,
  Building2,
  CodeXml,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const projectIcons: Record<string, LucideIcon> = {
  Building2,
  Bot,
  BookOpen,
};

function ProjectLinks({ project }: { project: Project }) {
  if (!project.liveUrl && !project.repoUrl) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles({ variant: "primary", size: "sm" })}
        >
          Live Demo
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      ) : null}

      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles({ variant: "secondary", size: "sm" })}
        >
          GitHub
          <CodeXml className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

export function Projects() {
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
          description="A selection of recent full stack and AI projects."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = projectIcons[project.icon] ?? Building2;
            const isFeatured = index === 0;

            return (
              <Card
                key={project.slug}
                interactive
                className={cn(
                  "group h-full transition-[border-color,background-color,box-shadow] hover:border-signal/25 hover:shadow-[0_0_60px_-24px_var(--color-signal)]",
                  isFeatured && "md:col-span-2",
                )}
              >
                <article
                  className={cn(
                    "flex h-full flex-col p-6 sm:p-8",
                    isFeatured && "md:grid md:grid-cols-12 md:gap-8",
                  )}
                >
                  <div className={cn(isFeatured && "md:col-span-8")}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xs border border-line bg-void/60 text-signal transition-colors group-hover:border-signal/40">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      {project.featured ? (
                        <Badge tone="signal">Featured project</Badge>
                      ) : null}
                    </div>

                    <h3
                      className={cn(
                        "mt-6 font-display display-wide font-semibold text-bone",
                        isFeatured ? "text-3xl" : "text-2xl",
                      )}
                    >
                      {project.title}
                    </h3>

                    {project.tagline ? (
                      <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-signal">
                        {project.tagline}
                      </p>
                    ) : null}

                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-steel">
                      {project.description}
                    </p>
                  </div>

                  <div
                    className={cn(
                      "mt-auto flex flex-col gap-6 border-t border-line/70 pt-6",
                      isFeatured &&
                        "md:mt-0 md:border-l md:border-t-0 md:pl-8 md:pt-0",
                      isFeatured && "md:col-span-4",
                    )}
                  >
                    <ul className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <li key={`${project.slug}-tag-${tagIndex}`}>
                          <Badge>{tag}</Badge>
                        </li>
                      ))}
                    </ul>

                    <ProjectLinks project={project} />
                  </div>
                </article>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
