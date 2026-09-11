import Introduction from "../components/Modules/Home/Introduction"
import BreadCrumbs from "../components/Common/BreadCrumbs"
import Categories from "../components/Modules/Home/Categories"

const Home = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <BreadCrumbs />
      <Introduction />
      <Categories />
      {/* Featured Posts */}
      {/* Posts List */}
    </div>
  )
}

export default Home
