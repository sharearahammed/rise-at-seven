import React, { useState } from 'react';

const POSTS = [
  {
    tag: 'News',
    author: 'Carrie Rose',
    readTime: '2 mins',
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    bg: 'linear-gradient(135deg, #8b6b4a 0%, #5a3a1a 100%)',
    svgContent: () => (
      <svg viewBox="0 0 400 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#7a5a38" />
        {/* Brick wall */}
        {[0,1,2,3,4,5].map(row => (
          [0,1,2,3,4].map(col => (
            <rect key={`${row}-${col}`}
              x={col * 82 + (row % 2 === 0 ? 0 : 41) - 10}
              y={row * 42 + 20}
              width="78" height="36"
              rx="2"
              fill={`rgba(120,80,40,${0.3 + (row + col) * 0.02})`}
              stroke="rgba(80,50,20,0.4)"
              strokeWidth="1"
            />
          ))
        ))}
        {/* Couch */}
        <rect x="40" y="200" width="320" height="80" rx="20" fill="#3a2210" opacity="0.9" />
        <rect x="40" y="185" width="320" height="30" rx="10" fill="#4a2e18" />
        {/* 3 people */}
        {[100, 200, 300].map((cx, i) => (
          <g key={i}>
            <circle cx={cx} cy={170} r={26} fill={['#c49060','#e0c090','#a07040'][i]} />
            <rect x={cx-28} y={193} width={56} height={87}
              fill={['#1a1a1a','#f0f0f0','#1a1a1a'][i]} rx="6" />
          </g>
        ))}
      </svg>
    ),
  },
  {
    tag: 'Food/Hospitality/Drink',
    author: 'Ray Saddiq',
    readTime: '2 mins',
    title: 'Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth for them',
    bg: 'linear-gradient(135deg, #f08060 0%, #c04020 100%)',
    svgContent: () => (
      <svg viewBox="0 0 400 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#e07050" />
        {/* Background */}
        <ellipse cx="200" cy="150" rx="200" ry="200" fill="#f09070" opacity="0.5" />
        {/* Person */}
        <circle cx="200" cy="110" r="55" fill="#d4a080" />
        <circle cx="200" cy="92" r="34" fill="#c49060" />
        {/* Hair - curly */}
        {[-20,-10,0,10,20].map((dx, i) => (
          <circle key={i} cx={200+dx} cy={60} r="12" fill="#c47830" opacity="0.8" />
        ))}
        {/* Body */}
        <rect x="155" y="162" width="90" height="120" rx="10" fill="#6090c0" />
        {/* Chocolate bar */}
        <rect x="175" y="95" width="28" height="40" rx="4" fill="#4a2010"
          transform="rotate(-20,189,115)" />
        <rect x="178" y="98" width="22" height="8" rx="2" fill="#5a3020"
          transform="rotate(-20,189,115)" />
      </svg>
    ),
  },
  {
    tag: 'Food/Hospitality/Drink',
    author: 'Carrie Rose',
    readTime: '2 mins',
    title: 'Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz',
    bg: 'linear-gradient(135deg, #e03050 0%, #a01030 100%)',
    svgContent: () => (
      <svg viewBox="0 0 400 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#c02840" />
        {/* Jersey person */}
        <rect x="20" y="40" width="180" height="250" rx="10" fill="#cc2244" opacity="0.8" />
        <circle cx="110" cy="90" r="40" fill="#d4a080" />
        <rect x="60" y="128" width="100" height="160" rx="8" fill="#cc0022" />
        {/* New Balance logo area */}
        <text x="110" y="185" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.7)" textAnchor="middle" fontFamily="sans-serif">NEW BALANCE</text>
        {/* Candy bag */}
        <rect x="220" y="60" width="160" height="220" rx="18" fill="#f0d000" />
        <text x="300" y="140" fontSize="26" fontWeight="900" fill="#c02840" textAnchor="middle" fontFamily="sans-serif">Noomz</text>
        <text x="300" y="165" fontSize="11" fontWeight="700" fill="#c02840" textAnchor="middle" fontFamily="sans-serif">EXTREME CANDY</text>
        <rect x="240" y="178" width="120" height="16" rx="8" fill="#e0b000" />
        <text x="300" y="191" fontSize="9" fontWeight="600" fill="#a07000" textAnchor="middle" fontFamily="sans-serif">Lemon Bites</text>
        {/* Search pill */}
        <rect x="80" y="224" width="180" height="28" rx="14" fill="rgba(255,255,255,0.92)" />
        <text x="170" y="242" fontSize="10" fontWeight="600" fill="#333" textAnchor="middle" fontFamily="sans-serif">🔍 Freeze Dried Sweets ↗</text>
      </svg>
    ),
  },
];

export default function BlogSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section style={{ background: '#f0efeb', padding: '80px 40px' }} className="blog-section">
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '40px',
        paddingBottom: '16px',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
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
          What's
          <span style={{
            display: 'inline-block',
            width: 'clamp(44px,5vw,56px)',
            height: 'clamp(44px,5vw,56px)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}>
            <svg viewBox="0 0 56 56" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="56" fill="#111" />
              <polygon points="10,46 28,10 46,46" fill="#444" />
              <circle cx="28" cy="38" r="3" fill="#a8f0d8" />
              <rect x="25" y="22" width="6" height="10" rx="2" fill="#a8f0d8" />
            </svg>
          </span>
          New
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
          Explore More Thoughts ↗
        </a>
      </div>

      {/* Blog grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
      }} className="blog-grid">
        {POSTS.map((post, i) => {
          const SvgContent = post.svgContent;
          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ cursor: 'pointer' }}
            >
              {/* Image */}
              <div style={{
                aspectRatio: '4/3',
                borderRadius: '18px',
                overflow: 'hidden',
                marginBottom: '14px',
                position: 'relative',
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  transform: hoveredCard === i ? 'scale(1.04)' : 'scale(1)',
                  transition: 'transform 0.4s ease',
                  background: post.bg,
                }}>
                  <SvgContent />
                </div>
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(255,255,255,0.92)',
                  borderRadius: '100px',
                  padding: '4px 12px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#0a0a0a',
                }}>
                  {post.tag}
                </div>
              </div>

              {/* Meta */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '12px',
                color: 'rgba(0,0,0,0.45)',
                fontWeight: 500,
                marginBottom: '8px',
              }}>
                <span>👤 {post.author}</span>
                <span>⏱ {post.readTime}</span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '17px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}>
                {post.title}
              </h3>
            </div>
          );
        })}
      </div>

      <style>{`
        .blog-section {
          padding: 80px 40px;
        }
        .blog-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 900px) {
          .blog-section {
            padding: 60px 24px !important;
          }
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
