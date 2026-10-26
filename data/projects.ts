import type { Project } from "@/types";

// TODO: replace these placeholder projects, links, and image paths with real work.
export const projects: Project[] = [
  {
    slug: "signal-desk",
    title: "Signal Desk",
    description:
      "An incident console that stitches traces, logs, and deploys into one timeline. Built for teams that need context before they need another dashboard.",
    image: "/images/project-01.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "OpenTelemetry"],
    liveUrl: "https://example.com/signal-desk",
    repoUrl: "https://github.com/your-username/signal-desk",
    featured: true,
  },
  {
    slug: "gridwatch",
    title: "Gridwatch",
    description:
      "A lightweight status page and uptime monitor for small infrastructure teams, with alert routing and a public incident history.",
    image: "/images/project-02.svg",
    tags: ["Next.js", "Server Actions", "Redis", "Cron"],
    liveUrl: "https://example.com/gridwatch",
    repoUrl: "https://github.com/your-username/gridwatch",
  },
  {
    slug: "relay",
    title: "Relay",
    description:
      "An internal tool for composing, testing, and shipping webhook integrations without redeploying the app.",
    image: "/images/project-03.svg",
    tags: ["TypeScript", "Node.js", "Zod", "PostgreSQL"],
    liveUrl: "https://example.com/relay",
    repoUrl: "https://github.com/your-username/relay",
  },
  {
    slug: "fieldnote",
    title: "Fieldnote",
    description:
      "A CLI and web viewer that turns structured logs into shareable incident notes.",
    image: "/images/project-04.svg",
    tags: ["Node.js", "SQLite", "Tailwind CSS"],
    liveUrl: "https://example.com/fieldnote",
    repoUrl: "https://github.com/your-username/fieldnote",
  },
  {
    slug: "quiet-hours",
    title: "Quiet Hours",
    description:
      "A focus-scheduling app that protects deep-work blocks and negotiates meeting times across time zones.",
    image: "/images/project-05.svg",
    tags: ["React", "TypeScript", "PostgreSQL"],
    liveUrl: "https://example.com/quiet-hours",
    repoUrl: "https://github.com/your-username/quiet-hours",
  },
];
