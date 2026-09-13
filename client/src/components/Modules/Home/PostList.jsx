import PostListItem from "./PostListItem"

const PostList = ({ title }) => {
  return (
    <div className=''>
      <h1 className='my-8 text-2xl text-gray-600'>{title || "Recent Posts"}</h1>
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
