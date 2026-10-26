import type { SkillGroup } from "@/types";

// TODO: replace these placeholder skill groups with real ones.
export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Accessibility"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "Redis", "Server Actions", "Zod"],
  },
  {
    category: "Infrastructure",
    items: [
      "Docker",
      "GitHub Actions",
      "Vercel",
      "OpenTelemetry",
      "Grafana",
    ],
  },
  {
    category: "Practice",
    items: [
      "Design systems",
      "Technical writing",
      "Playwright",
      "Figma",
      "Git",
    ],
  },
];
