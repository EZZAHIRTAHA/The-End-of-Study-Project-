import React from 'react'
import useAuthContext from '../context/AuthContext'

const Logout = () => {

    const {logout} = useAuthContext()
    
  return (
    <button onClick={logout} className='block rounded py-2 pr-4 pl-3 bg-red-500 transition duration-300 text-white hover:bg-red-800'>
        Logout
    </button>
  )
}

export default Logout
