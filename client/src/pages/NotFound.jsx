import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../routes"; // Adjust path to your routes file
import { Home } from "lucide-react";
import ImageKit from "../components/Common/ImageKit";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full bg-white text-slate-900 flex items-center justify-center overflow-hidden px-6 py-12 font-sans">

      {/* Background Ambient Glows - Adjusted opacities for light background */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-200/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-fuchsia-200/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Dot Grid Pattern - Switched white dots to slate dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Left Side: High-Detail Astronaut */}
        <div className="lg:col-span-5 flex justify-center relative">

          {/* Rotating Orbit Accent - Darkened border */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] border border-purple-300/60 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none" />

          {/* Floating Astronaut Image - Softened drop shadow for light BG */}
          <div className="relative z-10 animate-[bounce_6s_easeInOut_infinite] max-w-[340px] sm:max-w-[420px] lg:max-w-[480px]">
            <ImageKit
              src="/goku_austronaut.jpg"
              alt="Son Goku Astronaut"
              className="w-full h-auto drop-shadow-[0_20px_35px_rgba(147,51,234,0.25)] object-contain select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Right Side: Text & Actions */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6 lg:pl-8">

          {/* Glow 404 Headline - Darkened gradient for high contrast */}
          <div className="relative inline-block">
            <h1 className="text-8xl sm:text-[10rem] font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-fuchsia-600 drop-shadow-sm">
              404
            </h1>
            {/* Soft background halo ring */}
            <div className="absolute inset-0 bg-purple-300/30 rounded-full blur-2xl -z-10" />
          </div>

          <div className="space-y-4">
            {/* Changed text-white to text-slate-900 */}
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wider text-slate-900">
              EVEN GOKU CAN'T FIND THIS PAGE!
            </h2>
            {/* Changed light purple text to readable dark slate */}
            <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              No Ki detected at these coordinates. Let's fly back to base camp.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

            {/* Primary Gradient Button */}
            <Link
              to={PATHS.HOME}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 hover:from-indigo-700 hover:via-purple-700 hover:to-fuchsia-700 text-white font-bold tracking-wider text-sm uppercase transition-all duration-300 shadow-[0_10px_25px_rgba(147,51,234,0.3)] hover:shadow-[0_15px_30px_rgba(147,51,234,0.45)] hover:scale-105 active:scale-95"
            >
              <Home className="w-5 h-5" />
              Return to Earth Base
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}