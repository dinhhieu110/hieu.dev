import React from 'react'
import SingleComment from './SingleComment'

const Comments = () => {
  return (
    <div className='flex flex-col gap-8 mb-4 lg:w-4/5'>
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex items-center justify-between gap-8 w-full">
        <textarea placeholder='Write a comment...' className='w-full p-4 rounded-xl bg-slate-50' />
        <button className='bg-primary-gradient text-white hover:bg-primary-gradient-hover px-4 py-3 font-semibold rounded-lg'>Send</button>
      </div>
      <SingleComment />
      <SingleComment />
      <SingleComment />
      <SingleComment />
    </div>
  )
}

export default Comments
