import Image from "next/image"
import React from 'react'
import { BeakerIcon, HomeIcon, UserIcon } from '@heroicons/react/solid'
import { ChevronDownIcon, StarIcon, SearchIcon, MenuIcon } from '@heroicons/react/outline'
import { signIn } from "next-auth/react"




function Header() {


  return (
    <div className = " sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
        <div className = "relative h-10 w-20 flex-shrink-0 cursor-pointer">
            <Image 
            objectFit="contain"
            src="/logo.jpeg"
            layout="fill"
            />
        </div>
           
        <div className="mx-7 flex items-center xl:min-w-[300px]">
            <HomeIcon className="h-5 w-5" />
            <p className="ml-2 hidden lg:inline">HOME</p>
            <ChevronDownIcon className="h-5 w-5"/>
        </div>

        {/* Search Box*/}
        <form className ="flex flex-1 items-center space-x-2 rounded-sm border
         border-gray-200 bg-gray-100 px-3 py-1">
            <SearchIcon className="h-5 w-5 text-gray-400"/>
            <input className="flex-1 bg-transparent outline-none" type="text" placeholder="Search"/>
            <button type="submit" hidden />
        </form>

        <div onClick={() => signIn()} className=" mx-7 cursor-pointer items-center hover:bg-gray-100 space-x-1 
            text-gray-700 lg:inline-flex p-1">
            <p className="ml-2 hidden flex-1 lg:inline px-2">Sign In</p>
            <UserIcon className="icon" />
        </div>
        
    </div>
  )
}

export default Header