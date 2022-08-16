import React from 'react'
// import logo from '../../assets/bitontree-logo.svg'
import BitontreeLogo from '../../assets/BitontreeLogo.tsx'
import './Navbar.css'
import navItems from './navItems.ts'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineClose} from 'react-icons/md'
import { useState } from 'react'
import { animate, motion } from 'framer-motion'

export default function Navbar() {

  const variants = {
    open: { height: "450px" },
    closed: { height: "90px" },
  }
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <motion.div animate={isOpen ? "open" : "closed"}  variants={variants} transition={{type: "tween"}} className={` ${isOpen ? "h-[450px]" : "h-[90px]"} p-4 flex lg:flex-row flex-col lg:justify-between shadow-lg lg:px-36 font-InriaSans fixed bg-white z-10 w-full`}>
            {/* <img src={<BitontreeLogo />} alt="" /> */}
            <BitontreeLogo />
            <motion.div  className='absolute right-8 top-7 lg:hidden' onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <MdOutlineClose className='transition-all duration-500' size={30} /> : <GiHamburgerMenu className="transition-all duration-500" size={30} className=""/>}
            </motion.div>
            <div className={`flex lg:flex-row flex-col md:justify-center md:items-center w-full lg:w-auto transition-all duration-500 ease-in ${isOpen ? 'flex'  : 'hidden'} lg:flex `}>
                {navItems.map((items) => (
                  <div className='inline lg:m-4 my-2 font-InriaSans font-bold text-darkBlue'><a href={items.link}>{items.title}</a></div>
                ))}
              <div className='nav-item'><button className='bg-pinkishRedOpaque p-2 px-3 border-2 border-pinkishRed rounded-full text-pinkishRed'>REQUEST A QUOTE</button></div>
            </div>
        </motion.div>
    </>
  )
}
