import { PATHS } from "../../../routes"
import ImageKit from "../../Common/ImageKit"
import { Link } from 'react-router-dom'
const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      <div className="md:hidden xl:block xl:w-1/3">
        <ImageKit src="postImg.jpeg" className="rounded-2xl object-cover" w="735" />
      </div>
      {/* details */}
      <div className='flex flex-col gap-4 xl:w-2/3'>
        <Link to={PATHS.SINGLE_POST} className='text-4xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rei aliquid quo Dolorem.</Link>
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className='text-primary-gradient'>Tran Dinh Hieu</Link>
          <span>on</span>
          <Link className='text-primary-gradient'>Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, neque minus ipsam perspiciatis sunt corrupti illo fugiat veniam delectus, ex minima. Obcaecati soluta ex, magni optio porro praesentium consequatur laboriosam.</p>
        <Link to={PATHS.SINGLE_POST} className='underline text-sm text-primary-gradient'>Read More</Link>
      </div>
    </div>
  )
}

export default PostListItem
