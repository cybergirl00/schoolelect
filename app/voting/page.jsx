import BecomeCandidates from "@/components/screens/voting/BecomeCandidates"
import Candidates from "@/components/screens/voting/Candidates"
import OngoingElection from "@/components/screens/voting/OngoingElection"
import Vote from "@/components/screens/voting/Vote"
import VotingHeader from "@/components/screens/voting/VotingHeader"

const page = () => {
  return (
    <div>
      <div className="">
        <VotingHeader />
        <Candidates />
        <Vote />
        <BecomeCandidates />
        {/* <OngoingElection /> */}
      </div>
    </div>
  )
}

export default page