import { useState } from 'react'
import LandingPage from './pages/landingpage'
import Hero from './components/hero'
import Flights from './pages/flights'
import Destinations from './components/destinations'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FlightOne from './pages/flight-one'
import FlightTwo from './pages/flight-two'
import FlightThree from './pages/flight-three'
import SignUp from './pages/signup'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/flight' element={<Flights />} />
        <Route path='/flight-one' element={<FlightOne />} />
        <Route path='/flight-two' element={<FlightTwo />} />
        <Route path='/flight-three' element={<FlightThree />} />
        <Route path='/sign-up' element={<SignUp type={'sign-up'} />} />
        <Route path='/sign-in' element={<SignUp  type={'login'}/>} />

      </Routes>


    </BrowserRouter>
  )
}

export default App
