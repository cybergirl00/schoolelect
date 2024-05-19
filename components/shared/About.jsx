import Image from "next/image"

const About = () => {
  return (
    <div  className="grid grid-cols-1 lg:grid-cols-2 p-5 gap-10 pt-7">
        <div className="">
            <Image
            src={'/vote.jpg'}
            width={500}
            height={500}
            alt='vote'
             />
        </div>
        <div className="p-3">
            <h3 className="text-2xl font-bold p-1">About <span className='text-primary'>Us.</span></h3>
            <h2 className="text-1xl font-semibold p-1">What is School Elect?</h2>
            <h2 className="text-lg p-2"
            >Our online voting system provides a secure, accessible, and transparent platform for citizens to participate in elections. By leveraging cutting-edge technology, we ensure the integrity of the voting process while making it convenient for voters to cast their ballots from anywhere. Our system features robust security measures, real-time vote counting, and user-friendly interfaces optimized for mobile devices. We are committed to promoting inclusivity by offering multilingual support and catering to the diverse needs of all voters. Our goal is to empower citizens, strengthen democracy, and set new standards for the future of elections.
            </h2>
            {/* <ul className="p-2 flex flex-col gap-1">
                <li>Lorem, ipsum.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul> */}
        </div>
    </div>
  )
}

export default About