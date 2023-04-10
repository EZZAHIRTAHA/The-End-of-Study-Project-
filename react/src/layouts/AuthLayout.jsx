import React from 'react'
import useAuthContext from '../context/AuthContext'
import { Outlet, Navigate} from 'react-router-dom'

const AuthLayout = () => {

    const {user} = useAuthContext()

  return (
    <div>
      {user ? <Outlet/> : <Navigate to={`/login`} /> }
    </div>
  )
}

export default AuthLayout
