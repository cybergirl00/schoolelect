import Link from "next/link"
import {Menu} from 'lucide-react'
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  return (
<header className="bg-white shadow-sm sticky top-0 z-10">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block" href="/home">
          <h1 className='text-3xl font-bold'>School<span className='text-primary'>Elect</span></h1>
        </a>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-primary" href="/home"> Home </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-primary" href="/voting"> Voting </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-primary" href="/analysis"> Analysis </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-primary" href="/blog"> News and Update </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="block md:hidden">
          <DropdownMenu className="flex lg:hidden cursor-pointer">
   <DropdownMenuTrigger>
   <div className="flex lg:hidden cursor-pointer">
             <Button  size="icon" variant="outline">
              <Menu />
            </Button>
            </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>
      <h1 className='text-primary'>Navigation Menu</h1>
       </DropdownMenuLabel>
     <DropdownMenuSeparator />
     <DropdownMenuItem>
       <Link href={'/home'}>Home</Link>
     </DropdownMenuItem>
     <DropdownMenuItem><Link href={'/voting'}>Voting</Link></DropdownMenuItem>
     <DropdownMenuItem><Link href={'/analysis'}>Analysis</Link></DropdownMenuItem>
     <DropdownMenuItem>
     <Link href={'/blog'}>News and Update</Link>
     </DropdownMenuItem>
   </DropdownMenuContent>
 </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
//     <div className="flex justify-between items-center p-3 bg-white shadow-sm sticky top-0 z-10">
//         <div>
//             <h2 className="text-2xl font-bold"
//             >SchoolElect</h2>
//         </div>
//         <div >
//             <ul className="gap-2 text-sm font-semibold cursor-pointer hidden lg:flex">
//                 <li className="hover:bg-gray-500 hover:text-white hover:rounded-sm">Home</li>
//                 <li>
//                   <Link href={'/voting'}>Voting</Link>
//                 </li>
//                 <li>Analysis</li>
//                 <li>News and Updates</li>
//             </ul>
//             <DropdownMenu className="flex lg:hidden cursor-pointer">
//   <DropdownMenuTrigger>
//   <div className="flex lg:hidden cursor-pointer">
//             <Button  size="icon" variant="outline">
//               <Menu />
//             </Button>
//             </div>
//   </DropdownMenuTrigger>
//   <DropdownMenuContent>
//     <DropdownMenuLabel>
//       <h1 className='text-primary'>Navigation Menu</h1>
//       </DropdownMenuLabel>
//     <DropdownMenuSeparator />
//     <DropdownMenuItem>
//       <Link href={'/home'}>Home</Link>
//     </DropdownMenuItem>
//     <DropdownMenuItem><Link href={'/voting'}>Voting</Link></DropdownMenuItem>
//     <DropdownMenuItem><Link href={'/analysis'}>Analysis</Link></DropdownMenuItem>
//     <DropdownMenuItem>
//     <Link href={'/news'}>News and Update</Link>
//     </DropdownMenuItem>
//   </DropdownMenuContent>
// </DropdownMenu>
//         </div>
//     </div>
  )
}

export default Navbar



