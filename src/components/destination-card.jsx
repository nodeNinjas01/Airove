import React from 'react'
import city from '../assets/images/city.jpg'
import stars from '../assets/stars.svg'

const DestinationCard = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg w-1/5 mx-10 font-Montserrat'>
      <div className='rounded-lg'>
        <img src={city} alt="" srcset="" />

      </div>
      <div className='p-8'>
        <div className='my-3 flex  space-x-2'>
          <p className='text-[15px]'>Lagos - Dubai</p>
          <img src={stars} alt="" srcset="" className='w-[90px]'/>
        </div>
        <div className='my-1'>
          <p className='text-gray-500 text-[12px]'>Price ranging from</p>
        </div>
        <div className='my-1'>
          <p>0.022BTC - 0.032BTC</p>
        </div>
        <div className='my-2'>
          <p className='text-red-600 font-semibold text-[12px]'>View more details</p>
        </div>
      </div>


    </div>
  )
}

export default DestinationCard