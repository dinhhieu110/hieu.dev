import React, { useState, useEffect } from "react";
import ImageKit from "../components/ImageKit";

export default function GokuSpaceLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 8 + 4;
        return Math.min(prev + diff, 100);
      });
    }, 180);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white overflow-hidden select-none">

      {/* ================= CYBER SPACE GRID BACKGROUND ================= */}
      {/* Curved Perspective Radar Grid Background */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, transparent 20%, rgba(56, 189, 248, 0.15) 21%, transparent 22%),
            radial-gradient(circle at 50% 50%, transparent 40%, rgba(56, 189, 248, 0.15) 41%, transparent 42%),
            radial-gradient(circle at 50% 50%, transparent 60%, rgba(56, 189, 248, 0.15) 61%, transparent 62%),
            radial-gradient(circle at 50% 50%, transparent 80%, rgba(56, 189, 248, 0.15) 81%, transparent 82%),
            linear-gradient(to right, rgba(56, 189, 248, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%, 40px 40px, 40px 40px'
        }}
      />

      {/* Starfield / Grid Dots */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Nebulae Glows */}
      <div className="absolute top-[20%] left-[15%] w-[450px] h-[450px] rounded-full bg-cyan-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-[20%] right-[15%] w-[450px] h-[450px] rounded-full bg-amber-600/10 blur-[140px] pointer-events-none" />
      {/* ============================================================= */}

      {/* Main Layout Container */}
      <div className="relative z-10 w-full max-w-6xl px-12 flex flex-col items-center">

        {/* Planet Header Area */}
        <div className="relative w-full flex justify-between items-center h-48 mb-6">

          {/* Blue Planet (Left) */}
          <div className="relative w-44 h-44 rounded-full bg-gradient-to-tr from-sky-900 via-blue-600 to-teal-300 shadow-[0_0_50px_rgba(56,189,248,0.5),inset_-20px_-20px_40px_rgba(0,0,0,0.8)] overflow-hidden">
            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-black" />
            {/* Planet Atmosphere Glow */}
            <div className="absolute inset-0 rounded-full border border-sky-300/40 shadow-[inset_0_0_20px_#38bdf8]" />
          </div>

          {/* Orange Ringed Gas Giant (Right) */}
          <div className="relative w-52 h-52 flex items-center justify-center">
            {/* Planet Sphere */}
            <div className="relative w-44 h-44 rounded-full bg-gradient-to-b from-[#ea580c] via-[#9a3412] to-[#451a03] shadow-[0_0_50px_rgba(234,88,12,0.4),inset_-20px_-20px_40px_rgba(0,0,0,0.9)] overflow-hidden">
              <div className="absolute top-[25%] inset-x-0 h-4 bg-[#fde047]/20 blur-[1px]" />
              <div className="absolute top-[50%] inset-x-0 h-6 bg-[#7c2d12]/80 blur-[1px]" />
              <div className="absolute top-[65%] right-[20%] w-8 h-5 bg-[#b91c1c] rounded-full blur-[1px] opacity-80" />
            </div>
            {/* Outer Rings */}
            <div className="absolute w-[240px] h-[24px] border-[6px] border-[#fde047]/40 rounded-[100%] transform -rotate-[18deg] blur-[0.5px] shadow-[0_0_15px_rgba(253,224,71,0.3)] pointer-events-none" />
            <div className="absolute w-[260px] h-[28px] border-[2px] border-[#ea580c]/50 rounded-[100%] transform -rotate-[18deg] blur-[1px] pointer-events-none" />
          </div>

        </div>

        {/* Flight Track & Moving Goku Area */}
        <div className="relative w-full h-32 flex items-center">

          {/* 1. Thin Glowing Laser Progress Bar */}
          <div className="relative w-full h-[3px] bg-cyan-900/60 rounded-full overflow-visible shadow-[0_0_10px_rgba(6,182,212,0.5)]">

            {/* Active Progress Beam */}
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-sky-300 to-white shadow-[0_0_15px_#38bdf8,0_0_30px_#38bdf8] transition-all duration-200 ease-out relative"
              style={{ width: `${progress}%` }}
            />

            {/* Target Ring Node at Right Endpoint */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-7 h-7 rounded-full border-2 border-cyan-400/80 flex items-center justify-center shadow-[0_0_15px_#38bdf8]">
              <div className="w-2 h-2 rounded-full animate-ping" />
            </div>
          </div>

          {/* 2. Flying Goku Dynamic Position */}
          <div
            className="absolute z-20 top-1/2 -translate-y-1/2 transition-all duration-200 ease-out pointer-events-none flex flex-col items-center"
            style={{
              left: `calc(${progress}% - 140px)`, // Offsets image to keep Goku centered on the progress tip
            }}
          >
            {/* Super Saiyan Aura Effect Container */}
            <div className="relative flex items-center justify-center">

              {/* Back Energy Aura Glow */}
              <div className="absolute w-72 h-44 bg-gradient-to-r from-cyan-400/30 via-amber-300/40 to-transparent blur-xl rounded-full animate-pulse" />

              {/* Flying Goku PNG Image */}
              <ImageKit
                src="/spaceship (2).png"
                alt="Son Goku Flying Super Saiyan"
              />
            </div>

            {/* Percentage Display Under Goku */}
            <div className="mt-[-8px] relative z-20 bg-slate-950/80 border border-cyan-400/50 px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]">
              <span className="text-xs font-black italic tracking-wider text-cyan-300">
                {Math.round(progress)}%
              </span>
            </div>

          </div>

        </div>

        {/* Text Status & Subtitle */}
        <div className="mt-10 text-center space-y-2 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-sky-200 to-white drop-shadow-[0_4px_20px_rgba(56,189,248,0.7)]">
            {progress >= 100 ? "DESTINATION REACHED!" : `WARPING ACROSS SPACE... ${Math.round(progress)}%`}
          </h1>
          <p className="text-xs md:text-sm uppercase tracking-[0.45em] text-cyan-400/80 font-bold">
            Goku is traversing the galaxy to your page
          </p>
        </div>

      </div>
    </div>
  );
}