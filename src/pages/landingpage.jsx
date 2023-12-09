import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import Destinations from '../components/destinations'
import Footer from '../components/footer'

const LandingPage = () => {
  return (
    <div className='h-screen bg-white'>
      <Header />
      <Hero />
      {/* <Flights /> */}
      <Destinations />
      <Footer />


    </div>
  )
}

export default LandingPage