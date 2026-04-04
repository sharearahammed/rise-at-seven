import React from "react";
import One from "../assets/svg/one.svg";
import Two from "../assets/svg/two.svg";
import Global from "../assets/image/global-search-awards.png";
import Mask from "../assets/image/Mask-group.png";
import UK from "../assets/image/UKSocial-Media-Awards-White.png";

import Google from "../assets/png/gogle.png";
import ChatGPT from "../assets/png/chat-gpt.png";
import Gemini from "../assets/png/gemini.png";
import Tiktok from "../assets/png/tiktok.png";
import Youtube from "../assets/png/youtube.png";
import Pinterest from "../assets/png/pinterest.png";
import Giphy from "../assets/png/giphy.png";
import Reddit from "../assets/png/reddit.png";
import Amazon from "../assets/png/amazon.png";

import RedBull from "../assets/png/RedBull-Instagram-Post-45.png"
import unnamed from "../assets/png/unnamed-6.png"
import spaseekers from "../assets/png/spaseekers.png"
import room from "../assets/jpg/room.jpg"
import Screenshot from "../assets/png/Screenshot-2025-07-01-at-21.36.35.png"

const PLATFORMS = [
  { icon: Google, label: "Google" },
  { icon: ChatGPT, label: "ChatGPT" },
  { icon: Gemini, label: "Gemini" },
  { icon: Tiktok, label: "TikTok" },
  { icon: Youtube, label: "YouTube" },
  { icon: Pinterest, label: "Pinterest" },
  { icon: Giphy, label: "GIPHY" },
  { icon: Reddit, label: "Reddit" },
  { icon: Amazon, label: "Amazon" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-90px)] flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#d4c49e] via-[#b8a070] to-[#d4b878] font-sans">
      {/* Airplane SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <ellipse cx="720" cy="520" rx="680" ry="110" fill="#5a3a00" />
        <rect x="100" y="460" width="1240" height="80" rx="40" fill="#3a2800" />
        <ellipse cx="1300" cy="500" rx="140" ry="40" fill="#2a1800" />
        <polygon
          points="580,500 780,350 900,500"
          fill="#2a1800"
          opacity="0.8"
        />
        <polygon
          points="860,500 760,640 640,500"
          fill="#3a2800"
          opacity="0.6"
        />
        <polygon
          points="120,480 250,360 280,480"
          fill="#2a1800"
          opacity="0.7"
        />

        {[400, 470, 540, 610, 680, 750, 820, 890, 960, 1030, 1100, 1170].map(
          (x, i) => (
            <ellipse
              key={i}
              cx={x}
              cy="490"
              rx="16"
              ry="14"
              fill="rgba(255,255,150,0.15)"
            />
          ),
        )}
      </svg>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(180,130,60,0.3)] to-[rgba(120,80,20,0.15)]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] w-full px-6 pt-10 pb-20">
        {/* Top text */}
        <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/90 mb-3">
          #1 MOST RECOMMENDED <br />
          CONTENT MARKETING AGENCY
        </p>

        {/* Awards */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-7">
          <img src={One} className="h-[35px] object-contain" />
          <img src={Global} className="h-[23px] object-contain" />
          <img src={Mask} className="h-[20px] object-contain" />
          <img src={UK} className="h-[12px] object-contain" />
          <img src={Two} className="h-[35px] object-contain" />
        </div>

        {/* Heading */}
        <h1 className="text-white leading-[0.95] tracking-tight mb-5 text-[65px] font-semibold font-sans">
          We Create <br />
          <span className="inline-flex items-center flex-wrap gap-2">
            Category
            {/* Font Awesome Icon (Sharp style) */}
            <i className="fa-sharp fa-solid fa-sparkles text-white text-4xl mx-2"></i>
            {/* Inline SVG box */}
            <span className="w-[clamp(58px,8vw,108px)] h-[clamp(58px,8vw,108px)] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#e8c870] to-[#c47830] flex-shrink-0 mx-2">
              <svg viewBox="0 0 108 108" className="w-full h-full">
                <rect width="108" height="108" fill="#c47830" />
                <rect x="0" y="55" width="108" height="53" fill="#a05c20" />
                <text
                  x="54"
                  y="46"
                  fontSize="13"
                  fontWeight="900"
                  fill="white"
                  textAnchor="middle"
                >
                  Emirates
                </text>
                <text
                  x="54"
                  y="80"
                  fontSize="10"
                  fontWeight="600"
                  fill="rgba(255,255,255,0.7)"
                  textAnchor="middle"
                >
                  ✈ Airline
                </text>
              </svg>
            </span>
            Leaders
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 italic text-[clamp(15px,2.5vw,24px)] mb-10">
          on every searchable platform
        </p>

        {/* Platforms */}
        <div className="flex flex-wrap justify-center items-center gap-14">
          {PLATFORMS.map((p) => (
            <img
              key={p.label}
              src={p.icon}
              alt={p.label}
              className="w-16 h-16 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-5 left-6 right-6 hidden md:flex justify-between text-white/70 text-xs font-medium">
        <span>
          Organic media planners creating, distributing & optimising <br />
          search-first content for SEO, Social, PR, AI and LLM search
        </span>
        <span className="text-right">
          4 Global Offices serving <br />
          UK, US, Australia & beyond
        </span>
      </div>
    </section>
  );
}
