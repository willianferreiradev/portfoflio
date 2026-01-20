'use client';

import { ProjectBadge } from './ProjectBadge';
import { ProjectCard } from './ProjectCard';
import { ExternalLink } from 'lucide-react';
import { ProjectItem } from '@/types/project';
import Link from 'next/link';

interface ProjectsSectionProps {
  id?: string;
  badge?: boolean;
  badgeText?: string;
  title?: {
    part1?: string;
    part2?: string;
  };
  description?: string;
  projects?: ProjectItem[];
  className?: string;
}

export function ProjectsSection({
  id,
  badge = true,
  badgeText = 'Trabalhos em Destaque',
  title = {
    part1: 'Projetos',
    part2: 'Selecionados',
  },
  description = 'Uma vitrine de soluções criativas que ultrapassam limites e oferecem experiências excepcionais.',
  projects = [],
  className = '',
}: ProjectsSectionProps) {
  return (
    <section id={id} className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {badge && (
            <div className="text-center mb-8 animate-fade-in-up">
              <ProjectBadge text={badgeText} />
            </div>
          )}

          <div
            className="text-center mb-16 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
              <span className="text-foreground">{title.part1}</span>{' '}
              <span className="bg-gradient-to-r from-coral via-coral-light to-blue-vivid bg-clip-text text-transparent">
                {title.part2}
              </span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.image}
                  link={project.link}
                />
              </div>
            ))}
          </div>

          <div
            className="text-center mt-16 animate-fade-in-up"
            style={{ animationDelay: '1.2s' }}
          >
            <Link href="/projetos">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-background border border-border/50 hover:border-coral/30 text-foreground hover:text-coral rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-coral/10">
                <span>Ver Todos os Projetos</span>
                <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
