import React, { useEffect, useMemo, useState } from "react";

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

import RedBull from "../assets/png/RedBull-Instagram-Post-45.png";
import unnamed from "../assets/png/unnamed-6.png";
import spaseekers from "../assets/png/spaseekers.png";
import room from "../assets/jpg/room.jpg";
import Screenshot from "../assets/png/Screenshot-2025-07-01-at-21.36.35.png";

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

const BACKGROUNDS = [RedBull, unnamed, spaseekers, room, Screenshot];

const avatarStyles = `
  .avatar-wrapper {
    position: relative;
    border-radius: 15%;
    overflow: hidden;
    display: inline-block;
    flex-shrink: 0;
    width: 0px;
    height: 60px;
    transition: width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .avatar-wrapper.open {
    width: 71px;
    height: 71px;
  }

  @media (min-width: 1024px) {
    .avatar-wrapper.open {
      width: 113px;
      height: 113px;
    }
  }
`;

export default function Hero() {
  const [open, setOpen] = useState(false);

  const bgImage = useMemo(() => {
    const index = Math.floor(Math.random() * BACKGROUNDS.length);
    return BACKGROUNDS[index];
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden rounded-[25px] mx-2">
      <style>{avatarStyles}</style>

      {/* Blurred Background */}
      <div
        className="absolute inset-0 scale-350"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(12px)",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] w-full px-6">
        <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-white/90 mb-4">
          #1MOSTRECOMMENDED <br />
          CONTENTMARKETINGAGENCY
        </p>

        <div className="flex flex-wrap justify-center items-center gap-5 mb-6">
          <img src={One} className="h-[35px]" />
          <img src={Global} className="h-[22px]" />
          <img src={Mask} className="h-[18px]" />
          <img src={UK} className="h-[12px]" />
          <img src={Two} className="h-[35px]" />
        </div>

        <h1 className="text-white leading-[0.95] tracking-tight lg:text-[120px] sm:text-[60px] text-[60px] font-semibold mb-6">
          We Create <br />
          <span className="inline-flex items-center gap-3 flex-wrap justify-center">
            Category
            <div className={`avatar-wrapper ${open ? "open" : ""} mt-2`}>
              <img
                src={bgImage}
                alt="img"
                className="w-full h-full object-cover"
              />
            </div>
            Leaders
          </span>
        </h1>

        <p className="text-white/90 text-[19px] mb-10 font-bold">
          on every searchable platform
        </p>

        <div className="lg:flex md:hidden sm:hidden hidden flex-wrap justify-center items-center gap-12">
          {PLATFORMS.map((p) => (
            <img
              key={p.label}
              src={p.icon}
              alt={p.label}
              className="w-[70px] h-[70px] object-contain opacity-90 hover:scale-110 transition"
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 left-6 right-6 md:flex justify-between text-white text-sm font-bold">
        <span className="md:flex hidden">
          Organic media planners creating, distributing & optimising <br />
          search-first content for SEO, Social, PR, AI and LLM search
        </span>
        <span className="md:text-right text-center">
          4 Global Offices serving <br />
          UK, US, Australia & beyond
        </span>
      </div>
    </section>
  );
}
