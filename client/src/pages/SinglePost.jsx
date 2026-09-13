import { Link, useSearchParams } from "react-router-dom";
import ImageKit from "../components/Common/ImageKit";
import MenuActions from "../components/Modules/singlepost/MenuActions";
import { PATHS } from "../routes";
import Search from "../components/Modules/singlepost/Search";


const CATEGORIES = [
  { label: 'All Posts', slug: null },
  { label: 'Technology', slug: 'technology' },
  { label: 'Foreign Language', slug: 'foreign-language' },
  { label: 'Financial Management', slug: 'financial-management' },
  { label: 'Daily Life', slug: 'daily-life' },
];


const SinglePost = () => {
  const [searchParams] = useSearchParams()
  const currentCategory = searchParams.get('category')

  return (
    <div className="flex flex-col gap-8">
      {/* Details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elite.</h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className='text-primary-gradient'>Tran Dinh Hieu</Link>
            <span>on</span>
            <Link className='text-primary-gradient'>Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="font-medium text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi reiciendis hic
            dolore rerum nulla suscipit cumque, culpa perferendis. Dicta nulla autem perferendis quo tenetur,
            tque earum obcaecati repellat quam! Deserunt!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <ImageKit
            src="/postImg.jpeg"
            alt="Single Post"
            className="rounded-2xl"
          />
        </div>

      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Fuga itaque nulla esse, provident suscipit doloribus nobis aliquam
            ea repellat non quis blanditiis rem porro commodi, sequi explicabo magnam corporis. Odio!
          </p>
        </div>
        {/* menu */}
        <div className="p-4 h-max sticky top-24 shadow-md rounded-2xl">
          <h1 className="mb-2 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <ImageKit
                src="/userImg.jpeg"
                alt="Single Post"
                className="w-12 h-12 rounded-full object-cover" w="48" h="48"
              />
              <Link className='text-primary-gradient'>Tran Dinh Hieu</Link>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dcepturitecto.</p>
            <div className="flex gap-2">
              <Link className='text-primary-gradient'>
                <ImageKit
                  src="/facebook.svg"
                  className="w-12 h-12 rounded-full object-cover" w="48" h="48"
                />
              </Link>
              <Link className='text-primary-gradient'>
                <ImageKit
                  src="/instagram.svg"
                  className="w-12 h-12 rounded-full object-cover" w="48" h="48"
                />
              </Link>
            </div>
          </div>
          <MenuActions />
          <h1 className="mt-8 mb-2 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            {CATEGORIES.map(({ label, slug }) => {
              const isActive = slug === null ? !currentCategory : currentCategory === slug
              const to = slug ? `${PATHS.POSTS}?category=${slug}` : PATHS.POSTS

              return (
                <Link
                  key={slug ?? 'all'}
                  to={to}
                  className='text-primary-gradient underline'
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </Link>
              )
            })}
          </div>
          <Search />
        </div>
      </div>
    </div>
  )
}

export default SinglePost
