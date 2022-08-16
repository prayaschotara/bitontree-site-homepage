import React from 'react'
import Slider from 'react-slick'
import { ClientData } from './ClientData.tsx';
import leftQuote from '../../assets/left-quote.svg'
import './Slick.css'

export default function ClientSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplatSpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='overflow-hidden p-10'>
        <Slider {...settings}>
            {ClientData.map((item, index) => (
                <div className='flex flex-col border-2 w-1/2 relative border-blue p-10 rounded-tr-30 rounded-bl-30 transition-all duration-1000'>
                    <img src={item.clientImage} className='absolute -left-12 mt-5' alt="" />
                    <img src={leftQuote} className="h-7 w-7" alt="" />
                    <h2 className='text-2xl font-medium'>{item.clientName}</h2>
                    <p>{item.review}</p>
                </div>
            ))}
        </Slider>
    </div>
  )
}
