'use client';

import { Sparkles } from 'lucide-react';

interface HeroBadgeProps {
  text?: string;
  icon?: boolean;
  className?: string;
}

export function HeroBadge({
  text = 'Disponível para projetos',
  icon = true,
  className = '',
}: HeroBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-coral/20 to-blue-vivid/20 border border-coral/30 backdrop-blur-sm animate-pulse-soft ${className}`}
    >
      {icon && <Sparkles className="w-4 h-4 text-coral animate-rotate-slow" />}
      <span className="text-sm font-medium text-foreground/90">{text}</span>
    </div>
  );
}
