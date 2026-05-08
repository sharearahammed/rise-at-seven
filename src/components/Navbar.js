import React, { useState, useEffect, useRef } from "react";
import navIcon from "../assets/svg/navIcon.svg";
import navIcon2 from "../assets/svg/navIcon2.svg";
import servicesImage from "../assets/jpg/services.JPG";
import b2bImage from "../assets/jpg/content-experience.jpg";
import internationalImage from "../assets/jpg/Award-winning.JPG";
import aboutImage from "../assets/jpg/pioneers.jpg";
import blogImage from "../assets/jpg/blog.jpg";

const NAV_LINKS = [
  {
    label: "Services",
    hasChevron: true,
    children: [
      "Search & Growth Strategy",
      "Onsite SEO",
      "Content Experience",
      "B2B Marketing",
      "Digital PR",
      "Social Media & Campaigns",
      "Data & Insights",
      "Social SEO/Search",
    ],
  },
  {
    label: "Industries",
    hasChevron: true,
    children: ["B2B Marketing"],
  },
  {
    label: "International",
    hasChevron: true,
    children: [
      "US Digital PR",
      "Spain Digital PR",
      "Germany Digital PR",
      "Netherlands Digital PR",
    ],
  },
  {
    label: "About",
    hasChevron: true,
    children: ["About Us", "Meet The Risers", "Culture", "Testimonials"],
  },
  { label: "Work", badge: "25", hasChevron: false },
  { label: "Careers", hasChevron: false },
  {
    label: "Blog & Resources",
    hasChevron: true,
    children: ["Blog", "Category Leaderboard", "Multi-Channel Search Report"],
  },
  { label: "Webinar", hasChevron: false },
];

const SERVICES_LINKS = [
  { label: "Search & Growth Strategy", image: servicesImage },
  { label: "Onsite SEO", image: b2bImage },
  { label: "Content Experience", image: blogImage },
  { label: "B2B Marketing", image: b2bImage },
  { label: "Digital PR", image: internationalImage },
  { label: "Social Media & Campaigns", image: aboutImage },
  { label: "Data & Insights", image: servicesImage },
  { label: "Social SEO/Search", image: blogImage },
];

const MEGA_MENUS = {
  Services: {
    type: "services",
    image: servicesImage,
    size: "services",
  },
  Industries: {
    type: "simple",
    links: [{ label: "B2B Marketing", image: b2bImage }],
    image: b2bImage,
    size: "narrow",
  },
  International: {
    type: "simple",
    links: [
      { label: "US Digital PR", image: internationalImage },
      { label: "Spain Digital PR", image: servicesImage },
      { label: "Germany Digital PR", image: aboutImage },
      { label: "Netherlands Digital PR", image: blogImage },
    ],
    image: internationalImage,
    size: "standard",
  },
  About: {
    type: "simple",
    links: [
      { label: "About Us", image: aboutImage },
      { label: "Meet The Risers", image: servicesImage },
      { label: "Culture", image: b2bImage },
      { label: "Testimonials", image: internationalImage },
    ],
    image: aboutImage,
    size: "standard",
  },
  "Blog & Resources": {
    type: "simple",
    links: [
      { label: "Blog", image: blogImage },
      { label: "Category Leaderboard", image: servicesImage },
      { label: "Multi-Channel Search Report", image: b2bImage },
    ],
    image: blogImage,
    size: "wide",
  },
};

const FONT = "var(--font-sans-primary)";
const DARK = "#1a1a1a";
const WHITE = "#ffffff";
const NAV_H = 64;

function MegaImage({ src, imageKey }) {
  return (
    <img
      key={imageKey || src}
      className="ras-mega-image"
      src={src}
      alt=""
      aria-hidden="true"
    />
  );
}

