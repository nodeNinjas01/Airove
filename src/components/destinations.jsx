import React, { useContext } from 'react'
import DestinationCard from './destination-card'
import { AppContext } from '../context/context'

const Destinations = ({formData, setFormData}) => {
  const { tickets, searchedTicket } = useContext(AppContext)

  return (
    <div className='my-20 py-10 font-Montserrat'>
      <div className='flex justify-center'>
        <p className='text-[20px]  mb-10  text-gray-600 font-medium  flex justify-between'> Explore Popular Destinations</p>
      </div>

      <div className='flex justify-center w-full'>
        {searchedTicket?.map((e, index) =>
          <DestinationCard data={e} key={index} formData={formData}  />
        )}
      </div>

    </div>
  )
}

export default Destinations