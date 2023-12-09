import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const SignUp = () => {
  return (
    <div>
      <Header />

      {/* /Passengr Details */}
      <div className=' mx-52 mt-20 p-10 rounded-lg shadow-lg my-10' >
        <p className='text-3xl text-primary my-4 font-Orbitron'>Airove</p>
        <p className='mb-8 font-medium text-[20px]'>Create an account</p>
        <div className='my-4 w-full'>
          <p className='font-light my-2'>Input a username</p>
          <div>
            <input name="" type='text' className='w-full font-light h-[60px]  bg-white rounded-md border px-4 py-2' />
          </div>
        </div>
        <div className='my-4 w-full'>
          <p className='font-light my-2'>Create password</p>
          <div>
            <input name="" type='text' className='w-full font-light h-[60px]  bg-white rounded-md border px-4 py-2' />
          </div>
        </div>

        <button type="button" className='my-4 bg-red-600 w-full h-[60px] py-2 font-bold text-white rounded-md'> Generate DID</button>

        <p className='my-4'>Already have an account? <span className='text-red-600 hover:cursor-pointer'>Sign in</span></p>


      </div>
      <Footer />
    </div>
  )
}

export default SignUp