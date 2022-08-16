import React from 'react'
import { CaseData } from './CaseData.tsx'

export default function CaseComponent() {

    
    // ${item.contentPosition === "left" ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col lg:flex-row'}
  return (
    <>
        {CaseData.map((item, index) => (
            
            <div className={`flex my-20 justify-center w-full font-InriaSans ${index % 2 === 0 ? ' flex-col md:flex-row lg:flex-row' : 'flex-col md:flex-row-reverse lg:flex-row-reverse'}`}>
                <div className={`w-full my-10 lg:my-0 px-10 pl-8 ${index % 2 === 0 ? 'lg:ml-32' : 'lg:ml-0'}`}>
                    <div>
                        <img src={item.caseLogo} alt="" />
                    </div>
                    <div>
                        <span className='bg-dullBlue flex flex-row text-white my-5 p-1 items-center rounded-full w-72'>
                            <span className='bg-pinkishRed p-2 px-3 text-white rounded-full mr-2'>INDUSTRY</span> <p>{item.caseIndustry}</p>
                        </span>
                        <p className='font-InriaSans font-light text-grey'>{item.caseInfo}</p>
                    </div>

                </div>
                <div className="w-full flex justify-center items-center relative">
                    <img src={item.caseImage} className=" h-fit lg:h-auto" alt="" />
                    <img src={item.bgCircle} className={`${index % 2 === 0 ? 'absolute -top-40 right-0 -z-10' : 'absolute -top-40 left-0 -z-10'}`} alt="" />
                </div>
            </div>
        ))}
    </>
  )
}
