import { Link } from "react-router-dom"
import ImageKit from "../../Common/ImageKit"
import { PATHS } from "../../../routes"

const FeaturedPosts = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <ImageKit src="/featured1.jpeg" className="rounded-3xl object-cover" w="895" />
        <div className="flex items-start gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-primary-gradient lg:text-lg">Web Design</Link>
          <span className="text-gray-500 bg-gray-300 mt-1">2 days ago</span>
        </div>
        <Link to={PATHS.SINGLE_POST} className="text-lg lg:text-3xl font-semibold lg:font-bold">Lorem ipsum dolor sit, amet consectodi.</Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <ImageKit src="/featured2.jpeg" className="rounded-3xl object-cover w-full h-full" w="298" />
          </div>
          <div className="w-2/3 ">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02. </h1>
              <Link className="text-primary-gradient">Web Design</Link>
              <span className="text-gray-500 bg-gray-300 mt-1 text-sm">2 days ago</span>
            </div>
            <Link to={PATHS.SINGLE_POST} className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit, amet consectodi.</Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <ImageKit src="/featured3.jpeg" className="rounded-3xl object-cover  w-full h-full" w="298" />
          </div>
          <div className="w-2/3 ">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02. </h1>
              <Link className="text-primary-gradient">Web Design</Link>
              <span className="text-gray-500 bg-gray-300 mt-1 text-sm">2 days ago</span>
            </div>
            <Link to={PATHS.SINGLE_POST} className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit, amet consectodi.</Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <ImageKit src="/featured4.jpeg" className="rounded-3xl object-cover  w-full h-full" w="298" />
          </div>
          <div className="w-2/3 ">
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02. </h1>
              <Link className="text-primary-gradient">Web Design</Link>
              <span className="text-gray-500 bg-gray-300 mt-1 text-sm">2 days ago</span>
            </div>
            <Link to={PATHS.SINGLE_POST} className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Lorem ipsum dolor sit, amet consectodi.</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FeaturedPosts
