import React, { useContext } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import FlightSearch from '../components/flight-details'
import profile from '../assets/icon.png'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/context'
import { useNavigate } from 'react-router-dom'


const Flights = () => {
  const { currentTicket } = useContext(AppContext)
  const navigate = useNavigate()
  console.log(currentTicket, 'FORMDATA');
  return (
    <div className='h-screen  font-Montserrat'>
      <Header />
      {/* Flight Search */}

      {/* Flex Section */}
      <div className='flex flex-1 my-8 py-4 mx-4'>
        <div className='flex-[0.2] h-3/5 bg-white rounded-lg shadow-lg'>
          <div className='px-4'>
            <div className='flex justify-between text-[15px]-4'>
              <p>Filter</p>
              <p className='text-red-500'>Clear all</p>
            </div>
            <p>Price</p>
            <input type="text" name="" id="" className='rounded-sm border-2 my-2 h-[40px] px-4 w-full' placeholder='Type price here' />
            {/* Airline */}
            <div>
              <p className='font-semibold my-3'>Airlines</p>
              <div className='flex justify-between my-2'>
                <p>Mutilple airlines</p>
                <input type="checkbox" name="" id="" className='bg-primary' />
              </div>
              <div className='flex justify-between my-2'>
                <p>British Airways</p>
                <input type="checkbox" name="" id="" className='bg-primary' />
              </div>
              <div className='flex justify-between my-2'>
                <p>Virgan Atlantic</p>
                <input type="checkbox" name="" id="" className='bg-primary' />
              </div>
              <div className='flex justify-between my-2'>
                <p>Emirates</p>
                <input type="checkbox" name="" id="" className='bg-primary' />
              </div>
              <div className='flex justify-between my-2'>
                <p>Turkish Airlines</p>
                <input type="checkbox" name="" id="" className='bg-primary' />
              </div>
              <div className='flex justify-between my-2'>
                <p>Ethiopian Airlines</p>
                <input type="checkbox" name="" id="" className='bg-primary' />
              </div>

            </div>
            <div>
              <p className='font-semibold my-3'>Number of stops</p>
              <div className='flex justify-between my-2'>
                <p>No stops</p>
                <input type="checkbox" name="" id="" className='bg-primary' />
              </div>
              <div className='flex justify-between my-2'>
                <p>One stop</p>
                <input type="checkbox" name="" id="" className='bg-primary' />
              </div>
              <div className='flex justify-between my-2'>
                <p>Two stops</p>
                <input type="checkbox" name="" id="" className='bg-primary' />
              </div>


            </div>
            <div>
              <p className='font-semibold my-3'>Cabin</p>
              <div className='flex justify-between my-2'>
                <p>Economy class</p>
                <input type="checkbox" name="" id="" className='bg-primary' />
              </div>
              <div className='flex justify-between my-2'>
                <p>Business class</p>
                <input type="checkbox" name="" id="" className='bg-primary' />
              </div>
              <div className='flex justify-between my-2'>
                <p>First class</p>
                <input type="checkbox" name="" id="" className='bg-primary' />
              </div>


            </div>
            <div>
              <p className='font-semibold my-3'>Ticket Flexibilty</p>
              <div className='flex justify-between my-2'>
                <p>Refundable</p>
                <input type="checkbox" name="" id="" className='bg-primary' />
              </div>
              <div className='flex justify-between my-2'>
                <p>Non refundable</p>
                <input type="checkbox" name="" id="" className='bg-primary' />
              </div>


            </div>
          </div>

        </div>
        <div className='flex-[0.8] mx-4'>
          {/* Bristish Airline */}
          <div className='flex flex-[0.8] my-4 justify-between h-2/6 border-2 rounded-lg shadow-lg px-3 py-16'>
            <div className='flex justify-between space-x-32 my-auto mx-4'>
              <p className='text-blue-900 capitalize'>{currentTicket?.airlineName}</p>
              <div className=''>
                <p className='font-bold '>8:30</p>
                <p className='text-gray-500'>{currentTicket?.departureState}</p>
              </div>
              <div className='flex flex-col'>
                <p className='mx-auto'> {currentTicket?.formData?.trip == "One trip" ? "1": "2"} stop</p>
                <hr className='w-[100px] h-[5px]' />
                <p className='text-primary text-[15px] mx-auto'>10hrs 30m</p>
              </div>
              <div className=''>
                <p className='font-bold'>18:30</p>
                <p className='text-gray-500'>{currentTicket?.arrivalState}</p>
              </div>
            </div>
            <div className='flex'>
              <hr className='' />


              <div>

                <p className='text-gray-500 my-4 text-[15px] capitalize'>{currentTicket?.formData?.class} class</p>
                <p className='text-gray-500'>Total Price</p>
                <p className='font-poppins my-2 font-semibold'>
                  {
                    currentTicket?.formData?.class === "economy"
                      ? currentTicket?.economyPrice
                      : currentTicket?.formData?.class === "business"
                        ? currentTicket?.businessPrice
                        : currentTicket?.firstClassPrice
                  }
                  BTC</p>
                <p
                  onClick={() => {

                    navigate('/flight-one')
                  }}
                > <p className='text-red-500 text-[15px] hover:cursor-pointer'>View Details</p></p>
              </div>

            </div>

          </div>



        </div>

      </div>
      <Footer />

    </div>
  )
}

export default Flights