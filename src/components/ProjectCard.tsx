'use client';

import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
  className = '',
}: ProjectCardProps) {
  return (
    <div
      className={`group relative bg-background/50 rounded-2xl border border-border/50 overflow-hidden hover:border-coral/30 transition-all duration-500 hover:shadow-2xl hover:shadow-coral/10 hover:-translate-y-2 flex flex-col h-full ${className}`}
    >
      <div className="aspect-video bg-gradient-to-br from-muted/30 to-muted/50 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground/50">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-coral/20 to-blue-vivid/20 flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-muted-foreground/70" />
              </div>
              <p className="text-sm">Imagem em breve</p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-coral transition-colors">
            {title}
          </h3>
          {link && (
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-coral transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
          )}
        </div>

        <p className="text-muted-foreground leading-relaxed text-sm flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs font-medium rounded-full border border-border/30 hover:bg-coral/10 hover:text-coral hover:border-coral/20 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-coral/5 to-blue-vivid/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
