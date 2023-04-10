import React from 'react'
import useAuthContext from '../context/AuthContext'
import {FaUserAlt} from 'react-icons/fa'
const Home = () => {

  const {user, getUser} = useAuthContext() 

  


  return (
    <div className='scale-up-center flex items-center justify-center flex-row '>
      
      {user&&<h1 className='text-white flex gap-4 mt-10 text-4xl'><FaUserAlt className='text-4xl'/>Welcome {user&&user?.name}</h1>}
    </div>
  )
}

export default Home
