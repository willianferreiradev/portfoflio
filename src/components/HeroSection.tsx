'use client';

import { HeroBadge } from './HeroBadge';

interface HeroSectionProps {
  badge?: boolean;
  badgeText?: string;
  title?: {
    part1?: string;
    part2?: string;
  };
  description?: string;
  className?: string;
}

export function HeroSection({
  badge = true,
  badgeText = 'Disponível para projetos',
  title = {
    part1: 'Creative',
    part2: 'Developer',
  },
  description = 'Criando experiências digitais ousadas que combinam arte com tecnologia de ponta.',
  className = '',
}: HeroSectionProps) {
  return (
    <div className={`text-center max-w-4xl mx-auto px-4 ${className}`}>
      {badge && (
        <div
          className="mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <HeroBadge text={badgeText} />
        </div>
      )}

      <div
        className="mb-6 animate-fade-in-up"
        style={{ animationDelay: '0.4s' }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-none">
          <div className="text-primary-foreground mb-2">{title.part1}</div>
          <div className="bg-gradient-to-r from-coral via-blue-vivid to-coral bg-clip-text text-transparent animate-blob-morph">
            {title.part2}
          </div>
        </h1>
      </div>

      <div
        className="mb-8 animate-fade-in-up"
        style={{ animationDelay: '0.6s' }}
      >
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          {description.split(' ').map((word, index) => {
            if (word === 'arte') {
              return (
                <span key={index} className="text-coral font-semibold">
                  {word}{' '}
                </span>
              );
            }
            return word + ' ';
          })}
        </p>
      </div>
    </div>
  );
}
