import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../routes"; // Adjust path to your routes file
import { Home, Compass } from "lucide-react";
import ImageKit from "../components/ImageKit";

export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a071b] text-white flex items-center justify-center overflow-hidden px-6 py-12 font-sans">

      {/* Background Ambient Glows & Nebulas */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-fuchsia-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Star Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Left Side: High-Detail Astronaut (Occupies 5 columns) */}
        <div className="lg:col-span-5 flex justify-center relative">

          {/* Subtle Rotating Orbit Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] border border-purple-500/20 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none" />

          {/* Floating Astronaut Image */}
          <div className="relative z-10 animate-[bounce_6s_easeInOut_infinite] max-w-[340px] sm:max-w-[420px] lg:max-w-[480px]">
            <ImageKit
              src="/goku_austronaut.jpg"
              alt="Son Goku Astronaut"
              className="w-full h-auto drop-shadow-[0_0_50px_rgba(168,85,247,0.4)] object-contain select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Right Side: Text & Actions (Occupies 7 columns) */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6 lg:pl-8">

          {/* Glow 404 Headline */}
          <div className="relative inline-block">
            <h1 className="text-8xl sm:text-[10rem] font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-fuchsia-500 drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]">
              404
            </h1>
            {/* Halo ring around 404 text */}
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl -z-10" />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wider text-white">
              EVEN GOKU CAN'T FIND THIS PAGE!
            </h2>
            <p className="text-purple-200/80 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              No Ki detected at these coordinates. Let's fly back to base camp.            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">

            {/* Primary Gradient Button */}
            <Link
              to={PATHS.HOME}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600 hover:from-indigo-600 hover:via-purple-700 hover:to-fuchsia-700 text-white font-bold tracking-wider text-sm uppercase transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:scale-105 active:scale-95"
            >
              <Home className="w-8 h-8" />
              Return to Earth Base
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}