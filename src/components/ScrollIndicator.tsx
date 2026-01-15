'use client';

import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  targetSection?: string;
  className?: string;
  showText?: boolean;
  text?: string;
}

export function ScrollIndicator({
  targetSection = '#about',
  className = '',
  showText = true,
  text = 'Role para explorar',
}: ScrollIndicatorProps) {
  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={() => scrollToSection(targetSection)}
      className={`group flex flex-col items-center justify-center space-y-2 transition-all duration-300 hover:scale-110 ${className}`}
      aria-label={showText ? text : 'Scroll to next section'}
    >
      {showText && (
        <span className="text-sm text-primary-foreground/70 font-medium tracking-wide animate-fade-in-up">
          {text}
        </span>
      )}

      <div className="flex flex-col space-y-1">
        <ChevronDown className="w-6 h-6 text-primary-foreground/70 animate-bounce group-hover:text-coral transition-colors" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-coral/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </button>
  );
}
