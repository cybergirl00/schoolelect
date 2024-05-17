"use client"
import BlogShowcase from '@/components/screens/blog/BlogShowcase'
import Image from 'next/image'

const BlogScreen = () => {
  return (
    <div className='bg-{# p-7'>
      <div className="">
        <h2>Blog | News</h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center  gap-7 py-5 px-5">
        <div className="w-[300px] h-[200px] bg-gray-100 "></div>
        <div className="">
          <h2 className='underline text-xl'>Simple</h2>
          <h2 className='lg:w-[50%] pt-4 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus repudiandae dolorem excepturi saepe, voluptas nobis sed numquam culpa! Provident laboriosam, inventore nemo facilis aspernatur tenetur ab iure eaque earum soluta?</h2>
        </div>
      </div>

      <BlogShowcase />
    </div>
  )
}

export default BlogScreen