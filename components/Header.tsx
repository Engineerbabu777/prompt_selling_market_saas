'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Navigation from './Navigation'
import { AiOutlineSearch, CgProfile ,FaBars} from '@/icon/icons'

type Props = {
  activeItem: number
}

function Header ({ activeItem }: Props) {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false);

  if (typeof window !== undefined) {
    window?.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setActive(true)
      } else {
        setActive(false)
      }
    })
  }
  return (
    <div
      className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${
        active && 'fixed top-0 left-0 bg-[#0000] z-[9999]'
      }`}
    >
      <div className='hidden md:w-[90%] mx-auto md:flex items-center justify-between'>
        <div className=''>
          <Link href=''>
            <h1 className='font-Inter text-3xl cursor-pointer '>
              <span className='text-[#64ff4c]'>Turkish</span> Babu
            </h1>
          </Link>
        </div>

        <div className='flex'>
          <Navigation activeItem={activeItem} />
        </div>

        <div className='flex items-center ml-10'>
          <AiOutlineSearch className='text-[25px] mr-5 cursor-pointer' />
          {/* TODO AUTHENTICATION */}
          <Link href='/sign-in'>
            <CgProfile className='text-[25px] mr-5 cursor-pointer' />
          </Link>
        </div>
      </div>

      {/* TODO */}

      {/* FOR MOBILE SCREEN! */}
      <div className='w-full md:hidden flex items-center justify-between'>
        <div className=''>
          <Link href=''>
            <h1 className='font-Inter text-3xl cursor-pointer '>
              <span className='text-[#64ff4c]'>Turkish</span> Babu
            </h1>
          </Link>
        </div>

        <FaBars
            className="text-2xl cursor-pointer"
            // onClick={() => setOpen(!open)}
          />
      </div>
    </div>
  )
}

export default Header
