import React from "react";
import bord from "../assets/jpg/bord.jpg";
import { GoArrowUpRight } from "react-icons/go";

const Arr = () => <GoArrowUpRight />;

export default function AboutSection() {
  return (
    <section className="bg-[#f0efeb] xl:py-10 lg:py- p-6 flex justify-between md:px-7 px-0">

      {/* Left - text (desktop only) */}
      <div className="md:order-1 order-3 flex-1 md:flex hidden">
        <p className="leading-tight tracking-[-0.04em] xl:text-[24px] lg:text-[18px] font-medium text-black xl:max-w-[420px] lg:max-w-[360px]">
          A global team of search-first content marketers engineering semantic
          relevancy &amp; category signals for both the internet and people
        </p>
      </div>

      {/* Right - heading + buttons */}
      <div className="flex flex-col items-start gap-3 md:order-2 order-1 md:flex-1 w-full">

        <h2 className="px-5 xl:text-[90px] lg:text-[65px] sm:text-[50px] text-[50px] font-semibold tracking-[-0.04em] leading-[0.95]">
          Driving Demand &amp;{" "}
          <span className="inline-flex items-center flex-wrap justify-start">
            Discovery
            <span className="inline-block w-[50px] h-[50px] rounded-xl overflow-hidden align-middle ml-2 shadow-[0_4px_20px_rgba(0,0,0,0.15)] shrink-0">
              <img src={bord} alt="Discovery" className="w-full h-full object-cover" />
            </span>
          </span>
        </h2>

        {/* Mobile only text */}
        <p className="leading-tight tracking-[-0.03em] px-5 text-[18px] font-medium text-black max-w-[420px] md:hidden flex">
          A global team of search-first content marketers engineering semantic
          relevancy &amp; category signals for both the internet and people
        </p>

        {/* Buttons */}
        <div className="flex md:flex-row flex-col justify-start md:w-auto w-full gap-2 px-5 py-2">

          <a href="#" className="relative overflow-hidden inline-flex items-center justify-center px-6 py-3 bg-white text-[#1a1a1a] rounded-full text-[15px] font-semibold no-underline transition-all duration-200 hover:rounded-xl md:w-auto w-full group">
            <span className="flex items-center gap-1 transition-all duration-200 group-hover:-translate-y-full group-hover:opacity-0">
              Our Story <Arr />
            </span>
            <span className="flex items-center justify-center gap-1 absolute inset-0 translate-y-full opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
              Our Story <Arr />
            </span>
          </a>

          <a href="#" className="relative overflow-hidden inline-flex items-center justify-center px-6 py-3 text-[#1a1a1a] rounded-full text-[15px] font-semibold no-underline transition-all duration-200 hover:rounded-xl md:w-auto w-full group">
            <span className="flex items-center gap-1 transition-all duration-200 group-hover:-translate-y-full group-hover:opacity-0">
              Our Services <Arr />
            </span>
            <span className="flex items-center justify-center gap-1 absolute inset-0 translate-y-full opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
              Our Services <Arr />
            </span>
          </a>

        </div>
      </div>

    </section>
  );
}