import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { PATHS } from '../../routes';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
      {/* LOGO */}
      <Link to={PATHS.HOME} className='flex items-center gap-4 text-2xl font-bold'>
        <span className='text-primary-gradient hover:text-primary-gradient-hover cursor-pointer'>&lt;hieu.dev/&gt;</span>
      </Link>
      {/* Mobile menu */}
      <div className='md:hidden'>
        <div className='cursor-pointer text-2xl' onClick={() => setOpen((prev) => !prev)}>{
          open ? "X" : "☰"}
        </div>
        <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${open ? "right-0" : "-right-[100%]"}`}>
          <Link to={PATHS.HOME} >Home</Link>
          <Link to={PATHS.POSTS} >Trending</Link>
          <Link to={PATHS.SINGLE_POST} >Most Popular</Link>
          <Link to={PATHS.HOME} >About</Link>
          <Link to={PATHS.HOME} >
            <button className='py-2 px-4 rounded-3xl bg-primary-gradient hover:bg-primary-gradient-hover text-white'>Login</button>
          </Link>
          <Show when="signed-out">
            <SignInButton />
            <SignUpButton />
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </div>
      {/* Desktop menu */}
      <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
        <Link to={PATHS.HOME} >Home</Link>
        <Link to={PATHS.POSTS} >Trending</Link>
        <Link to={PATHS.SINGLE_POST} >Most Popular</Link>
        <Link to={PATHS.HOME} >About</Link>
        <Show when="signed-out">
          <Link to="/login" >
            <button className='py-2 px-6 rounded-3xl bg-primary-gradient hover:bg-primary-gradient-hover text-white'>Login</button>
          </Link>
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </div>
  )
}

export default Navbar
