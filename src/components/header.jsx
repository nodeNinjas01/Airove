import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/context'
import { useContext } from 'react'
const Header = () => {
  const navigate = useNavigate()
  const { loggedInUser, setLoggedInUser } = useContext(AppContext)
  const userData = localStorage.getItem('airove') ? JSON.parse(localStorage.getItem('airove')) : ''
  return (
    <div className='flex justify-between pt-8 px-14 pb-4 shadow-lg'>

      <div className='pt-2'>
        <p
          onClick={() => {
            navigate('/')
          }}
          className='text-2xl font-Orbitron hover:cursor-pointer'>Airove</p>

      </div>
      <div className=' flex space-x-20 pt-2 font-Montserrat'>
        <Link to={'/'}> <p className='hover:cursor-pointer hover:text-primary'>Home</p></Link>
        <Link to={'/flight'}> <p className='hover:cursor-pointer hover:text-primary'>Flight</p></Link>
        <p className='hover:cursor-pointer hover:text-primary'>About</p>



      </div>
      {userData ? <div className='flex space-x-2'>

        <p className='px-4 py-2 bg-red-600 rounded-lg text-white'>
          {userData?.data?.user}


        </p>
        <button
          onClick={() => {
            setLoggedInUser(null)
            localStorage.clear()
          }}
          className='bg-red-600 rounded-lg text-white px-4 py-2'>Log out</button>
      </div> :

        <div className='flex space-x-2'>
          <Link to={'/sign-in'}>
            <p className='text-red-500 p-2 hover:cursor-pointer'>Sign In</p></Link>
          <Link to={'/sign-up'}>

            <p className='bg-red-600 px-4 py-2 text-white rounded-md'>Sign up</p></Link>

        </div>}


    </div>
  )
}

export default Header