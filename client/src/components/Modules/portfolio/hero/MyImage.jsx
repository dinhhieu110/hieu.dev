import ImageKit from "../../../Common/ImageKit"

const MyImage = () => {
  return (
    <div className='absolute w-full h-full top-0 left-0'>
      {/* 3D */}
      <div className="absolute bottom-0 right-0 left-0 m-auto h-4/5 w-max">
        <ImageKit className="w-full h-full object-cover" src="/anh_the.png" />
      </div>
    </div>
  )
}

export default MyImage
