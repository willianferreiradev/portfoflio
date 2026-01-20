'use client';

import { Heart, Code, Coffee } from 'lucide-react';

interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`bg-background border-t border-white/10 py-12 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left animate-fade-in-up">
              <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-coral via-coral-light to-blue-vivid bg-clip-text text-transparent mb-3">
                Willian Ferreira
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Creative Developer apaixonado por transformar ideias em
                experiências digitais únicas.
              </p>
              <div className="flex items-center justify-center md:justify-start text-sm text-muted-foreground">
                <span>Feito com</span>
                <Heart className="w-4 h-4 text-coral mx-1 animate-pulse" />
                <span>e muito</span>
                <Coffee className="w-4 h-4 text-coral-light ml-1" />
              </div>
            </div>

            {/* Quick Links */}
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              <h4 className="text-lg font-display font-semibold text-foreground mb-4">
                Navegação
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#inicio"
                    className="text-muted-foreground hover:text-coral transition-colors duration-300 cursor-pointer"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-coral transition-colors duration-300 cursor-pointer"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-muted-foreground hover:text-coral transition-colors duration-300 cursor-pointer"
                  >
                    Projetos
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foregreen hover:text-coral transition-colors duration-300 cursor-pointer"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div
              className="text-center md:text-right animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <h4 className="text-lg font-display font-semibold text-foreground mb-4">
                Tecnologias
              </h4>
              <div className="flex flex-wrap justify-center md:justify-end gap-2 mb-4">
                {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-white/5 text-coral-light rounded-full border border-white/10 hover:bg-coral/10 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex items-center justify-center md:justify-end text-sm text-muted-foreground">
                <Code className="w-4 h-4 mr-1" />
                <span>Sempre aprendendo</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div
            className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <p className="mb-4 md:mb-0">
              © {currentYear} Willian Ferreira. Todos os direitos reservados.
            </p>

            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/willianferreiradev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-coral transition-colors duration-300 flex items-center"
              >
                <span>Código no GitHub</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <span className="text-white/20">|</span>

              <p className="text-xs">Desenvolvido com Next.js & Tailwind CSS</p>
            </div>
          </div>

          {/* Floating Elements for Visual Appeal */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-coral/5 to-blue-vivid/5 rounded-full blur-xl animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-deep/5 to-coral-light/5 rounded-full blur-lg animate-float pointer-events-none"></div>
        </div>
      </div>
    </footer>
  );
}
