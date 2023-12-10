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
      <div className=' mx-8 mt-10' >
        <div className='bg-white rounded-xl  shadow-lg'>
          <div className='items-center py-10 px-8'>
            <div>
              <p className='font-semibold text-gray-500'>Flights</p>
            </div>
            {/* FLight */}

            <div className='text-[14px]'>
              <div className='flex space-x-8 p-4'>
                <div className='mt-2'>

                  <select name="" id="" className='py-4 px-4 rounded-md text-primary border-gray-300 border-2 border-solid bg-white'>
                    <option value="">One trip</option>
                  </select>
                </div>

                <div className='mt-2'>

                  <select name="" id="" className='py-4 px-4 rounded-md text-primary border-gray-300 border-2 border-solid bg-white'>
                    <option value="">Economy </option>
                  </select>
                </div>

              </div>
              <div className='mt-4 flex space-x-4'>
                {/* Select to and Going to */}
                <div className='mt-2 flex  space-x-2 border-2 p-3 rounded-lg'>
                  <div>
                    <p className='text-gray-500'>Leaving</p>
                    <select name="" id="" className=' bg-white text-primary'>
                      <option value="" className='text-primary'>Select state</option>
                    </select>
                  </div>
                  <div className='bg-primary h-[50px]'>
                    <hr className='bg-primary w-[1px]' />


                  </div>
                  <div>
                    <p className='text-gray-500'>Going to</p>
                    <select name="" id="" className='bg-white text-primary'>
                      <option value="" className='text-primary'>Select state</option>
                    </select>
                  </div>


                </div>
                {/* Departure  and Return  */}

                <div className='mt-2 flex  space-x-2 border-2 p-3 rounded-lg'>
                  <div>
                    <p className='text-gray-500'>Depature date</p>
                    <input type='date' className='text-primary' />
                  </div>
                  <div className='bg-primary h-[50px]'>
                    <hr className='bg-primary w-[1px]' />


                  </div>
                  <div>
                    <p className='text-gray-500'>Return date</p>
                    <input type='date' className='text-primary' />
                  </div>


                </div>
                {/* No of persons  */}

                <div className='mt-2 flex  items-center space-x-2 border-2 p-3 rounded-lg bg-white'>
                  <img src={profile} alt="" sizes='' className='h-[20px]' />
                  <select className='bg-white'>
                    <option value="1">1</option>

                  </select>
                </div>
                {/*Search Button */}
                <div className='mt-4'>

                  <p className=' bg-red-600 py-4 px-8 rounded-lg text-white'> Search </p>

                </div>

              </div>
            </div>

            <div>

            </div>
          </div>
        </div>
      </div>

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