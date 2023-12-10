import React, { useContext, useState, useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom'
import { generateWallet } from '../services/actions/airove.actions'
import { AppContext } from '../context/context'

const FlightTwo = () => {

  const navigate = useNavigate()
  const { generatedWallet, setGeneratedWallet, currentTicket } = useContext(AppContext)
  const [loadingState, setLoadingState] = useState(false)
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    dob: '',
    phone: '',
    nationality: '',
    gender: '',
    price_amount: '',
    customer_did: ''
  })



  const handleGenerateWallet = async (formData) => {
    setLoadingState(true)

    const res = await generateWallet(formData)
    console.log(res, 'Wallet Response');
    setLoadingState(false)
    setGeneratedWallet(res)

    return res
  }

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

  }
  useEffect(() => {
    const amt = currentTicket?.formData?.class === "economy"
      ? currentTicket?.economyPrice
      : currentTicket?.formData?.class === "business"
        ? currentTicket?.businessPrice
        : currentTicket?.firstClassPrice

    setFormData({ ...formData, price_amount: amt })


  }, [])

  useEffect(() => {

  }, [loadingState])



  return (
    <div className='bg-white/20'>
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
              <p className='px-2 bg-gray-500 w-[25px] h-[25px] flex text-white m-4 items-center rounded-full '>3</p>

            </div>
            <p className='text-[14px] my-4 text-gray-500 font-bold'>Payment</p>
          </div>

        </div>
      </div>
      {/* /Passengr Details */}
      <div className=' mx-8 mt-20 p-10 rounded-lg shadow-lg my-10' >
        <p className='font-2xl text-primary my-4'>Passenger Details</p>
        <p className='mb-8 text-gray-500 font-light '> Hello user, kindly input your details</p>
        <div className='flex flex-1 space-x-2'>
          <div className='flex-[0.5]'>
            <p className='font-light my-2'>First Name</p>
            <input type="text" name="firstname" id="" className='w-full border-[1px] rounded-sm h-[50px] p-3' onChange={(e) => handleChange(e)} />
          </div>
          <div className='flex-[0.5]'>
            <p className='font-light my-2'>Last Name</p>
            <input type="text" name="lastname" id="" className='w-full p-3  border-[1px] rounded-sm h-[50px]' onChange={(e) => handleChange(e)} />
          </div>





        </div>
        {/* Nationality */}
        <div className='flex space-x-2'>
          <div className='my-4 w-1/4'>
            <p className='font-light my-2'>Nationality</p>
            <div>
              <select name="nationality" id="" className='w-full font-light bg-white rounded-sm border px-4 py-3' onChange={(e) => handleChange(e)} >
                <option value="">Nigerian</option>
              </select>
            </div>
          </div>
          <div className='my-4 w-1/4'>
            <p className='font-light my-2'>Gender</p>
            <div>
              <select name="gender" id="" className='w-full font-light bg-white rounded-sm border px-4 py-3' onChange={(e) => handleChange(e)} >
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Others</option>
              </select>
            </div>
          </div>
          <div className='my-4 w-1/4'>
            <p className='font-light my-2'>Date Of Birth</p>
            <div>
              <input name="dob" type='date' className='w-full font-light  bg-white rounded-sm border px-4 py-2' onChange={(e) => handleChange(e)} />


            </div>
          </div>
          <div className='my-4 w-1/4'>
            <p className='font-light my-2'>Phone Number</p>
            <div>
              <input name="phone" type='number' className='w-full font-light  bg-white rounded-sm border px-4 py-2' onChange={(e) => handleChange(e)} />

            </div>
          </div>

        </div>
        {/* Email Addess */}
        <div className=''>
          <div className='flex  space-x-4 w-3/4 items-center'>
            <div className='w-2/4'>
              <p className='font-light my-2'>Email Address</p>
              <div>
                <input type='text' name="email" id="" className='w-full font-light bg-white rounded-sm border px-4 py-3' onChange={(e) => handleChange(e)} />

              </div>
            </div>
            <div className='mt-8'>
              {loadingState ? <button

                className='px-6 py-3 bg-red-600 rounded-sm text-white font-Montserrat' type="button">
                Generating wallet .......
              </button> :

                <button
                  onClick={() => {
                    const res = handleGenerateWallet()
                    if (res?.error == undefined) {
                      navigate('/flight-three')

                    }
                  }}
                  className='px-6 py-3 bg-red-600 rounded-sm text-white font-Montserrat' type="button">
                  Generate Payment Address
                </button>
              }
            </div>
          </div>



        </div>

      </div>
      <Footer />
    </div>

  )
}

export default FlightTwo