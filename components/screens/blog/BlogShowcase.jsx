"use client"
import { Button } from "@/components/ui/button"
import { database } from "@/lib/appwrite"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const BlogShowcase = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
useEffect(() => {
 const getBlogs = () => {
  setIsLoading(true)
  const promise =  database.listDocuments('6632232c0036bc2f168d','66439c6f0025698a6152')
  promise.then(function (response) {
    setBlogs(response.documents)
    setIsLoading(false)
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
    setIsLoading(false)
});
 }
 getBlogs();
}, [])

if(isLoading) return (<h2>Please Wait</h2>)
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
       {blogs.map((item,index) => (
        <div className="flex flex-col gap-2 shadow-md cursor-pointer p-3">
 <div className="w-full h-[220px] bg-slate-100 rounded-lg ">
  <Image
  src={item?.imageUrl}
  width={100}
  height={100}
  className="w-full h-full"
  alt="blog-image"
   />
 </div>
 <h2 className='text-xl font-bold'>{item?.title}</h2>
 <h2 className='p-2'>
 {
  item?.header
 }</h2>
 <Button>
  <Link href={'/blogshowcase/'+item?.$id}> Read Article </Link>
 </Button>
        </div>

        ))}
        </div>
    </div>
  )
}

export default BlogShowcase