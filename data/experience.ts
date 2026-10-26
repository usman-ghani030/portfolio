import type { Education, Experience } from "@/types";

// TODO: replace this placeholder work history with real roles and dates.
export const experience: Experience[] = [
  {
    company: "Northstar Labs",
    role: "Senior Full-stack Engineer",
    start: "2023",
    end: "Present",
    summary:
      "Lead engineer on an observability console used by platform teams to trace incidents across services.",
    highlights: [
      "Rebuilt the trace view around a shared timeline, cutting median time-to-context during incidents.",
      "Shipped role-based alert routing and on-call handoff flows used by 40+ engineers.",
      "Introduced a typed API boundary and contract tests that removed a recurring class of integration bugs.",
    ],
  },
  {
    company: "Signal Foundry",
    role: "Full-stack Engineer",
    start: "2021",
    end: "2023",
    summary:
      "Built internal tools and data pipelines for a small product team shipping a real-time analytics product.",
    highlights: [
      "Designed the ingestion dashboard that replaced a spreadsheet-based release process.",
      "Reduced query costs by adding cached aggregate views and instrumenting slow paths.",
    ],
  },
  {
    company: "Independent",
    role: "Freelance Developer",
    start: "2019",
    end: "2021",
    summary:
      "Partnered with early-stage teams to take internal tools from rough prototype to production.",
    highlights: [
      "Delivered a patient-scheduling tool that cut manual booking time roughly in half.",
      "Built and documented a design system that let a two-person team ship consistently.",
    ],
  },
];

// TODO: replace this placeholder education entry with real details.
export const education: Education[] = [
  {
    institution: "University Name",
    program: "BSc Computer Science",
    start: "2015",
    end: "2019",
    summary:
      "Focused on distributed systems and human-computer interaction. TODO: replace with real details.",
  },
];
