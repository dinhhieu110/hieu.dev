import { Link } from 'react-router-dom'
import Search from './Search'
import { PATHS } from '../../../routes';

const CATEGORIES = [
  { label: 'All Posts', slug: null },
  { label: 'Technology', slug: 'technology' },
  { label: 'Foreign Language', slug: 'foreign-language' },
  { label: 'Financial Management', slug: 'financial-management' },
  { label: 'Daily Life', slug: 'daily-life' },
];

const FILTER_OPTIONS = [
  { label: 'Newest', value: "newest" },
  { label: 'Most Popular', value: "most-popular" },
  { label: 'Trending', value: "trending" },
  { label: 'Oldest', value: "oldest" },
];


const SideMenu = () => {
  return (
    <div className='px-4 h-max sticky top-24'>
      <Search />
      <h1 className='mt-8 mb-4 text-sm font-medium'>Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        {FILTER_OPTIONS.map(opt => (<label key={opt.value} className='flex items-center gap-2 cursor-pointer'>
          <input type="radio" name="sort" value={opt.value} className='appearance-none w-4 h-4 border-[1.5px] border-neutral-300 cursor-pointer rounded-sm checked:bg-primary-gradient' />
          {opt.label}
        </label>))}
      </div>
      <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        {CATEGORIES.map(cate => <Link key={cate.label} to={`${PATHS.POSTS}?category=${cate.slug}`} className="underline text-primary-gradient">{cate.label}</Link>)}
      </div>
    </div>
  )
}

export default SideMenu
