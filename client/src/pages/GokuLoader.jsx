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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#010312] text-white overflow-hidden select-none">

      {/* ================= REALISTIC COSMOS BACKGROUND ================= */}
      {/* Cosmic Nebulae */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] rounded-full bg-purple-600/15 blur-[180px] pointer-events-none" />

      {/* Realistic Planet Earth (Top Right) */}
      <div className="absolute top-[6%] right-[10%] w-52 h-52 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.6),inset_-25px_-25px_50px_rgba(0,0,0,0.95)] opacity-90 pointer-events-none overflow-hidden bg-gradient-to-br from-[#1d4ed8] via-[#0284c7] to-[#020617]">
        {/* Oceans and Continents */}
        <div className="absolute top-[20%] left-[15%] w-20 h-16 bg-emerald-600/80 rounded-full blur-[6px] transform -rotate-12" />
        <div className="absolute top-[50%] left-[40%] w-24 h-20 bg-emerald-700/80 rounded-full blur-[8px] transform rotate-45" />
        <div className="absolute bottom-[10%] left-[20%] w-16 h-12 bg-emerald-600/70 rounded-full blur-[5px]" />

        {/* Swirling White Clouds */}
        <div className="absolute top-[10%] left-[-10%] w-[120%] h-8 bg-white/40 blur-[4px] transform -rotate-12 rounded-full" />
        <div className="absolute top-[45%] left-[-10%] w-[130%] h-10 bg-white/30 blur-[5px] transform rotate-6 rounded-full" />
        <div className="absolute top-[70%] left-[-10%] w-[110%] h-6 bg-white/35 blur-[4px] transform -rotate-6 rounded-full" />

        {/* Earth Atmosphere Glow */}
        <div className="absolute inset-0 rounded-full border border-sky-300/40 shadow-[inset_0_0_20px_#38bdf8]" />
      </div>

      {/* Realistic Ringed Gas Giant / Jupiter (Bottom Left) */}
      <div className="absolute bottom-[5%] left-[6%] w-72 h-72 flex items-center justify-center pointer-events-none opacity-85">
        <div className="relative w-64 h-64 rounded-full bg-gradient-to-b from-[#ea580c] via-[#ca8a04] to-[#451a03] shadow-[0_0_60px_rgba(234,88,12,0.4),inset_-30px_-30px_60px_rgba(0,0,0,0.95)] overflow-hidden">
          <div className="absolute top-[15%] inset-x-0 h-4 bg-[#7c2d12]/70 blur-[1px]" />
          <div className="absolute top-[28%] inset-x-0 h-6 bg-[#fef08a]/30 blur-[2px]" />
          <div className="absolute top-[45%] inset-x-0 h-8 bg-[#9a3412]/80 blur-[1px]" />
          <div className="absolute top-[65%] inset-x-0 h-5 bg-[#fde047]/20 blur-[2px]" />
          <div className="absolute top-[50%] right-[25%] w-10 h-7 bg-[#b91c1c] rounded-full blur-[1px] opacity-80" />
        </div>

        <div className="absolute w-[360px] h-[40px] border-[10px] border-[#fde047]/30 rounded-[100%] transform -rotate-[22deg] blur-[0.5px] shadow-[0_0_15px_rgba(253,224,71,0.2)]" />
        <div className="absolute w-[380px] h-[46px] border-[4px] border-[#f97316]/40 rounded-[100%] transform -rotate-[22deg] blur-[1px]" />
      </div>

      {/* Twinkling Starfield */}
      <div className="absolute inset-0 opacity-45 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
      {/* ============================================================= */}

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl px-8 flex flex-col items-center">

        {/* Action Area: Goku + Thick Power Beam */}
        <div className="relative w-full flex items-center justify-start h-80">

          {/* 1. Goku Image Container */}
          <div className="relative z-20 flex-shrink-0 flex items-center justify-center h-[260px]">
            {/* Energy Aura */}
            <div className="absolute inset-0 bg-cyan-400/25 blur-3xl rounded-full scale-125 animate-pulse" />

            <ImageKit
              src="/goku_kamehameha.png"
              alt="Son Goku Kamehameha"
              className="h-full w-auto object-contain relative z-10 drop-shadow-[0_0_30px_rgba(34,211,238,0.9)]"
            />
          </div>

          {/* 2. Beam Progress Bar (Pushed down 8px using translate-y-[8px]) */}
          <div className="relative flex-1 h-[140px] -ml-[72px] flex items-center z-10 transform translate-y-[12px]">

            {/* Track Frame */}
            <div className="w-full h-full bg-slate-950/80 border-2 border-cyan-400/50 rounded-r-full p-2 shadow-[inset_0_0_30px_rgba(0,0,0,0.95)] overflow-hidden flex items-center">
              {/* Progress Beam Fill */}
              <div
                className="h-full rounded-r-full bg-gradient-to-r from-cyan-400 via-sky-100 to-white transition-all duration-300 ease-out relative flex items-center justify-end shadow-[0_0_40px_#38bdf8,0_0_80px_#0284c7,0_0_120px_#38bdf8]"
                style={{ width: `${progress}%` }}
              >
              </div>

            </div>
          </div>

        </div>

        {/* Status Text & Percentage */}
        <div className="mt-8 text-center space-y-2 relative z-10">
          <div className="text-4xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-white drop-shadow-[0_4px_20px_rgba(56,189,248,0.8)]">
            {progress >= 100 ? "KAME...HAME... HA!!!" : `KAME...HAME... ${Math.round(progress)}%`}          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/80 font-bold animate-pulse">
            Charging Ki Across the Cosmos
          </p>
        </div>

      </div>
    </div>
  );
}