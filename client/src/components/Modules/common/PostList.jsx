import PostListItem from "../home/PostListItem"

const PostList = ({ title }) => {
  return (
    <div className=''>
      {title && <h1 className='my-8 text-5xl text-gray-600 font-semibold'>{title} Posts</h1>}
      <div className="flex flex-col gap-12 mb-8">
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
      </div>
    </div>
  )
}

export default PostList