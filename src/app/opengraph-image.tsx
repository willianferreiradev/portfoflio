import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Willian Ferreira - Creative Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B121A',
          position: 'relative',
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'linear-gradient(135deg, #0B121A 0%, #1a2332 50%, #0B121A 100%)',
          }}
        />

        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
            borderRadius: '50%',
            opacity: 0.1,
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '15%',
            width: '150px',
            height: '150px',
            background: 'linear-gradient(135deg, #45B7D1 0%, #96CEB4 100%)',
            borderRadius: '50%',
            opacity: 0.1,
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            Willian Ferreira
          </h1>

          <p
            style={{
              fontSize: '32px',
              color: '#94A3B8',
              marginBottom: '30px',
              fontWeight: '500',
            }}
          >
            Creative Developer
          </p>

          <p
            style={{
              fontSize: '24px',
              color: '#64748B',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Especializado em React, Next.js e TypeScript
          </p>

          {/* Tech badges */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '40px',
            }}
          >
            {['React', 'Next.js', 'TypeScript', 'Node.js'].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '8px 16px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                  color: '#FF6B6B',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
