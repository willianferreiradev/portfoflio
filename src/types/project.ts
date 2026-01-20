export interface Project {
  id: string;
  name: string;
  description: string;
  image_url: string;
  url: string;
  tags: string[];
  created_at: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}
