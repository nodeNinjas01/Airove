import React, { useContext, useState, useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/context'
import { login } from '../services/actions/airove.actions'
import { toast } from 'react-toastify'


import { Web5 } from '@web5/api/browser';


const SignUp = ({ type }) => {
  const navigate = useNavigate()
  const { loggedInUser, setLoggedInUser } = useContext(AppContext)
  const [loadingState, setLoadingState] = useState(false)
  const [formData, setFormData] = useState({
    phoneNumber: '',
    passphrase: '',
    customer_did: ''
  })


  const handleLogin = async (formData) => {
    setLoadingState(true)

    const res = await login(formData)

    if (res?.res_status) {
      setLoggedInUser(res)
      const customer_did = localStorage.getItem('customer_did')
      const res_with_did = { ...res, customer_did: JSON.stringify(customer_did) }
      localStorage.setItem('airove', JSON.stringify(res_with_did))
      if (type === "login") {
        toast.success('Login successful')
      } else {
        toast.success('Signup successful')
      }

      setLoadingState(false)
      navigate('/')

    } else {
      setLoadingState(false)
      if (type === "login") {
        toast.warning("Login not successful. The DID on this device isnt tied to this phonenumber/username.")

      } else {
        toast.warning("Sign upnot successful. The DID on this device is already linked to another phonenumber/username.")


      }
    }

  }

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

  }




  useEffect(() => {

    const initWeb5 = async () => {
      console.log('web5 initialization called');
      const { web5, did } = await Web5.connect({ sync: '5s' });
      if (web5 && did) {
        localStorage.setItem('customer_did', JSON.stringify(did))
        setFormData({ ...formData, customer_did: did })
        console.log(web5, did);
        await configureProtocol(web5, did);
      }
    };
    if (!localStorage.getItem('customer_did')) {
      initWeb5()
    } else {
      const customer_did = localStorage.getItem('customer_did')
      setFormData({ ...formData, customer_did: JSON.stringify(customer_did) })
    }


  }, [])


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





const queryLocalProtocol = async (web5) => {
  return await web5.dwn.protocols.query({
    message: {
      filter: {
        protocol: 'https://airrove/tickets',
      },
    },
  });
};

//console.log('this is where Query remote protocol is')
const queryRemoteProtocol = async (web5, did) => {
  return await web5.dwn.protocols.query({
    from: did,
    message: {
      filter: {
        protocol: 'https://airrove/tickets',
      },
    },
  });
};

// console.log('this is where we install local protocol')
const installLocalProtocol = async (web5, protocolDefinition) => {
  return await web5.dwn.protocols.configure({
    message: {
      definition: protocolDefinition,
    },
  });
};

//  console.log('this is where we install remote protocol')
const installRemoteProtocol = async (web5, did, protocolDefinition) => {
  const { protocol } = await web5.dwn.protocols.configure({
    message: {
      definition: protocolDefinition,
    },
  });
  return await protocol.send(did);
};

export const defineNewProtocol = () => {
  return {
    protocol: 'https://airrove/tickets',
    published: true,
    types: {
      publishedTickets: {
        schema: 'https://schema.org/TravelAction',
        dataFormats: ['application/json'],
      },
      userTickets: {
        schema: 'https://schema.org/TravelAction',
        dataFormats: ['application/json'],
      },
    },
    structure: {
      publishedTickets: {
        $actions: [
          { who: 'anyone', can: 'read' },
          { who: 'author', of: 'publishedTickets', can: 'write' },
        ],
      },
      userTickets: {
        $actions: [
          { who: 'author', of: 'userTickets', can: 'read' },
          { who: 'recipient', of: 'userTickets', can: 'read' },
          { who: 'anyone', can: 'write' },
        ],
      },
    },
  };
};

const configureProtocol = async (web5, did) => {
  const protocolDefinition = defineNewProtocol();
  const protocolUrl = protocolDefinition.protocol;

  const { protocols: localProtocols, status: localProtocolStatus } =
    await queryLocalProtocol(web5, protocolUrl);
  if (localProtocolStatus.code !== 200 || localProtocols.length === 0) {
    const result = await installLocalProtocol(web5, protocolDefinition);
    console.log({ result });
    console.log('Protocol installed locally');
  }

  const { protocols: remoteProtocols, status: remoteProtocolStatus } =
    await queryRemoteProtocol(web5, did, protocolUrl);
  if (remoteProtocolStatus.code !== 200 || remoteProtocols.length === 0) {
    const result = await installRemoteProtocol(web5, did, protocolDefinition);
    console.log({ result });
    console.log('Protocol installed remotely');
  }
};




