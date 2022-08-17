import React from 'react'
import Button from '../Button/Button.tsx'
import woman from '../../assets/woman.png'
import bookNowBg from '../../assets/book-now-bg.png'

export default function BookNow() {
  return (
    <section className='mt-80 md:mt-20 lg:my-20 lg:mx-20 lg:px-20'>
        <div className='flex flex-col mx-4 md:flex-row justify-center rounded-xl bg-darkBlueOpaque relative'>
            <div className='py-8 px-7 md:px-5 lg:mx-20 w-full text-white'>
                <h2 className='text-4xl font-InriaSans font-bold'>Let's discuss your project !</h2>
                <p className='mb-5 py-5 text-xl font-InriaSans font-light'>Get free consultation and let us know your project idea to turn it into an amazing digital product.</p>
                <Button title="BOOK NOW" bgColor="pinkishRed" textColor="white"/>
            </div>
            <div className='w-full flex justify-center lg:justify-end relative'>
                <img src={woman} className="md:absolute py-5 -top-24 right-20 hidden md:flex" alt="" />
            </div>
            <img src={bookNowBg} className="w-full h-full rounded-xl object-cover absolute -z-10" alt="" />
        </div>
    </section>
  )
}
