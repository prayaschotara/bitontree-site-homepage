import React from 'react'
import bert from '../../assets/bert.png'
import angularArticle from '../../assets/angular-article.png'
import article2 from '../../assets/article2.svg'
import nftArticle from '../../assets/nft-article.svg'
import reactArticle from '../../assets/react-article.svg'
import anna from '../../assets/anna.png'
import { ArticleData } from './ArticleData.tsx'

export default function ArticleSection() {
  return (
    <section className='flex flex-col lg:flex-row w-full mb-32 justify-center'>
        <div className='flex flex-col px-4 md:px-8 my-5 lg:ml-44  w-full'>
            <img src={angularArticle} alt="" />
            <h3 className='font-InriaSans font-bold text-2xl my-3 leading-9'>Angular Update : Let's empower with knowledge and help businesses innovate with technological decisions.</h3>
            <div>
                <img src={bert} className='float-left mr-3' alt="" />
                <p className='text-2xl font-medium font-InriaSans my-1'>Anna dowson</p>
                <p className='text-sm text-grey font-medium font-InriaSans'>15th June 202</p>
            </div>
        </div>
        <div className='flex flex-col my-5 lg:mx-10 w-10/12'>
            <div className='mx-5 mb-10'>
                <h2 className='text-4xl font-bold font-InriaSans text-blue'>Recent Articles</h2>
            </div>
            {ArticleData.map((item, index) => (
                <div className='w-full flex flex-row justify-start m-5'>
                    <img src={item.articleImg} className='' alt="" />
                    <div className='mx-3'>
                        <h4 className='font-InriaSans font-bold text-lg'>{item.articleTitle}</h4>
                        <div className='my-4'>
                            <img src={item.authorImg} className='h-12 w-12 mr-2 float-left' alt="" />
                            <p className='font-InriaSans font-medium'>Anna dowson</p>
                            <p className='font-InriaSans font-medium text-sm text-grey'>15th June 2022</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}
