import React, { createContext, useContext, useState } from "react";
import axiosClient from '../api/axiosClient'
import {useNavigate} from 'react-router-dom' 



const AuthContext = createContext({})

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const csrf = () => axiosClient.get('sanctum/csrf-cookie') 
    
    const getUser = async () => {
        const {data} = await axiosClient.get('/api/user')
        setUser(data)
    }

    const login = async ({...data}) => {
        await csrf();
      try {
        await axiosClient.post('/login', data)
        // console.log("User Logged in");
        await getUser()
        navigate('/')
      } catch (error) {
        if(error.response.status === 422) {
          setErrors(error.response.data.errors)
        }
      }
    }

    const register = async ({...data}) => {
        await csrf();
      try {
        await axiosClient.post('/register', data)
        // console.log("User Logged in"); 
        await getUser()
        navigate('/')
      } catch (error) {
        if(error.response.status === 422) {
          setErrors(error.response.data.errors)
        }
      }
    }

    const logout = () => {
      axiosClient.post('/logout').then(() => {
        setUser(null)
      })
    }
    React.useEffect(() => {
      if(!user){
        getUser()
      }
    }, [])

    return <AuthContext.Provider value={{user, setUser, errors, setErrors, getUser, login, register, logout, csrf}}>
        {children}
    </AuthContext.Provider>
} 

const useAuthContext = () => {
    return useContext(AuthContext)
}

export default useAuthContext;