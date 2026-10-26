import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js"],
  },
  {
    category: "Backend & Databases",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Python",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    category: "AI & LLM",
    items: [
      "Prompt Engineering",
      "Context Engineering",
      "LangChain",
      "LangGraph",
      "OpenAI Agents SDK",
      "MCP (Model Context Protocol)",
    ],
  },
  {
    category: "DevOps",
    items: ["Docker"],
  },
];
