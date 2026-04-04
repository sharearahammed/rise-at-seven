import React from 'react';

export default function PioneersSection() {
  return (
    <section style={{
      background: '#f0efeb',
      padding: '80px 40px 120px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <p style={{
        fontSize: '13px',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'rgba(0,0,0,0.4)',
        marginBottom: '44px',
      }}>
        Legacy In The Making
      </p>

      {/* Card with shadow */}
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {/* Mint shadow card behind */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '28px',
          background: '#a8f0d8',
          transform: 'rotate(2.5deg) translate(6px, 8px)',
          zIndex: 0,
        }} />
        {/* Main dark card */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          background: '#0a0a0a',
          color: '#ffffff',
          borderRadius: '28px',
          padding: '48px 48px 52px',
          maxWidth: '560px',
          width: '100%',
          transform: 'rotate(-2.5deg)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.18)',
        }}>
          {/* Image */}
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '16px',
            overflow: 'hidden',
            margin: '0 auto 24px',
          }}>
            <svg viewBox="0 0 120 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="120" fill="#2a2a2a" />
              {/* Building */}
              <rect x="15" y="30" width="90" height="60" rx="4" fill="#3a3a3a" />
              <text x="60" y="66" fontSize="10" fontWeight="900" fill="white" textAnchor="middle" fontFamily="sans-serif">Google</text>
              <rect x="15" y="88" width="90" height="32" fill="#222" />
              {/* Person */}
              <rect x="46" y="68" width="28" height="52" rx="4" fill="#1a1a1a" />
              <circle cx="60" cy="58" r="12" fill="#555" />
              {/* Sign */}
              <rect x="42" y="76" width="36" height="22" rx="3" fill="#8b7355" />
              <text x="60" y="91" fontSize="5" fill="white" textAnchor="middle" fontFamily="sans-serif">Don't change</text>
              <text x="60" y="97" fontSize="5" fill="white" textAnchor="middle" fontFamily="sans-serif">the facts!</text>
            </svg>
          </div>

          <h2 style={{
            fontSize: '52px',
            fontWeight: 900,
            letterSpacing: '-0.04em',
            marginBottom: '18px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}>
            Pioneers
          </h2>
          <p style={{
            fontSize: '14px',
            lineHeight: 1.65,
            opacity: 0.82,
            marginBottom: '14px',
          }}>
            We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.
          </p>
          <p style={{ fontSize: '14px', lineHeight: 1.65, opacity: 0.82 }}>
            We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          section > div > div:last-child {
            padding: 32px 24px 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
