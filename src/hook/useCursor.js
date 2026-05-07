import {
  useRef,
  useCallback,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";
import { gsap } from "gsap";
import { MdOutlineArrowUpward } from "react-icons/md";

export function useCursor() {
  const cursorRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const containerRef = useRef(null);

  const onMouseEnter = useCallback(() => {
    cursorRef.current?.show();
  }, []);

  const onMouseLeave = useCallback(() => {
    cursorRef.current?.hide();
  }, []);

  const onMouseMove = useCallback((e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      posRef.current = { x, y };
      cursorRef.current?.move(x, y);
    });
  }, []);

  useEffect(
    () => () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  return { cursorRef, containerRef, onMouseEnter, onMouseLeave, onMouseMove };
}

export const CursorDot = forwardRef(function CursorDot(
  { size = 54, color = "#5eead4", label = null, icon = "arrow" },
  ref,
) {
  const dotRef = useRef(null);
  const ringsRef = useRef([]);

  useImperativeHandle(ref, () => ({
    show() {
      const dot = dotRef.current;
      if (!dot) return;

      gsap.killTweensOf(dot);
      gsap.set(dot, { scale: 0, opacity: 0 });
      gsap.to(dot, {
        scale: 1,
        opacity: 1,
        duration: 0.55,
        ease: "elastic.out(1, 0.5)",
      });

      ringsRef.current.forEach((ring, i) => {
        if (!ring) return;
        gsap.killTweensOf(ring);
        gsap.set(ring, { scale: 0.3, opacity: 0.6 });
        gsap.to(ring, {
        //   scale: 2.2 + i * 0.4,
          opacity: 0,
          duration: 0.8 + i * 0.15,
          delay: i * 0.01,
          ease: "power2.out",
        });
      });
    },

    hide() {
      const dot = dotRef.current;
      if (!dot) return;
      gsap.killTweensOf(dot);
      gsap.to(dot, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    },

    move(x, y) {
      const dot = dotRef.current;
      if (!dot) return;
      gsap.to(dot, {
        x,
        y,
        duration: 0.12,
        ease: "power2.out",
        overwrite: "auto",
      });
    },
  }));

  // Icon SVGs
  const icons = {
    arrow: (
     <MdOutlineArrowUpward
    size={40}
    color="black"
    style={{
      transform: "rotate(45deg)",
    }}
  />
    ),
    plus: (
     <MdOutlineArrowUpward
    size={22}
    color="black"
    style={{
      transform: "rotate(45deg)",
    }}
  />
    ),
    eye: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 50,
        willChange: "transform",
      }}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          ref={(el) => (ringsRef.current[i] = el)}
          style={{
            position: "absolute",
            width: size,
            height: size,
            borderRadius: "50%",
            // border: `2px solid ${color}`,
            opacity: 0,
            transform: "translate(-50%, -50%) scale(0.3)",
            top: 0,
            left: 0,
          }}
        />
      ))}

      <div
        ref={dotRef}
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "translate(-50%, -50%) scale(0)",
          opacity: 0,
          willChange: "transform, opacity",
          fontSize: 1,
          fontWeight: 700,
          color: "black",
          letterSpacing: "-0.02em",
          gap: 4,
          userSelect: "none",
        }}
      >
        {icon && icons[icon]}
        {label && <span>{label}</span>}
      </div>
    </div>
  );
});
