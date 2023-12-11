import React, { useContext, useState, useEffect } from 'react'
import profile from '../assets/icon.png'
import { data } from '../data'
import { AppContext } from '../context/context'
import { searchTickets } from '../services/actions/airove.actions'
import { searchLoadingState } from '../services/actions/airove.actions'



const Hero = ({ formData, setFormData }) => {
  const { tickets, setTickets, currentTicket, setCurrentTicket, searchedTicket, setSearchedTicket } = useContext(AppContext)


  const searchData = async (formData) => {
    const res = await searchTickets(formData)
    setSearchedTicket(res)
  }

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

  }
  useEffect(() => {

    console.log(searchLoadingState, 'SS');
  }, [searchLoadingState, !searchLoadingState])

  return (


    <div className='flex flex-col h-4/5 relative w-full'>

      <div className='bg-[url("assets/images/background.svg")] h-4/5 z-0 absolute w-full bg-cover bg-right'>

        <div className='items-center py-20'>
          <p className='text-white text-[40px] font-medium flex justify-center py-1'>Let's get you started on an adventure</p>
          <div className=' flex  mx-auto w-1/3'>
            <p className='text-white text-[17px] font-light py-1'>
              Welcome to Airove, with just a few clicks, you can book a flight to any destination you desire
            </p>
          </div>
        </div>
      </div>

      <div className='flex mx-auto w-4/5 mt-10' >
        <div className='h-/5 flex   bg-white rounded-xl z-20 mt-80 absolute w-4/5 shadow-lg'>
          <div className='items-center py-10 px-8'>
            <div>
              <p className='font-semibold text-gray-500'>Flights</p>
            </div>
            {/* FLight */}

            <div className='text-[14px]'>
              <div className='flex space-x-8 p-4'>
                <div className='mt-2'>

                  <select name="trip" id="" className='py-4 px-4 rounded-md text-primary border-gray-300 border-2 border-solid bg-white' onChange={(e) => handleChange(e)}>
                    <option value="One trip">One trip</option>
                    <option value="Round trip">Round trip</option>
                  </select>
                </div>

                <div className='mt-2'>

                  <select name="class" id="" className='py-4 px-4 rounded-md text-primary border-gray-300 border-2 border-solid bg-white' onChange={(e) => handleChange(e)}>
                    <option value="economy">Economy </option>

                    <option value="business">Business class </option>
                    <option value="first">First class </option>
                  </select>
                </div>

              </div>
              <div className='mt-4 flex space-x-4'>
                {/* Select to and Going to */}
                <div className='mt-2 flex  space-x-2 border-2 p-3 rounded-lg'>
                  <div>
                    <p className='text-gray-500'>Leaving</p>
                    <select name="leaving" id="" className=' bg-white' onChange={(e) => handleChange(e)}>
                      {tickets?.map((e, index) =>
                        <option value={e.departureState} key={index} className='text-primary'>{e.departureState}</option>
                      )}
                    </select>
                  </div>
                  <div className='bg-primary h-[50px]'>
                    <hr className='bg-primary w-[1px]' />


                  </div>
                  <div>
                    <p className='text-gray-500'>Going to</p>
                    <select name="goingto" id="" className='bg-white' onChange={(e) => handleChange(e)}>
                      {tickets?.map((e, index) =>
                        <option value={e.arrivalState} key={index} className='text-primary'>{e.arrivalState}</option>
                      )}
                    </select>
                  </div>


                </div>
                {/* Departure  and Return  */}

                <div className='mt-2 flex  space-x-2 border-2 p-3 rounded-lg'>
                  <div>
                    <p className='text-gray-500'>Depature date</p>
                    <input type='date' name='departureDate' onChange={(e) => handleChange(e)} />
                  </div>
                  <div className='bg-primary h-[50px]'>
                    <hr className='bg-primary w-[1px]' />


                  </div>
                  <div>
                    <p className='text-gray-500'>Return date</p>
                    <input type='date' name='returnDate' onChange={(e) => handleChange(e)} />
                  </div>


                </div>
                {/* No of persons  */}

                <div className='mt-2 flex  items-center space-x-2 border-2 p-3 rounded-lg bg-white'>
                  <img src={profile} alt="" sizes='' className='h-[20px]' />
                  <select className='bg-white' name='persons' onChange={(e) => handleChange(e)} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>

                  </select>
                </div>
                {/*Search Button */}
                <div className='mt-4'>
                  {searchLoadingState === true ?

                    (<button

                      className=' bg-red-600 py-4 px-8 rounded-lg text-white'> Loading </button>) :

                    (<button
                      onClick={() => {
                        searchData(formData)
                      }}
                      className=' bg-red-600 py-4 px-8 rounded-lg text-white'> Search </button>)}


                </div>

              </div>
            </div>

            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero