import React from 'react'
import profile from '../assets/icon.png'


const Hero = () => {
  return (


    <div className='flex flex-col h-4/5 relative w-full'>

      <div className=' bg-my-image h-4/5 z-0 absolute w-full bg-cover bg-right'>

        <div className='items-center py-20'>
          <p className='text-white text-[40px] font-medium flex justify-center py-1'>Let's get you started on an adventure</p>
          <div className=' flex  mx-auto w-1/3'>
            <p className='text-white text-[15px] font-semibold py-1'>
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

            <div>
              <div className='flex space-x-8'>
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
                    <select name="" id="" className=' bg-white'>
                      <option value="" className='text-primary'>Select state</option>
                    </select>
                  </div>
                  <div className='bg-primary h-[50px]'>
                    <hr className='bg-primary w-[1px]' />


                  </div>
                  <div>
                    <p className='text-gray-500'>Going to</p>
                    <select name="" id="" className='bg-white'>
                      <option value="" className='text-primary'>Select state</option>
                    </select>
                  </div>


                </div>
                {/* Departure  and Return  */}

                <div className='mt-2 flex  space-x-2 border-2 p-3 rounded-lg'>
                  <div>
                    <p className='text-gray-500'>Depature date</p>
                    <input type='date' />
                  </div>
                  <div className='bg-primary h-[50px]'>
                    <hr className='bg-primary w-[1px]' />


                  </div>
                  <div>
                    <p className='text-gray-500'>Return date</p>
                    <input type='date' />
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
    </div>
  )
}

export default Hero