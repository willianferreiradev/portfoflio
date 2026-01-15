'use client';

import { User } from 'lucide-react';

interface AboutBadgeProps {
  text?: string;
  icon?: boolean;
  className?: string;
}

export function AboutBadge({
  text = 'Sobre Mim',
  icon = true,
  className = '',
}: AboutBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-coral/10 to-coral/20 border border-coral/20 backdrop-blur-sm ${className}`}
    >
      {icon && <User className="w-4 h-4 text-coral" />}
      <span className="text-sm font-medium text-coral">{text}</span>
    </div>
  );
}
