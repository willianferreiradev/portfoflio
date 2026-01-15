'use client';

import { Briefcase } from 'lucide-react';

interface ProjectBadgeProps {
  text?: string;
  icon?: boolean;
  className?: string;
}

export function ProjectBadge({
  text = 'Trabalhos em Destaque',
  icon = true,
  className = '',
}: ProjectBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-vivid/10 to-blue-vivid/20 border border-blue-vivid/20 backdrop-blur-sm ${className}`}
    >
      {icon && <Briefcase className="w-4 h-4 text-blue-vivid" />}
      <span className="text-sm font-medium text-blue-vivid">{text}</span>
    </div>
  );
}
