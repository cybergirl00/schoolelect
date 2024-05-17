import PollCard from "@/components/screens/voting/PollCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Vote = () => {
  return (
    <div>
        <div className="bg-primary flex flex-col items-center justify-center p-7">
        <h3 className="text-2xl font-bold  text-white ">Voting Poll</h3>
        <span>Make your political decision</span>
        </div>

        <div className="">
            <PollCard />
        </div>

        <div className="flex flex-col items-center justify-center">
        <Button asChild>
          <Link href={'/analysis'}> View Live Analysis</Link>
        </Button>
        </div>
    </div>
  )
}

export default Vote