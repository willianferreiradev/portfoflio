# Integração Supabase - Portfolio

Esta integração permite carregar projetos dinamicamente do Supabase com otimização para SEO.

## Configuração

### 1. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env.local` e adicione suas credenciais do Supabase:

```bash
cp .env.example .env.local
```

Edite `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-publica-aqui
```

### 2. Configurar banco de dados

Execute o script SQL no editor SQL do Supabase:

```sql
-- Veja o arquivo supabase-setup.sql
```

### 3. Adicionar projetos

Você pode adicionar projetos através do painel do Supabase ou via API.

## Estrutura da Tabela

```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Funcionalidades

### SEO Otimizado
- **Server-Side Rendering**: Os projetos são carregados no servidor para melhor SEO
- **Metadata dinâmica**: Título, descrição e keywords são gerados baseados nos projetos
- **Open Graph**: Imagens dos projetos são incluídas para social media

### Fallback System
- Se o Supabase falhar, projetos estáticos são exibidos
- Logs de erro para debug em desenvolvimento
- UX contínua mesmo com falhas de rede

### Performance
- Apenas 3 projetos mais recentes são carregados
- Caching automático do Next.js
- Imagens otimizadas com URLs válidas

## Como usar

### Adicionar novos projetos

```javascript
// Via JavaScript/TypeScript
import { supabase } from '@/lib/supabase';

const { data, error } = await supabase
  .from('projects')
  .insert([
    {
      name: 'Novo Projeto',
      description: 'Descrição detalhada do projeto...',
      image_url: 'https://exemplo.com/imagem.jpg'
    }
  ]);
```

### Customizar extração de tecnologias

Edite a função `extractTechnologies` em `src/services/projects.ts` para melhorar a detecção de tecnologias baseada na descrição.

### Adicionar mais campos

Para adicionar campos como `link` ou `technologies`:

1. Adicione no schema SQL
2. Atualize o tipo `Project` em `src/types/project.ts`
3. Modifique `getProjects()` em `src/services/projects.ts`

## Comandos

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Troubleshooting

1. **Erro de conexão**: Verifique as variáveis de ambiente
2. **Tabela não existe**: Execute o script SQL no Supabase
3. **Políticas RLS**: Certifique-se que as políticas permitem leitura pública
4. **Imagens não carregam**: Use URLs válidas e acessíveis publicamente