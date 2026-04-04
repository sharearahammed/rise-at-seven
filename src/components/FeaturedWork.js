"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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
  { name: "SIXT", years: "[2023-2025]" },
  { name: "Dojo – B2B", years: "[2021-2025]" },
  { name: "Magnet Trade – B2B", years: "[2023-2024]" },
  { name: "Leading E Sim", years: "[2023-2025]" },
  { name: "JD Sports", years: "[2025]" },
  { name: "Parkdean Resorts", years: "[2019-2025]" },
  { name: "Pooky", years: "[2025]" },
  { name: "Revolution Beauty", years: "[2022-2025]" },
  { name: "Lloyds Pharmacy", years: "[2022-2023]" },
  { name: "PrettyLittleThing", years: "[2021-2023]" },
];

const CHIPS = [
  { label: "🔍 Car rental 📈", bg: "rgba(255,255,255,0.92)", color: "#0a0a0a" },
  { label: "💳 Payments B2B", bg: "rgba(255,255,255,0.92)", color: "#0a0a0a" },
  { label: "🛠 Trade tools ↗", bg: "rgba(0,200,100,0.15)", color: "#7ecb98" },
  { label: "🌐 Global eSIM", bg: "rgba(90,184,255,0.15)", color: "#5ab8ff" },
  { label: "👟 Sportswear 📈", bg: "rgba(255,255,255,0.92)", color: "#0a0a0a" },
  {
    label: "🏖 Resorts & Travel",
    bg: "rgba(255,255,255,0.92)",
    color: "#0a0a0a",
  },
  {
    label: "💡 Lighting Design",
    bg: "rgba(255,200,50,0.15)",
    color: "#f0c040",
  },
  {
    label: "💄 Beauty & Skincare",
    bg: "rgba(255,100,180,0.15)",
    color: "#ff80c0",
  },
  { label: "💊 Pharmacy", bg: "rgba(100,200,255,0.15)", color: "#60c8ff" },
  { label: "👗 Fashion 📈", bg: "rgba(255,255,255,0.92)", color: "#0a0a0a" },
];

const IMAGES = [
  SixtImage,
  DojoImage,
  MagnetImage,
  ESimImage,
  JDSportsImage,
  ParkdeanImage,
  PookyImage,
  RevolutionBeautyImage,
  LloydsImage,
  PLTImage,
];

const HOVER_DATA = [
  {
    color: "#CB7B3A",
    textColor: "#111",
    text: "An extra 3m clicks regionally through SEO",
  },
  {
    color: "#FDD8C4",
    textColor: "#111",
    text: "A B2B success story for Dojo card machines",
  },
  {
    color: "#D8C4FD",
    textColor: "#111",
    text: "A full service SEO success story 170%+ increase",
  },
  {
    color: "#CB7B3A",
    textColor: "#111",
    text: "Increasing brand and non brand visibility UK/ES",
  },
  {
    color: "#3A8CCB",
    textColor: "#fff",
    text: "65% up YoY in clicks for JDSports FR, IT, ES",
  },
  {
    color: "#D2B59D",
    textColor: "#111",
    text: "Dominating Google and AI search",
  },
  {
    color: "#39B0BD",
    textColor: "#fff",
    text: "Driving demand for Pooky Rechargeable Lights",
  },
  {
    color: "#D29DD0",
    textColor: "#111",
    text: "Social search and multi channel content to #1",
  },
  {
    color: "#D29DD0",
    textColor: "#111",
    text: "Building the UK's leading beauty dupe brand",
  },
  {
    color: "#FECACC",
    textColor: "#111",
    text: 'Driving discovery for everything "outfits" for PLT',
  },
];

const N = WORKS.length;

