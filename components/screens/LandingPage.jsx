import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-3 gap-7">
        <div className="flex flex-col items-center gap-5">
            <h2 className="lg:text-4xl text-2xl font-bold text-gray-900 w-full ">Welcome Al hikmah  Voting System</h2>
            {/* Button */}
            <Button className='pt-3' asChild>
              <Link href={'/home'}>Get Started</Link>
            </Button>
        </div>
        <div className="pt-7">
            <h2 className="font-bold text-lg text-gray-500">Making School Elections Easier and Secure</h2>
            <Image 
            src={'/landingpage.png'}
            width={400}
            height={350}
            alt='landing-image'
             />
        </div>
    </div>
  )
}

export default LandingPage