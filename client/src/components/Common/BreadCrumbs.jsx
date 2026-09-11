import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = () => {
  return (
    <div className="flex gap-4">
      <Link to={"/"}>Home</Link>
      <span>·</span>
      <span className="text-blue-700">Blogs and Articles</span>
    </div>
  )
}

export default BreadCrumbs
