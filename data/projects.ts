import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "apartment-management-platform",
    title: "Apartment Management Platform",
    tagline: "The operating system for residential communities",
    description:
      "Replaces WhatsApp groups, paper notices and spreadsheets with one connected platform for committees, residents and security.",
    image: "/images/project-01.svg",
    tags: ["Next.js", "Express.js", "PostgreSQL"],
    repoUrl:
      "https://github.com/usman-ghani030/Apartment-Management-Platform",
    featured: true,
  },
  {
    slug: "ai-coding-agent",
    title: "AI Coding Agent",
    description:
      "A web developer AI agent built with the OpenAI Agents SDK that runs on Google Gemini through the OpenAI-compatible API. Chat with it to create files and folders, read existing files, and generate code (React, Node.js, Python and more) directly from the conversation.",
    image: "/images/project-02.svg",
    tags: ["Python", "OpenAI Agents SDK", "Google Gemini"],
    repoUrl: "https://github.com/usman-ghani030/Personal-Cursor-AI-Agent",
  },
  {
    slug: "physical-ai-humanoid-robotics-book",
    title: "Physical AI & Humanoid Robotics Course Book",
    description:
      "A comprehensive documentation-style course on Physical AI and Humanoid Robotics, built with Docusaurus.",
    image: "/images/project-03.svg",
    tags: ["Docusaurus", "Documentation"],
    repoUrl:
      "https://github.com/usman-ghani030/hackathon-ai-humanoid-robotic-book",
  },
];
