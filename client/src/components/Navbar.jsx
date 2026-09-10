import React, { useState } from 'react'
import { Image } from '@imagekit/react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
      {/* LOGO */}
      <div className='flex items-center gap-4 text-2xl font-bold'>
        <Image urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT} path="/logo.png" className='w-8 h-8' alt="" />
        <span className='text-primary-gradient hover:text-primary-gradient-hover cursor-pointer'>&lt;hieu.dev/&gt;</span>
      </div>
      {/* Mobile menu */}
      <div className='md:hidden'>
        <div className='cursor-pointer text-2xl' onClick={() => setOpen((prev) => !prev)}>{
          open ? "X" : "☰"}
        </div>
        <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${open ? "right-0" : "-right-[100%]"}`}>
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="/">
            <button className='py-2 px-4 rounded-3xl bg-primary-gradient hover:bg-primary-gradient-hover text-white'>Login</button>
          </a>
        </div>
      </div>
      {/* Desktop menu */}
      <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="/">
          <button className='py-2 px-4 rounded-3xl bg-primary-gradient hover:bg-primary-gradient-hover text-white'>Login</button>
        </a>
      </div>

    </div>
  )
}

export default Navbar
