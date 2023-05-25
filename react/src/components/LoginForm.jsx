import React, { useEffect, useState } from 'react'
import { BiHide, BiShowAlt } from 'react-icons/bi'
import useAuthContext from '../context/AuthContext'
import {FiLogIn} from 'react-icons/fi'
const LoginForm = () => {
    const [show, setShow] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword]  = useState('')
    
    const {user, setUser, errors, setErrors, login} = useAuthContext()
    const showPassword = () => {
        setShow(show => !show)
    }
    
    const handleSubmit = async (event) => {
      event.preventDefault()
      login({email, password})
    }
  return (
    <form className='' onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className=" border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-red-400 transition duration-300 focus-visible:shadow-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="flex">
                    {errors.email && <span className='text-red-400 font-semibold text-sm m-2 p-2'>{errors.email[0]}</span>}
                  </div>
                </div>
                <div className="mb-4 relative">
                       {show ? <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-red-400 transition duration-300 focus-visible:shadow-none pr-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /> :
                        <input
                        type="text"
                        name="password"
                        placeholder="Password"
                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-red-400 transition duration-300 focus-visible:shadow-none pr-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />}
                        {password && <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                            {show ? <BiShowAlt onClick={showPassword} className='cursor-pointer mx-2 text-[25px] text-indigo-400' />: <BiHide onClick={showPassword} className='cursor-pointer mx-2 text-[25px] text-indigo-400' />}
                        </div>}
                        <div className="flex">
                            {errors.password && <span className="text-red-400 font-semibold text-sm m-2 p-2">{errors.password[0]}</span>}
                        </div>
                        </div>

                <div className="mb-10">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white">
                    <FiLogIn className='mr-3 text-xl'/>Login
                  </button>
                </div>
              </form>
  )
}

export default LoginForm
