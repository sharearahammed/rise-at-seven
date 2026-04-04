import React, { useState } from 'react';

const SERVICES = [
  'Digital PR',
  'Organic Social & Content',
  'Search & Growth Strategy',
  'Content Experience',
  'Data & Insights',
  'Onsite SEO',
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ background: '#f0efeb', padding: '80px 40px' }} className="services-section">
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '40px',
        paddingBottom: '20px',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        <h2 style={{
          fontSize: 'clamp(34px, 5vw, 68px)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}>
          Our
          <span style={{
            display: 'inline-block',
            width: 'clamp(44px,5vw,56px)',
            height: 'clamp(44px,5vw,56px)',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          }}>
            <svg viewBox="0 0 56 56" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="56" fill="#555" />
              <circle cx="20" cy="22" r="8" fill="#aaa" />
              <circle cx="36" cy="22" r="8" fill="#888" />
              <rect x="10" y="34" width="20" height="14" rx="4" fill="#333" />
              <rect x="26" y="34" width="20" height="14" rx="4" fill="#444" />
            </svg>
          </span>
          Services
        </h2>
        <a
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
            transition: 'background 0.2s, color 0.2s',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0a0a0a'; }}
        >
          View All Services ↗
        </a>
      </div>

      {/* Services grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0',
      }} className="services-grid">
        {SERVICES.map((service, i) => {
          const isOdd = i % 2 === 0;
          return (
            <div
              key={service}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: '28px 0',
                paddingRight: isOdd ? '40px' : '0',
                paddingLeft: isOdd ? '0' : '40px',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                borderRight: isOdd ? '1px solid rgba(0,0,0,0.1)' : 'none',
                fontSize: 'clamp(20px, 2.8vw, 36px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                cursor: 'pointer',
                opacity: hovered !== null && hovered !== i ? 0.4 : 1,
                transition: 'opacity 0.25s',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              {service}
            </div>
          );
        })}
      </div>

      {/* Marquee */}
      <div style={{ overflow: 'hidden', marginTop: '60px', whiteSpace: 'nowrap' }}>
        <span style={{
          display: 'inline-block',
          fontSize: 'clamp(60px, 10vw, 140px)',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          color: '#0a0a0a',
          animation: 'svcMarquee 18s linear infinite',
          paddingRight: '80px',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          verticalAlign: 'middle',
        }}>
          …rithms
          <span style={{
            display: 'inline-block',
            width: 'clamp(60px, 8vw, 110px)',
            height: 'clamp(60px, 8vw, 110px)',
            borderRadius: '14px',
            overflow: 'hidden',
            verticalAlign: 'middle',
            margin: '0 12px',
          }}>
            <svg viewBox="0 0 110 110" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="110" height="110" fill="#222" />
              <rect x="10" y="10" width="90" height="55" rx="4" fill="#333" />
              <text x="55" y="44" fontSize="10" fontWeight="700" fill="white" textAnchor="middle" fontFamily="sans-serif">CONFERENCE</text>
              <rect x="30" y="70" width="50" height="30" rx="4" fill="#444" />
              <circle cx="55" cy="85" r="6" fill="#666" />
            </svg>
          </span>
          Chasing Consumers &nbsp;&nbsp;&nbsp; …rithms
          <span style={{
            display: 'inline-block',
            width: 'clamp(60px, 8vw, 110px)',
            height: 'clamp(60px, 8vw, 110px)',
            borderRadius: '14px',
            overflow: 'hidden',
            verticalAlign: 'middle',
            margin: '0 12px',
          }}>
            <svg viewBox="0 0 110 110" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="110" height="110" fill="#222" />
              <rect x="10" y="10" width="90" height="55" rx="4" fill="#333" />
              <text x="55" y="44" fontSize="10" fontWeight="700" fill="white" textAnchor="middle" fontFamily="sans-serif">CONFERENCE</text>
              <rect x="30" y="70" width="50" height="30" rx="4" fill="#444" />
              <circle cx="55" cy="85" r="6" fill="#666" />
            </svg>
          </span>
          Chasing Consumers
        </span>
      </div>

      <style>{`
        @keyframes svcMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .services-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
          .services-section {
            padding: 60px 24px !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-grid > div {
            padding-right: 0 !important;
            padding-left: 0 !important;
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
}
