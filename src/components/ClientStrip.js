import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import capital from "../assets/svg/capital.svg";
import xbox from "../assets/svg/xbox.svg";
import sixt from "../assets/svg/sixt.svg";
import revolution from "../assets/svg/revolution.svg";
import p from "../assets/svg/p.svg";
import jd from "../assets/svg/jd.svg";
import hubSpot from "../assets/svg/hubSpot.svg";
import aa from "../assets/svg/aa.svg";
import RedBull from "../assets/png/RedBull.png";
import kroger from "../assets/png/kroger.png";
import emirates from "../assets/png/emirates.png";

const CLIENTS = [
  { name: "Capital One", logo: capital },
  { name: "Red Bull", logo: RedBull },
  { name: "Revolution", logo: revolution },
  { name: "PlayStation", logo: p },
  { name: "AXA", logo: aa },
  { name: "Emirates", logo: emirates },
  { name: "Shark Ninja", logo: xbox },
  { name: "JD Sports", logo: jd },
  { name: "HubSpot", logo: hubSpot },
  { name: "SIXT", logo: sixt },
  { name: "Kroger", logo: kroger },
];

const ALL = [...CLIENTS, ...CLIENTS, ...CLIENTS];

export default function ClientStrip() {
  return (
    <div style={{ background: "#f0efeb", overflow: "hidden" }}>
      <style>{`
        .client-strip-inner {
          display: flex;
          align-items: center;
          padding: 50px 28px;
          flex-direction: row;
        }
        .client-label {
          flex-shrink: 0;
          font-size: 14px;
          font-weight: 600;
          color: black;
          white-space: nowrap;
          width: 150px;
        }
        .client-slider-wrap {
          flex: 1;
          min-width: 0;
          position: relative;
        }
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }

        /* Medium - tablet (max 1024px) */
        @media (max-width: 1024px) {
          .client-strip-inner {
            flex-direction: column;
            align-items: flex-start;
            padding: 36px 24px;
            gap: 20px;
          }
          .client-label {
            width: auto;
            font-size: 13px;
          }
          .client-slider-wrap {
            width: 100%;
            flex: unset;
          }
        }

        /* Small - mobile (max 640px) */
        @media (max-width: 640px) {
          .client-strip-inner {
            padding: 28px 24px;
            gap: 14px;
          }
          .client-label {
            font-size: 12px;
          }
        }
      `}</style>

      <div className="client-strip-inner">
        {/* Label */}
        <div className="client-label">The agency behind …</div>

        {/* Slider */}
        <div className="client-slider-wrap">
          {/* Left fade */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "50px",
              background:
                "linear-gradient(to right, #f0efeb 0%, rgba(240,239,235,0.9) 40%, transparent 100%)",
              backdropFilter: "blur(3px)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
          {/* Right fade */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "50px",
              background:
                "linear-gradient(to left, #f0efeb 0%, rgba(240,239,235,0.9) 40%, transparent 100%)",
              backdropFilter: "blur(3px)",
              zIndex: 10,
              pointerEvents: "none",
            }}
          />

          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={80}
            loop={true}
            speed={6000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            grabCursor={false}
            cssMode={false}
          >
            {ALL.map((client, i) => (
              <SwiperSlide key={i} style={{ width: "auto" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50px",
                  }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    style={{
                      height: "30px",
                      width: "150px",
                      maxWidth: "200px",
                      objectFit: "contain",
                      filter: "grayscale(100%)",
                      userSelect: "none",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}