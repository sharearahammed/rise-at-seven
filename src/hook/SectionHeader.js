import React from "react";

export default function SectionHeader({
  sectionRef,
  headingRef1,
  headingRef2,
  imageRef,
  open,
  imgSize,
  image,
  imageAlt = "img",
  titleStart = "Our",
  titleEnd = "Services",
  buttonText = "View All Services ↗",
  buttonHref = "#",
}) {
  return (
    <div className="flex items-center justify-between pb-6 lg:border-b border-black/15 flex-wrap gap-4">
      <div
        ref={sectionRef}
        className="flex items-center gap-3 leading-none"
      >
        <span
          ref={headingRef1}
          className="xl:text-[100px] lg:text-[75px] text-[60px] font-semibold tracking-[-0.04em] leading-none select-none overflow-hidden inline-block"
        >
          {titleStart}
        </span>

        <span
          ref={imageRef}
          style={{
            width: open ? imgSize.w : "0px",
            height: open ? imgSize.h : "55px",
            transition:
              "width 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
          className="relative inline-block overflow-hidden rounded-[15%] shrink-0 shadow"
        >
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </span>

        <span
          ref={headingRef2}
          className="xl:text-[100px] lg:text-[75px] text-[60px] font-semibold tracking-[-0.04em] leading-none select-none overflow-hidden inline-block"
        >
          {titleEnd}
        </span>
      </div>

      <a href={buttonHref} className="git-btn">
        <span className="git-text">{buttonText}</span>
        <span className="git-hover-text">{buttonText}</span>
      </a>
    </div>
  );
}