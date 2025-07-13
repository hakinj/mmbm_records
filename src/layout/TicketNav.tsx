import React from "react";

export default function TickerNav() {
  return (
    <div className="w-full bg-black overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-ticker">
        <span className="text-white font-medium text-sm mx-8">
          🔥 New Release: 100 Meter by Aayo Vol.1
        </span>
        <span className="text-white font-medium text-sm mx-8">
          🎧 Stream Now on All Platforms
        </span>
        <span className="text-white font-medium text-sm mx-8">
          ✨ Follow MMBM Records for Updates
        </span>
        <span className="text-white font-medium text-sm mx-8">
          🚀 Upcoming Artist Showcase – July 20
        </span>
      </div>
    </div>
  );
}
