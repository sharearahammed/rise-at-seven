import { i } from "framer-motion/client";
import pioneers from "../assets/jpg/pioneers.jpg";
import Award from "../assets/jpg/Award-winning.JPG";
import speed from "../assets/png/speed.png"
import { useEffect, useRef } from "react";

const cards = [
  {
    id: "speed",
    bg: "#ffffff",
    color: "#111111",
    imgBg: speed,
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
    imgBg: Award,
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
    imgBg: pioneers,
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
    className="mt-8"
      style={{
        width: 205,
        height: 205,
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 22,
        flexShrink: 0,
      }}
    >
      <img
        src={bg}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
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
      const cSpeed = cardRefs.current[0];
      const cAward = cardRefs.current[1];
      const cPioneers = cardRefs.current[2];

      // ✅ FIX: translateX(-50%) আলাদা রাখতে হবে, তাই gsap.set এ x ব্যবহার করা যাবে না
      // Initial stacked positions
      gsap.set(cPioneers, { rotation: 6, y: 0, zIndex: 3 });
      gsap.set(cAward, { rotation: 10, y: 5, zIndex: 2 });
      gsap.set(cSpeed, { rotation: 13, y: 8, zIndex: 1 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sceneRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      // 1st card
      tl.to(cPioneers, {
        y: -910,
        rotation: -80,
        duration: 1,
        ease: "power2.inOut",
      })

        // 2nd card → exactly 50% of 1st
        .to(
          cAward,
          {
            y: -910,
            rotation: -80,
            duration: 1,
            ease: "power2.inOut",
          },
          "<50%",
        )

        // 3rd card → exactly 50% of 2nd
        .to(
          cSpeed,
          {
            y: 10,
            rotation: -4,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<50%",
        );
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
        minHeight: "200vh",
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
           fontSize: "1.125rem",
            color: "#111212",
            letterSpacing: "0.06em",
            letterSpacing: "-0.07em",   
            fontWeight: 500,
          }}
        >
          Legacy In The Making
        </p>

        {/* Card stack */}
        <div style={{ marginTop:"128px", position: "relative", width: 340, height: 680 }}>
          {cards.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className="xl:w-[575px] xl:h-[574px] lg:w-[518px] lg:h-[520px] rounded-[22px] absolute left-1/2 transform -translate-x-1/2 px-0 xl:py-[32px] lg:py-[0px]"
              style={{
                position: "absolute",
                left: "50%",
                background: card.bg,
                color: card.color,
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
              className="xl:text-[60px] lg:text-[48px] xl:font-bold lg:font-semibold"
                style={{
                  lineHeight: 1.05,
                  marginBottom: 20,
                  letterSpacing: "-0.05em",
                }}
              >
                {card.title}
              </h2>

              {card.body.map((text, j) => (
                <p
                  key={j}
                  className="xl:text-[16.5px] lg:text-[15.5px]"
                  style={{
                    lineHeight: 1.55,
                    opacity: 1,
                    marginTop: j > 0 ? 18 : 0,
                    padding: "0 45px",
                    color: card.color,
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
