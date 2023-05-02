import React from "react";
import {VscLockSmall} from 'react-icons/vsc'
import useAuthContext from "../context/AuthContext";


const RegisterForm = () => {


    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      password: '',
      password_confirmation:''
    })
 
    const {register, errors} = useAuthContext()

    const handleChange = (event) => {
      const {name, value} = event.target
      setFormData(formData => ({...formData, [name]: value}))
    }
    
    console.log(errors);

    const handleSubmit = async (event) => {
      event.preventDefault()
      const {name, email, password, password_confirmation} = formData
      register({name, email, password, password_confirmation})
    }


    return(
      <form onSubmit={handleSubmit}> 
        <div className="mb-4 ">
          <input
            type="name"
            name="name"
            placeholder="Full Name"
            className=" border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-red-400 transition duration-300 focus-visible:shadow-none"
            value={formData.name}
            onChange={handleChange}
          />
          <div className="flex">
            {errors.name && <span className='text-red-400 text-sm m-2 p-2'>{errors.name}</span>}
          </div>
        </div>  
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className=" border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-red-400 transition duration-300 focus-visible:shadow-none"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="flex">
           {errors.email && <span className='text-red-400 text-sm m-2 p-2'>{errors.email}</span>}
          </div>
          </div>
          <div className="mb-4">
            <input 
                type="password" 
                name="password" 
                placeholder="Password" className=" border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-red-400 transition duration-300 focus-visible:shadow-none"
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
        <div className="mb-10 ">
            <button
                type="submit"
                className="flex items-center justify-center w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"
            >
                <VscLockSmall className="mr-2 text-2xl" />Register</button>
        </div>
      </form>
    )
  }
  
  export default RegisterForm