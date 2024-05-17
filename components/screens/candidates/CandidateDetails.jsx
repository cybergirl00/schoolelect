import { Button } from "@/components/ui/button"
import Link from "next/link"

const CandidateDetails = ({candidates}) => {
  return (
    <div className='p-5 flex flex-col gap-4'>
        <h2 className="text-bold font-sm">{candidates?.about}</h2>
        <div className="flex flex-col items-center justify-center">
        <Button asChild>
            <Link href={'/vote'}>
            Vote {candidates?.name}
            </Link>
        </Button>
        </div>
    </div>
  )
}

export default CandidateDetails