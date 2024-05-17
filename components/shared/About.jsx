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
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore saepe recusandae consequuntur, atque voluptates blanditiis corporis accusantium sunt mollitia praesentium.</h2>
            <ul className="p-2 flex flex-col gap-1">
                <li>Lorem, ipsum.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
        </div>
    </div>
  )
}

export default About