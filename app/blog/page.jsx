"use client"
import BlogShowcase from '@/components/screens/blog/BlogShowcase'
import Image from 'next/image'

const BlogScreen = () => {
  return (
    <div className='bg-{# p-7'>
      <div className="p-3">
        <h2 className='text-2xl font-bold'>Blog | News</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center  gap-3 py-5 px-5">
        <div className="w-[300px] h-[200px] bg-gray-100 ">
          <Image 
          src={'https://images.unsplash.com/photo-1546074177-ffdda98d214f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          width={300}
          height={300}
          />
        </div>
        <div className="">
          {/* <h2 className='underline text-xl'>Simple</h2> */}
          <h2 className='lg:w-[50%] pt-4  w-full'>The blog screen of an online voting system serves as a platform to inform, engage, and inspire users about the significance and impact of digital democracy. Through insightful articles, updates, and analysis, the blog screen provides a window into the democratic process, highlighting the benefits of online voting, the importance of civic engagement, and the role of technology in shaping modern elections.</h2>
        </div>
      </div>

      <BlogShowcase />
    </div>
  )
}

export default BlogScreen