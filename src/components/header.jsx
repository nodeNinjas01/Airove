import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between pt-8 px-14 pb-4'>

      <div className='pt-2'>
        <p className='text-2xl font-Montserrat'>Airove</p>

      </div>
      <div className=' flex space-x-20 pt-2'>
        <p className='hover:cursor-pointer hover:text-primary'>Home</p>
        <p className='hover:cursor-pointer hover:text-primary'>Flight</p>
        <p className='hover:cursor-pointer hover:text-primary'>About</p>



      </div>
      <div className='flex space-x-2'>
        <p className='text-red-500 p-2'>Sign In</p>
        <p className='bg-red-600 px-4 py-2 text-white rounded-md'>Sign up</p>

      </div>


    </div>
  )
}

export default Header