import { useEffect, useRef } from "react";

const cards = [
  {
    id: "speed",
    bg: "#ffffff",
    color: "#111111",
    imgBg: "#f0f0f0",
    rotate: 13,
    zIndex: 1,
    title: "Speed",
    body: [
      "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster.",
      "We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
    ],
  },
  {
    id: "award",
    bg: "#B2F6E3",
    color: "#0d2e2c",
    imgBg: "#5bcac4",
    rotate: 10,
    zIndex: 2,
    title: "Award Winning",
    body: [
      "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London.",
      "We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    ],
  },
  {
    id: "pioneers",
    bg: "#111111",
    color: "#ffffff",
    imgBg: "#222222",
    rotate: 5,
    zIndex: 3,
    title: "Pioneers",
    body: [
      "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search.",
      "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    ],
  },
];

function PlaceholderImage({ bg }) {
  return (
    <div
      style={{
        width: 130,
        height: 130,
        borderRadius: 16,
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 22,
        flexShrink: 0,
      }}
    >
      <svg
        width="52"
        height="52"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(128,128,128,0.4)"
        strokeWidth="1.2"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    </div>
  );
}

export default function ScrollCards() {
  const sceneRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    let ScrollTrigger;

    const init = async () => {
      const gsapModule = await import("https://esm.sh/gsap@3.12.5");
      const stModule = await import("https://esm.sh/gsap@3.12.5/ScrollTrigger");

      const gsap = gsapModule.gsap || gsapModule.default;
      ScrollTrigger = stModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // cardRefs order: [speed(0), award(1), pioneers(2)]
      const cSpeed    = cardRefs.current[0];
      const cAward    = cardRefs.current[1];
      const cPioneers = cardRefs.current[2];

      // Initial stacked positions matching the image
      gsap.set(cPioneers, { rotate: 5,  y: 0,   zIndex: 3 });
      gsap.set(cAward,    { rotate: 10, y: 18,  zIndex: 2 });
      gsap.set(cSpeed,    { rotate: 13, y: -8,  zIndex: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sceneRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      // Step 1: Pioneers flies up, Award moves to front
      tl.to(cPioneers, { y: -800, rotate: -90, opacity: 1, duration: 0.3, ease: "power2.inOut" }, 0)
        .to(cAward,    { y: 0, rotate: 0, duration: 0.2, ease: "power2.out" }, 0)
        .to(cSpeed,    { y: 20, rotate: 4, duration: 0.4 }, 0)

        // Step 2: Award flies up, Speed moves to front
        .to(cAward, { y: -700, rotate: 0, opacity: 1, duration: 0.3, ease: "power2.inOut" }, 0.55)
        .to(cSpeed, { y: 0, rotate: 0, duration: 0.45, ease: "power2.out" }, 0.55);
    };

    init();

    return () => {
      if (ScrollTrigger) ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      style={{
        background: "#EBEBEB",
        minHeight: "400vh",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Sticky viewport */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <p
          style={{
            fontSize: 13,
            color: "#888",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Legacy In The Making
        </p>

        {/* Card stack */}
        <div style={{ position: "relative", width: 340, height: 520 }}>
          {cards.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{
                position: "absolute",
                left: "50%",
                transform: `translateX(-50%) rotate(${card.rotate}deg)`,
                width: 500,
                borderRadius: 22,
                background: card.bg,
                color: card.color,
                padding: "32px 28px 36px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                zIndex: card.zIndex,
                top: i * 8,
                willChange: "transform, opacity",
              }}
            >
              <PlaceholderImage bg={card.imgBg} />

              <h2
                style={{
                  fontSize: 50,
                  fontWeight: 700,
                  lineHeight: 1.05,
                  marginBottom: 14,
                  letterSpacing: "-0.02em",
                }}
              >
                {card.title}
              </h2>

              {card.body.map((text, j) => (
                <p
                  key={j}
                  style={{
                    fontSize: 16,
                    lineHeight: 1.65,
                    opacity: 0.82,
                    maxWidth: 400,
                    marginTop: j > 0 ? 10 : 0,
                    color:card.color
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll spacer */}
      <div style={{ height: "300vh" }} />
    </div>
  );
}