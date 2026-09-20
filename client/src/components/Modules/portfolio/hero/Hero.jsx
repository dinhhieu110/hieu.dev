import { Link } from "react-router-dom"
import "./hero.css"
import ImageKit from "../../../Common/ImageKit"
import SpeechBubble from "./SpeechBubble"
import ContactButton from "./ContactButton"
import MyImage from "./MyImage"

const Hero = () => {
  return (
    <div className="h-5/6 w-full py-6 px-4 md:px-12 flex box-border">
      {/* left */}
      <div className="w-1/2 h-full min-h-0 flex flex-col justify-between font-['Inter',sans-serif]">
        {/* Responsive text size to prevent overflow on lower vertical resolution screens */}
        <h1 className="text-5xl sm:text-6xl xl:text-8xl text-slate-900 font-extrabold tracking-tighter leading-[1.05]">
          Hey There, <br />
          <span className="text-primary-gradient">I&apos;m Hieu!</span>
        </h1>

        {/* awards */}
        <div className="w-full max-w-sm">
          <h2 className="text-slate-700 font-semibold text-base sm:text-lg">Top Rated Designer</h2>
          <p className="text-xs sm:text-sm text-gray-500 my-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </p>
          <div className="flex gap-2">
            <ImageKit className="w-8 h-8 sm:w-9 sm:h-9 p-2 bg-sky-50 hover:border-sky-100 rounded-full cursor-pointer" src="/award1.png" />
            <ImageKit className="w-8 h-8 sm:w-9 sm:h-9 p-2 bg-sky-50 hover:border-sky-100 rounded-full cursor-pointer" src="/award2.png" />
            <ImageKit className="w-8 h-8 sm:w-9 sm:h-9 p-2 bg-sky-50 hover:border-sky-100 rounded-full cursor-pointer" src="/award3.png" />
          </div>
        </div>

        {/* Scroll SVG */}
        <a href="#services" className="w-max inline-block">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="#0f172a"
              strokeWidth="1.5"
            />
          </svg>
        </a>
      </div>

      {/* right */}
      <div className="w-1/2 h-full min-h-0 flex flex-col justify-between items-end -z-1">
        {/* Social */}
        <div className="flex gap-3 flex-col p-4 bg-slate-900 rounded-3xl">
          <Link to={"/"}>
            <ImageKit className="w-5 h-5 sm:w-8 sm:h-8" src="/instagram.png" />
          </Link>
          <Link to={"/"}>
            <ImageKit className="w-5 h-5 sm:w-8 sm:h-8" src="/facebook.png" />
          </Link>
          <Link to={"/"}>
            <ImageKit className="w-5 h-5 sm:w-8 sm:h-8" src="/youtube.png" />
          </Link>
          <div className="relative w-full h-8 flex justify-center mt-1">
            <div className="absolute left-1/2 top-0 origin-top-left rotate-90 translate-x-3.5 sm:translate-x-4 text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap bg-primary-gradient px-3 py-1 text-white shadow-md rounded-3xl">
              FOLLOW ME
            </div>
          </div>
        </div>
        <SpeechBubble />
        <ContactButton />
      </div>
      <MyImage />
    </div>
  )
}

export default Hero