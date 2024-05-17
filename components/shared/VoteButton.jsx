'use client'
import { database } from "@/lib/appwrite";
import { Button } from "../ui/button";
import { ID, Query } from "appwrite";
import { RotateCcw } from 'lucide-react'
import { useEffect, useState } from "react";
const VoteButton = ({election,result,candidates,disableds}) => {
    const [loading, setLoading] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [votedElection, setVotedElection] = useState(null);
    const vote = () => {
        try{
            setLoading(true)
            // create the vote
            const promise = database.createDocument('6632232c0036bc2f168d','663240a60033931d42c3', ID.unique(), {
                name: result,
                voteFor:candidates,
                voteRole: election?.name,
                voted: true
                  
        })
        promise.then(function (response) {
            setVotedElection(election?.name);
            setLoading(false)
            setDisabled(true)
          console.log(response);
      }, function (error) {
          console.log(error);
      });
        } catch(err) {
            console.log(err)
        }
       }

       useEffect(() => {
         const getVotes = () => {
            const promise = database.listDocuments('6632232c0036bc2f168d','663240a60033931d42c3',
        [
            Query.equal('name', result),
            Query.equal('voted', true),
            Query.equal('voteRole', election?.name)
        ])
        promise.then(function (response) {
            if(response.documents.length>0) {
                setDisabled(true);
            }
          console.log(response);
      }, function (error) {
          console.log(error);
      });
         }
         getVotes();
       }, [])
       
  return (
    <div>
        {loading ? (
            <Button disabled className='w-full'>
      <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
        ) : (
        <div className="">
            {disabled === true ? 
             <Button  disabled className='w-full'
             >Voted</Button>
             : 
             <Button  onClick={vote} className='w-full'
             >Vote</Button>
            }
        </div>
        )
    }
    </div>
  )
}

export default VoteButton