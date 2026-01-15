'use client';

interface FloatingElementsProps {
  className?: string;
}

export function FloatingElements({ className = '' }: FloatingElementsProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      <div
        className="absolute top-20 right-16 md:top-32 md:right-32 w-24 h-24 md:w-32 md:h-32 border-2 border-coral/30 rounded-2xl transform rotate-45 animate-float opacity-80"
        style={{ animationDelay: '0s', animationDuration: '6s' }}
      />

      <div
        className="absolute bottom-32 left-8 md:bottom-40 md:left-20 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-coral/20 to-blue-vivid/20 rounded-full animate-pulse-soft backdrop-blur-sm"
        style={{ animationDelay: '1s', animationDuration: '4s' }}
      />

      <div
        className="absolute top-1/2 right-1/4 md:right-1/3 w-12 h-12 md:w-16 md:h-16 border border-blue-vivid/40 rounded-full animate-rotate-slow"
        style={{ animationDelay: '2s' }}
      />

      <div
        className="absolute top-40 left-12 md:top-48 md:left-24 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-gold/30 to-coral/30 rounded-lg transform rotate-12 animate-float opacity-60"
        style={{ animationDelay: '3s', animationDuration: '8s' }}
      />

      <div
        className="absolute bottom-20 right-8 md:bottom-28 md:right-16 w-16 h-16 md:w-20 md:h-20 animate-rotate-slow opacity-40"
        style={{ animationDelay: '1.5s' }}
      >
        <div
          className="w-full h-full bg-gradient-to-br from-blue-vivid/20 to-coral/20 transform rotate-30"
          style={{
            clipPath:
              'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          }}
        />
      </div>

      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-gradient-radial from-coral/10 to-transparent rounded-full animate-pulse-soft blur-xl"
        style={{ animationDelay: '0.5s', animationDuration: '5s' }}
      />

      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-56 md:h-56 bg-gradient-radial from-blue-vivid/10 to-transparent rounded-full animate-pulse-soft blur-xl"
        style={{ animationDelay: '2.5s', animationDuration: '7s' }}
      />
    </div>
  );
}
