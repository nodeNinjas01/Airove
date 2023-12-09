import React from 'react'
import DestinationCard from './destination-card'

const Destinations = () => {
  return (
    <div className='my-20 py-10 font-Montserrat'>
      <div className='flex justify-center'>
        <p className='text-[20px]  mb-10  text-gray-600 font-medium  flex justify-between'> Explore Popular Destinations</p>
      </div>

      <div className='flex justify-center w-full'> 
        <DestinationCard />

        <DestinationCard />
        <DestinationCard />
      </div>
      
    </div>
  )
}

export default Destinations