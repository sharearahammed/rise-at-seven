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
      gsap.set(textEl, {
        y: () => window.innerHeight * 0.24,
        x: () => window.innerWidth + 40,
      });

      gsap.to(textEl, {
        x: () => -(textEl.offsetWidth - window.innerWidth + 1000),
        y: () =>
          Math.min(
            window.innerHeight * 0.56,
            window.innerHeight - textEl.offsetHeight * 0.55,
          ),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 35%",
          end: () =>
            `+=${textEl.offsetWidth - window.innerWidth + window.innerHeight * 0.75}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.set(letters, {
        yPercent: -100,
        rotate: 10,
        transformOrigin: "50% 100%",
      });

      gsap.to(letters, {
        yPercent: 0,
        rotate: 0,
        ease: "back.inOut(4)",
        stagger: 0.35,
        duration: 2.5,
        scrollTrigger: {
          trigger: section,
          start: "top 42%",
          end: () => `+=${textEl.offsetWidth - window.innerWidth + 500}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hidden overflow-hidden pb-24 lg:block">
      <div className="flex h-screen items-start justify-start">
        <h2
          ref={textRef}
          className="shrink-0 whitespace-nowrap font-medium tracking-tight leading-tight text-[16vw] 2xl:text-[14vw]"
        >
          {text.split("").map((char, i) => (
            <span
              key={i}
              className="letter inline-block will-change-transform text-black"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
