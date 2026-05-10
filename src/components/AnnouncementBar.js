import React from "react";

const announcementText = "🚨 The Category Leaderboard - Live Now";

export default function AnnouncementBar() {
  return (
    <div
      id="announcement-bar"
      className="group mx-[10px] my-[10px] cursor-pointer select-none rounded-full bg-[#B2F6E3] py-[6px] text-center text-[11px] font-bold text-[#111212]"
    >
      <span className="relative inline-block overflow-hidden align-top">
        <span className="text-[14px] block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {announcementText}
        </span>
        <span className="text-[14px] absolute left-0 top-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
          {announcementText}
        </span>
      </span>
    </div>
  );
}
