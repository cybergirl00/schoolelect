"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import ImageUploader from "@/components/shared/ImageUploader"
import { useState } from "react"
import { database } from "@/lib/appwrite"
import { ID } from "appwrite"
import { Textarea } from "@/components/ui/textarea"
import { RotateCcw } from 'lucide-react'
import { useRouter } from 'next/navigation'

const CandidatForm = () => {
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)
  const router = useRouter();
    const formSchema = z.object({
        faculty: z.string(),
        department: z.string(),
        association: z.string(),
        position: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        cgpa: z.string(),
        picture: z.string(),
        about: z.string(),
      })
      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          faculty: "",
          department: "",
          association: "",
          position: "",
          firstName: "",
          lastName: "",
          cgpa: "",
          picture: "",
          about: ""
        },
      })
      function onSubmit(values) {
        setLoading(true);
        const promise = database.createDocument('6632232c0036bc2f168d',"663223700038a0e25692", ID.unique(), {
          falculty: values.faculty,
          department: values.department,
          association: values.association,
          about: values.about,
          name: values.firstName + values.lastName,
          picture: values.picture
        });
        promise.then(function (response) {
          setLoading(false);
          router.push('/home')
          console.log(response);
      }, function (error) {
          console.log(error);
          setLoading(false)
      });
      }
  return (
    <div>
        <div className="bg-[#E9C1A1] text-white flex flex-col items-center justify-center p-1 gap-1">
            <h3 className="text-3xl" >Candidacy Form</h3>
            <h2>Be the Voice of the People</h2>
        </div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 p-2">
        <div  className="flex flex-col gap-5 md:flex-row">
        <FormField
          control={form.control}
          name="faculty"
          render={({ field }) => (
            <FormItem  className='w-full'>
              <FormLabel>Falculty</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your faculty" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Natural and Applied">Natural and Applied</SelectItem>
                  <SelectItem value="Health Science">Health Science</SelectItem>
                  <SelectItem value="Law">Law</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
       <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem  className='w-full'>
              <FormLabel>Department</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your Department" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="computer science">Computer science</SelectItem>
                  <SelectItem value="Geology">Geology</SelectItem>
                  <SelectItem value="physical science">Physics Science</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="association"
          render={({ field }) => (
            <FormItem  className='w-full'>
              <FormLabel>Association</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your association" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="NASS">NASS</SelectItem>
                  <SelectItem value="ESAN">ESAN</SelectItem>
                  <SelectItem value="Law">Law</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div  className="flex flex-col gap-5 md:flex-row">
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem  className='w-full'>
              <FormLabel>Position</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Position" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="President">President</SelectItem>
                  <SelectItem value="Vice President">Vice President</SelectItem>
                  <SelectItem value="PRO">PRO</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="cgpa"
          render={({ field }) => (
            <FormItem  className='w-full'>
              <FormLabel>CGPA</FormLabel>
              <Input placeholder="CGPA" {...field} type='number' />
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div  className="flex flex-col gap-5 md:flex-row">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem  className='w-full'>
              <FormLabel>Your first Name</FormLabel>
              <Input placeholder="your first name" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem  className='w-full'>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="your last name" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
      
        </div>

        <div  className="flex flex-col gap-5 md:flex-row">
        <FormField
          control={form.control}
          name="picture"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>Profile Picture</FormLabel>
              <FormControl>
              <ImageUploader 
              onFieldChange={field.onChange}
              imageUrl={field.value}
              setFiles={setFiles}
              />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel>About You</FormLabel>
              <FormControl className='h-2'>
              <Textarea
                  placeholder="Tell us a little bit about yourself"
                  // className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        {loading === true ? 
       <Button disabled
       >
        <RotateCcw className="mr-2 h-4 w-4 animate-spin"/>
        Submiting...
       </Button>
       : 
       <Button
       >
        Submit
       </Button>
       }
      </form>
    </Form>
    </div>
  )
}

export default CandidatForm