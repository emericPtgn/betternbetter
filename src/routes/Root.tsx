import React from 'react'
import Navbar from '../component/Navbar'
import BottomNavbar from '../component/BottomNavbar'
import HeroSection from '../component/HeroSection'
import Billeterie from '../component/Billeterie'
import Footer from '../component/Footer'
import Newsletter from '../component/Newsletter'
import Programmation from '../component/Programmation'

const Root = () => {
  return (
    <div className='font-montserrat'>
      <Navbar />
      <BottomNavbar />
      <HeroSection />
      <Programmation />
      <Billeterie />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Root
