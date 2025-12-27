'use client';

import { useEffect, useState } from 'react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //  const [currentLang, setCurrentLang] = useState(languages[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-2xl md:text-3xl font-display font-bold transition-all duration-300 hover:scale-105"
          >
            <span
              className={
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }
            >
              Willi
            </span>
            <span className="text-primary">an</span>
            <span className="inline-block w-2 h-2 bg-primary rounded-full ml-1" />
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 link-underline ${
                  isScrolled
                    ? 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                    : 'text-primary-foreground/80 hover:text-primary hover:bg-primary/10'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
