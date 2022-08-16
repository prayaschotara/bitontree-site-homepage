import React from 'react'
import heroimage from '../../assets/hero-banner-img.svg'
import heroBox from '../../assets/hero-box.svg'
// import heroImg from '../../assets/hero-img.svg'
import {ImLinkedin2, ImFacebook} from 'react-icons/im'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import './HeroSection.css'
import socialIcons from './socialIcons.ts'
import Button from '../Button/Button.tsx'

export default function HeroSection() {
  return (
    <section className='h-screen flex flex-col-reverse md:flex-row justify-center pt-40 md:pt-0'>
        <div className='flex flex-col w-full mt-52 md:ml-5 lg:ml-32  md:mt-48'>
          <div className='text-section m-4 p-0'>
            <h1 className='text-5xl md:text-4xl font-InriaSans text-darkBlue font-bold'>We build awesome websites & provide solutions.</h1>
            <h4 className='text-lg my-5 font-Nunito text-dullBlack'>Bitontree was founded by great minded software professional <br /> who believes in adding business values by using innovation.</h4>
          </div>
          <div className='flex flex-row items-center justify-center lg:flex-col lg:justify-start lg:items-start'>
            <Button title="Let's get started" bgColor="pinkishRed" textColor="white"/>
            <div className='flex flex-row lg:mt-32'>
              <a href="/linkedin">
                <div className='border-2 border-blue p-2 m-2 rounded-full cursor-pointer text-blue transition-all duration-300 hover:bg-blue hover:text-white'>
                  <ImLinkedin2 className='' size={25}/>
                </div>
              </a>
              <a href="/instagram">
                <div className='border-2 border-blue p-2 m-2 rounded-full cursor-pointer text-blue transition-all duration-300 hover:bg-blue hover:text-white'>
                  <BsInstagram size={25} className=''/>
                </div>
              </a>
              <a href="/twitter">
                <div className='border-2 border-blue p-2 m-2 rounded-full cursor-pointer text-blue transition-all duration-300 hover:bg-blue hover:text-white'>
                  <BsTwitter size={25} className=''/>
                </div>
              </a>
              <a href="/facebook">
                <div className='border-2 border-blue p-2 m-2 rounded-full cursor-pointer text-blue transition-all duration-300 hover:bg-blue hover:text-white'>
                  <ImFacebook size={25} className=''/>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-end md:justify-center md:items-start w-full relative md:overflow-hidden top-60 md:top-0 md:mt-40">
          <img src={heroimage} className='w-11/12 md:w-full relative -right-0 md:-right-3' alt="" />
          {/* <div className='bg-gradient-to-bl from-blue to-pinkishRed h-[350px] w-1061px
          overflow-clip origin-center rotate-17.14deg absolute z-[-1] rounded-30
    -     right-[588px] top-[103px] -skew-x-[25deg] -skew-y-[8deg] shadow-lg overflow-hidden'></div> */}
        </div>
      </section>
  )
}
