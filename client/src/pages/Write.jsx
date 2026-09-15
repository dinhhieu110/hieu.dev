import { useUser } from "@clerk/react"
import Loader from "../pages/Loader"
import Login from "../pages/auth/Login"
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useState } from "react";

const Write = () => {
  const [value, setValue] = useState('');
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <Loader />
  }

  if (isLoaded && !isSignedIn) {
    return <Login />
  }

  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap=6'>
      <h1 className="text-5xl font-semibold">Create A New Post</h1>
      <form className="flex flex-col gap-6 flex-1 my-6 ">
        <button className="p-4 shadow-md rounded-xl text-sm text-white w-max bg-black cursor-pointer  ">Add a cover image</button>
        <input className="text-4xl font-semibold bg-transparent outline-none border-b border-b-neutral-300 pb-2" type="text" placeholder="My Awesome Story" />
        <div className="flex items-center gap-4">
          <label className="text-sm">Category:</label>
          <select name="category" id="" className="py-2 px-4 border border-neutral-300 rounded-xl shadow-md cursor-pointer">
            <option value="technology">Technology</option>
            <option value="foreign-language">Foreign Language</option>
            <option value="financial-management">Financial Management</option>
            <option value="daily-life">Daily Life</option>
          </select>
        </div>
        <textarea name="description" placeholder="A short description" className=" border border-b-neutral-300 rounded-xl p-4"></textarea>
        <ReactQuill theme="snow" value={value} onChange={setValue} className="flex-1 rounded-xl shadow-md border border-b-neutral-300 " />
        <div className="flex justify-end">
          <button className="text-white bg-primary-gradient hover:bg-primary-gradient-hover font-medium rounded-xl mt-4 p-4 w-36">Send</button>
        </div>
      </form>
    </div>
  )
}

export default Write