import React from 'react'
import useAuthContext from '../context/AuthContext'
import { Outlet, Navigate} from 'react-router-dom'

const GuestLayout = () => {

    const {user} = useAuthContext()

  return (
    <div>
      {!user ? <Outlet/> : <Navigate to={`/`} /> }
    </div>
  )
}

export default GuestLayout
