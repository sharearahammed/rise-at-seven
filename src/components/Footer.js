import React, { useState } from 'react';

const NAV_COL1 = ['Services', 'Work', 'About', 'Culture', 'Meet The Risers'];
const NAV_COL2 = ['Testimonials', 'Blog', 'Webinars', 'Careers'];
const NAV_COL3 = ['Sheffield', 'Manchester', 'London', 'New York', 'Contact'];
const SOCIALS = ['f', '𝕏', 'in', '▶', '♪', '📷'];

function FooterLink({ children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li style={{ marginBottom: '10px' }}>
      <a
        href="#"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontSize: '14px',
          fontWeight: 500,
          color: hovered ? '#ffffff' : 'rgba(255,255,255,0.65)',
          textDecoration: 'none',
          transition: 'color 0.2s',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}
      >
        {children}
      </a>
    </li>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer style={{ background: '#0a0a0a', color: '#ffffff', padding: '60px 40px 0' }} className="footer">
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: '40px',
        paddingBottom: '60px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }} className="footer-top">
        {/* Newsletter */}
        <div>
          <h4 style={{
            fontSize: '16px',
            fontWeight: 700,
            marginBottom: '16px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}>
            Stay updated with Rise news
          </h4>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '100px',
            overflow: 'hidden',
            padding: '4px 4px 4px 16px',
          }}>
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: '#ffffff',
                fontSize: '14px',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                flex: 1,
                minWidth: 0,
              }}
            />
            <button style={{
              width: '36px',
              height: '36px',
              background: '#a8f0d8',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0a0a0a',
              fontSize: '16px',
              transition: 'transform 0.2s',
              flexShrink: 0,
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              ↗
            </button>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '18px', flexWrap: 'wrap' }}>
            {SOCIALS.map((icon) => (
              <a key={icon} href="#" style={{
                width: '32px',
                height: '32px',
                border: '1.5px solid rgba(255,255,255,0.25)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 700,
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {[NAV_COL1, NAV_COL2, NAV_COL3].map((col, i) => (
          <nav key={i}>
            <ul style={{ listStyle: 'none' }}>
              {col.map(item => <FooterLink key={item}>{item}</FooterLink>)}
            </ul>
          </nav>
        ))}
      </div>

      {/* Brand */}
      <div style={{ padding: '30px 0', overflow: 'hidden' }}>
        <div style={{
          fontSize: 'clamp(60px, 10vw, 150px)',
          fontWeight: 900,
          letterSpacing: '-0.05em',
          color: '#ffffff',
          whiteSpace: 'nowrap',
          display: 'inline-flex',
          alignItems: 'flex-start',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          lineHeight: 1,
        }}>
          Rise at Seven
          <span style={{
            fontSize: '0.22em',
            border: '2px solid #ffffff',
            borderRadius: '50%',
            width: '0.85em',
            height: '0.85em',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '4px',
            marginTop: '0.12em',
          }}>
            ®
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '16px 0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '11px',
        color: 'rgba(255,255,255,0.3)',
        flexWrap: 'wrap',
        gap: '8px',
      }}>
        <span>
          © 2025 Rise at Seven Ltd. All rights reserved &nbsp;•&nbsp;
          Company Number 11955187 &nbsp;•&nbsp;
          VAT Registered GB 322402945 &nbsp;•&nbsp;
          <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Privacy Policy</a>
          &nbsp;•&nbsp;
          <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Terms &amp; conditions</a>
        </span>
        <span>Website MadeByShape</span>
      </div>

      <style>{`
        .footer-top {
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
        }
        @media (max-width: 900px) {
          .footer {
            padding: 48px 24px 0 !important;
          }
          .footer-top {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-top {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
