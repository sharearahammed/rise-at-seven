import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ReadyToRiseMarqueeSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const text = "Ready to Rise at Seven?";

  useEffect(() => {
    const section = sectionRef.current;
    const textEl = textRef.current;

    if (!section || !textEl) return;

    const letters = textEl.querySelectorAll(".letter");

    const ctx = gsap.context(() => {
      const scrollTween = gsap.to(textEl, {
        xPercent: -80,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 40%",
          end: "+=800",
          scrub: 2,
          pin: true,
        },
      });

      letters.forEach((char, i) => {
        gsap.fromTo(
          char,
          {
      x: 50 + Math.sin(i * 0.5) * 80, // 🔥 huge side curve
      y: -400 - Math.cos(i * 0.4) * 250, // 🔥 huge top wave
      opacity: 0,
      rotate: 45,
    },
          {
            x: 0,
            y: 0,
            opacity: 1,
            rotate: 0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: char,
              containerAnimation: scrollTween,
              start: "top 92%",
              end: "left 60%",
              scrub: 0.001,
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden lg:flex hidden items-center justify-start h-full mb-50"
    >
      <h2
        ref={textRef}
        className="flex w-max whitespace-nowrap pl-[100vw] font-semibold text-white text-[307px]"
      >
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="letter inline-block will-change-transform text-black tracking-[-0.08em]"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
    </section>
  );
}
