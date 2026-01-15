'use client';

import { AboutBadge } from './AboutBadge';
import { TechStack } from './TechStack';

interface AboutSectionProps {
  id?: string;
  badge?: boolean;
  badgeText?: string;
  title?: {
    part1?: string;
    part2?: string;
    part3?: string;
    part4?: string;
  };
  intro?: {
    text1?: string;
    highlight?: string;
    text2?: string;
  };
  approach?: string;
  toolkitTitle?: string;
  className?: string;
}

export function AboutSection({
  id,
  badge = true,
  badgeText = 'Sobre Mim',
  title = {
    part1: 'Combinando',
    part2: 'Criatividade',
    part3: '&',
    part4: 'Código',
  },
  intro = {
    text1: 'Sou um',
    highlight: 'desenvolvedor apaixonado',
    text2:
      'que acredita que um ótimo software é uma forma de arte. Com expertise em construir aplicações web e mobile modernas, transformo desafios complexos em soluções elegantes e centradas no usuário.',
  },
  approach = 'Minha abordagem combina excelência técnica com resolução criativa de problemas. Cada pixel importa, cada interação deve ser mágica, e cada linha de código deve servir a um propósito.',
  toolkitTitle = 'Meu Kit de Ferramentas Criativo',
  className = '',
}: AboutSectionProps) {
  return (
    <section id={id} className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {badge && (
            <div className="text-center mb-8 animate-fade-in-up">
              <AboutBadge text={badgeText} />
            </div>
          )}

          <div
            className="text-center mb-16 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
              <span className="text-foreground">{title.part1}</span>{' '}
              <span className="bg-gradient-to-r from-coral via-coral-light to-coral bg-clip-text text-transparent">
                {title.part2}
              </span>{' '}
              <span className="text-foreground">{title.part3}</span>{' '}
              <span className="text-foreground">{title.part4}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-coral/10 to-blue-vivid/10 rounded-3xl transform rotate-2" />
                <div className="relative bg-background/80 backdrop-blur-sm rounded-3xl p-2 border border-border/50">
                  <img
                    src="/about-me.jpg"
                    alt="Developer workspace"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: '0.6s' }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {intro.text1}{' '}
                  <span className="text-coral font-semibold">
                    {intro.highlight}
                  </span>{' '}
                  {intro.text2}
                </p>
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: '0.8s' }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {approach}
                </p>
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: '1s' }}
              >
                <TechStack title={toolkitTitle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
