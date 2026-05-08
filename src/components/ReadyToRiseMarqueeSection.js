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
    const sectionHeight = section.offsetHeight;
    const textWidth = textEl.offsetWidth;

    gsap.set(textEl, {
      y: sectionHeight * 0.44,
      x: window.innerWidth + 40,
    });

    // MAIN TEXT ANIMATION (FIXED)
    gsap.to(textEl, {
      x: -(textWidth - window.innerWidth + 300),
      y: Math.min(
        sectionHeight * 0.4,
        sectionHeight - textEl.offsetHeight * 0.35
      ),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${textWidth + 800}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // LETTER ANIMATION (UNCHANGED, only fixed timing)
    gsap.set(letters, {
      yPercent: -40,
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
        start: "top top",
        end: () => `+=${textWidth + 800}`,
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  }, section);

  return () => ctx.revert();
}, []);

  return (
    <section ref={sectionRef} className="hidden items-center justify-center overflow-hidden  lg:block">
      <div className="flex h-[500px] items-start justify-start">
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
