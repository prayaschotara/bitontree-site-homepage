import React from 'react'
import './CaseStudies.css'
import appsmithImg from '../../assets/appsmith-img.png'
import eqonexImg from '../../assets/eqonex-img.png'
import eqonexLogo from '../../assets/eqonex-logo.svg'
// import halfCircle1 from '../../assets/half-circle1.svg'
import halfCircle2 from '../../assets/half-circle2.svg'
import {BsArrowRight} from 'react-icons/bs'
// import appsmithLogo from '../../assets/appsmith-logo.svg'
import CaseComponent from './CaseComponent.tsx'

export default function CaseStudies() {
  return (
    <section className='case-studies object-cover flex flex-col justify-center items-center mt-32'>
        <div className='flex flex-col w-full justify-center items-center'>
            <span className='text-7xl relative top-10 font-normal text-darkBlue opacity-5 px-3'>CASE STUDIES</span>
            <h1 className='text-40px leading-10 font-InriaSans text-darkBlue text-center font-bold'>CASE STUDIES</h1>
            <div className='flex flex-row justify-center items-center'>
                <hr className='h-3px bg-pinkishRed w-60px rounded-full m-1'/>
                <hr className='h-3px bg-pinkishRed w-5px rounded-full'/>
            </div>
            <div className='mx-10 lg:px-72 text-center my-3 font-InriaSans font-semibold opacity-50'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim nisi soluta atque ut, reiciendis, quisquam laborum quos nulla impedit doloremque! Non, soluta labore enim sed at maiores tempore magni cum! Aliquam nobis laborum veniam assumenda. A dignissimos voluptate, aperiam sint quam, recusandae ratione impedit libero qui corrupti mollitia omnis.</p>
            </div>
        </div>
        <CaseComponent />
    
        <a href="">
            <div className='flex flex-row text-2xl justify-center items-center text-pinkishRed border-2 border-pinkishRed py-2 px-3 rounded-full text-center cursor-pointer hover:bg-pinkishRed hover:text-white transition-all duration-300'>
                {/* <button className='see-more'>See more<BsArrowRight className='right-arrow-icon' size={30} /></button> */}
                <p>See more</p>
                <BsArrowRight className='mt-1 ml-3' size={30}/>
            </div>
        </a>
    </section>
  )
}
