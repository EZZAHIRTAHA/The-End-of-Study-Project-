import React from 'react'
import useAuthContext from '../context/AuthContext'
import {FaUserAlt} from 'react-icons/fa'
import MissionOrderForm from './MissionOrderForm'
const Home = () => {


  


  return (
    <div className='scale-up-center flex items-center justify-center flex-row '>
      
      {/* {user&&<h1 className='text-black flex gap-4 mt-10 text-4xl'><FaUserAlt className='text-4xl'/>Welcome {user&&user?.name}</h1>} */}
	  <MissionOrderForm/>
    </div>
  )
}

export default Home
