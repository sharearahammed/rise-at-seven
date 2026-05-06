import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

/**
 * Phase 1 — Enter (নিচ থেকে উপরে উঠে আসা)
 *
 *  ENTER_0  →  flat line at very bottom (invisible start)
 *  ENTER_1  →  curve peeks from bottom (arc bulging up)
 *  ENTER_2  →  fully covers the screen (flat top)
 */
const ENTER_0 = "M 0 100 V 100 Q 50 100 100 100 V 100 z";
const ENTER_1 = "M 0 100 V 60  Q 50 10  100 60  V 100 z";
const ENTER_2 = "M 0 100 V 0   Q 50 0   100 0   V 100 z";

/**
 * Phase 2 — Exit (উপর থেকে নিচে নেমে চলে যাওয়া)
 *
 *  EXIT_1   →  curve droops downward from top (arc bulging down)
 *  EXIT_2   →  flat line exits off screen bottom
 */
const EXIT_1 = "M 0 0  V 50  Q 50 5   100 50  V 0  z";
const EXIT_2 = "M 0 -50  V -60   Q 50 0   100 -55   V -50   z";

/**
 * PageTransition
 *
 * Page load এ নিচ থেকে সুন্দর curve নিয়ে উঠে আসে,
 * পুরো screen ঢাকে, তারপর উপর থেকে curve করে বেরিয়ে যায়।
 *
 * Props:
 *  - color       : fill color             (default: "#B2F6E3")
 *  - enterDur    : enter animation (s)    (default: 0.75)
 *  - holdDur     : screen ঢাকা থাকার সময় (default: 0.15)
 *  - exitDur     : exit animation (s)     (default: 0.75)
 *  - delay       : শুরু হওয়ার আগে wait    (default: 0.1)
 *  - onComplete  : শেষ হলে callback
 */
export default function PageTransition({
  color = "#B2F6E3",
  enterDur = 1,
  holdDur = 0.05,
  exitDur = 0.75,
  delay = 0.1,
  onComplete,
}) {
  const pathRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const wrapper = wrapperRef.current;
    if (!path || !wrapper) return;

    gsap.set(path, { attr: { d: ENTER_2 } });
    gsap.set(wrapper, { autoAlpha: 1 });

    const tl = gsap.timeline({
      delay,
      onComplete: () => {
        gsap.set(wrapper, { autoAlpha: 0 });
        onComplete?.();
      },
    });

    tl
      // --- Phase 1: Enter ---
      // সম্পূর্ণ screen ঢেকে যায়
      .to(path, {
        morphSVG: ENTER_2,
        duration: enterDur * 0.01,
        ease: "power2.out",
      })

      // --- Hold ---
      .to({}, { duration: holdDur })

      // --- Phase 2: Exit ---
      // উপর থেকে curve তৈরি হয়ে নামতে শুরু করে
      .to(path, {
        morphSVG: EXIT_1,
        duration: exitDur * 0.5,
        ease: "power2.in",
      })
      // সম্পূর্ণ বেরিয়ে যায়
      .to(path, {
        morphSVG: EXIT_2,
        duration: exitDur * 0.5,
        ease: "power3.out",
      });

    return () => {
      tl.kill();
    };
  }, [enterDur, holdDur, exitDur, delay, onComplete]);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        visibility: "visible",
      }}
    >
      <svg
        style={{ width: "100%", height: "100%", display: "block" }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path ref={pathRef} fill={color} d={ENTER_2} />
      </svg>
    </div>
  );
}
