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
            <h2 className="text-2xl font-bold ">Make Your Voice Heard: Cast Your Vote Today!</h2>
            <h2 className="text-lg  w-90 p-3">
            Your voice matters, and each vote contributes to a more inclusive and democratic environment where every opinion is valued. Join us in this digital democracy, where convenience meets civic responsibility, and together, let's make a difference in the governance of our esteemed institution. 
</h2>
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