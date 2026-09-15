import { Link, useSearchParams } from 'react-router-dom'
import { PATHS } from '../../../routes'
import SearchInput from '../../Common/SearchInput'

const CATEGORIES = [
  { label: 'All Posts', slug: null },
  { label: 'Technology', slug: 'technology' },
  { label: 'Foreign Language', slug: 'foreign-language' },
  { label: 'Financial Management', slug: 'financial-management' },
  { label: 'Daily Life', slug: 'daily-life' },
];

const BASE_BUTTON_CLASSES =
  'rounded-full px-4 py-2 whitespace-nowrap shrink-0 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500'
const ACTIVE_CLASSES = 'bg-primary-gradient text-white font-medium'
const INACTIVE_CLASSES = 'text-gray-700 hover:bg-primary-gradient hover:text-white'

const Categories = () => {
  const [searchParams] = useSearchParams()
  const currentCategory = searchParams.get('category')

  return (
    <div aria-label="Blog categories" className='hidden md:flex items-center justify-center rounded-3xl xl:rounded-full p-4 shadow-lg gap-8'>
      <div role='tablist' className="flex-1 flex items-center gap-4 xl:gap-32 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {CATEGORIES.map(({ label, slug }) => {
          const isActive = slug === null ? !currentCategory : currentCategory === slug
          const to = slug ? `${PATHS.POSTS}?category=${slug}` : PATHS.POSTS

          return (
            <Link
              key={slug ?? 'all'}
              to={to}
              className={`${BASE_BUTTON_CLASSES} ${isActive ? ACTIVE_CLASSES : INACTIVE_CLASSES}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
            </Link>
          )
        })}
      </div>
      <span className='text-xl font-medium'>|</span>
      <SearchInput />
    </div>
  )
}

export default Categories
