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
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

function Header() {
  const { data } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state for mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // state for dropdown visibility
  const dropdownRef = useRef(null); // ref to handle click outside dropdown

  useEffect(() => {
    console.log(data);
  }, [data]);

  // Close the mobile menu on link click
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown if click happens outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        </div>
      </div>

      <div>
        <div>
          {data?.user ? (
            <div className="relative">
              <Image
                src={data?.user?.image}
                alt="user"
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
                onClick={toggleDropdown} // Toggle dropdown on profile image click
              />
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 top-10 bg-white shadow-lg p-4"
                >
                  <Link
                    href={"/mybooking"}
                    className="text-sm mb-4 block" // Add margin bottom for spacing
                  >
                    My Bookings
                  </Link>
                  <div>
                    <Button
                      onClick={() => signOut()}
                      className="text-sm py-1 px-5" // Reduce padding for smaller button size
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Button onClick={() => signIn("descope")}>Login / Sign Up</Button>
          )}
        </div>

        <div>
          {/* Hamburger Icon for mobile */}
          <div className="md:hidden mt-6">
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
              {/* Close button for mobile menu */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 z-100 text-xl text-gray-500"
              >
                ✖
              </button>

              <Link
                href={"/"}
                onClick={closeMenu}
                className="block p-4 hover:scale-105 hover:text-primary cursor-pointer"
              >
                Home
              </Link>
              <Link
                href={"/search/Repair"}
                onClick={closeMenu}
                className="block p-4 hover:scale-105 hover:text-primary cursor-pointer"
              >
                Services
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
