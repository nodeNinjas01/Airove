import React, { useContext, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/context'
import { login } from '../services/actions/airove.actions'
import { toast } from 'react-toastify'

const SignUp = ({ type }) => {
  const navigate = useNavigate()
  const { loggedInUser, setLoggedInUser } = useContext(AppContext)
  const [loadingState, setLoadingState] = useState(false)
  const [formData, setFormData] = useState({
    phoneNumber: '',
    passphrase: ''
  })


  const handleLogin = async (formData) => {
    setLoadingState(true)

    const res = await login(formData)

    if (res?.res_status) {
      setLoggedInUser(res)
      localStorage.setItem('airove', JSON.stringify(res))
      toast.success('Login successful')
      setLoadingState(false)
      navigate('/')

    } else {
      setLoadingState(false)
      toast.warning('Login not successful')
    }

  }

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

  }

  return (
    <div>
      <Header />

      {/* /Passengr Details */}
      <div className=' mx-52 mt-20 p-10 rounded-lg shadow-lg my-10' >
        <p className='text-3xl text-primary my-4 font-Orbitron'>Airove</p>
        <p className='mb-8 font-medium text-[20px]'> {type == "sign-up" ? "Create an account" : "Login"}</p>
        <div className='my-4 w-full'>
          <p className='font-light my-2'>Input a username (Phonenumber)</p>
          <div>
            <input name="phoneNumber" type='text' className='w-full font-light h-[60px]  bg-white rounded-md border px-4 py-2' onChange={(e) => handleChange(e)} />
          </div>
        </div>
        <div className='my-4 w-full'>
          <p className='font-light my-2'>{type == "login" ? "Password" : "Create password"}</p>
          <div>
            <input name="passphrase" type='text' className='w-full font-light h-[60px]  bg-white rounded-md border px-4 py-2' onChange={(e) => handleChange(e)} />
          </div>
        </div>
        {loadingState ?
          <button

            type="button" className='my-4 bg-red-600 w-full h-[60px] py-2 font-bold text-white rounded-md'>{type == "login" ? "Logging In" : "Generating DID"}</button>

          :
          <button
            onClick={() => {
              console.log(formData, 'Login formData');
              if (formData?.phoneNumber !== '' && formData?.passphrase !== '') {
                handleLogin(formData)
              }
            }}
            type="button" className='my-4 bg-red-600 w-full h-[60px] py-2 font-bold text-white rounded-md'>{type == "login" ? "Login" : "Generate DID"}</button>}

        {type == "login" ? "" :

          <p className='my-4'>Already have an account? <span className='text-red-600 hover:cursor-pointer' onClick={() => {
            navigate('/sign-in')
          }}>Sign in</span></p>
        }


      </div>
      <Footer />
    </div>
  )
}

export default SignUp