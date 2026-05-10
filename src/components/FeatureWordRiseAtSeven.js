import { useEffect, useRef, useState } from "react";
import SixtImage from "../assets/image/SIXT.jpg";
import DojoImage from "../assets/image/Dojo-B2B.jpg";
import MagnetImage from "../assets/image/Magnet.png";
import ESimImage from "../assets/image/Learning E Sim.jpg";
import JDSportsImage from "../assets/image/JD Sports.jpg";
import ParkdeanImage from "../assets/image/Parkdean Resorts.jpg";
import PookyImage from "../assets/image/Pooky.jpg";
import RevolutionBeautyImage from "../assets/image/Revolution Beauty.png";
import LloydsImage from "../assets/image/Lloyds Pharmacy.png";
import PLTImage from "../assets/image/PrettyLittleTing.png";

const WORKS = [
  {
    name: "SIXT",
    years: "[2023-2025]",
    sector: "Car rental",
    hoverTitle: "An extra 3m clicks regionally through SEO",
    hoverColor: "#ca7936",
    chipColor: "rgba(225, 155, 88, 0.86)",
    image: SixtImage,
  },
  {
    name: "Dojo - B2B",
    years: "[2021-2025]",
    sector: "Card Machines",
    hoverTitle: "A B2B success story for Dojo card machines",
    hoverColor: "#ffd8c6",
    chipColor: "rgba(255, 231, 216, 0.9)",
    image: DojoImage,
  },
  {
    name: "Magnet Trade - B2B",
    years: "[2023-2024]",
    sector: "Trade tools",
    hoverTitle: "A full service SEO success story 170%+ increase",
    hoverColor: "#f3cf45",
    chipColor: "rgba(255, 225, 94, 0.9)",
    image: MagnetImage,
  },
  {
    name: "Leading E Sim brand globally",
    years: "[2023-2025]",
    sector: "Esims",
    hoverTitle: "Increasing brand and non brand visibility UK/ES",
    hoverColor: "#b9f8ea",
    chipColor: "rgba(208, 255, 244, 0.9)",
    image: ESimImage,
  },
  {
    name: "JD Sports",
    years: "[2025]",
    sector: "Trainers",
    hoverTitle: "65% up YoY in clicks for JDSports FR, IT, ES",
    hoverColor: "#c8d5ff",
    chipColor: "rgba(222, 230, 255, 0.9)",
    image: JDSportsImage,
  },
  {
    name: "Parkdean Resorts",
    years: "[2019-2025]",
    sector: "Easter Breaks",
    hoverTitle: "Dominating Google and AI search",
    hoverColor: "#80c686",
    chipColor: "rgba(156, 215, 160, 0.88)",
    image: ParkdeanImage,
  },
  {
    name: "Pooky",
    years: "[2025]",
    sector: "Rechargeable Lights",
    hoverTitle: "Driving demand for Pooky Rechargeable Lights",
    hoverColor: "#f4b1c6",
    chipColor: "rgba(255, 203, 218, 0.9)",
    image: PookyImage,
  },
  {
    name: "Revolution Beauty",
    years: "[2022-2025]",
    sector: "Beauty Dupes",
    hoverTitle: "Building the UK's leading beauty dupe brand",
    hoverColor: "#e7b6ff",
    chipColor: "rgba(238, 206, 255, 0.9)",
    image: RevolutionBeautyImage,
  },
  {
    name: "Lloyds Pharmacy",
    years: "[2022-2023]",
    sector: "STI tests",
    hoverTitle: "Driving category leadership for STI tests",
    hoverColor: "#9fc7ff",
    chipColor: "rgba(191, 218, 255, 0.9)",
    image: LloydsImage,
  },
  {
    name: "PrettyLittleThing",
    years: "[2021-2023]",
    sector: "Outfits",
    hoverTitle: 'Driving discovery for everything "outfits" for PLT',
    hoverColor: "#ff9f7b",
    chipColor: "rgba(255, 190, 166, 0.9)",
    image: PLTImage,
  },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function FeatureWordRiseAtSeven() {
  const sectionRef = useRef(null);
  const textWindowRef = useRef(null);
  const textTrackRef = useRef(null);
  const imageWindowRef = useRef(null);
  const imageTrackRef = useRef(null);
  const frameRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isImageHovering, setIsImageHovering] = useState(false);
  const [state, setState] = useState({
    activeIndex: 0,
    textY: 0,
    imageY: 0,
  });

  const moveCursor = (event) => {
    const imageWindow = imageWindowRef.current;

    if (!imageWindow) return;

    const rect = imageWindow.getBoundingClientRect();
    imageWindow.style.setProperty("--cursor-x", `${event.clientX - rect.left}px`);
    imageWindow.style.setProperty("--cursor-y", `${event.clientY - rect.top}px`);
  };

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      const textWindow = textWindowRef.current;
      const textTrack = textTrackRef.current;
      const imageWindow = imageWindowRef.current;
      const imageTrack = imageTrackRef.current;

      if (!section || !textWindow || !textTrack || !imageWindow || !imageTrack) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const progress = total > 0 ? clamp(-rect.top / total, 0, 1) : 0;
      const textMax = Math.max(0, textTrack.scrollHeight - textWindow.clientHeight);
      const imageMax = Math.max(0, imageTrack.scrollHeight - imageWindow.clientHeight);
      const activeIndex = clamp(
        Math.round(progress * (WORKS.length - 1)),
        0,
        WORKS.length - 1,
      );

      setState({
        activeIndex,
        textY: -textMax * progress,
        imageY: -imageMax * progress,
      });
    };

    const requestUpdate = () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(update);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    const ro = new ResizeObserver(requestUpdate);
    if (sectionRef.current) ro.observe(sectionRef.current);
    if (textTrackRef.current) ro.observe(textTrackRef.current);
    if (imageTrackRef.current) ro.observe(imageTrackRef.current);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      ro.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <section>
      <div ref={sectionRef} className="fw-rise-section">
        <div className="fw-rise-sticky">
        <div className="fw-rise-panel">
          <div className="fw-rise-text-side">
            <p className="fw-rise-kicker">Featured Work</p>

            <div ref={textWindowRef} className="fw-rise-text-window">
              <div
                ref={textTrackRef}
                className="fw-rise-text-track"
                style={{ transform: `translate3d(0px, ${state.textY}px, 0)` }}
              >
                {WORKS.map((work, index) => {
                  const distance = Math.abs(index - state.activeIndex);
                  const opacity = distance === 0 ? 1 : distance === 1 ? 0.58 : 0.22;
                  const isHovered = hoverIndex === index;

                  return (
                    <a
                      href="#"
                      key={work.name}
                      className={`fw-rise-title-row ${isHovered ? "hovered" : ""} ${
                        index === state.activeIndex ? "active" : ""
                      }`}
                      style={{ opacity }}
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(null)}
                    >
                      <span className="fw-rise-name">{work.name}</span>
                      <span className="fw-rise-years">{work.years}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            ref={imageWindowRef}
            className={`fw-rise-image-window ${isImageHovering ? "has-cursor" : ""}`}
          >
            <div
              ref={imageTrackRef}
              className="fw-rise-image-track"
              style={{ transform: `translate3d(0, ${state.imageY}px, 0)` }}
            >
              {WORKS.map((work, index) => (
                <a
                  href="#"
                  key={work.name}
                  className="fw-rise-image-card"
                  style={{
                    "--hover-color": work.hoverColor,
                    "--chip-color": work.chipColor,
                  }}
                  onMouseEnter={(event) => {
                    setHoverIndex(index);
                    setIsImageHovering(true);
                    moveCursor(event);
                  }}
                  onMouseMove={moveCursor}
                  onMouseLeave={() => {
                    setHoverIndex(null);
                    setIsImageHovering(false);
                  }}
                >
                  <img src={work.image} alt={work.name} />
                  <span className="fw-rise-card-hover" aria-hidden="true">
                    <span className="fw-rise-card-title">{work.hoverTitle}</span>
                  </span>
                  <span className="fw-rise-chip">
                    <span className="fw-rise-search-icon" aria-hidden="true" />
                    <span>{work.sector}</span>
                    <span aria-hidden="true">&#8599;</span>
                  </span>
                  <span className="fw-rise-mobile-meta" aria-hidden="true">
                    <span className="fw-rise-mobile-years">{work.years}</span>
                    <span className="fw-rise-mobile-name">{work.name}</span>
                  </span>
                </a>
              ))}
            </div>
            <span className="fw-rise-cursor" aria-hidden="true" />
          </div>
        </div>

        <div className="fw-rise-cta-wrap">
          <a href="#" className="fw-rise-cta">
            <span className="fw-rise-cta-text">Explore Our Work ↗</span>
            <span className="fw-rise-cta-hover">Explore Our Work ↗</span>
          </a>
        </div>
      </div>
      </div>

      <style>{`
        .fw-rise-section {
          min-height: 470vh;
          padding: 28px;
          position: relative;
        }

        .fw-rise-sticky {
          display: flex;
          flex-direction: column;
          height: calc(100vh + 15px);
          position: sticky;
          top: 28px;
        }

        .fw-rise-panel {
          background: #101111;
          border-radius: 24px;
          color: #ffffff;
          display: grid;
          gap: clamp(28px, 4vw, 76px);
          grid-template-columns: minmax(0, 1.18fr) minmax(420px, 0.92fr);
          height: 100%;
          overflow: hidden;
          padding: clamp(34px, 4.2vw, 66px) clamp(28px, 3.8vw, 58px);
          position: relative;
        }

        .fw-rise-text-side {
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
        }

        .fw-rise-kicker {
          font-size: clamp(18px, 1.5vw, 24px);
          font-weight: 500;
          letter-spacing: 0.04em;
          line-height: 1;
          margin: 34px 0 0;
        }

        .fw-rise-text-window {
          flex: 1;
          margin-top: clamp(120px, 16vh, 230px);
          overflow: hidden;
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0,0,0,0.08) 7%,
            #000 28%,
            #000 60%,
            rgba(0,0,0,0.18) 78%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0,0,0,0.08) 7%,
            #000 28%,
            #000 60%,
            rgba(0,0,0,0.18) 78%,
            transparent 100%
          );
        }

        .fw-rise-text-track {
          padding: 7vh 0 42vh;
          transition: transform 0.12s linear;
          will-change: transform;
        }

        .fw-rise-title-row {
          align-items: flex-start;
          color: #ffffff;
          display: flex;
          gap: 10px;
          max-width: 890px;
          padding: 4px 0;
          text-decoration: none;
          transform: translate3d(0, 0, 0);
          transition: opacity 0.18s ease, filter 0.18s ease, transform 0.26s ease;
          will-change: transform;
        }

        .fw-rise-title-row.hovered {
          transform: translate3d(clamp(18px, 2.2vw, 34px), 0, 0);
        }

        .fw-rise-title-row:not(.active) {
          filter: blur(0.2px);
        }

        .fw-rise-title-row.active {
          filter: blur(0);
        }

        .fw-rise-name {
          display: block;
          font-size: clamp(90px, 60px, 30px);
          font-weight: 500;
          letter-spacing: -0.04em;
          line-height: 0.86;
          max-width: 820px;
        }

        .fw-rise-years {
          color: inherit;
          display: inline-block;
          flex: 0 0 auto;
          font-size: clamp(12px, 1vw, 15px);
          font-weight: 900;
          letter-spacing: -0.04em;
          line-height: 1.05;
          margin-top: 0.42em;
          max-width: 54px;
        }

        .fw-rise-image-window {
          overflow: hidden;
          position: relative;
          --cursor-x: 50%;
          --cursor-y: 50%;
        }

        .fw-rise-image-window::before,
        .fw-rise-image-window::after {
          content: "";
          height: 80px;
          left: 0;
          pointer-events: none;
          position: absolute;
          right: 0;
          z-index: 2;
        }

        .fw-rise-image-track {
          display: flex;
          flex-direction: column;
          gap: 28px;
          padding-bottom: 34vh;
          transition: transform 0.12s linear;
          will-change: transform;
        }

        .fw-rise-image-card {
          border-radius: 14px;
          cursor: none;
          display: block;
          height: clamp(360px, 43vh, 552px);
          overflow: hidden;
          position: relative;
          text-decoration: none;
        }

        .fw-rise-image-card::after {
          background: linear-gradient(
            to top,
            rgba(16, 17, 17, 0.72) 0%,
            rgba(16, 17, 17, 0.32) 28%,
            transparent 58%
          );
          border-radius: inherit;
          bottom: 0;
          content: "";
          left: 0;
          opacity: 0;
          pointer-events: none;
          position: absolute;
          right: 0;
          top: 0;
          z-index: 1;
        }

        .fw-rise-image-card img {
          display: block;
          height: 100%;
          object-fit: cover;
          transition: transform 0.44s ease;
          width: 100%;
        }

        .fw-rise-card-hover {
          background: var(--hover-color);
          border-radius: inherit;
          color: #101111;
          inset: 0;
          opacity: 0;
          pointer-events: none;
          position: absolute;
          transform: scale(0.985);
          transition: opacity 0.24s ease, transform 0.24s ease;
          z-index: 3;
        }

        .fw-rise-card-title {
          display: block;
          font-size: clamp(22px, 2vw, 32px);
          font-weight: 500;
          letter-spacing: -0.04em;
          line-height: 0.96;
          max-width: min(92%, 720px);
          padding: clamp(16px, 2vw, 24px);
        }

        .fw-rise-image-card:hover img {
          transform: scale(1.03);
        }

        .fw-rise-image-card:hover .fw-rise-card-hover {
          opacity: 1;
          transform: scale(1);
        }

        .fw-rise-chip {
          align-items: center;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.5);
          border-radius: 999px;
          bottom: 20px;
          color: #ffffff;
          display: inline-flex;
          gap: 10px;
          font-size: 15px;
          font-weight: 500;
          line-height: 1;
          padding: 11px 15px;
          position: absolute;
          right: 20px;
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
          z-index: 4;
        }

        .fw-rise-image-card:hover .fw-rise-chip {
          background: var(--chip-color);
          color: #101111;
          transform: translate3d(-2px, -2px, 0);
        }

        .fw-rise-search-icon {
          border: 2px solid currentColor;
          border-radius: 50%;
          display: inline-block;
          height: 12px;
          position: relative;
          width: 12px;
        }

        .fw-rise-search-icon::after {
          background: currentColor;
          content: "";
          height: 2px;
          position: absolute;
          right: -5px;
          top: 9px;
          transform: rotate(45deg);
          width: 7px;
        }

        .fw-rise-mobile-meta {
          display: none;
        }

        .fw-rise-cursor {
          background: #b9f8ea;
          border-radius: 50%;
          height: clamp(78px, 7.2vw, 104px);
          left: var(--cursor-x);
          opacity: 0;
          pointer-events: none;
          position: absolute;
          top: var(--cursor-y);
          transform: translate3d(-50%, -50%, 0) scale(0.74);
          transition: opacity 0.16s ease, transform 0.16s ease;
          width: clamp(78px, 7.2vw, 104px);
          z-index: 4;
        }

        .fw-rise-cursor::before {
          background: #101111;
          content: "";
          height: 4px;
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-48%, -50%) rotate(-45deg);
          transform-origin: center;
          width: 28px;
        }

        .fw-rise-cursor::after {
          border-right: 4px solid #101111;
          border-top: 4px solid #101111;
          content: "";
          height: 17px;
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-10%, -78%);
          width: 17px;
        }

        .fw-rise-image-window.has-cursor .fw-rise-cursor {
          opacity: 1;
          transform: translate3d(-50%, -50%, 0) scale(1);
        }

        .fw-rise-cta-wrap {
          display: flex;
          justify-content: center;
          margin-top: 18px;
          position: relative;
          z-index: 5;
        }

        .fw-rise-cta {
          align-items: center;
          background: #ffffff;
          border-radius: 999px;
          color: #101111;
          display: inline-flex;
          font-family: var(--font-sans-primary);
          font-size: 15px;
          font-weight: 500;
          line-height: 1;
          min-height: 45px;
          overflow: hidden;
          padding: 0 24px;
          position: relative;
          text-decoration: none;
          transition: border-radius 0.14s ease;
          width: fit-content;
        }

        .fw-rise-cta:hover {
          border-radius: 12px;
        }

        .fw-rise-cta-text,
        .fw-rise-cta-hover {
          display: block;
          transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
          white-space: nowrap;
        }

        .fw-rise-cta-hover {
          left: 24px;
          opacity: 0;
          position: absolute;
          right: 24px;
          text-align: center;
          transform: translateY(100%);
        }

        .fw-rise-cta:hover .fw-rise-cta-text {
          opacity: 0;
          transform: translateY(-100%);
        }

        .fw-rise-cta:hover .fw-rise-cta-hover {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1023px) {
          .fw-rise-section {
            min-height: auto;
            padding: 13px;
          }

          .fw-rise-sticky {
            height: auto;
            position: relative;
          }

          .fw-rise-panel {
            border-radius: 22px;
            display: block;
            grid-template-columns: 1fr;
            height: auto;
            overflow: hidden;
            padding: 20px;
          }

          .fw-rise-cta-wrap {
            margin-top: 20px;
          }

          .fw-rise-cta {
            justify-content: center;
            min-height: 46px;
            width: 100%;
          }

          .fw-rise-text-side {
            display: block;
            overflow: visible;
          }

          .fw-rise-kicker {
            font-size: 17px;
            letter-spacing: -0.065em;
            margin: 0 0 24px;
          }

          .fw-rise-text-window {
            display: none;
          }

          .fw-rise-image-window {
            height: auto;
            overflow: visible;
          }

          .fw-rise-image-window::before,
          .fw-rise-image-window::after {
            display: none;
          }

          .fw-rise-image-track {
            gap: 20px;
            padding-bottom: 0;
          }

          .fw-rise-image-card {
            aspect-ratio: 1.33 / 1;
            border-radius: 13px;
            cursor: pointer;
            height: auto;
          }

          .fw-rise-image-card::after {
            opacity: 1;
          }

          .fw-rise-image-card img {
            height: 100%;
          }

          .fw-rise-card-title {
            font-size: clamp(28px, 7vw, 36px);
            letter-spacing: -0.04em;
            line-height: 0.92;
            max-width: 88%;
            padding: 15px 14px;
          }

          .fw-rise-chip {
            bottom: auto;
            font-size: clamp(12px, 3.6vw, 15px);
            gap: 9px;
            padding: 10px 12px;
            right: 12px;
            top: 12px;
          }

          .fw-rise-image-card:hover .fw-rise-chip {
            bottom: 14px;
            right: 14px;
            top: auto;
            transform: none;
          }

          .fw-rise-search-icon {
            height: 11px;
            width: 11px;
          }

          .fw-rise-mobile-meta {
            bottom: 13px;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            left: 13px;
            pointer-events: none;
            position: absolute;
            right: 13px;
            z-index: 2;
          }

          .fw-rise-mobile-years {
            font-size: clamp(12px, 3.4vw, 14px);
            font-weight: 500;
            letter-spacing: -0.04em;
            line-height: 1;
          }

          .fw-rise-mobile-name {
            font-size: clamp(24px, 8vw, 28px);
            font-weight: 500;
            letter-spacing: -0.04em;
            line-height: 0.92;
            margin-top: 4px;
          }

          .fw-rise-cursor {
            height: clamp(72px, 21vw, 96px);
            width: clamp(72px, 21vw, 96px);
          }

          .fw-rise-text-track,
          .fw-rise-image-track {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
