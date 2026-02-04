import React from 'react'
import {RxHamburgerMenu } from 'react-icons/rx'
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-white w-[98%] p-2 rounded-2xl absolute top-2'>
      <div className='text-lg font-semibold'>
        <button className='flex items-center hover:cursor-pointer hover:bg-gray-200 p-2 rounded-2xl'
                // onClick={() => console.log('Menu clicked')}
        >
          <RxHamburgerMenu size={32} />
        </button>
      </div>
      <div className='text-xl font-bold'>
        <span>TEXT TEXT</span>
      </div>
      <div className='flex space-x-4'>
        <button className='flex items-center hover:cursor-pointer hover:bg-gray-200 p-2 rounded-2xl'
                // onClick={() => console.log('Cart clicked')}
        >
          <MdOutlineShoppingBag size={32} />
        </button>
      </div>
    </div>
  )
}

export default Navbar