function ServicesMegaMenu({ image }) {
  const [activeService, setActiveService] = useState(SERVICES_LINKS[0]);
  const [visibleService, setVisibleService] = useState(SERVICES_LINKS[0]);
  const activeImage = visibleService?.image || image;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleService(activeService);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeService]);

  return (
    <>
      <div className="ras-mega-services-copy">
        <p className="ras-mega-eyebrow">Core Services</p>
        <div className="ras-mega-two-col">
          {SERVICES_LINKS.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`ras-mega-link ras-service-link ${
                activeService?.label === item.label ? "active" : ""
              }`}
              onMouseEnter={() => setActiveService(item)}
              onFocus={() => setActiveService(item)}
            >
              <span className="ras-service-mask">
                <span className="ras-service-main">{item.label}</span>
                <span className="ras-service-hover">{item.label}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="ras-mega-media">
        <MegaImage src={activeImage} imageKey={visibleService?.label} />
        <a href="#" className="ras-mega-cta">
          View All Services ↗
        </a>
      </div>
    </>
  );
}

function SimpleMegaMenu({ links, image }) {
  const [activeLink, setActiveLink] = useState(links[0]);
  const [visibleLink, setVisibleLink] = useState(links[0]);
  const activeImage = visibleLink?.image || image;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleLink(activeLink);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeLink]);

  return (
    <>
      <div className="ras-mega-simple-links">
        {links.map((item) => (
          <a
            key={item.label}
            href="#"
            className="ras-mega-link ras-dropdown-link"
            onMouseEnter={() => setActiveLink(item)}
            onFocus={() => setActiveLink(item)}
          >
            <span className="ras-link-mask">
              <span className="ras-link-main">{item.label}</span>
              <span className="ras-link-hover">{item.label}</span>
            </span>
          </a>
        ))}
      </div>
      <MegaImage src={activeImage} imageKey={visibleLink?.label} />
    </>
  );
}

