'use client';

import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
} from 'lucide-react';

interface ContactLinkProps {
  platform: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email' | 'whatsapp';
  className?: string;
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  whatsapp: MessageSquare,
};

const colorMap = {
  github: 'from-gray-600 to-gray-700',
  linkedin: 'from-blue-600 to-blue-700',
  email: 'from-coral to-coral-light',
  whatsapp: 'from-green-500 to-green-600',
};

export function ContactLink({
  platform,
  url,
  icon,
  className = '',
}: ContactLinkProps) {
  const IconComponent = iconMap[icon];
  const colorClass = colorMap[icon];

  const handleClick = () => {
    if (icon === 'email') {
      window.location.href = `mailto:${url}`;
    } else if (icon === 'whatsapp') {
      window.open(`https://wa.me/${url.replace(/\D/g, '')}`, '_blank');
    } else {
      window.open(url.startsWith('http') ? url : `https://${url}`, '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative p-6 bg-background/50 rounded-2xl border border-border/50 hover:border-coral/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-coral/10 flex items-center gap-4 w-full text-left ${className}`}
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorClass} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
      >
        <IconComponent className="w-6 h-6 text-white" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-coral transition-colors">
          {platform}
        </h3>
        <p className="text-sm text-muted-foreground truncate">
          {icon === 'whatsapp' ? `+${url}` : url}
        </p>
      </div>

      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-coral transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-coral/5 to-blue-vivid/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}
