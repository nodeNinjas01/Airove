import React, { useContext } from 'react'
import city from '../assets/images/city.jpg'
import stars from '../assets/stars.svg'
import { AppContext } from '../context/context'
import { useNavigate } from 'react-router-dom'

const DestinationCard = ({ data, formData }) => {
  const { currentTicket, setCurrentTicket } = useContext(AppContext)
  const navigate = useNavigate()
  return (
    <div className='bg-white shadow-lg rounded-lg w-1/5 mx-10 font-Montserrat'>
      <div className='rounded-lg'>
        <img src={city} alt="" srcset="" />

      </div>
      <div className='p-8'>
        <div className='my-3 flex  space-x-2'>
          <p className='text-[15px]'>{data?.departureState} - {data?.arrivalState}</p>
          <img src={stars} alt="" srcset="" className='w-[90px]' />
        </div>
        <div className='my-2' >
          <p className='text-primary'> {data?.airlineName}</p>
        </div>
        <div className='my-1'>
          <p className='text-gray-500 text-[12px]'>Price</p>
        </div>
        <div className='my-1'>
          <p className='font-semibold'>{
            formData?.class === "economy"
              ? data?.economyPrice
              : formData?.class === "business"
                ? data?.businessPrice
                : data?.firstClassPrice
          } BTC</p>
        </div>
        <div className='my-2'>
          <p className='text-red-600 font-semibold text-[12px] hover:cursor-pointer'

            onClick={() => {
              const setData = { ...data, formData: formData }
              setCurrentTicket(setData)
              navigate('/flight')


            }}
          >View more details</p>
        </div>
      </div>


    </div>
  )
}

export default DestinationCard