export default function FeaturedWork() {
  const [hoverIdx, setHoverIdx] = useState(null);
  const [scrollPct, setScrollPct] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [cursorVisible, setCursorVisible] = useState(false);

  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const leftListRef = useRef(null);
  const rightListRef = useRef(null);

  const onScroll = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      setScrollPct(total > 0 ? Math.min(scrolled / total, 1) : 0);
    });
  }, []);

  const onMouseMove = useCallback((e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [onScroll, onMouseMove]);

  useEffect(() => {
    const sync = (listEl) => {
      if (!listEl) return;
      const max = listEl.scrollHeight - listEl.clientHeight;
      if (max > 0) listEl.scrollTop = scrollPct * max;
    };
    sync(leftListRef.current);
    sync(rightListRef.current);
  }, [scrollPct]);

  const activeIdx = Math.round(scrollPct * (N - 1));

  const fadeMask =
    "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)";

  return (
    <>
      <section
        ref={sectionRef}
        className="bg-[#0a0a0a]"
        style={{ height: `calc(${N * 90}vh + 100px)` }}
      >
        <div className="px-10 pt-12 pb-0">
          <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/35">
            Featured Work
          </p>
        </div>

        {/* Sticky two-col wrapper */}
        <div className="sticky top-0 h-screen grid grid-cols-2 overflow-hidden">
          {/* ── LEFT — name list ── */}
          <div className="flex flex-col px-10 py-6 overflow-hidden">
            <div
              className="relative flex-1 overflow-hidden"
              style={{
                WebkitMaskImage: fadeMask,
                maskImage: fadeMask,
              }}
            >
              <div ref={leftListRef} className="h-full overflow-hidden">
                <div style={{ height: "8vh" }} />

                {WORKS.map((work, i) => {
                  const dist = Math.abs(i - activeIdx);
                  const opacity =
                    dist === 0
                      ? 1
                      : dist === 1
                        ? 0.45
                        : dist === 2
                          ? 0.2
                          : 0.08;
                  const scale = dist === 0 ? 1 : dist === 1 ? 0.94 : 0.88;
                  const shiftX = hoverIdx === i ? 12 : 0;

                  return (
                    <div
                      key={work.name}
                      className="flex items-baseline gap-2 py-2 will-change-[opacity,transform]"
                      style={{
                        opacity,
                        transform: `scale(${scale}) translateX(${shiftX}px)`,
                        transformOrigin: "left center",
                        transition:
                          "opacity 0.3s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                      }}
                    >
                      <span
                        className="font-black tracking-[-0.03em] text-white leading-[1.15] whitespace-nowrap"
                        style={{
                          fontSize: "clamp(28px, 3.8vw, 58px)",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                        }}
                      >
                        {work.name}
                      </span>
                      <span className="text-[11px] font-semibold text-white/40 whitespace-nowrap shrink-0">
                        {work.years}
                      </span>
                    </div>
                  );
                })}

                <div />
              </div>
            </div>
          </div>

          {/* ── RIGHT — image list ── */}
          <div className="relative overflow-hidden py-6 px-5">
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background:
                  "linear-gradient(to bottom, #0a0a0a 0%, transparent 18%, transparent 82%, #0a0a0a 100%)",
              }}
            />

            <div ref={rightListRef} className="h-full overflow-hidden">
              <div style={{ height: "5vh" }} />

              {WORKS.map((_, i) => {
                const chip = CHIPS[i];
                const hover = HOVER_DATA[i];
                const isHovered = hoverIdx === i;
                const dist = Math.abs(i - activeIdx);
                const opacity =
                  dist === 0 ? 1 : dist === 1 ? 0.5 : dist === 2 ? 0.2 : 0.06;

                return (
                  <div
                    key={i}
                    className="mb-5 will-change-[opacity,transform] flex justify-end"
                    style={{
                      opacity,
                      transformOrigin: "center top",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                    }}
                  >
                    <div
                      onMouseEnter={() => {
                        setHoverIdx(i);
                        setCursorVisible(true);
                      }}
                      onMouseLeave={() => {
                        setHoverIdx(null);
                        setCursorVisible(false);
                      }}
                      className="relative rounded-2xl overflow-hidden cursor-none w-[80%]"
                    >
                      <img
                        src={IMAGES[i]}
                        alt={WORKS[i].name}
                        className="w-full h-auto block object-cover transition-opacity duration-[400ms]"
                        style={{ opacity: isHovered ? 0 : 1 }}
                      />

                      {/* Colour burst */}
                      <div
                        className="absolute left-1/2 bottom-0 w-[260%] h-[260%] rounded-full pointer-events-none z-10 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                        style={{
                          background: hover.color,
                          transform: isHovered
                            ? "translate(-50%, 50%) scale(1)"
                            : "translate(-50%, 50%) scale(0)",
                        }}
                      />

                      {/* Hover text */}
                      <div
                        className="absolute inset-x-0 top-0 p-7 pointer-events-none z-20 transition-[opacity,transform] duration-[350ms] delay-[50ms]"
                        style={{
                          fontSize: "clamp(18px, 2vw, 28px)",
                          fontWeight: 800,
                          lineHeight: 1.2,
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          color: hover.textColor,
                          opacity: isHovered ? 1 : 0,
                          transform: isHovered
                            ? "translateY(0)"
                            : "translateY(10px)",
                        }}
                      >
                        {hover.text}
                      </div>

                      {/* Chip */}
                      <div
                        className="absolute bottom-3.5 right-3.5 z-30 flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[11px] font-semibold backdrop-blur-md"
                        style={{ background: chip.bg, color: chip.color }}
                      >
                        {chip.label}
                      </div>
                    </div>
                  </div>
                );
              })}

              <div style={{ height: "30vh" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Custom Cursor ── */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.2s ease",
          opacity: cursorVisible ? 1 : 0,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "#b8f0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 26,
            fontWeight: 900,
            color: "#111",
            boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
            transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1)",
            transform: cursorVisible ? "scale(1)" : "scale(0.6)",
          }}
        >
          ↗
        </div>
      </div>
    </>
  );
}
