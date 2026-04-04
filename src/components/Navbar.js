import React, { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: 'Services',      suffix: ' +', hasChevron: true  },
  { label: 'International', suffix: ' +', hasChevron: true  },
  { label: 'About',         suffix: ' +', hasChevron: true  },
  { label: 'Work',          badge: '25',  hasChevron: false },
  { label: 'Careers',                     hasChevron: false },
  { label: 'Blog',                        hasChevron: false },
  { label: 'Webinar',                     hasChevron: false },
];

const FONT = "'Plus Jakarta Sans', sans-serif";
const DARK = '#1a1a1a';
const WHITE = '#ffffff';
const NAV_H = 64;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop]       = useState(true);
  const [visible, setVisible]   = useState(true);
  const [barH, setBarH]         = useState(0);
  const lastScrollY             = useRef(0);

  // Measure AnnouncementBar height (id="announcement-bar")
  useEffect(() => {
    const measure = () => {
      const bar = document.getElementById('announcement-bar');
      setBarH(bar ? bar.offsetHeight : 0);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const prev    = lastScrollY.current;

      // When user scrolls past the AnnouncementBar, it's "not at top"
      if (current <= barH + 10) {
        setAtTop(true);
        setVisible(true);
        lastScrollY.current = current;
        return;
      }

      setAtTop(false);

      // Scrolling DOWN → hide navbar
      if (current > prev + 4) {
        setVisible(false);
      }
      // Scrolling UP → show navbar with watercolor bg, fixed at top:0
      else if (current < prev - 4) {
        setVisible(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [barH]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // When at top → navbar sits just below AnnouncementBar
  // When scrolled → navbar is fixed at top:0 (AnnouncementBar is off screen)
  const navTop = atTop ? barH : 40;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .ras-nav {
          position: fixed;
          left: 0;
          right: 0;
          z-index: 100;
          height: ${NAV_H}px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          font-family: ${FONT};
          transition:
            top 0.35s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
            background 0.4s ease,
            box-shadow 0.4s ease;
        }

        .ras-nav.at-top {
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: none;
          border-bottom: none;
        }

        .ras-nav.scrolled-up {
          background: rgba(232, 220, 198, 0.65);
          backdrop-filter: blur(18px) saturate(1.6);
          -webkit-backdrop-filter: blur(18px) saturate(1.6);
          box-shadow: 0 2px 28px rgba(120, 90, 60, 0.12);
          border-bottom: 1px solid rgba(200, 175, 140, 0.30);
        }

        .ras-nav.hidden-nav  { transform: translateY(-100%); }
        .ras-nav.visible-nav { transform: translateY(0); }

        .ras-logo {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: ${DARK};
          text-decoration: none;
          font-family: ${FONT};
        }

        .ras-desktop-links {
          display: flex;
          align-items: center;
          gap: 28px;
          list-style: none;
        }

        .ras-desktop-links a {
          font-size: 14px;
          font-weight: 500;
          color: ${DARK};
          text-decoration: none;
          opacity: 0.85;
          font-family: ${FONT};
          transition: opacity 0.2s;
        }

        .ras-desktop-links a:hover { opacity: 1; }

        .ras-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          background: #a8f0d8;
          border-radius: 50%;
          font-size: 9px;
          font-weight: 700;
          margin-left: 4px;
          vertical-align: middle;
          color: ${DARK};
        }

        .ras-cta-desktop {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 22px;
          background: ${DARK};
          color: ${WHITE};
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          font-family: ${FONT};
          transition: background 0.2s;
        }

        .ras-cta-desktop:hover { background: #000; }

        .ras-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .ras-hamburger span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: ${DARK};
          border-radius: 2px;
        }

        /* Mobile Overlay */
        .ras-mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: ${DARK};
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ras-mobile-overlay.open { transform: translateX(0); }

        .ras-mobile-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          height: ${NAV_H}px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          flex-shrink: 0;
        }

        .ras-mobile-logo {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: ${WHITE};
          text-decoration: none;
          font-family: ${FONT};
        }

        .ras-close-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          cursor: pointer;
        }

        .ras-mobile-links {
          flex: 1;
          overflow-y: auto;
          padding: 4px 20px 0;
        }

        .ras-mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          color: ${WHITE};
          text-decoration: none;
          font-family: ${FONT};
        }

        .ras-mobile-link span.label {
          font-size: 32px;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .ras-chevron-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ras-mobile-cta-wrap { padding: 20px; flex-shrink: 0; }

        .ras-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 16px;
          background: ${WHITE};
          color: ${DARK};
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          font-family: ${FONT};
          transition: background 0.2s;
        }

        .ras-mobile-cta:hover { background: #f0f0f0; }

        @media (max-width: 1024px) {
          .ras-desktop-links { display: none !important; }
          .ras-cta-desktop    { display: none !important; }
          .ras-hamburger      { display: flex !important; }
          .ras-nav            { padding: 0 16px; }
        }
      `}</style>

      <nav
        className={[
          'ras-nav',
          atTop    ? 'at-top'      : 'scrolled-up',
          visible  ? 'visible-nav' : 'hidden-nav',
        ].join(' ')}
        style={{ top: `${navTop}px` }}
      >
        <a href="#" className="ras-logo">Rise at Seven↗</a>

        <ul className="ras-desktop-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href="#">
                {link.label}{link.suffix || ''}
                {link.badge && <span className="ras-badge">{link.badge}</span>}
              </a>
            </li>
          ))}
        </ul>

        <a href="#" className="ras-cta-desktop">Get In Touch ↗</a>

        <button className="ras-hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div className={`ras-mobile-overlay${menuOpen ? ' open' : ''}`}>
        <div className="ras-mobile-topbar">
          <a href="#" className="ras-mobile-logo">Rise at Seven↗</a>
          <button className="ras-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="2" y1="2" x2="18" y2="18" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="18" y1="2" x2="2" y2="18" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="ras-mobile-links">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href="#" className="ras-mobile-link" onClick={() => setMenuOpen(false)}>
              <span className="label">{link.label}</span>
              {link.hasChevron && (
                <span className="ras-chevron-circle">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5l4 4 4-4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              )}
            </a>
          ))}
        </div>

        <div className="ras-mobile-cta-wrap">
          <a href="#" className="ras-mobile-cta">Get In Touch ↗</a>
        </div>
      </div>
    </>
  );
}