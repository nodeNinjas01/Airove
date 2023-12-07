import React from 'react'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'

const Footer = () => {
  return (
    <div className='bg-primary  justify-between py-10 px-10'>
      <div className='flex justify-between'>
        <div>
          <p className='text-2xl text-white'>Airove</p>

        </div>
        <div>
          <p className='text-2xl text-white'>Serivces</p>
          <p className='text-[17px] py-4 text-white'>Flight</p>
          <p className='text-[17px] py-4 text-white'>Hotels</p>
          <p className='text-[17px] py-4 text-white'>Feedbacks</p>


        </div>
        <div>
          <p className='text-2xl text-white'>About us</p>
          <p className='text-[17px] py-4 text-white'>Company</p>
          <p className='text-[17px] py-4 text-white'>Help Center</p>



        </div>
        <div>
          <p className='text-2xl text-white'>Account</p>
          <p className='text-[17px] py-4 text-white'>My Account</p>



        </div>
        <div>
          <p className='text-2xl text-white'>Find Us</p>
          <img src={twitter} alt="" srcset="" className='p-2 bg-white rounded-lg my-4' />
          <img src={instagram} alt="" srcset="" className='p-2 bg-white rounded-lg my-4' />



        </div>
      </div>
      <div className='flex flex-col items-center justify-center mx-auto mt-10'>
        <p className='text-white text-[13px]'> © 2023 Airove All Rights Reserved</p>
        <p className='text-white mt-4 text-[13px]'>Terms and Conditions</p>
      </div>
    </div>
  )
}

export default Footer