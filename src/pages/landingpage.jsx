import React, { useState, useEffect, useContext } from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import Destinations from '../components/destinations'
import Footer from '../components/footer'
import { getTickets, searchTickets } from '../services/actions/airove.actions'
import { AppContext } from '../context/context'

const LandingPage = () => {

  const { tickets, setTickets, currentTicket, setCurrentTicket } = useContext(AppContext);

  const [formData, setFormData] = useState({
    leaving: '',
    goingto: '',
    trip: 'One trip',
    returnDate: '',
    departureDate: '',
    persons: '',
    class: 'economy'
  })

  const fetchData = async () => {
    const res = await getTickets()
    setTickets(res)


  }




  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='h-screen bg-white'>
      <Header />
      <Hero formData={formData} setFormData={setFormData} />
      {/* <Flights /> */}
      <Destinations formData={formData} setFormData={setFormData} />
      <Footer />


    </div>
  )
}

export default LandingPage