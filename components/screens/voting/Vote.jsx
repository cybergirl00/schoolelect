import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Vote = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center p-6">
        <div className="">
            <Image 
            src={'/image.png'}
            width={400}
            height={400}
            alt='vote image'
             />
        </div>
        <div className="p-3">
            <h2 className="text-2xl font-bold ">Simple</h2>
            <h2 className="text-lg  w-90 p-3">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed doloribus illo non quaerat consequuntur? Neque est obcaecati ex blanditiis inventore!</h2>
<Button className=''>
    <Link href={'/vote'}>
    Vote now
    </Link>
</Button>
        </div>
    </div>
  )
}

export default Vote