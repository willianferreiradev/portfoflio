'use client';

import { HeroSection } from './HeroSection';
import { HeroActions } from './HeroActions';
import { FloatingElements } from './FloatingElements';
import { ScrollIndicator } from './ScrollIndicator';

interface HeroProps {
  id?: string;
  className?: string;
}

export function Hero({ id = 'hero', className = '' }: HeroProps) {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-deep via-blue-deep/95 to-blue-vivid/20 ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElements />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-deep/50 to-blue-deep" />
      </div>

      <div className="relative z-10 w-full">
        <HeroSection />
        <HeroActions className="mt-12" />
      </div>

      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block">
        <ScrollIndicator targetSection="#about" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#0B121A"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}
