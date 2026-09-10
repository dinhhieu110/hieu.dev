import React, { useState } from 'react'

const Navbar = () => {
  const [open,setOpen] = useState(false);
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
      {/* LOGO */}
      <div className='flex items-center gap-4 text-2xl font-bold'>
        <img src="/logo.png" className='w-8 h-8' alt="" />
        <span>hieu.dev</span>
      </div>
      {/* Mobile menu */}
      <div className='md:hidden'>
        <div className='cursor-pointer text-2xl' onClick={() => setOpen((prev)=> !prev)}>{
          open ? "X" : "☰"}
        </div>
        <div className='w-full h-screen flex flex-col items-center justify-center'></div>
      </div>
      {/* Desktop menu */}
      <div className='hidden md:flex'>D</div>

    </div>
  )
}

export default Navbar
