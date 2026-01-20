import { supabase } from '@/lib/supabase';
import { Project, ProjectItem } from '@/types/project';

export async function getProjects(): Promise<ProjectItem[]> {
  try {
    const { data: projects, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(3);

    if (error || !projects || projects.length === 0) {
      return getFallbackProjects();
    }

    return projects.map((project: Project) => ({
      title: project.name,
      description: project.description,
      technologies: extractTechnologies(project.description),
      image: project.image_url,
      link: project.url,
    }));
  } catch (error) {
    return getFallbackProjects();
  }
}

// Extract technologies from description (basic implementation)
// Consider adding a separate technologies field in your database
function extractTechnologies(description: string): string[] {
  const techKeywords = [
    'React',
    'TypeScript',
    'Next.js',
    'Node.js',
    'JavaScript',
    'Python',
    'Vue',
    'Angular',
    'Svelte',
    'Express',
    'FastAPI',
    'Django',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'GraphQL',
    'REST API',
    'Tailwind',
    'CSS',
    'HTML',
    'AWS',
    'Vercel',
    'Docker',
    'Stripe',
    'Charts',
    'Docs',
    'Mobile',
    'E-Commerce',
    'Analytics',
  ];

  const foundTechs = techKeywords.filter((tech) =>
    description.toLowerCase().includes(tech.toLowerCase()),
  );

  // Return first 3 technologies or default ones
  return foundTechs.length > 0
    ? foundTechs.slice(0, 3)
    : ['Web', 'Frontend', 'Backend'];
}

// Fallback projects if Supabase fails
function getFallbackProjects(): ProjectItem[] {
  return [
    {
      title: 'Painel de Analytics',
      description:
        'Uma plataforma abrangente de analytics com visualização de dados em tempo real, relatórios personalizados e insights acionáveis.',
      technologies: ['React', 'TypeScript', 'Charts'],
    },
    {
      title: 'App Mobile E-Commerce',
      description:
        'Experiência de compras móvel multiplataforma com checkout perfeito, busca de produtos e recursos avançados.',
      technologies: ['React Native', 'Node.js', 'Stripe'],
    },
    {
      title: 'Plataforma de Documentação API',
      description:
        'Ferramenta de documentação de API amigável para desenvolvedores com exemplos interativos, snippets de código e testes.',
      technologies: ['TypeScript', 'REST API', 'Docs'],
    },
  ];
}
