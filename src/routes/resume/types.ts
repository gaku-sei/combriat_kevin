export type Profile = {
  about: string;
  email: string;
  first_name: string;
  key_skills?: string[];
  key_languages: string[];
  key_technologies: string[];
  last_name: string;
  location: { city: string; country: string };
  position: string;
  profiles: { network: string; url: string; username?: string }[];
  skills?: { name: string; duration: string }[];
};

export type Education = {
  area: string;
  end_date: string;
  institution: string;
  place: string;
  start_date: string;
  website?: string;
};

export type Language = {
  fluency: string;
  language: string;
};

export type Skill = {
  name: string;
  keywords: string[];
};

export type Work = {
  company: string;
  end_date?: string;
  highlights: string[];
  industry: string;
  place: string;
  position: string;
  start_date: string;
  summary?: string;
  website?: string;
  skills?: string[];
};

export type Resume = {
  basics: Profile;
  educations: Education[];
  languages: Language[];
  skills: Skill[];
  works: Work[];
};
