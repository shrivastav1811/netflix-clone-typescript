import React, { useEffect, useState } from 'react'
import {BellIcon, SearchIcon} from "@heroicons/react/solid"
import Link from 'next/link'
import useAuth from '../hooks/useAuth';
const Header = () => {

  const [scrolled, setScrolled] = useState(false);
  const {logout} = useAuth()
  
    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > 0) {
               setScrolled(true)
            } else {
                setScrolled(false)
           }
        } 
        window.addEventListener("scroll", handlescroll)

        return () => {
            window.removeEventListener("scroll",handlescroll)
        }
         
    },[])

  return (
    <header className={`${scrolled && "bg-[#141414]"}`}>
          <div className='flex items-center space-x-2 md:space-x-10'>
              <img
                  className='cursor-pointer object-contain'
                  src="https://rb.gy/ulxxee"
                  alt=""
                  width={100}
                  height={100} /> 
              
              <ul className='hidden space-x-4 md:flex'>
                  <li className='headerLink'>Home</li>
                  <li className='headerLink'>TV Shows</li>
                  <li className='headerLink'>Movies</li>
                  <li className='headerLink'>New & Popular</li>
                  <li className='headerLink'>My List</li>
              </ul>
          </div>
          <div className='flex space-x-4 items-center text-sm font-light'>
              <SearchIcon className='hidden sm:inline h-6 w-6' />
              <p className='hidden lg:inline'>Kids</p>
              <BellIcon className='h-6 w-6'/>
        {/* <Link href="/account"> */}
          <img
          src="https://rb.gy/g1pwyx"
          onClick={logout}
            alt=""
            className="cursor-pointer rounded"
          />
        {/* </Link> */}
          </div>
    </header>
  )
}

export default Header
