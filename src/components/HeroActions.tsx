'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

interface HeroActionsProps {
  primaryButton?: {
    text?: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text?: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

export function HeroActions({
  primaryButton = {
    text: 'Explorar Meu Trabalho',
    href: '#projects',
  },
  secondaryButton = {
    text: 'Vamos Conversar',
    href: '#contact',
  },
  className = '',
}: HeroActionsProps) {
  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrimaryClick = () => {
    if (primaryButton.onClick) {
      primaryButton.onClick();
    } else if (primaryButton.href) {
      if (primaryButton.href.startsWith('#')) {
        scrollToSection(primaryButton.href);
      } else {
        window.open(primaryButton.href, '_blank', 'noopener noreferrer');
      }
    }
  };

  const handleSecondaryClick = () => {
    if (secondaryButton.onClick) {
      secondaryButton.onClick();
    } else if (secondaryButton.href) {
      if (secondaryButton.href.startsWith('#')) {
        scrollToSection(secondaryButton.href);
      } else {
        window.open(secondaryButton.href, '_blank', 'noopener noreferrer');
      }
    }
  };

  return (
    <div
      className={`flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up ${className}`}
      style={{ animationDelay: '0.8s' }}
    >
      <Button
        size="lg"
        onClick={handlePrimaryClick}
        className="group bg-gradient-to-r from-coral to-coral-light hover:from-coral-light hover:to-coral text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-coral/25 animate-pulse-soft cursor-pointer"
      >
        <span className="mr-2">{primaryButton.text}</span>
        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>

      <Button
        variant="outline"
        size="lg"
        onClick={handleSecondaryClick}
        className="group border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:border-coral font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
        <span>{secondaryButton.text}</span>
      </Button>
    </div>
  );
}
