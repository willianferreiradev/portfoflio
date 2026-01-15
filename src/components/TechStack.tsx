'use client';

import {
  Layers,
  Smartphone,
  FileCode,
  Server,
  Database,
  Code,
} from 'lucide-react';

interface TechStackProps {
  title?: string;
  className?: string;
}

const technologies = [
  { name: 'React', icon: Layers, color: 'from-blue-500 to-blue-600' },
  {
    name: 'React Native',
    icon: Smartphone,
    color: 'from-purple-500 to-purple-600',
  },
  { name: 'TypeScript', icon: FileCode, color: 'from-blue-600 to-blue-700' },
  { name: 'Node.js', icon: Server, color: 'from-green-500 to-green-600' },
  { name: 'Database', icon: Database, color: 'from-orange-500 to-orange-600' },
  { name: 'PHP', icon: Code, color: 'from-purple-600 to-purple-700' },
];

export function TechStack({
  title = 'Meu Kit de Ferramentas Criativo',
  className = '',
}: TechStackProps) {
  return (
    <div className={`${className}`}>
      <h3 className="text-xl font-display font-semibold text-foreground mb-6">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="group relative p-4 rounded-2xl bg-background/50 border border-border/50 hover:border-coral/30 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-3"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
            >
              <tech.icon className="w-5 h-5 text-white" />
            </div>

            <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors whitespace-nowrap">
              {tech.name}
            </span>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-coral/5 to-blue-vivid/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
