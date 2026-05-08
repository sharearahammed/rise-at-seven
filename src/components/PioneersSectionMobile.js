import { useRef, useState, useEffect } from "react";
import pioneers from "../assets/jpg/pioneers.jpg";
import Award from "../assets/jpg/Award-winning.JPG";
import speed from "../assets/png/speed.png";

const BASE = [
  {
    id: "pioneers",
    bg: "#111111",
    color: "#fff",
    imgBg: pioneers,
    title: "Pioneers",
    body: [
      "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster.",
      "We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
    ],
  },
  {
    id: "award",
    bg: "#B2F6E3",
    color: "#0d2e2c",
    imgBg: Award,
    title: "Award Winning",
    body: [
      "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London.",
      "We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    ],
  },
  {
    id: "speed",
    bg: "#ffffff",
    color: "#111",
    imgBg: speed,
    title: "Speed",
    body: [
      "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search.",
      "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    ],
  },
];

const TOTAL = BASE.length;

// 🔁 infinite clone
const DATA = [BASE[TOTAL - 1], ...BASE, BASE[0]];

export default function ScrollCards() {
  const [index, setIndex] = useState(1);
  const [w, setW] = useState(0);

  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  const isMd = w >= 640;

  const cardSideMargin = isMd ? 12 : 0;

  // MD → next card visible 50%
  const peek = isMd ? w * 0.38 : 0;

  const cardWidth = w > 0 ? w - peek : 300;

  const step = cardWidth + cardSideMargin * 2;

  // ================= measure =================
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    const update = () => setW(el.offsetWidth);

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  // ================= transform =================
  const setPos = (i, animate = true) => {
    if (!trackRef.current) return;

    trackRef.current.style.transition = animate
      ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)"
      : "none";

    trackRef.current.style.transform = `translateX(${-i * step}px)`;
  };

  // ================= PROGRESS (FIXED 33/66/100) =================
  const progressMap = [33, 66, 100];

  const realIndex =
    index === 0 ? TOTAL - 1 : index === TOTAL + 1 ? 0 : index - 1;

  const progress = progressMap[realIndex];

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${progress}%`;
    }
  }, [index, w]);

  // ================= MOVE =================
  const move = (i) => {
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
  };

  // ================= DRAG =================
  const startX = useRef(0);

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

  // init position
  useEffect(() => {
    setPos(index, false);
  }, [w]);

  return (
    <div
      style={{
        fontFamily: "inherit",
        overflow: "hidden",
        marginTop:80
      }}
    >
      <p style={{
        textAlign: "center",
           fontSize: "1.125rem",
            color: "#111212",
            letterSpacing: "0.06em",
            letterSpacing: "-0.07em",   
            fontWeight: 500,
            marginBottom:12
          }}>Legacy In The Making</p>

      {/* CAROUSEL */}
      <div className="mr-7 ml-4">
        <div
          ref={outerRef}
          onMouseDown={onStart}
          onMouseUp={onEnd}
          onTouchStart={onStart}
          onTouchEnd={onEnd}
          style={{
            overflow: "hidden",
            width: "100%",
          }}
        >
          <div ref={trackRef} style={{ display: "flex" }}>
            {DATA.map((c, i) => (
              <div
                key={i}
                style={{
                  minWidth: `${cardWidth}px`,
                  width: `${cardWidth}px`,
                  margin: isMd ? `0 ${cardSideMargin}px 0` : "0",
                  borderRadius: 20,
                  background: c.bg,
                  color: c.color,
                  overflow: "hidden",
                  flexShrink: 0,
                  padding: 24,
                }}
              >
                <img
                  src={c.imgBg}
                  style={{
                    width: "100%",
                    height: isMd ? 392 : 340,
                    objectFit: "cover",
                    borderRadius: 20,
                  }}
                />

                <div>
                  <h2 className="text-[30px] text-center my-3">{c.title}</h2>
                  {c.body.map((t, j) => (
                    <p className="text-[14px] text-center" style={{ marginTop: j > 0 ? 18 : 0 }} key={j}>
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 PROGRESS BAR (33 / 66 / 100 FIXED) */}
      <div
        className="mx-7 ml-8 rounded-sm"
        style={{
          height: 4,
          background: "#fff",
          marginTop: 20,
        }}
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
    </div>
  );
}
