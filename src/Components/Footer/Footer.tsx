import React from 'react'
import Button from '../Button/Button.tsx'
import gradientBars from '../../assets/gradient-bars.svg'
import {MdEmail} from 'react-icons/md'
import {ImLocation} from 'react-icons/im'
import {BsArrowRight, BsTelephoneFill} from 'react-icons/bs'
// import BitontreeLogo from '../../assets/BitontreeLogo.tsx'
import bitontreeWhite from '../../assets/bitontree-white-logo.svg'
import navItems from '../Navbar/navItems.ts'
import socialIcons from '../../assets/social-icons.svg'
import footerImg from '../../assets/footer-image.png'
import worldBg from '../../assets/world-bg.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'

export default function Footer() {
  return (
    <section className='w-full relative mt-80'>
        <div className='z-[5] flex flex-col lg:flex-row w-full px-5 lg:px-40 absolute -top-52 md:-top-[171px] lg:-top-40'>
            <div className='w-full bg-gradient-to-bl  from-darkBlue to-pinkishRed py-5 px-6 lg:py-16 lg:px-16 rounded-t-xl lg:rounded-t-none lg:rounded-tl-xl lg:rounded-bl-xl'>
                <h2 className='text-3xl font-InriaSans font-bold mb-10 text-white'>Looking for Web development solutions?</h2>
                <Button title="BOOK A MEETING" bgColor="white" textColor="blue"/>
            </div>
            <div className="gradient-bars-bg bg-offWhite relative rounded-b-xl lg:rounded-b-none lg:rounded-tr-xl lg:rounded-br-xl py-6 px-7 lg:py-16 lg:px-16 w-full">
              <img src={gradientBars} className='absolute top-0 right-24' alt="" />
                <h2 className='text-3xl font-InriaSans font-bold mb-10 lg:mb-10'>Can't find a service you are looking for?</h2>
                <Button title="EXPLORE MORE" bgColor="pinkishRed" textColor="white"/>
            </div>
        </div>
        <div className='flex flex-col bg-darkBlue w-full items-center text-white font-InriaSans pt-20 relative z-[2]'>
          <div className='flex flex-col lg:flex-row pt-32'>
              <div className='flex flex-col w-full px-5'>
                <h2 className='text-3xl font-bold mt-10 lg:mt-0'>Looking for a career opportunity?</h2>
                <div className='flex flex-row items-center my-5'>
                  <MdEmail className='mr-2' size={20}/>
                  <a href="/" className='font-medium text-lg text-footerGray'>career@bitontree.com</a>
                </div>
                <a href="">
                  <div className='w-9/12 flex flex-row text-sm font-Inter font-semibold justify-center items-center text-white border-2 border-white p-2 rounded-full text-center cursor-pointer hover:bg-white hover:text-darkBlue transition-all duration-300'>
                    <p>EXPLORE MORE</p>
                    <BsArrowRight className='ml-3' size={30}/>
                  </div>
                </a>
              </div>
              <div className='flex flex-col mt-16 mx-5 lg:m-0 lg:w-full'>
                <h3 className='text-lg font-medium mb-3'>Regarding us</h3>
                {navItems.map((item) => (
                  <a href={item.link}><div className='text-footerGray w-full cursor-pointer hover:text-white z-[1]'>{item.title}</div></a>
                ))}
              </div>
              <div className='flex flex-col mt-16 mx-5 lg:m-0 lg:w-full'>
                <h3 className='text-lg text-white'>Reach us out</h3>
                <div className='my-3 flex flex-row items-center text-footerGray'>
                  <ImLocation className='mr-2' size={40}/>
                  <p className='text-sm pr-10'>211, Scarlet Gateway, Corporate Rd, Prahlad Nagar, Ahmedabad, 380015</p>
                </div>
                <div className='my-3 flex flex-row items-center text-footerGray'>
                  <BsTelephoneFill size={20} className="mx-2"/>
                  <p>+91 972 2999 754</p>
                </div>
                <div className='my-3 flex flex-row items-center text-footerGray'>
                  <MdEmail size={25} className="mx-2"/>
                  <p>info@bitontree.com</p>
                </div>
              </div>
              <div className='flex flex-col mt-14 lg:mt-0 items-center w-full'>
                  <div className=''>
                    <p className='m-2'>Follow us on</p>
                    <div className='flex flex-row'>
                      <a href="/facebook"><img src={facebook} className="mx-2" alt="" /></a>
                      <a href="/linkedin"><img src={linkedin} className="mx-2" alt="" /></a>
                      <a href="/instagram"><img src={instagram} className="mx-2" alt="" /></a>
                      <a href="/twitter"><img src={twitter} className="mx-2" alt="" /></a>
                    </div>
                  </div>
                  <div>
                    <img src={footerImg} className="mt-10" alt="" />
                  </div>
              </div>
          </div>
          <div className='h-[2px] my-2 bg-slate-50 opacity-10 w-11/12'></div>
          <div className='flex flex-col lg:flex-row items-center justify-between w-full py-5 px-8 lg:py-10 lg:px-16'>
            <p>© 2022. All Rights Reserved by Bitontree</p>
            <img src={bitontreeWhite} alt="" />
            <div className='flex flex-row  my-5 lg:w-auto'>  
              <div className='border-r-2 border-r-dullBlack px-2 lg:w-auto'>
                <p>Privacy Policy</p>
              </div>
              <div className='border-r-2 border-r-dullBlack px-2'>
                <p>Terms & Conditions</p>
              </div>
              <div className='border-r-2 border-r-dullBlack px-2'>
                <p>FAQ</p>
              </div>
              <div className='mx-2'>
                <p>GDPR</p>
              </div>
            </div>
          </div>
          <img src={worldBg} className="absolute z-[-1] object-cover bottom-20" alt="" />
        </div>
    </section>
  )
}
