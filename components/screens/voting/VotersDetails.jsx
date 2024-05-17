"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react"
const VotersDetails = ({users, matricNo, setMatricNo, setDepartment, department,result, setResult,
  verified, setVerified}) => {
  const checkUser = () => {
    const foundUser = users.find(user => user.matricNo === matricNo && user.department.toLowerCase() === department.toLowerCase());

    if (foundUser) {
      setResult(`${foundUser.name}`);
      setVerified(true)
    } else {
      setResult('User not found.');
      setVerified(false)
    }
  };
  return (
    <div className="px-7 py-7 flex flex-col lg:flex-row items-center justify-center gap-3">
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="department" className='text-2xl font-bold'>Department</Label>
      <Input type="matric no" placeholder="Department" onChange={(e) => setDepartment(e.target.value)}/>
      {/* <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a department" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Department</SelectLabel>
          <SelectItem value="apple">Computer science</SelectItem>
          <SelectItem value="banana">Chemical and Geological Sciences</SelectItem>
          <SelectItem value="Biological Sciences">Biological Sciences</SelectItem>
          <SelectItem value="Physical Science">Physical Science</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select> */}
    </div>
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="Matric No" className='text-2xl font-bold'>Matric No</Label>
      <Input type="matric no" placeholder="Matric No" onChange={(e) => setMatricNo(e.target.value)}/>
     
    </div>
    <div className="flex flex-col items-center justify-center"> 
    <Button onClick={checkUser}
    >Verify</Button>
    </div>
    {/* <p>{result}</p> */}
    </div>
  )
}

export default VotersDetails