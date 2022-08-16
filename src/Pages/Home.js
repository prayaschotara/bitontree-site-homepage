import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HeroSection from '../Components/HeroSection/HeroSection'
import CaseStudies from '../Components/CaseStudies/CaseStudies'
import Benefits from '../Components/Benefits/Benefits.tsx'
import ClientSays from '../Components/ClientSays/ClientSays.tsx'
import ArticleSection from '../Components/Articles/ArticleSection.tsx'
import Footer from '../Components/Footer/Footer.tsx'
import BookNow from '../Components/BookNow/BookNow.tsx'

export default function Home() {
  
  return (
    <>
      <Navbar />
      <HeroSection/>
      <BookNow />
      <CaseStudies />
      <Benefits />
      <ClientSays />
      <ArticleSection />
      <Footer />
      
    </>
  )
}
