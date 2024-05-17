import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const BecomeCandidates = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold">Become a 
      <span className="text-primary"> Candidate</span>
      </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center  p-5">
      <div className="p-3">
            <h2 className="text-2xl font-bold ">Simple</h2>
            <h2 className="text-lg  w-90 p-3">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed doloribus illo non quaerat consequuntur? Neque est obcaecati ex blanditiis inventore!</h2>
<Button className='' asChild>
    <Link href={'/candidateform'}>
    Become a Candidate
    </Link>
</Button>
        </div>
      <div className="pl-10">
        <Image
        src={'/image.png'}
        width={400}
        height={400}
        alt="vote"
        className="pl-10"
         />
      </div>
    </div>
    </div>
  )
}

export default BecomeCandidates