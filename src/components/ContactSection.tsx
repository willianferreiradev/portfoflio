'use client';

import { ContactBadge } from './ContactBadge';
import { ContactLink } from './ContactLink';

interface ContactSectionProps {
  id?: string;
  className?: string;
}

const contactLinks = [
  {
    platform: 'WhatsApp',
    url: '55 51 980615512',
    icon: 'whatsapp' as const,
  },
  {
    platform: 'Email',
    url: 'contato@willianferreira.dev',
    icon: 'email' as const,
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/willianferreiradev',
    icon: 'linkedin' as const,
  },
  {
    platform: 'GitHub',
    url: 'github.com/willianferreiradev',
    icon: 'github' as const,
  },
];

export function ContactSection({ id, className = '' }: ContactSectionProps) {
  return (
    <section id={id} className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <ContactBadge text="Entre em Contato" />
          </div>

          <div
            className="text-center mb-16 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
              <span className="text-foreground">Vamos Criar</span>{' '}
              <span className="bg-gradient-to-r from-coral via-coral-light to-blue-vivid bg-clip-text text-transparent">
                Juntos
              </span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Tem um projeto em mente? Adoraria saber mais sobre ele. Me mande
              uma mensagem e vamos dar vida à sua visão.
            </p>

            <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
              Ou entre em contato diretamente
            </h3>

            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Fique à vontade para me contatar através de qualquer uma dessas
              plataformas. Estou sempre animado para discutir novas ideias e
              oportunidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
            {contactLinks.map((link, index) => (
              <div
                key={link.platform}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <ContactLink
                  platform={link.platform}
                  url={link.url}
                  icon={link.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
