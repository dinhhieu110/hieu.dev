const Search = () => {
  const handleKeyPress = (e) => {
    console.log(e.target.value)
  }

  return (
    <div>
      <h1 className="mt-8 mb-2 text-sm font-medium ">Search</h1>
      <div className='flex items-center bg-gray-100 p-2 rounded-full gap-2 border border-neutral-300 shadow-md'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input
          type="text"
          placeholder="search a post..."
          className="bg-transparent outline-none "
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  )
}


export default Search
