'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Navigation from './Navigation'
import { AiOutlineSearch, CgProfile, FaBars } from '@/icon/icons'

type Props = {
  activeItem: number
}

function Header ({ activeItem }: Props) {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)

  if (typeof window !== undefined) {
    window?.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setActive(true)
      } else {
        setActive(false)
      }
    })
  }

  const handleClose = (e: React.MouseEvent) => {
    const target = e.target as React.HTMLElement;
    if (target.id === "screen") {
      setOpen(!open);
    }
  };

  return (
    <div
      className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${
        active && 'fixed top-0 left-0 bg-black z-[9999]'
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

        <div>
          <FaBars
            className='text-2xl cursor-pointer'
            onClick={() => setOpen(!open)}
          />
        </div>

        {open && (
          <>
          <div
            className="fixed md:hidden w-full h-screen top-0 left-0 z-[99999] bg-[unset]"
            onClick={handleClose}
            id="screen"
          >
            <div className="fixed bg-black h-screen top-0 right-0 w-[60%] z-[9999]">
              <div className="mt-20 p-5">
                <Navigation activeItem={activeItem} />
                {/* TODO: */}
                {/* {user && (
                  <DropDown
                    user={user}
                    setOpen={setOpen}
                    handleProfile={handleProfile}
                    isSellerExist={isSellerExist}
                  />
                )} */}
              </div>
            </div>
          </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
