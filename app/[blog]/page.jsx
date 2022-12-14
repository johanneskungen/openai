import Link from 'next/link'
import React from 'react'
import { XataClient } from '../../util/xata'

const xata = new XataClient()

const getSingleBlog = async (id) => {
    const blog = await xata.db.blogs.read(id)
    return blog
}

async function page({params: {blog}}) {
  console.log(blog)
    const singleBlog = await getSingleBlog(blog)
  return (
    <div className='mt-24'>
        <h1 className='font-bold text-2xl m-4 text-center'>{singleBlog.title}</h1>
        <p className='w-[85vw] lg:w-[60vw] xl:w-[45vw] mx-auto mb-8'>{singleBlog.body}</p>
        <Link href="/"><div className='cursor-pointer hover:scale-105 duration-150 hover:rotate-1 bg-[#ff3471] w-[85vw] mx-auto text-white font-semibold px-4 py-2'>previous page</div></Link>
    </div>
  )
}

export default page