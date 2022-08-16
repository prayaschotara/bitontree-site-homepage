import React, { useEffect, useState } from 'react'
import ShadowText from '../ShadowText/ShadowText.tsx'
import bert from '../../assets/bert.png'
import anna from '../../assets/anna.png'
import leftQuote from '../../assets/left-quote.svg'
import { ClientData } from './ClientData.tsx'
import Slider from 'react-slick'
import ClientSlider from './ClientSlider.tsx'

export default function ClientSays() {

    
  return (
    <section className='my-24 font-InriaSans'>
        <div className='flex flex-col justify-center items-center px-5 text-center'>
            <ShadowText heading="CLIENT SAYS"/>
            <div className='flex flex-row items-center'>
                <hr className='h-3px bg-pinkishRed w-60px rounded-full m-1'/>
                <hr className='h-3px bg-pinkishRed w-5px rounded-full'/>
            </div>
            <p className='font-medium text-lg text-black opacity-50'>Let's empower with knowledge and help businesses innovate with technological decisions.</p>
        </div>
        <div className='flex flex-col lg:flex-row w-full my-10'>
            <ClientSlider />
                
        </div>
    </section>
  )
}
