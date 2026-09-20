import { Link } from 'react-router-dom'

const ContactButton = () => {
  return (
    <Link to="/write" className="hidden md:flex relative w-[200px] h-[200px] items-center justify-center">
      {/* Rotating SVG Text */}
      <svg
        viewBox="0 0 200 200"
        width="200"
        height="200"
        className="text-lg tracking-widest animate-spin animatedButton"
      >
        <path
          id="circlePath"
          fill="none"
          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
        />
        <text fill="currentColor">
          <textPath href="#circlePath" startOffset="0%">Hire now ·</textPath>
          <textPath href="#circlePath" startOffset="50%">Contact me·</textPath>
        </text>
      </svg>

      {/* Centered Circle Button */}
      <div className="bg-primary-gradient rounded-full flex items-center justify-center absolute h-20 w-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          <line x1="6" y1="18" x2="18" y2="6" />
          <polyline points="9 6 18 6 18 15" />
        </svg>
      </div>
    </Link>
  )
}

export default ContactButton