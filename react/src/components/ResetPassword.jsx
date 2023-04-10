import React, { useEffect } from 'react'
import useAuthContext from '../context/AuthContext'
import axiosClient from '../api/axiosClient'
import { useParams, useSearchParams, useNavigate} from 'react-router-dom'



const ResetPassword = () => {

  const [errors, setErrors] = React.useState({})
  const [status, setStatus] = React.useState(null)
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    password_confirmation:''
  })
  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const {csrf} = useAuthContext()

  const {token} = useParams()

  useEffect(() => {
    setFormData({
      email: searchParams.get('email')
    })
  }, [])

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(formData => ({...formData, [name]: value}))
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    await csrf()
    setErrors([])
    setStatus(null)
    try {
      const {email, password, password_confirmation} = formData
      const response  = await axiosClient.post('/reset-password', {
        email: email,
        token,
        password: password,
        password_confirmation: password_confirmation,
      })
      setStatus(response.data.status)
      navigate('/')
    } catch (error) {
      if(error.response.status === 422) {
        setErrors(error.response.data.errors)
      }
    }
  }


  return (
    <div className='h-screen flex justify-center items-center  scale-up-center '>
    <div className="container flex justify-center items-center flex-col text-center  p-5 rounded-[10px] mx-auto bg-white max-w-[50%] ">
    <h1 className='text-indigo-500 py-5 text-xl capitalize'> Add your new password</h1>
    <form className=' w-[80%]' onSubmit={handleSubmit}>
    
    <div className="mb-4">
            <input 
                type="password" 
                name="password" 
                placeholder="New Password" 
                className=" border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-red-400 transition duration-300 focus-visible:shadow-none"
                value={formData.password}
                onChange={handleChange}
          />
          <div className="flex">
            {errors.password && <span className='text-red-400 text-sm m-2 p-2'>{errors.password}</span>}
          </div>
        </div>
        <div className="mb-4">
            <input
                type="password"
                name="password_confirmation"
                placeholder="Confirm Password"
                className=" border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-red-400 transition duration-300 focus-visible:shadow-none"
                value={formData.password_confirmation}
                onChange={handleChange}
          />
          <div className="flex">
            {errors.password_confirmation && <span className='text-red-400 text-sm m-2 p-2'>{errors.password_confirmation}</span>}
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

export default ResetPassword
