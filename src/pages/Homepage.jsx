import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Footer from '../components/Footer'
import Slider from '../components/Slider'

const Homepage = () => {
  return (
   <>
   <Navbar isHomePage={true}/>
   <HeroSection/>
   <About/>
   <Slider/>
   <Footer/>
   </>
  )
}

export default Homepage