function DesktopMegaMenu({ activeLabel, onMouseEnter, onMouseLeave }) {
  const menu = activeLabel ? MEGA_MENUS[activeLabel] : null;

  return (
    <div
      className={`ras-mega-wrap ${menu ? "open" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {menu && (
        <div className={`ras-mega-card ${menu.size}`}>
          <div key={activeLabel} className="ras-mega-content">
            {menu.type === "services" ? (
              <ServicesMegaMenu image={menu.image} />
            ) : (
              <SimpleMegaMenu links={menu.links} image={menu.image} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [megaOpen, setMegaOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [visible, setVisible] = useState(true);
  const [barH, setBarH] = useState(0);
  // All dropdowns open by default — matches the image
  const [closedDropdowns, setClosedDropdowns] = useState([]);
  const lastScrollY = useRef(0);
  const megaTimer = useRef(null);

  useEffect(() => {
    const measure = () => {
      const bar = document.getElementById("announcement-bar");
      setBarH(bar ? bar.offsetHeight : 45);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const prev = lastScrollY.current;
      if (current <= barH + 10) {
        setAtTop(true);
        setVisible(true);
        lastScrollY.current = current;
        return;
      }
      setAtTop(false);
      if (current > prev + 4) setVisible(false);
      else if (current < prev - 4) setVisible(true);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [barH]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Reset to all-open when menu closes
  useEffect(() => {
    if (!menuOpen) setClosedDropdowns([]);
  }, [menuOpen]);

  const navTop = atTop ? barH : 0;
  const isOpen = (label) => closedDropdowns.includes(label);
  const toggleDropdown = (label) => {
    setClosedDropdowns((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label],
    );
  };
  const openMega = (label) => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    if (MEGA_MENUS[label]) {
      setActiveMega(label);
      requestAnimationFrame(() => setMegaOpen(true));
    } else {
      setMegaOpen(false);
    }
  };
  const closeMega = () => {
    setMegaOpen(false);
    megaTimer.current = setTimeout(() => setActiveMega(null), 180);
  };
  const keepMegaOpen = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
  };

  return (
    <>
      <style>{`
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .ras-nav {
    margin: 8px;
    margin-top: 16px;
    border-radius: 70px;
    position: fixed;
    left: 0; right: 0;
    z-index: 220;
    height: ${NAV_H}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 25px; 
    font-family: ${FONT};
    transition:
      top 0.35s cubic-bezier(0.4,0,0.2,1),
      transform 0.4s cubic-bezier(0.4,0,0.2,1),
      background 0.4s ease,
      box-shadow 0.4s ease;
  }
  .ras-nav.at-top { background: transparent; backdrop-filter: none; box-shadow: none; border-bottom: none; }
.ras-nav.scrolled-up {
  background: rgba(255, 255, 255, 0.60);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: none;
  border-bottom: none;
}
  .ras-nav.scrolled-up .git-btn {
  background: #1a1a1a;
  color: #ffffff;
 }
    .ras-nav.scrolled-up .git-btn-responsive {
  background: #1a1a1a;
  color: #ffffff;
 }  
  .ras-nav.scrolled-up .git-btn {
  background: #1a1a1a;
  color: #ffffff;
 }
    .ras-nav.scrolled-up .git-btn-responsive {
  background: #1a1a1a;
  color: #ffffff;
 }
  .ras-nav.hidden-nav { transform: translateY(-200%); }
  .ras-nav.visible-nav { transform: translateY(0); }
  .ras-nav.menu-open {
    opacity: 0;
    pointer-events: none;
  }

  .ras-desktop-links { display: flex; align-items: center; gap: 28px; list-style: none; }
  .ras-desktop-links > li > a {
    font-size: 16px; font-weight: 700; color: ${WHITE};
    text-decoration: none; opacity: 0.85;
    transition: opacity 0.2s; font-family: ${FONT};
    color: #1a1a1a;
  }
    .ras-nav.at-top .ras-desktop-links a {
  color: #ffffff;
}
.ras-nav.scrolled-up .ras-desktop-links a {
  color: #1a1a1a;
}
  .ras-desktop-links > li > a:hover,
  .ras-desktop-links > li > a.active { opacity: 1; }
  .ras-desktop-links > li > a.active {
    background: rgba(255, 255, 255, 0.78);
    border-radius: 999px;
    color: #1a1a1a !important;
    padding: 10px 14px;
    margin: -10px -14px;
  }

  .ras-badge {
    display: inline-flex; align-items: center; justify-content: center;
    width: 18px; height: 18px; background: #a8f0d8;
    border-radius: 50%; font-size: 9px; font-weight: 700;
    margin-left: 4px; color: ${DARK};z
  }

  .ras-cta-desktop {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 10px 22px; background: ${WHITE}; color: ${DARK};
    border-radius: 100px; font-size: 16px; font-weight: 600;
    text-decoration: none; transition: background 0.2s; font-family: ${FONT};
  }

  .ras-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; }

  .ras-mega-backdrop {
    position: fixed;
    inset: 0;
    z-index: 190;
    background: rgba(0, 0, 0, 0.38);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.28s ease;
  }
  .ras-mega-backdrop.open {
    opacity: 1;
    pointer-events: auto;
  }
  .ras-mega-wrap {
    position: fixed;
    top: ${navTop + NAV_H + 14}px;
    left: 50%;
    z-index: 215;
    opacity: 0;
    pointer-events: none;
    transform: translateX(-50%) translateY(-16px) scale(0.985);
    transform-origin: top center;
    transition:
      opacity 0.28s ease,
      transform 0.34s cubic-bezier(0.22, 1, 0.36, 1);
    width: min(948px, calc(100vw - 204px));
  }
  .ras-mega-wrap.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0) scale(1);
  }
  .ras-mega-content {
    display: contents;
  }
  .ras-mega-content > * {
    animation: ras-mega-content-in 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
  }
  @keyframes ras-mega-content-in {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.992);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  .ras-mega-card {
    background: #ffffff;
    border-radius: 22px;
    color: #050505;
    display: grid;
    gap: 28px;
    height: 288px;
    margin: 0 auto;
    padding: 12px;
    box-shadow: 0 18px 55px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    transition:
      width 0.42s cubic-bezier(0.22, 1, 0.36, 1),
      height 0.42s cubic-bezier(0.22, 1, 0.36, 1),
      padding 0.42s cubic-bezier(0.22, 1, 0.36, 1),
      grid-template-columns 0.42s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .ras-mega-card.services {
    width: min(948px, 100%);
    grid-template-columns: minmax(0, 1fr) 296px;
    padding-left: 48px;
  }
  .ras-mega-card.standard,
  .ras-mega-card.wide,
  .ras-mega-card.narrow {
    grid-template-columns: minmax(0, 1fr) 264px;
    align-items: center;
    padding-left: 46px;
  }
  .ras-mega-card.standard {
    width: min(665px, 100%);
  }
  .ras-mega-card.narrow {
    width: min(570px, 100%);
  }
  .ras-mega-card.wide {
    width: min(752px, 100%);
  }
  .ras-mega-services-copy {
    align-self: center;
  }
  .ras-mega-eyebrow {
    color: #5f666b;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  .ras-mega-two-col {
    column-count: 2;
    column-gap: 48px;
  }
  .ras-mega-link {
    color: #050505;
    display: block;
    font-family: ${FONT};
    font-size: 23px;
    font-weight: 800;
    letter-spacing: -0.05em;
    line-height: 1.28;
    text-decoration: none;
    white-space: nowrap;
  }
  .ras-mega-link:hover {
    color: #050505;
    opacity: 1;
  }
  .ras-service-link {
    color: #050505;
    overflow: visible;
    position: relative;
    transition: color 0.2s ease;
  }
  .ras-dropdown-link {
    color: #050505;
    overflow: visible;
  }
  .ras-service-mask {
    display: inline-block;
    overflow: hidden;
    position: relative;
    vertical-align: top;
  }
  .ras-link-mask {
    display: inline-block;
    overflow: hidden;
    position: relative;
    vertical-align: top;
  }
  .ras-service-main,
  .ras-service-hover,
  .ras-link-main,
  .ras-link-hover {
    color: #050505;
    display: block;
    transition:
      transform 0.34s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.2s ease;
  }
  .ras-service-hover,
  .ras-link-hover {
    left: 0;
    position: absolute;
    top: 0;
    transform: translateY(100%);
  }
  .ras-service-link::before {
    content: none;
  }
  .ras-service-link.active {
    color: #050505;
    opacity: 1;
  }
  .ras-service-link:hover .ras-service-main,
  .ras-service-link.active .ras-service-main {
    transform: translateY(-100%);
  }
  .ras-service-link:hover .ras-service-hover,
  .ras-service-link.active .ras-service-hover {
    transform: translateY(0);
  }
  .ras-dropdown-link:hover .ras-link-main {
    transform: translateY(-100%);
  }
  .ras-dropdown-link:hover .ras-link-hover {
    transform: translateY(0);
  }
  .ras-mega-media {
    position: relative;
  }
  .ras-mega-image {
    animation: ras-mega-image-in 0.24s ease-out both;
    display: block;
    width: 100%;
    height: 264px;
    border-radius: 14px;
    object-fit: cover;
    image-rendering: auto;
    transform: translateZ(0);
    backface-visibility: hidden;
  }
  @keyframes ras-mega-image-in {
    from {
      opacity: 0;
      transform: translate3d(0, 8px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .ras-mega-cta {
    align-items: center;
    background: #050505;
    border-radius: 999px;
    bottom: 8px;
    color: #ffffff;
    display: inline-flex;
    font-family: ${FONT};
    font-size: 16px;
    font-weight: 800;
    left: 8px;
    min-height: 42px;
    padding: 0 24px;
    position: absolute;
    text-decoration: none;
  }
  .ras-mega-simple-links {
    align-self: center;
  }

  /* ── Mobile accordion ── */
  .mob-header-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    color: #ffffff;
    text-align: left;
  }

  .mob-title {
    font-size: clamp(28px, 8vw, 48px);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.15;
    font-family: ${FONT};
    color: #ffffff;
  }

  .mob-chevron {
    width: 30px; height: 30px;
    border-radius: 50%;
    border: 1.5px solid rgba(255,255,255,0.55);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: border-color 0.2s ease;
  }
  .mob-header-btn:hover .mob-chevron { border-color: rgba(255,255,255,0.9); }

  .mob-chevron svg {
    transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
  }
  /* closed state → rotate arrow down */
  .mob-chevron.closed svg { transform: rotate(180deg); }

  .mob-children {
    overflow: hidden;
    transition: max-height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
    max-height: 0; opacity: 0;
  }
  .mob-children.open { max-height: 600px; opacity: 1; }

  .mob-child-link {
    display: block;
    padding: 3px 0;
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    font-family: ${FONT};
    font-size: clamp(14px, 4vw, 18px);
    font-weight: 500;
    line-height: 1.6;
    transition: color 0.15s ease;
  }
  .mob-child-link:hover { color: #ffffff; }

  .mob-plain-link {
    display: flex; align-items: center; justify-content: space-between;
    padding: 0; color: #ffffff; text-decoration: none; font-family: ${FONT};
  }

  @media (max-width: 1025px) {
    .ras-desktop-links { display: none !important; }
    .ras-mega-backdrop,
    .ras-mega-wrap { display: none !important; }
    .ras-cta-desktop { display: none !important; }
    .git-btn {display: none !important;}
    .ras-hamburger { display: flex !important; }
    .ras-nav { padding: 0px 25px; }
  }
  @media (max-width: 1023px) {
    .ras-nav { border-radius: 0px; margin: 0px; }
  }
  @media (max-width: 767px) {
    .git-btn-responsive {width: 100% !important; }
    .git-text {text-align: center; width: 100%; display: block;}
    .git-hover-text{text-align: center; display: block;}
  }

  .git-btn {
    display: inline-flex; align-items: center;
    position: relative; overflow: hidden;
    padding: 12px 24px; background: #ffffff; color: #1a1a1a;
    border-radius: 100px; font-size: 15px; font-weight: 600;
    text-decoration: none; font-family: ${FONT};
    width: fit-content; transition: border-radius 0.14s ease;
  }
  .git-btn-responsive {
    display: inline-flex; align-items: center;
    position: relative; overflow: hidden;
    padding: 12px 24px; background: #ffffff; color: #1a1a1a;
    border-radius: 100px; font-size: 15px; font-weight: 600;
    text-decoration: none; font-family: ${FONT};
    width: fit-content; transition: border-radius 0.14s ease;
  }
  .git-btn:hover { border-radius: 12px; }
  .git-btn-responsive:hover { border-radius: 12px; }
  .git-text {
    display: block; transform: translateY(0%); opacity: 1;
    transition: transform 0.2s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease;
  }
  .git-hover-text {
    display: block; position: absolute; left: 28px; right: 28px;
    text-align: center; transform: translateY(100%); opacity: 0; white-space: nowrap;
    transition: transform 0.2s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease;
  }
  .git-btn:hover .git-text { transform: translateY(-100%); opacity: 0; }
  .git-btn-responsive:hover .git-text { transform: translateY(-100%); opacity: 0; }
  .git-btn:hover .git-hover-text { transform: translateY(0%); opacity: 1; }
  .git-btn-responsive:hover .git-hover-text { transform: translateY(0%); opacity: 1; }
`}</style>

      <div
        className={`ras-mega-backdrop ${megaOpen ? "open" : ""}`}
        onMouseEnter={closeMega}
      />

      <nav
        className={[
          "ras-nav",
          menuOpen ? "menu-open" : "",
          atTop ? "at-top" : "scrolled-up",
          visible ? "visible-nav" : "hidden-nav",
        ].join(" ")}
        style={{ top: `${navTop}px` }}
      >
        <a href="#" className="ras-logo lg:w-40 md:w-40 sm:w-26 w-[120px]">
          <img
            src={atTop ? navIcon : navIcon2}
            alt="Rise at Seven"
            className="h-6 w-auto"
          />
        </a>

        <ul className="ras-desktop-links">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              onMouseEnter={() => openMega(link.label)}
              onMouseLeave={closeMega}
            >
              <a href="#" className={activeMega === link.label ? "active" : ""}>
                {link.label}
                {link.hasChevron ? " +" : ""}
                {link.badge && <span className="ras-badge">{link.badge}</span>}
              </a>
            </li>
          ))}
        </ul>

        <a href="#" className="git-btn">
          <span className="git-text">Get In Touch ↗</span>
          <span className="git-hover-text">Get In Touch ↗</span>
        </a>

        <button
          className="ras-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            position: "relative",
            width: "28px",
            height: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              top: menuOpen ? "50%" : "20%",
              width: "22px",
              height: "1.5px",
              background: atTop ? "white" : "#1a1a1a",
              borderRadius: "2px",
              transform: menuOpen ? "translateY(-50%) rotate(45deg)" : "none",
              transition:
                "top 0.3s ease, transform 0.3s ease, background 0.3s ease",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: 0,
              top: menuOpen ? "50%" : "75%",
              width: "22px",
              height: "1.5px",
              background: atTop ? "white" : "#1a1a1a", // ← এই change
              borderRadius: "2px",
              transform: menuOpen ? "translateY(-50%) rotate(-45deg)" : "none",
              transition:
                "top 0.3s ease, transform 0.3s ease, background 0.3s ease",
            }}
          />
        </button>
      </nav>

      <DesktopMegaMenu
        activeLabel={activeMega}
        isOpen={megaOpen}
        onMouseEnter={keepMegaOpen}
        onMouseLeave={closeMega}
      />

      {/* Blur backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 199,
          backdropFilter: menuOpen ? "blur(2px)" : "blur(0px)",
          WebkitBackdropFilter: menuOpen ? "blur(3px)" : "blur(0px)",
          background: menuOpen ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0)",
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "backdrop-filter 0.35s ease, background 0.35s ease",
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: menuOpen ? "auto" : "none",
          backdropFilter: menuOpen ? "blur(5px)" : "blur(0px)",
          WebkitBackdropFilter: menuOpen ? "blur(6px)" : "blur(0px)",
          background: menuOpen ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0)",
          transition: "backdrop-filter 0.4s ease, background 0.4s ease",
        }}
      >
        <div
          style={{
            width: "calc(100% - 18px)",
            height: "calc(100vh - 18px)",
            background: "rgba(20, 22, 30, 0.82)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "20px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            opacity: menuOpen ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          {/* Top bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
              height: "54px",
              flexShrink: 0,
            }}
          >
            <a href="#" className="ras-logo lg:w-40 md:w-40 sm:w-26 w-[120px]">
              <img src={navIcon} alt="Rise at Seven" className="h-6 w-auto" />
            </a>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                width: "32px",
                height: "32px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <line
                  x1="1"
                  y1="1"
                  x2="17"
                  y2="17"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <line
                  x1="17"
                  y1="1"
                  x2="1"
                  y2="17"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div
            style={{
              marginTop: "21px",
              flex: 1,
              overflowY: "auto",
              padding: "8px 20px 0",
            }}
          >
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      className="mob-header-btn"
                      onClick={() => toggleDropdown(link.label)}
                    >
                      <span className="mob-title">{link.label}</span>
                      <span
                        className={`mob-chevron ${isOpen(link.label) ? "" : "closed"}`}
                      >
                        {/* Up arrow = open (matches image) */}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M3 9l4-4 4 4"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`mob-children ${isOpen(link.label) ? "open" : ""}`}
                    >
                      <div style={{ paddingTop: "4px", paddingBottom: "8px" }}>
                        {link.children.map((child) => (
                          <a
                            key={child}
                            href="#"
                            className="mob-child-link"
                            onClick={() => setMenuOpen(false)}
                          >
                            {child}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href="#"
                    className="mob-plain-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mob-title">{link.label}</span>
                    {link.badge && (
                      <span className="ras-badge">{link.badge}</span>
                    )}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ padding: "12px 15px", flexShrink: 0 }}>
            <a href="#" className="git-btn-responsive">
              <span className="git-text">Get In Touch ↗</span>
              <span className="git-hover-text">Get In Touch ↗</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
