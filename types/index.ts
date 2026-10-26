export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string | "Present";
  summary: string;
  highlights: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  socials: { label: string; url: string }[];
};
