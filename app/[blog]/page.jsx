import Link from 'next/link'
import React from 'react'
import { XataClient } from '../../util/xata'

const xata = new XataClient()

const getSingleBlog = async (id) => {
    const blog = await xata.db.blogs.read(id)
    return blog
}

async function page({params: {blog}}) {
    const singleBlog = await getSingleBlog(blog)
  return (
    <div>
        <h1>{singleBlog.title}</h1>
        <p>{singleBlog.body}</p>
        <Link href={'/blogs'}>previous page</Link>
    </div>
  )
}

export default page