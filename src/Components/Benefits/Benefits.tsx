import React from 'react'
import benefitsImage from '../../assets/benefits-img.png'
import Accordian from '../Accordian/Accordian.tsx'
import { accordianData } from '../Accordian/accordianData.tsx'

export default function Benefits() {
  return (
    <>
      <section className='bg-blueOpaque font-InriaSans my-24 py-5'>
        <div className='mx-3 lg:mx-32'>
          <div className='mb-10 lg:m-0'>
            <span className='text-7xl relative top-10 font-normal text-darkBlue opacity-5'>OUR BENEFITS</span>
              <h1 className='text-40px leading-10 text-darkBlue font-bold'>OUR BENEFITS</h1>
              <div className='flex flex-row items-center'>
                  <hr className='h-3px bg-pinkishRed w-60px rounded-full m-1'/>
                  <hr className='h-3px bg-pinkishRed w-5px rounded-full'/>
              </div>
          </div>
          <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center'>
            <div className='w-full'>
              <div className=''>
                {accordianData.map((item) => (
                  <Accordian item={item} />
                ))}
              </div>
            </div>
            <div className='w-full flex justify-center lg:justify-end'>
              <img src={benefitsImage} className='' alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
