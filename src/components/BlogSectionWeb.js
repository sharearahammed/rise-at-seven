import { useState, useRef, useEffect, useCallback } from "react";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import news from "../assets/jpg/news.jpg";
import food from "../assets/jpg/food-hospitality-drink.jpg";
import Noomz from "../assets/jpg/Noomz1-4.jpg";
import { CursorDot, useCursor } from "../hook/useCursor";
import { LuAlarmClock } from "react-icons/lu";
import article1 from "../assets/jpg/article1.jpg";
import article2 from "../assets/jpg/article2.jpeg";
import article3 from "../assets/jpg/article1.jpg";
import blog from "../assets/jpg/blog.jpg";
import SectionHeader from "../hook/SectionHeader";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MorphSVGPlugin);

// ─── Morph paths (viewBox 0 0 100 100) ──────────────────────────────────────
const IDLE = "M 0 100 V 100 Q 50 100 100 100 V 100 z";
const WAVE = "M 0 100 V 50  Q 50 0   100 50  V 100 z";
const FULL = "M 0 100 V 0   Q 50 0   100 0   V 100 z";

const articles = [
  {
    id: 1,
    tag: "News",
    tagColor: "bg-white text-black",
    author: "Carrie Rose",
    readTime: "2 mins",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    image: news,
    authorImage: article1,
  },
  {
    id: 2,
    tag: "Food/Hospitality/Drink",
    tagColor: "bg-orange-400 text-white",
    author: "Ray Saddiq",
    readTime: "2 mins",
    title:
      "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth for them in the Chocolate Confectionery Category",
    image: food,
    authorImage: article2,
  },
  {
    id: 3,
    tag: "Food/Hospitality/Drink",
    author: "Carrie Rose",
    readTime: "2 mins",
    title:
      "Rise at Seven Appointed by Langtins to drive demand and retail growth for Noomz",
    image: Noomz,
    authorImage: article3,
  },
];

// ─── Article Card ─────────────────────────────────────────────────────────────
function ArticleCard({ article }) {
  const morphPathRef = useRef(null);
  const blurDivRef = useRef(null);
  const tlRef = useRef(null);
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const { cursorRef, containerRef, onMouseEnter, onMouseLeave, onMouseMove } =
    useCursor();

  const uid = `clip-${article.id}`;

  useEffect(() => {
    const path = morphPathRef.current;
    if (!path) return;

    gsap.set(path, { attr: { d: IDLE } });

    const tl = gsap
      .timeline({ paused: true })
      .to(path, { morphSVG: WAVE, duration: 0.15, ease: "power2.in" })
      .to(path, { morphSVG: FULL, duration: 0.1, ease: "power2.out" });

    tl.reverse(0);
    tlRef.current = tl;
    return () => tl.kill();
  }, []);

  const handleMouseEnter = useCallback(() => {
    onMouseEnter();
    setHovered(true);
    tlRef.current?.play();
  }, []);

  const handleMouseLeave = useCallback(() => {
    onMouseLeave();
    setHovered(false);
    tlRef.current?.reverse();
  }, []);

  const handleMouseMove = useCallback((e) => {
    onMouseMove(e);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    });
  }, []);

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  return (
    <article
      ref={containerRef}
      className="group relative rounded-2xl transition-transform duration-300 hover:-translate-y-2"
      style={{ cursor: "none" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Custom cursor */}
      <CursorDot ref={cursorRef} color="#B2F6E3" icon="arrow" size={120} />

      {/* ── Image container — fully responsive ── */}
      <div className="relative w-full aspect-square overflow-hidden rounded-2xl">

        {/* ── Original image ── */}
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-10"
          style={{ zIndex: 1 }}
        />

        {/* ── Hidden SVG — just defines the clipPath shape ── */}
        <svg
          style={{
            position: "absolute",
            width: 0,
            height: 0,
            overflow: "hidden",
          }}
          aria-hidden="true"
        >
          <defs>
            <clipPath id={uid} clipPathUnits="objectBoundingBox">
              <path ref={morphPathRef} d={IDLE} transform="scale(0.01)" />
            </clipPath>
          </defs>
        </svg>

        {/* ── Blurred image layer ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            clipPath: `url(#${uid})`,
            WebkitClipPath: `url(#${uid})`,
          }}
        >
          <img
            src={article.image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            style={{
              filter: "blur(12px) brightness(0.9) saturate(1.2)",
              transform: "scale(1.3)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255,255,255,0.18)",
            }}
          />
        </div>

        {/* ── Tag ── */}
        {article.tag && (
          <span
            className="absolute top-3 left-3 text-[14px] font-bold px-3 py-1 rounded-full bg-white/35 text-white"
            style={{ zIndex: 10 }}
          >
            {article.tag}
          </span>
        )}
      </div>

      {/* Text */}
      <div className="pt-3 pb-1 px-1">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
          <span className="text-[14px] font-semibold flex items-center gap-1 bg-white px-2.5 py-1.5 rounded-full">
            <img
              src={article.authorImage}
              alt={article.author}
              className="w-5 h-5 rounded-full object-cover"
            />
            {article.author}
          </span>
          <span className="text-[14px] font-semibold flex items-center gap-1 bg-white px-2.5 py-1.5 rounded-full">
            <LuAlarmClock size={16} />
            {article.readTime}
          </span>
        </div>

        <h2 className="xl:text-[30px] lg:text-[24px] md:text-[22px] text-[20px] font-semibold leading-[0.95] tracking-[-0.07em] transition-colors duration-300">
          {article.title}
        </h2>
      </div>
    </article>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function WhatsNew({ ref }) {
  const [open, setOpen] = useState(false);
  const [imgSize, setImgSize] = useState({ w: "0px", h: "60px" });
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const splitRef1 = useRef(null);
  const splitRef2 = useRef(null);

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

          const chars1 = splitRef1.current.chars;
          const chars2 = splitRef2.current.chars;
          const staggerTime = 0.08;

          gsap.from(chars1, {
            yPercent: 110,
            duration: 0.5,
            ease: "power4.out",
            stagger: staggerTime,
          });

          gsap.from(chars2, {
            yPercent: 110,
            duration: 0.5,
            ease: "power4.out",
            stagger: staggerTime,
            delay: chars1.length * staggerTime,
          });

          const allCharsTime =
            (chars1.length + chars2.length) * staggerTime + 0.5;
          setTimeout(() => {
            const isLg = window.innerWidth >= 1024;
            setImgSize({
              w: isLg ? "90px" : "54px",
              h: isLg ? "90px" : "54px",
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
    <section ref={ref} className="px-6 py-10 font-sans">
      {/* Header */}
      <div className="mb-9">
        <SectionHeader
          sectionRef={sectionRef}
          headingRef1={headingRef1}
          headingRef2={headingRef2}
          imageRef={imageRef}
          open={open}
          imgSize={imgSize}
          image={blog}
          titleStart="What's"
          titleEnd="New"
          buttonText="Explore More Thoughts ↗"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}