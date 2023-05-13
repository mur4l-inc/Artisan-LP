import React from 'react'
import MenuItem from './MenuItem'
import { FaBeer } from 'react-icons/fa'
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>

      <div className="flex">
        <MenuItem
          title="HOME"
          address="/"
          Icon={AiFillHome}
        />
        <MenuItem
          title="ABOUT"
          address="/"
          Icon={AiFillInfoCircle}
        />
      </div>

      <div className="logo">
        <Link href="/">
          <h2 className='text-lg'>
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
          </h2>
        </Link>
      </div>

    </div>
  )
}
