import Introduction from "../components/Modules/Home/Introduction"
import BreadCrumbs from "../components/Common/BreadCrumbs"
import Categories from "../components/Modules/Home/Categories"
import FeaturedPosts from "../components/Modules/Home/FeaturedPosts"
import PostList from "../components/Modules/common/PostList"

const Home = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <BreadCrumbs />
      <Introduction />
      <Categories />
      <FeaturedPosts />
      <PostList title="Recent" />
    </div>
  )
}

export default Home
