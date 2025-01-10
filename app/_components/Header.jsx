// "use client"
// import { Button } from '@/components/ui/button'
// import { signIn, signOut, useSession } from 'next-auth/react'
// import Image from 'next/image'
// import React, { useEffect } from 'react'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import Link from 'next/link'

// function Header() {

//   const {data}=useSession();

//   useEffect(()=>{
//     console.log(data);
//   },[data])

//   return (
//     <div className='p-2 shadow-sm flex  justify-between
//     '>
//         <div className='flex items-center gap-8 '>
//             <Image src='/logo.png' alt='logo'
//             width={180} height={100} />
//             <div className='md:flex items-center
//             gap-6 hidden
//             '>
//                 <Link href={'/'} className='hover:scale-105 hover:text-primary
//                 cursor-pointer'>Home</Link>
//                 <Link href={'/search/Repair'} className='hover:scale-105 hover:text-primary
//                 cursor-pointer'>Services</Link>
//                 {/* <h2 className='hover:scale-105 hover:text-primary
//                 cursor-pointer'>Services</h2> */}
//                 <Link href={'/search/Repair'} className='hover:scale-105 hover:text-primary
//                 cursor-pointer'>About Us</Link>
//                 {/* <h2 className='hover:scale-105 hover:text-primary
//                 cursor-pointer'>About Us</h2> */}

//             </div>
           
//         </div>
//         <div>
//           {data?.user?
          
//           <DropdownMenu>
//   <DropdownMenuTrigger asChild>
//   <Image src={data?.user?.image}
//           alt='user'
//           width={40}
//           height={40}
//           className='rounded-full'
//           />
//   </DropdownMenuTrigger>
//   <DropdownMenuContent>
//     <DropdownMenuLabel>My Account</DropdownMenuLabel>
//     <DropdownMenuSeparator />
//     <DropdownMenuItem>
//      <Link href={'/mybooking'}>My Booking</Link> 
//       </DropdownMenuItem>
//     <DropdownMenuItem onClick={()=>signOut()}>Logout</DropdownMenuItem>
   
//   </DropdownMenuContent>
// </DropdownMenu>

//           :  

//           <Button onClick={()=>signIn('descope')}>Login / Sign Up</Button>

//         }
//             </div>
//     </div>
//   )
// }

// export default Header
"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

function Header() {
  const { data } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="p-2 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image src="/logo.png" alt="logo" width={180} height={100} />
        <div className="md:flex items-center gap-6 hidden">
          <Link
            href={"/"}
            className="hover:scale-105 hover:text-primary cursor-pointer"
          >
            Home
          </Link>
          <Link
            href={"/search/Repair"}
            className="hover:scale-105 hover:text-primary cursor-pointer"
          >
            Services
          </Link>
          <Link
            href={"/search/Repair"}
            className="hover:scale-105 hover:text-primary cursor-pointer"
          >
            About Us
          </Link>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden  mt-8">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col justify-center items-center space-y-1"
          >
            {/* Hamburger icon */}
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
            <div className="w-6 h-1 bg-black"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <Link
            href={"/"}
            className="block p-4 hover:scale-105 hover:text-primary cursor-pointer"
          >
            Home
          </Link>
          <Link
            href={"/search/Repair"}
            className="block p-4 hover:scale-105 hover:text-primary cursor-pointer"
          >
            Services
          </Link>
          <Link
            href={"/search/Repair"}
            className="block p-4 hover:scale-105 hover:text-primary cursor-pointer"
          >
            About Us
          </Link>
        </div>
      )}

      <div>
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src={data?.user?.image}
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/mybooking"}>My Booking</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => signIn("descope")}>Login / Sign Up</Button>
        )}
      </div>
    </div>
  );
}

export default Header;
