import React from 'react';

export default function AboutSection() {
  return (
    <section style={{
      background: '#f0efeb',
      padding: '80px 40px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'center',
    }} className="about-section">
      {/* Left */}
      <div>
        <p style={{
          fontSize: 'clamp(15px, 1.6vw, 20px)',
          fontWeight: 500,
          lineHeight: 1.55,
          color: 'rgba(0,0,0,0.8)',
          maxWidth: '420px',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}>
          A global team of search-first content marketers engineering semantic relevancy &amp; category signals for both the internet and people
        </p>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '20px' }}>
        <h2 style={{
          fontSize: 'clamp(40px, 6vw, 88px)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          textAlign: 'right',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}>
          Driving Demand &amp;{' '}
          <span style={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            Discovery
            <span style={{
              display: 'inline-block',
              width: 'clamp(44px, 5vw, 72px)',
              height: 'clamp(44px, 5vw, 72px)',
              borderRadius: '12px',
              overflow: 'hidden',
              verticalAlign: 'middle',
              marginLeft: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              flexShrink: 0,
            }}>
              <svg viewBox="0 0 72 72" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect width="72" height="72" fill="#4a4a4a" />
                <rect x="0" y="36" width="72" height="36" fill="#3a3a3a" />
                <text x="36" y="28" fontSize="9" fontWeight="900" fill="white" textAnchor="middle" fontFamily="sans-serif">Google</text>
                <rect x="8" y="32" width="56" height="2" fill="rgba(255,255,255,0.4)" rx="1" />
                <rect x="24" y="48" width="24" height="16" rx="4" fill="#1a1a1a" />
                <circle cx="36" cy="44" r="8" fill="#666" />
              </svg>
            </span>
          </span>
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['Our Story ↗', 'Our Services ↗'].map((label) => (
            <a
              key={label}
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '10px 20px',
                border: '1.5px solid #0a0a0a',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                color: '#0a0a0a',
                background: 'transparent',
                transition: 'background 0.2s, color 0.2s',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0a0a0a'; }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .about-section {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
          .about-section {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 60px 24px !important;
          }
          .about-section > div:last-child {
            align-items: flex-start !important;
          }
          .about-section h2 {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
}
