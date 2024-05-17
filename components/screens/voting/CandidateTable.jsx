"use client"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { useEffect, useState } from "react"
import { database } from "@/lib/appwrite"
import { ID, Query } from "appwrite"
import VoteButton from "@/components/shared/VoteButton"
const CandidateTable = ({result}) => {
  const [selected, setSelected] = useState('')
  const [elections, setelections] = useState([])
  const [disabledElections, setDisabledElections] = useState([]);

  const checkVotes = () => {
    const promise = database.listDocuments('6632232c0036bc2f168d', '663240a60033931d42c3', [
      Query.equal('name', result),
      Query.equal('voted', true),
    ]);
    promise.then(function (response) {
      const disabledElections = response.documents.map((vote) => vote.voteRole);
      setDisabledElections(disabledElections);
      console.log(disabledElections)
    }, function (error) {
      console.log(error);
    });
  };

 

 useEffect(() => {
   const getElection = () => {
    const promise = database.listDocuments('6632232c0036bc2f168d','6632233a00275b25cabc',
      [
        Query.equal('uploaded', true)
      ]
    );
    promise.then(function (response) {
      setelections(response.documents);
      checkVotes();
      console.log(response);
  }, function (error) {
      console.log(error);
  });
   }
   getElection();
 }, [])
 
  return (
    <div className="px-7 py-7 flex flex-col gap-3">
      <div className="">
        <h2 className="font-bold text-2xl flex items-center justify-center">Hello!, {result}</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 pt-7">
        {elections.map((election) => (
          <div className="width-[200px] height-[200px] border p-2 rounded-sm">
            <h2 className="text-1xl font-bold">{election?.name}</h2>
            <div className="">
              <h2 className="text-gray-500 text-sm ">Candidates</h2>
              <div className="flex flex-col gap-2 pt-2">
              {election?.candidates?.map((person) => (
                <div className="flex items-center gap-1">
                <Checkbox id="terms" 
               checked={selected === person?.name} 
               onCheckedChange={() => {
                setSelected(person?.name); // Set the selected state to the person's name
              }}
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {person?.name}
                </label>
                {/* <h1>{selected}</h1> */}
              </div>
              ))}
               <VoteButton election={election} result={result}
              candidates={selected}
              disableds={disabledElections.includes(election.name)}
              />
            </div>
            </div>
          </div>
        ))}    
      </div>
      {/* <Button>Vote</Button> */}
    </div>
  )
}

export default CandidateTable