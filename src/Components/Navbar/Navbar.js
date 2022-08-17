import React from 'react'
// import logo from '../../assets/bitontree-logo.svg'
import BitontreeLogo from '../../assets/BitontreeLogo.tsx'
import './Navbar.css'
import navItems from './navItems.ts'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {

  const variants = {
    open: { height: "350px" },
    closed: { height: "0px" },
  }
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className={`p-4 flex  lg:flex-row flex-col lg:justify-between shadow-lg lg:px-36 font-InriaSans fixed z-10 bg-white  w-full`}>
        <BitontreeLogo  />
        <div className='flex items-center'>
          {/* <img src={logo} alt="" /> */}

          <div className='absolute right-8 top-7 lg:hidden' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdOutlineClose className='transition-all duration-500 cursor-pointer' size={30} /> : <GiHamburgerMenu className="transition-all duration-500 cursor-pointer" size={30} />}
          </div>
          <div className={`nav-list flex lg:flex-row flex-col md:justify-center md:items-center w-full lg:w-auto  ${isOpen ? 'transition-all duration-500 ease-in h-full opacity-100' : 'transition-all duration-200 ease-in h-0 opacity-0'} lg:flex  lg:opacity-100`}>
            {navItems.map((items) => (
              <div className={`inline lg:m-4 my-2 font-InriaSans font-bold text-darkBlue `}><a href={items.link}>{items.title}</a></div>
            ))}
            <div className='nav-item'><button className='bg-pinkishRedOpaque p-2 px-3 border-2 border-pinkishRed rounded-full text-pinkishRed'>REQUEST A QUOTE</button></div>
          </div>
        </div>
      </div>
    </>
  )
}
