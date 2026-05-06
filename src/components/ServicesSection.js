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

gsap.registerPlugin(SplitText);
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
  const animRef = useRef(null);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    document.fonts.ready.then(() => {
      gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
        onComplete: () => {
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

          const chars1 = splitRef1.current.chars; // O, u, r
          const chars2 = splitRef2.current.chars; // S, e, r, v, i, c, e, s
          const staggerTime = 0.08;

          // O, u, r animate
          gsap.from(chars1, {
            yPercent: 110,
            duration: 0.5,
            ease: "power4.out",
            stagger: staggerTime,
          });

          // S, e, r, v, i, c, e, s animate
          gsap.from(chars2, {
            yPercent: 110,
            duration: 0.5,
            ease: "power4.out",
            stagger: staggerTime,
            delay: chars1.length * staggerTime,
          });

          // সব char শেষ হওয়ার পর image খুলবে
          const allCharsTime =
            (chars1.length + chars2.length) * staggerTime + 0.5;
          setTimeout(() => {
            const isLg = window.innerWidth >= 1024;
            setImgSize({
              w: isLg ? "113px" : "54px",
              h: isLg ? "113px" : "54px",
            });
            setOpen(true);
          }, allCharsTime * 1000);
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="bg-[#f0efeb] px-10 py-28 max-md:px-6 max-md:py-10">
      <style>{avatarStyles}</style>
      {/* Header */}
      <div className="flex items-center justify-between pb-6 lg:border-b border-black/15 flex-wrap gap-4">
        <div ref={sectionRef} className="flex items-center gap-3 leading-none">
          <span
            ref={headingRef1}
            className="xl:text-[100px] lg:text-[75px] text-[60px] font-semibold tracking-[-0.04em] leading-none select-none overflow-hidden inline-block"
          >
            Our
          </span>
          <span
            ref={imageRef}
            style={{
              width: open ? imgSize.w : "0px",
              height: open ? imgSize.h : "55px",
              transition:
                "width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
            className="relative inline-block overflow-hidden rounded-[15%] shrink-0 shadow"
          >
            <img
              src={Services}
              alt="img"
              className="w-full h-full object-cover"
            />
          </span>
          <span
            ref={headingRef2}
            className="xl:text-[100px] lg:text-[75px] text-[60px] font-semibold tracking-[-0.04em] leading-none select-none overflow-hidden inline-block"
          >
            Services
          </span>
        </div>

        <a href="#" className="git-btn">
          <span className="git-text">View All Services ↗</span>
          <span className="git-hover-text">View All Services ↗</span>
        </a>
      </div>

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

      {/* Marquee */}
      <div className="overflow-hidden mt-16 whitespace-nowrap">
        <div className="animate-marquee text-[clamp(60px,10vw,140px)] font-black tracking-[-0.05em]">
          Not Chasing Algorithms, Chasing Consumers
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
