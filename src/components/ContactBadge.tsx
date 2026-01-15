'use client';

import { MessageCircle } from 'lucide-react';

interface ContactBadgeProps {
  text?: string;
  icon?: boolean;
  className?: string;
}

export function ContactBadge({
  text = 'Entre em Contato',
  icon = true,
  className = '',
}: ContactBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-coral/10 to-coral/20 border border-coral/20 backdrop-blur-sm ${className}`}
    >
      {icon && <MessageCircle className="w-4 h-4 text-coral" />}
      <span className="text-sm font-medium text-coral">{text}</span>
    </div>
  );
}
