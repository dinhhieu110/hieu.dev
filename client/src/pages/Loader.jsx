import React, { useState, useEffect } from "react";
import ImageKit from "../components/Common/ImageKit";

export default function GokuSpaceLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Speed up loading x4 (reduced interval from 180ms to 45ms)
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 8 + 4;
        return Math.min(prev + diff, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-slate-900 overflow-hidden select-none">

      {/* ================= CYBER SPACE GRID BACKGROUND ================= */}
      {/* Curved Perspective Radar Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, transparent 20%, rgba(14, 165, 233, 0.2) 21%, transparent 22%),
            radial-gradient(circle at 50% 50%, transparent 40%, rgba(14, 165, 233, 0.2) 41%, transparent 42%),
            radial-gradient(circle at 50% 50%, transparent 60%, rgba(14, 165, 233, 0.2) 61%, transparent 62%),
            radial-gradient(circle at 50% 50%, transparent 80%, rgba(14, 165, 233, 0.2) 81%, transparent 82%),
            linear-gradient(to right, rgba(14, 165, 233, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(14, 165, 233, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%, 40px 40px, 40px 40px'
        }}
      />

      {/* Starfield / Grid Dots (Dark Slate) */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Soft Light Nebulae Glows */}
      <div className="absolute top-[20%] left-[15%] w-[450px] h-[450px] rounded-full bg-sky-200/50 blur-[130px] pointer-events-none" />
      <div className="absolute top-[20%] right-[15%] w-[450px] h-[450px] rounded-full bg-amber-200/50 blur-[130px] pointer-events-none" />
      {/* ============================================================= */}

      {/* Main Layout Container */}
      <div className="relative z-10 w-full max-w-6xl px-12 flex flex-col items-center">

        {/* Planet Header Area */}
        <div className="relative w-full flex justify-between items-center h-48 mb-6">

          {/* Blue Planet (Left) */}
          <div className="relative w-44 h-44 rounded-full bg-gradient-to-tr from-sky-600 via-sky-400 to-teal-200 shadow-[0_15px_35px_rgba(14,165,233,0.35)] overflow-hidden">
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-black" />
            {/* Planet Atmosphere Glow */}
            <div className="absolute inset-0 rounded-full border border-sky-300/60 shadow-[inset_0_0_20px_rgba(255,255,255,0.8)]" />
          </div>

          {/* Orange Ringed Gas Giant (Right) */}
          <div className="relative w-52 h-52 flex items-center justify-center">
            {/* Planet Sphere */}
            <div className="relative w-44 h-44 rounded-full bg-gradient-to-b from-orange-500 via-amber-600 to-amber-900 shadow-[0_15px_35px_rgba(234,88,12,0.3)] overflow-hidden">
              <div className="absolute top-[25%] inset-x-0 h-4 bg-amber-200/30 blur-[1px]" />
              <div className="absolute top-[50%] inset-x-0 h-6 bg-amber-950/60 blur-[1px]" />
              <div className="absolute top-[65%] right-[20%] w-8 h-5 bg-red-700 rounded-full blur-[1px] opacity-80" />
            </div>
            {/* Outer Rings */}
            <div className="absolute w-[240px] h-[24px] border-[6px] border-amber-400/60 rounded-[100%] transform -rotate-[18deg] blur-[0.5px] shadow-[0_0_15px_rgba(251,191,36,0.4)] pointer-events-none" />
            <div className="absolute w-[260px] h-[28px] border-[2px] border-orange-500/60 rounded-[100%] transform -rotate-[18deg] blur-[1px] pointer-events-none" />
          </div>

        </div>

        {/* Flight Track & Moving Goku Area */}
        <div className="relative w-full h-32 flex items-center">

          {/* 1. Track Bar Container */}
          <div className="relative w-full h-[4px] bg-slate-200 rounded-full overflow-visible shadow-inner">

            {/* Active Progress Beam */}
            <div
              className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 shadow-[0_0_12px_rgba(14,165,233,0.5)] transition-all duration-75 ease-out relative rounded-full"
              style={{ width: `${progress}%` }}
            />

            {/* Target Ring Node at Right Endpoint */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-7 h-7 rounded-full border-2 border-sky-500 bg-white flex items-center justify-center shadow-[0_0_10px_rgba(14,165,233,0.4)]">
              <div className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping" />
            </div>
          </div>

          {/* 2. Flying Goku Dynamic Position */}
          <div
            className="absolute z-20 top-1/2 -translate-y-1/2 transition-all duration-75 ease-out pointer-events-none flex flex-col items-center"
            style={{
              left: `calc(${progress}% - 140px)`,
            }}
          >
            {/* Pure Container without colored auras or overlays */}
            <div className="relative flex items-center justify-center">
              <ImageKit
                src="/spaceship (2).png"
                alt="Son Goku Flying Super Saiyan"
              />
            </div>

            {/* Percentage Display Under Goku */}
            <div className="mt-[-8px] relative z-20 bg-white border border-sky-200 px-3 py-0.5 rounded-full shadow-md">
              <span className="text-xs font-black italic tracking-wider text-sky-600">
                {Math.round(progress)}%
              </span>
            </div>

          </div>

        </div>

        {/* Text Status & Subtitle */}
        <div className="mt-10 text-center space-y-2 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-sky-600 to-indigo-700 drop-shadow-sm">
            {progress >= 100 ? "DESTINATION REACHED!" : `WARPING ACROSS SPACE... ${Math.round(progress)}%`}
          </h1>
          <p className="text-xs md:text-sm uppercase tracking-[0.45em] text-slate-500 font-bold">
            Goku is traversing the galaxy to your page
          </p>
        </div>

      </div>
    </div>
  );
}