'use client'
import { DirectionAwareHover } from "@/components/ui/animation/direction-aware-hover"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { database } from "@/lib/appwrite"
import { Query } from "appwrite"


const Candidates = () => {
    const [candidates, setCandidates] = useState([])
    useEffect(() => {
      const getUser = () => {
        const promise = database.listDocuments('6632232c0036bc2f168d', '663223700038a0e25692',
          [
            Query.equal('verified', true)
          ]
        );
          promise.then(function (response) {
            setCandidates(response.documents)
          }, function (error) {
            console.log(error);
          });
      }
      getUser();
    }, [])
    
  return (
    <ScrollArea className="p-2 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold flex flex-col items-center justify-center p-3">Know Your Candidates</h2>
        <div 
        className="flex gap-2 items-center  justify-center"
        >
            {candidates?.length>0 ? candidates?.map((person) => (
                <Link href={'/candidates/'+person?.$id} className=" p-5 flex flex-col items-center justify-center rounded-md cursor-pointer ">
                   <DirectionAwareHover imageUrl={person?.picture}>
        <p className="font-bold text-xl">{person?.name}</p>
        <p className="font-normal text-sm line-clamp-1">{person?.about}</p>
      </DirectionAwareHover>
                </Link>
            )) : (
              [1,2,3].map((item) => (
<div className="w-60 h-60 bg-slate-100 animate-pulse "></div>
              ))
            )
          }
           
        </div>
        <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default Candidates