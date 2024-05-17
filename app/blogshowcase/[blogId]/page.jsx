"use client"
import { database } from "@/lib/appwrite"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const BlogShowcase = () => {
    const pathname = usePathname().split('/')[2]
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
     const getBlog = () => {
        const promise =  database.getDocument('6632232c0036bc2f168d','66439c6f0025698a6152', pathname)
  promise.then(function (response) {
    setBlogs(response)
    setIsLoading(false)
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
    // setIsLoading(false)
});
     }

     getBlog();
    }, [])
    
  return (
    <div>
        <div className="flex flex-col items-center justify-center p-3">
            <h3 className="text-3xl font-bold">{blogs?.title}</h3>
        </div>
        <div className="flex flex-col items-center justify-center">
            <div className="w-[400px] h-[300px] border p-4 rounded-md">
                <Image
                src={blogs?.imageUrl}
                width={300}
                height={300}
                alt="blog-image"
                className="w-full h-full rounded-sm"
                 />
            </div>
        </div>
        <div className="p-4 ">
            <h3 className="text-lg  p-6">
                {blogs?.content}
            </h3>
        </div>

    </div>
  )
}

export default BlogShowcase