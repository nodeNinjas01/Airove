import React, { useContext } from 'react'
import Header from '../components/header'
import profile from '../assets/icon.png'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/context'

const FlightOne = () => {
  const { currentTicket } = useContext(AppContext)
  return (
    <div>
      <Header />
      <div className=' mx-8 mt-10' >
        <div className='flex  justify-between bg-white rounded-md  shadow-lg py-2 px-8'>
          <div className='w-5/6'>
            <div className='flex items-center'>
              <p className='px-2 bg-primary w-[25px] h-[25px] flex text-white m-4 items-center rounded-full '>1</p>
              <hr className='w-full' />
            </div>
            <p className='text-[14px] my-4 text-primary font-bold'>Flight details</p>
          </div>
          {/* PAssenger Details */}
          <div className='w-5/6'>
            <div className='flex items-center'>
              <p className='px-2 bg-gray-500 w-[25px] h-[25px] flex text-white m-4 items-center rounded-full '>2</p>
              <hr className='w-full' />
            </div>
            <p className='text-[14px] my-4 text-gray-500 font-bold'>Passenger Details</p>
          </div>
          <div className='w-1/6'>
            <div className='flex items-center'>
              <p className='px-2 bg-gray-500 w-[25px] h-[25px] flex text-white m-4 items-center rounded-full '>3</p>

            </div>
            <p className='text-[14px] my-4 text-gray-500 font-bold'>Payment</p>
          </div>

        </div>
      </div>

      <div className='flex flex-1 my-16 mx-8'>
        <div className='p-6 rounded-lg shadow-lg font-Montserrat flex-[0.5]'>
          <p className='font-bold text-primary'>Flight Details</p>
          <div className='my-4'>
            <p className='my-2 text-gray-500'>Depature Airpot</p>
            <p className='text-[15px] font-poppins'>{currentTicket?.departureAirport}</p>
          </div>

          <div className='my-4'>
            <p className='my-2 text-gray-500'>Arrival Airpot</p>
            <p className='text-[15px] font-poppins'>{currentTicket?.arrivalAirport}</p>
          </div>
          <div className='my-4'>
            <p className='my-2 text-gray-500'>Stops</p>
            <p className='text-[15px] font-poppins'>{currentTicket?.formData?.trip == "One trip" ? "1" : "2"}</p>
          </div>
          <div className='my-4'>
            <p className='my-2 text-gray-500'>Depature Date / Time</p>
            <p className='text-[15px] font-poppins'>{currentTicket?.departureDate}</p>
          </div>
          <div className='my-4'>
            <p className='my-2 text-gray-500'>Flight Category</p>
            <p className='text-[15px] font-poppins capitalize'>{currentTicket?.formData?.class} class</p>
          </div>

        </div>
        <div className='p-6 rounded-lg border border-primary font-Montserrat flex-[0.5] mx-2'>
          <p className='text-primary font-semibold'>Price Details</p>
          <div className='my-4'>
            <p className='my-2 text-gray-500'>Depature Ticket Fare</p>
            <p className='text-[15px] font-poppins font-semibold'>{
              currentTicket?.formData?.class === "economy"
                ? currentTicket?.economyPrice
                : currentTicket?.formData?.class === "business"
                  ? currentTicket?.businessPrice
                  : currentTicket?.firstClassPrice
            }BTC</p>
          </div>

          <div className='my-4'>
            <p className='my-2 text-gray-500'>Tax</p>
            <p className='text-[15px] font-poppins'>0.0%</p>
          </div>
          <div className='my-4'>
            <p className='my-2 text-gray-500'>Total Fare</p>
            <p className='text-[15px] font-poppins font-semibold'> {
              currentTicket?.formData?.class === "economy"
                ? currentTicket?.economyPrice
                : currentTicket?.formData?.class === "business"
                  ? currentTicket?.businessPrice
                  : currentTicket?.firstClassPrice
            }BTC</p>
          </div>

          <div className='my-12 flex space-x-10'>
            <p className='my-2 text-red-600 font-bold'>Flight Details</p>
            <Link to={'/flight-two'}>
              <p className='text-[15px] font-poppins bg-red-600 px-4 py-2 text-white rounded-md'>Proceed </p>

            </Link>
          </div>

        </div>
        <div>

        </div>


      </div>

      <Footer />

    </div>
  )
}

export default FlightOne