'use client';

import { useEffect, useState } from 'react';

import { Github, Linkedin, Mail, Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Button } from './ui/button';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
];

const languages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

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
          {/* Logo/Brand */}
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

          {/* Desktop Navigation */}
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

          {/* Right side: Language + Social */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`rounded-full gap-2 px-3 ${
                    isScrolled
                      ? 'hover:bg-primary/10'
                      : 'text-primary-foreground/80 hover:bg-primary/10'
                  }`}
                >
                  <span className="text-lg">{currentLang.flag}</span>
                  <span className="text-sm font-medium">
                    {currentLang.code.toUpperCase()}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[150px]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLang(lang)}
                    className={`gap-3 cursor-pointer ${
                      currentLang.code === lang.code ? 'bg-primary/10' : ''
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Social Icons */}
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className={`rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? 'hover:text-primary hover:bg-primary/10'
                    : 'text-primary-foreground/80 hover:text-primary hover:bg-primary/10'
                }`}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden rounded-full ${
              !isScrolled && 'text-primary-foreground'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-xl font-display font-medium text-foreground/80 hover:text-primary transition-colors text-left py-3 px-4 rounded-xl hover:bg-primary/5 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {link.name}
              </button>
            ))}

            {/* Language selector in mobile */}
            <div className="pt-4 mt-2 border-t border-border">
              <p className="text-sm text-muted-foreground px-4 mb-3">
                Language
              </p>
              <div className="flex gap-2 px-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                      currentLang.code === lang.code
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm font-medium">
                      {lang.code.toUpperCase()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-6 mt-4 border-t border-border">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full hover:text-primary hover:border-primary"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
