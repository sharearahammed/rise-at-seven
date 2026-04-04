import React from 'react';

const CLIENTS = [
  'Capital One', 'Red Bull', 'JD Sports', 'Kroger', 'HubSpot',
  'Emirates', 'SIXT', 'Dojo', 'Magnet Trade', 'Noomz',
  'Capital One', 'Red Bull', 'JD Sports', 'Kroger', 'HubSpot',
  'Emirates', 'SIXT', 'Dojo', 'Magnet Trade', 'Noomz',
];

export default function ClientStrip() {
  return (
    <div style={{ background: '#f0efeb', padding: '28px 0', overflow: 'hidden' }}>
      <p style={{
        padding: '0 40px 14px',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'rgba(0,0,0,0.4)',
      }}>
        The agency behind …
      </p>
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{
          display: 'inline-flex',
          gap: '60px',
          animation: 'ticker 22s linear infinite',
        }}>
          {CLIENTS.map((name, i) => (
            <span key={i} style={{
              fontSize: '18px',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0a0a0a',
              opacity: 0.7,
              whiteSpace: 'nowrap',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
            }}>
              {name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
