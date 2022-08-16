import React, { useState } from 'react'
import Collapsible from 'react-collapsible'
import {motion} from 'framer-motion'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'

export default function Accordian({item}) {

  
    const variant = {
      open: {rotate: "180deg"},
      closed: {rotate: "0deg"}
    }


    const [isActive, setIsActive] = useState(false)

  return (

    <div className='w-full bg-white shadow-lg rounded-lg transition-all duration-500 p-3  my-5 cursor-pointer' onClick={() => setIsActive(!isActive)}>
        <div className='flex flex-row justify-between'>
            <div className='font-bold flex flex-row justify-center items-center'>
                <img src={item?.icon} className="mx-3" alt="" />
                <p>{item?.title}</p>
            </div>
            <motion.div animate={isActive ? "open" : "closed"} variants={variant} transition={{duration: 0.5}}><MdOutlineKeyboardArrowDown size={30} /></motion.div>
        </div>
        {isActive && <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.1}} className='transition-all duration-500 my-5 py-4 border-t-2'>{item?.content}</motion.div>}
    </div>
  )
}
