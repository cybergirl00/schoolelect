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
            <h2 className="text-2xl font-bold ">Lead the Change: Stand as a Candidate</h2>
            <h2 className="text-lg  w-90 p-3">
            By stepping forward as a candidate, you have the chance to represent the voices and interests of your peers, contribute fresh perspectives, and drive positive change within the university. Your candidacy not only demonstrates your commitment to student welfare and academic excellence but also showcases your leadership qualities and dedication to serving the student body. </h2>
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