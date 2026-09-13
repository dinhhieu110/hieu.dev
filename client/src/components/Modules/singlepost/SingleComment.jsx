import ImageKit from "../../Common/ImageKit";

const SingleComment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
      <div className="flex items-center gap-4">
        <ImageKit
          src="/userImg.jpeg"
          alt="Single Post"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">Tran Dinh Hieu</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla at dolor accusantium?
          Animi possimus voluptas ex, error, quisquam nisi perferendis, eligendi quod expedita
          vero autem quam. Commodi nesciunt modi deserunt!
        </p>
      </div>
    </div>
  )
}

export default SingleComment
