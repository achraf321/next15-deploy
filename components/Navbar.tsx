"use client"
import Link from 'next/link'
import React , {useState } from 'react'
import { Button } from './ui/button'
import { FaBars } from 'react-icons/fa'
import { SignedIn , SignedOut , SignOutButton } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'

const navlinks = [
    {id : 1 , title : "Home" , link : "/"},
    {id : 2 , title : "Executive Team" , link : "/executive"},
    {id : 3 , title : "Strategy" , link : "/strategy"},
    {id : 4 , title : "Free Resources" , link : "/resources"},
    {id : 5 , title : "More" , link : "/more"},
]


const Navbar = () => {

  const {user} = useUser()

const [nav , setNav] = useState(false)

function handleNav () {
  setNav(!nav)
}
  return (
    <>
    <div className="bg-white h-[70px] z-10 w-full fixed top-0 flex items-center justify-between px-6 md:px-12 shadow-md">
      <div>
       <Link href="/">
       <Image src="/logo.png" alt='' height={70} width={70}/>
       </Link>
      </div>
      <div className="flex items-center gap-6">
    <div className="hidden md:block">
    <ul className="flex gap-10">
       {navlinks.map((link) => (
            <li key={link.id}><Link href={link.link}>{link.title}</Link></li>
        ))}
       </ul>
    </div>
       <div className="flex items-center gap-3">
        <SignedOut>
       <Link href="/signup" className="bg-[#0093FF] text-white font-semibold cursor-pointer px-3 py-1 rounded-md">Register</Link>
        </SignedOut>
        <SignedIn>
          {user?.imageUrl ? <Image alt='' src={user?.imageUrl} height={40} width={40} className="min-h-10 min-w-10 rounded-full"></Image> : <div></div>}
       <SignOutButton>
       <Button className="bg-[#0093FF] text-white font-semibold cursor-pointer">Sign Out</Button>
       </SignOutButton>
        </SignedIn>
        <span className="block md:hidden" onClick={handleNav}><FaBars size={20} className="cursor-pointer"/></span>
       </div>
      </div>
    </div>
    <div className={`fixed bg-white h-screen w-[60%] top-0 left-0 shadow-md z-20 ${nav ? "translate-x-0" :  "-translate-x-full"} transition-all duration-200`}>
   <div className="p-6">
   <ul className="flex flex-col gap-10">
       {navlinks.map((link) => (
            <li key={link.id} onClick={handleNav} className="font-semibold underline"><Link href={link.link}>{link.title}</Link></li>
        ))}
       </ul>
   </div>
    </div>
    </>
  )
}

export default Navbar
