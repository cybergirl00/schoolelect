"use client"
import { useEffect, useState } from "react";
import CandidateTable from "./CandidateTable"
import VotersDetails from "./VotersDetails"
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

const PollCard = () => {
  const [matricNo, setMatricNo] = useState('');
  const [department, setDepartment] = useState('');
  const [result, setResult] = useState('');
  const [users, setUsers] = useState([]);
  const [verified, setVerified] = useState(false)
  useEffect(() => {
   const getUsers = async () => {
    const data = await getDocs(collection(db, 'students'))
    setUsers(data.docs.map((doc) => ({
      ...doc.data(), id: doc.id
   })
  ))
   }
   getUsers();
  }, [])
  
  return (
    <div>
      <VotersDetails 
       users={users} matricNo={matricNo} setMatricNo={setMatricNo}
      department={department} setDepartment={setDepartment} result={result}
       setResult={setResult} verified={verified} setVerified={setVerified}
      />
      {verified &&  (
        <CandidateTable result={result}/>
      )
      }
    </div>
  )
}

export default PollCard