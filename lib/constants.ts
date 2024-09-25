import { Link, Experience, Project, FeaturedProject, SkillCategory, Education } from "@/lib/types";
import experiences_json from "@/database/experiences.json";
import projects_json from "@/database/projects.json";
import featured_json from "@/database/featured_projects.json";
import skills_json from "@/database/skills.json";
import education_json from "@/database/education.json"
import about_json from "@/database/about.json"

export const links: Link[] = [
  { name: "About", href: "/#about" },
  { name: "Education", href: "/#education" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
];
export const name: string = "Sam Morstein";
export const logo: string = "Sam";
export const main_image: string = "/img/home-me.png";
export const email: string = "sammorstein@gmail.com";
export const github: string = "https://github.com/sammorstein";
export const linkedin: string = "https://www.linkedin.com/in/sammorstein/";
export const title: string = "Robotics Engineer";
export const description: string = `
I am a Masters Student at Stanford with experience in mechanical engineering and robotics research.
I have a passion for robotics and love developing planning and navigation stacks for robot autonomy.
`;

export const about: string[] = about_json;

export const experiences: Experience[] = experiences_json;

export const projects: Project[] = projects_json;

export const featured_projects: FeaturedProject[] = featured_json;

export const education: Education[] = education_json;

export const skills: SkillCategory[] = skills_json;
