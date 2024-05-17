import Image from "next/image"

const CandidateProdile = ({candidates}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5  p-5'>
        <div className="">
            <Image
            src={candidates?.picture}
            width={200}
            height={200}
            alt='candidate Image'
            className="rounded-lg w-full h-30"
             />
        </div>
        <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold">{candidates?.name}</h2>
            <h2 className='text-[E9C1A1]'>{candidates?.falculty}</h2>
            <h2>{candidates?.department}</h2>
            <h2 className='text-primary text-bold text-1xl'>{candidates?.elections?.name}</h2>
            <h2 className='text-semibold text-sm'>{candidates?.cgpa}</h2>
        </div>
    </div>
  )
}

export default CandidateProdile