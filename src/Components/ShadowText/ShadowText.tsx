import React from 'react'

export default function ShadowText({heading}) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <span className='text-7xl relative top-10 font-normal text-darkBlue opacity-10'>{heading}</span>
        <h1 className='text-40px leading-10 text-darkBlue font-bold'>{heading}</h1>
    </div>
  )
}
