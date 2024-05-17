import Image from "next/image"

const VotingHeader = () => {
  return (
    <div>
        <Image
        src={'/vote.jpg'}
        width={350}
        height={350}
        alt={'voting-header'}
        className="h-[515px] w-full object-fill"
         />
    </div>
  )
}

export default VotingHeader