import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in-up">
              <span className="px-4 py-2 bg-coral/10 text-coral rounded-full text-sm font-medium border border-coral/20">
                Todos os Projetos
              </span>
            </div>

            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
                <span className="text-foreground">Meus</span>{' '}
                <span className="bg-gradient-to-r from-coral via-coral-light to-blue-vivid bg-clip-text text-transparent">
                  Projetos
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-16">
                Uma coleção completa de todos os projetos que desenvolvi ao
                longo da minha jornada.
              </p>
            </div>

            <div
              className="py-32 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-coral/20 to-blue-vivid/20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coral/30 to-blue-vivid/30 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-coral to-blue-vivid animate-pulse"></div>
                </div>
              </div>

              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Em Desenvolvimento
              </h2>

              <p className="text-muted-foreground max-w-lg mx-auto">
                Esta página está sendo construída com muito carinho. Em breve
                você poderá ver todos os meus projetos organizados e detalhados.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
