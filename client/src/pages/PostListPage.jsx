import { useState } from "react"
import PostList from "../components/Modules/common/PostList"
import SideMenu from "../components/Modules/postlist/SideMenu"

const PostListPage = ({ category }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className='my-8 text-5xl text-gray-600 font-semibold'>{category || "Technology"} Posts</h1>
      <button onClick={() => setOpen((prev) => !prev)} className="text-white text-sm bg-primary-gradient hover:bg-primary-gradient-hover font-medium rounded-2xl px-4 py-2 md:hidden w-max">{open ? "Close" : "Filter or Search"}</button>
      <div className="flex gap-8 flex-col-reverse md:flex-row">
        <div className="">
          <PostList title="" />
        </div>
        <div
          aria-hidden={!open}
          className={` ${open ? 'block' : 'hidden'} md:block`}
        >
          <SideMenu />
        </div>
      </div>

    </div >
  )
}

export default PostListPage
