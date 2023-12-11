import React, { useContext } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { AppContext } from '../context/context'

const FlightThree = () => {
  const { generatedWallet, currentTicket } = useContext(AppContext)
 
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
              <p className='px-2 bg-primary w-[25px] h-[25px] flex text-white m-4 items-center rounded-full '>2</p>
              <hr className='w-full' />
            </div>
            <p className='text-[14px] my-4 text-primary font-bold'>Passenger Details</p>
          </div>
          <div className='w-1/6'>
            <div className='flex items-center'>
              <p className='px-2 bg-primary w-[25px] h-[25px] flex text-white m-4 items-center rounded-full '>3</p>

            </div>
            <p className='text-[14px] my-4 text-primary font-bold'>Payment</p>
          </div>

        </div>
      </div>
      {/* /Passengr Details */}
      <div className=' mx-8 mt-20 p-10 rounded-lg shadow-lg my-10' >
        <p className='text-3xl text-primary my-4'>Payment Details</p>
        <p className='mb-8 text-gray-500 font-light text-[20px]'>Kindly pay <span className='font-bold'>{
          currentTicket?.formData?.class === "economy"
            ? currentTicket?.economyPrice
            : currentTicket?.formData?.class === "business"
              ? currentTicket?.businessPrice
              : currentTicket?.firstClassPrice
        }BTC</span> to the  <span className='font-bold'> "Bitcoin" </span>  address that was generated for you. A verifiable credential will be sent to your email once the payment is confirmed from our end.<br></br>Thank you for your patronage.</p>
        <div className='flex'>
          <div className='w-full'>
            <p className='font-light my-2'>Generated Bitcoin Address - <span className='font-bold'>
              {
                currentTicket?.formData?.class === "economy"
                  ? currentTicket?.economyPrice
                  : currentTicket?.formData?.class === "business"
                    ? currentTicket?.businessPrice
                    : currentTicket?.firstClassPrice
              }BTC</span></p>
            <input type="text" name="" id="" className='w-full flex  items-center border-[1px] rounded-sm h-[50px] p-3' value={generatedWallet?.data?.wallet?.data?.pay_address} />
          </div>


        </div>


      </div>
      <Footer />
    </div>
  )
}

export default FlightThree