import React, { useEffect, useState, useRef } from "react";
import DigitalPR from "../assets/jpg/Degital-pr.jpg";
import OrganicSocial from "../assets/jpg/organic-social-content.jpg";
import SearchGrowth from "../assets/jpg/search-and-growth.jpg";
import ContentExperience from "../assets/jpg/content-experience.jpg";
import DataInsights from "../assets/jpg/data-and-insights.jpg";
import OnsiteSEO from "../assets/jpg/on-site-seo.png";
import Services from "../assets/jpg/services.JPG";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineArrowUpward } from "react-icons/md";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../hook/SectionHeader";
import algorithm from "../assets/png/algorithm.png";
import consumer from "../assets/jpg/chasing.jpg";
gsap.registerPlugin(SplitText, ScrollTrigger);
const SERVICES = [
  { label: "Digital PR", image: DigitalPR, borderWidth: "75%" },
  {
    label: "Organic Social & Content",
    image: OrganicSocial,
    borderWidth: "75%",
  },
  {
    label: "Search & Growth Strategy",
    image: SearchGrowth,
    borderWidth: "75%",
  },
  { label: "Content Experience", image: ContentExperience, borderWidth: "75%" },
  { label: "Data & Insights", image: DataInsights, borderWidth: "75%" },
  { label: "Onsite SEO", image: OnsiteSEO, borderWidth: "75%" },
];

