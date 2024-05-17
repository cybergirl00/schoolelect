'use client'
import BarChart from "@/components/screens/analysis/BarChart"
import { database } from "@/lib/appwrite"
import { Query } from "appwrite"
import { useEffect, useState } from "react"

const ChartScreen = () => {
  const [elections, setElections] = useState([])
  const [votes, setVotes] = useState([])
  useEffect(() => {
    const getElection = () => {
     const promise = database.listDocuments('6632232c0036bc2f168d','6632233a00275b25cabc',
      [
        Query.equal('uploaded', true)
      ]
     );
     promise.then(function (response) {
       setElections(response.documents);
       console.log(response);
   }, function (error) {
       console.log(error);
   });
    }
    getElection();
  }, [])
  useEffect(() => {
    const getVotes = () => {
     const promise = database.listDocuments('6632232c0036bc2f168d','663240a60033931d42c3');
     promise.then(function (response) {
       setVotes(response.documents);
       console.log(response);
   }, function (error) {
       console.log(error);
   });
    }
    getVotes();
  }, []) 
 
  

  const candidatesData = elections?.candidates?.map(candidate => ({
    label: candidate.name,
    data: parseInt(candidate.votes), // Convert vote count to integer
}));
  return (
    <div>
        <div className=" flex flex-col items-center justify-center gap-5 bg-[#E9C1A1] text-white">
            <h3 className="text-2xl  font-bold p-5">Live View Analysis</h3>
        </div>
        <div className="flex flex-col items-center ">
        {elections.map((election) => (
          <div className="  ">
            <h2 className="text-lg font-bold">{election?.name}</h2>
            <BarChart election={election}
            votes={votes}
            />
        </div>
        ))}
        </div>
    </div>
  )
}

export default ChartScreen