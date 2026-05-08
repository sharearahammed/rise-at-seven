import React from 'react';

export default function ReadySection() {
  return (
    <section style={{
      background: '#f0efeb',
      padding: '60px 0 100px',
      overflow: 'hidden',
    }}>
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <span style={{
          display: 'inline-block',
          fontSize: 'clamp(80px, 14vw, 200px)',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          color: '#0a0a0a',
          animation: 'readyMarquee 12s linear infinite',
          paddingRight: '80px',
          fontFamily: 'inherit',
        }}>
          Ready to Rise&nbsp;&nbsp;&nbsp;Ready to Rise&nbsp;&nbsp;&nbsp;
        </span>
      </div>
      <style>{`
        @keyframes readyMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
