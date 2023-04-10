import React from 'react'
import useAuthContext from '../context/AuthContext'
import axiosClient from '../api/axiosClient'

const ForgotPassword = () => {


  const [email, setEmail] = React.useState('')
  const [errors, setErrors] = React.useState({})
  const [status, setStatus] = React.useState(null)

  const {csrf} = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await csrf()
    setErrors([])
    setStatus(null)
    try {
      const response  = await axiosClient.post('/forgot-password', {email})
      setStatus(response.data.status)
    } catch (error) {
      if(error.response.status === 422) {
        setErrors(error.response.data.errors)
      }
    }
  }


  return (
    <div className='h-screen flex justify-center items-center  scale-up-center'>
    <div className="container flex justify-center items-center flex-col text-center  p-5 rounded-[10px] mx-auto bg-white max-w-[50%] ">
    <h1 className='text-indigo-500 py-5 text-xl capitalize'> Forgot Your Password ? we got you !</h1>
    <form className=' w-[80%]' onSubmit={handleSubmit}>
    
    <div className="mb-4">
     {status && <div className="text-green-500 font-bold">
      {status}
      </div>}
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className=" border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-red-400 transition duration-300 focus-visible:shadow-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex">
        {errors.email && <span className='text-red-400 font-semibold text-sm m-2 p-2'>{errors.email[0]}</span>}
      </div>
    </div>

    <div className="mb-10">
      <button
        type="submit"
        className="w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white">
        Send
      </button>
    </div>
  </form>
  </div>
  </div>
  )
}

export default ForgotPassword
