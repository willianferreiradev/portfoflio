import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';

const syne = Syne({ subsets: ['latin'], variable: '--font-display' });

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: {
    default: 'Willian Ferreira - Creative Developer & Full Stack Engineer',
    template: '%s | Willian Ferreira',
  },
  description:
    'Creative Developer especializado em React, Next.js e TypeScript. Transformo ideias em experiências digitais únicas com foco em design inovador e desenvolvimento full stack.',
  keywords: [
    'Willian Ferreira',
    'Creative Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'Web Developer',
    'UI/UX Developer',
    'JavaScript Developer',
    'Node.js Developer',
    'Tailwind CSS',
    'Portfolio',
    'Desenvolvedor React',
    'Desenvolvedor Full Stack',
    'Desenvolvedor Frontend',
    'Desenvolvedor Web',
  ],
  authors: [{ name: 'Willian Ferreira', url: 'https://willianferreira.dev' }],
  creator: 'Willian Ferreira',
  publisher: 'Willian Ferreira',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://willianferreira.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      'en-US': '/en',
      es: '/es',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://willianferreira.dev',
    title: 'Willian Ferreira - Creative Developer & Full Stack Engineer',
    description:
      'Creative Developer especializado em React, Next.js e TypeScript. Transformo ideias em experiências digitais únicas com foco em design inovador e desenvolvimento full stack.',
    siteName: 'Willian Ferreira Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Willian Ferreira - Creative Developer Portfolio',
      },
      {
        url: '/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Willian Ferreira - Creative Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Willian Ferreira - Creative Developer & Full Stack Engineer',
    description:
      'Creative Developer especializado em React, Next.js e TypeScript. Transformo ideias em experiências digitais únicas.',
    creator: '@willianferreiradev',
    site: '@willianferreiradev',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#FF6B6B' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#0B121A',
    'theme-color': '#0B121A',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Willian Ferreira',
              alternateName: 'Willian Ferreira Developer',
              description:
                'Creative Developer especializado em React, Next.js e TypeScript',
              url: 'https://willianferreira.dev',
              image: 'https://willianferreira.dev/og-image.jpg',
              sameAs: [
                'https://github.com/willianferreiradev',
                'https://linkedin.com/in/willianferreiradev',
              ],
              jobTitle: 'Creative Developer & Full Stack Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelancer',
              },
              knowsAbout: [
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'Full Stack Development',
                'Frontend Development',
                'Backend Development',
                'Web Development',
                'UI/UX Development',
              ],
              email: 'contato@willianferreira.dev',
              telephone: '+5551980615512',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'BR',
              },
            }),
          }}
        />
      </head>
      <body className={`${syne.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