const MARQUEE_ITEMS = Array.from(
  { length: 3 },
  () => [
    { type: "text", value: "Chasing" },
    { type: "image", value: consumer },
    { type: "text", value: "Consumers" },
    { type: "image", value: algorithm },
    { type: "text", value: "Not Algorithms" },
  ]
);

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

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);
  const [open, setOpen] = useState(false);
  const [imgSize, setImgSize] = useState({ w: "0px", h: "60px" });
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const splitRef1 = useRef(null);
  const splitRef2 = useRef(null);
  const sectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const imageRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeTrackRef = useRef(null);
  const marqueeX = useRef(0);
  const marqueeDirection = useRef(-1);
  const marqueeSpeed = useRef(70);
  const marqueeIdleTimer = useRef(null);

  useEffect(() => {
    const servicesSection = servicesSectionRef.current;
    const header = sectionRef.current;

    if (!servicesSection || !header || !headingRef1.current || !headingRef2.current) {
      return undefined;
    }

    let trigger;
    let timeline;
    let cancelled = false;

    gsap.set(header, { opacity: 0 });

    document.fonts.ready.then(() => {
      if (cancelled) return;

      splitRef1.current?.revert();
      splitRef2.current?.revert();

      splitRef1.current = SplitText.create(headingRef1.current, {
        type: "chars",
        mask: "chars",
      });

      splitRef2.current = SplitText.create(headingRef2.current, {
        type: "chars",
        mask: "chars",
      });

      const chars1 = splitRef1.current.chars;
      const chars2 = splitRef2.current.chars;
      const staggerTime = 0.08;

      gsap.set([...chars1, ...chars2], { yPercent: 110 });
      gsap.set(header, { opacity: 1 });

      timeline = gsap.timeline({
        paused: true,
        onComplete: () => {
          const isLg = window.innerWidth >= 1024;

          setImgSize({
            w: isLg ? "113px" : "54px",
            h: isLg ? "113px" : "54px",
          });
          setOpen(true);
        },
      });

      timeline
        .to(chars1, {
          yPercent: 0,
          duration: 0.5,
          ease: "power4.out",
          stagger: staggerTime,
        })
        .to(
          chars2,
          {
            yPercent: 0,
            duration: 0.5,
            ease: "power4.out",
            stagger: staggerTime,
          },
          chars1.length * staggerTime,
        );

      trigger = ScrollTrigger.create({
        trigger: servicesSection,
        start: "top 70%",
        once: true,
        onEnter: () => timeline.play(),
      });
    });

    return () => {
      cancelled = true;
      trigger?.kill();
      timeline?.kill();
      splitRef1.current?.revert();
      splitRef2.current?.revert();
    };

          // সব char শেষ হওয়ার পর image খুলবে
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const track = marqueeTrackRef.current;

    if (!marquee || !track) return;

    const wrapX = () => {
      const halfWidth = track.scrollWidth / 2;

      if (!halfWidth) return;

      if (marqueeX.current <= -halfWidth) {
        marqueeX.current += halfWidth;
      }

      if (marqueeX.current >= 0) {
        marqueeX.current -= halfWidth;
      }
    };

    const tick = () => {
      const delta = gsap.ticker.deltaRatio(60);

      marqueeSpeed.current += (70 - marqueeSpeed.current) * 0.04;
      marqueeX.current +=
        marqueeDirection.current * marqueeSpeed.current * (delta / 60);

      wrapX();
      gsap.set(track, { x: marqueeX.current });
    };

    const trigger = ScrollTrigger.create({
      trigger: marquee,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        marqueeDirection.current = self.direction === -1 ? 1 : -1;
        marqueeSpeed.current = 240;

        if (marqueeIdleTimer.current) {
          clearTimeout(marqueeIdleTimer.current);
        }

        marqueeIdleTimer.current = setTimeout(() => {
          marqueeDirection.current = -1;
        }, self.direction === -1 ? 180 : 320);
      },
    });

    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      if (marqueeIdleTimer.current) {
        clearTimeout(marqueeIdleTimer.current);
      }
      trigger.kill();
    };
  }, []);

  return (
    <section
      ref={servicesSectionRef}
      className="bg-[#f0efeb] px-10 pt-28 max-md:px-6 max-md:pt-10"
    >
      <style>{avatarStyles}</style>
      {/* Header */}
      <SectionHeader
        sectionRef={sectionRef}
        headingRef1={headingRef1}
        headingRef2={headingRef2}
        imageRef={imageRef}
        open={open}
        imgSize={imgSize}
        image={Services}
        titleStart="Our"
        titleEnd="Services"
        buttonText="View All Services ↗"
      />

      {/* --------------------------- */}
      <div className="lg:mt-8 mt-2 grid grid-cols-2 gap-x-2 max-md:grid-cols-1">
        {SERVICES.map((service, i) => {
          const isHovered = hovered === i;
          const isLastRow = i >= SERVICES.length - 2;

          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex items-center cursor-pointer overflow-hidden"
            >
              {/* Desktop: hover background image */}
              <div
                className="rounded-full absolute inset-0 bg-cover bg-center transition-opacity duration-500 max-md:hidden"
                style={{
                  backgroundImage: `url(${service.image})`,
                  opacity: isHovered ? 1 : 0,
                }}
              />

              {/* Desktop: hover overlay */}
              <div
                className="rounded-full absolute inset-0 bg-black/70 transition-opacity duration-500 max-md:hidden"
                style={{ opacity: isHovered ? 1 : 0 }}
              />

              {/* Content */}
              <div className="relative z-10 flex items-center w-full lg:py-3.5 md:py-0 sm:py-3 py-3 gap-2">
                {/* Mobile: thumbnail */}
                <div
                  className="hidden max-md:block w-[52px] h-[52px] rounded-xl overflow-hidden shrink-0 ml-0"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Desktop: Arrow */}
                <span className="ml-10 relative w-[80px] h-[80px] overflow-hidden shrink-0 max-md:hidden">
                  <span
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ease-[cubic-bezier(0.77s,0,0.175,1)] ${
                      isHovered
                        ? "translate-x-0 translate-y-0 opacity-100 rotate-45"
                        : "-translate-x-full translate-y-16 opacity-0 rotate-30"
                    }`}
                  >
                    <MdOutlineArrowUpward className="text-[75px] text-white" />
                  </span>
                </span>

                {/* Label */}
                <span
                  className={`text-[28px] lg:text-[36px] xl:text-[60px] font-medium transition-all duration-300 
              max-md:ml-3 max-md:text-[18px] max-md:font-semibold max-md:text-black max-md:translate-x-0
              ${
                isHovered
                  ? "text-white translate-x-10 ml-[-50px]"
                  : "text-black -translate-x-10 ml-[-50px]"
              }`}
                >
                  {service.label}
                </span>
              </div>

              {/* Border */}
              {/* <div
                className="absolute bottom-0 h-[1px] bg-black/10 max-md:left-0 max-md:w-full left-14"
                style={{
                  width:
                    window.innerWidth >= 768 ? service.borderWidth : "100%",
                }}
              /> */}
              {!isLastRow && (
                <div
                  className="lg:flex md:flex hidden absolute bottom-0 h-[1px] bg-black/10 max-md:left-0 max-md:w-full left-14"
                  style={{
                    width:
                      window.innerWidth >= 768 ? service.borderWidth : "100%",
                  }}
                />
              )}
              <div className="lg:hidden md:hidden flex absolute bottom-0 h-[1px] bg-black/20 lg:max-md:left-0 max-md:w-full" />
            </div>
          );
        })}
      </div>

      <div className="lg:hidden flex mt-4">
        <a href="#" className="git-btn-responsive">
          <span className="git-text">View All Services ↗</span>
          <span className="git-hover-text">View All Services ↗</span>
        </a>
      </div>

      <div
        ref={marqueeRef}
        className="-mx-10 mt-16 overflow-hidden whitespace-nowrap py-3 max-md:-mx-6 lg:mt-24"
      >
        <div ref={marqueeTrackRef} className="services-marquee-track flex w-max">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="services-marquee-group">
              {item.map((part, index) =>
                part.type === "text" ? (
                  <span key={`${i}-${index}`}>{part.value}</span>
                ) : (
                  <img
                    key={`${i}-${index}`}
                    src={part.value}
                    alt=""
                    aria-hidden="true"
                    className="services-marquee-image"
                  />
                )
              )}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .services-marquee-track {
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }

        .services-marquee-group {
          align-items: center;
          display: flex;
          flex-shrink: 0;
          gap: 0.18em;
          padding-right: 0.18em;
          color: #000;
          font-size: clamp(72px, 13vw, 220px);
          font-weight: 500;
          letter-spacing: 0;
        }

        .services-marquee-image {
          width: 143px;
          height: 143px;
          display: inline-block;
          flex-shrink: 0;
          object-fit: cover;
          border-radius: 18px;
          transform: translateY(0.03em);
        }

        @media (max-width: 767px) {
          .services-marquee-group {
            gap: 0.16em;
            font-size: clamp(56px, 19vw, 96px);
          }

          .services-marquee-image {
            width: clamp(86px, 28vw, 143px);
            height: clamp(86px, 28vw, 143px);
            border-radius: 14px;
          }
        }
      `}</style>
    </section>
  );
}
