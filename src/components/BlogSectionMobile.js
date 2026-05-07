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

const TOTAL = articles.length;
const DATA = [articles[TOTAL - 1], ...articles, articles[0]];

// Article Card
function ArticleCard({ article, cardWidth, isMd, carouselIndex }) {
  const morphPathRef = useRef(null);
  const tlRef = useRef(null);
  const rafRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const { cursorRef, containerRef, onMouseEnter, onMouseLeave, onMouseMove } =
    useCursor();

  const uid = `mob-clip-${carouselIndex}`;

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
    tlRef.current?.play();
  }, []);

  const handleMouseLeave = useCallback(() => {
    onMouseLeave();
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
      <CursorDot ref={cursorRef} color="#B2F6E3" icon="arrow" size={120} />

      <div
        className="relative w-[419px] h-[419px] overflow-hidden rounded-2xl"
        style={{
          width: "100%",
          height: isMd ? 392 : 300,
        }}
      >
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          style={{ zIndex: 1 }}
        />

        <svg
          style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
          aria-hidden="true"
        >
          <defs>
            <clipPath id={uid} clipPathUnits="objectBoundingBox">
              <path ref={morphPathRef} d={IDLE} transform="scale(0.01)" />
            </clipPath>
          </defs>
        </svg>

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
            className="w-full h-full object-cover "
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

        {article.tag && (
          <span
            className="absolute top-3 left-3 text-[14px] font-bold px-3 py-1 rounded-full bg-white/35 text-white"
            style={{ zIndex: 10 }}
          >
            {article.tag}
          </span>
        )}
      </div>

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

        <h2 className="text-[22px] font-semibold leading-[0.95] tracking-[-0.07em] transition-colors duration-300">
          {article.title}
        </h2>
      </div>
    </article>
  );
}

export default function BlogSectionMobile() {
  const [open, setOpen] = useState(false);
  const [imgSize, setImgSize] = useState({ w: "0px", h: "60px" });
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const splitRef1 = useRef(null);
  const splitRef2 = useRef(null);

  const [index, setIndex] = useState(1);
  const [w, setW] = useState(0);

  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const startX = useRef(0);

  const isMd = w >= 640;
  const cardSideMargin = isMd ? 12 : 0;
  const peek = isMd ? w * 0.38 : 0;
  const cardWidth = w > 0 ? w - peek : 300;
  const step = cardWidth + cardSideMargin * 2;

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => setW(el.offsetWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const setPos = useCallback(
    (i, animate = true) => {
      if (!trackRef.current) return;
      trackRef.current.style.transition = animate
        ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)"
        : "none";
      trackRef.current.style.transform = `translateX(${-i * step}px)`;
    },
    [step],
  );

  const progressMap = [33, 66, 100];
  const realIndex =
    index === 0 ? TOTAL - 1 : index === TOTAL + 1 ? 0 : index - 1;
  const progress = progressMap[realIndex];

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  const move = useCallback(
    (i) => {
      setIndex(i);
      setPos(i, true);

      const onEnd = () => {
        if (i === 0) {
          setIndex(TOTAL);
          setPos(TOTAL, false);
        }
        if (i === TOTAL + 1) {
          setIndex(1);
          setPos(1, false);
        }
        trackRef.current?.removeEventListener("transitionend", onEnd);
      };

      trackRef.current?.addEventListener("transitionend", onEnd, {
        once: true,
      });
    },
    [setPos],
  );

  const getX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

  const onStart = (e) => {
    startX.current = getX(e);
  };

  const onEnd = (e) => {
    const diff = getX(e.changedTouches?.[0] || e) - startX.current;
    let next = index;
    if (diff < -50) next = index + 1;
    if (diff > 50) next = index - 1;
    move(next);
  };

  useEffect(() => {
    setPos(index, false);
  }, [w]);

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
    <section className="px-6 py-10 font-sans">
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

      <div className="mr-7 ml-4">
        <div
          ref={outerRef}
          onMouseDown={onStart}
          onMouseUp={onEnd}
          onTouchStart={onStart}
          onTouchEnd={onEnd}
          style={{ overflow: "hidden", }}
        >
          <div ref={trackRef} style={{ display: "flex" }}>
            {DATA.map((article, i) => (
              <div
                key={i}
                style={{
                  minWidth: `${cardWidth}px`,
                  width: `${cardWidth}px`,
                  margin: isMd ? `0 ${cardSideMargin}px` : "0",
                  flexShrink: 0,
                }}
              >
                <ArticleCard
                  article={article}
                  cardWidth={cardWidth}
                  isMd={isMd}
                  carouselIndex={i}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mx-7 ml-8 rounded-sm"
        style={{ height: 4, background: "#d4d0cb", marginTop: 20 }}
      >
        <div
          ref={progressRef}
          style={{
            height: "100%",
            width: "33%",
            background: "#111",
            transition: "width 0.35s ease",
          }}
        />
      </div>
    </section>
  );
}