"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { database } from "@/lib/appwrite"
import CandidateProdile from "@/components/screens/candidates/CandidateProdile"
import CandidateDetails from "@/components/screens/candidates/CandidateDetails"
const CandidatesDetails = () => {
    const [candidates, setCandidates] = useState([])
    const pathname = usePathname().split('/')[2]

    useEffect(() => {
        const getCandidate =  () =>  {
          const promise =  database.getDocument('6632232c0036bc2f168d','663223700038a0e25692', pathname)
          promise.then(function (response) {
            setCandidates(response)
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
        }
        getCandidate();
       }, [])
  return (
    <div>
        {candidates&&(
            <>
            <div className="flex flex-col items-center justify-center p-5 ">
              <CandidateProdile candidates={candidates}/>
            </div>
            <div className="flex flex-col items-center justify-center pt-5">
              <h2 className="text-3xl font-bold">About <span className='text-primary'>
                {candidates?.name}
              </span>
              </h2>
              <CandidateDetails candidates={candidates}/>
            </div>
            </>
        )}
    </div>
  )
}

export default CandidatesDetails