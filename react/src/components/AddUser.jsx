import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'




const AddUser = () => {


  
  const {id} = useParams()



  return (
    <>
          <form className='scale-up-center flex justify-center items-center flex-col mt-20 w-full '>
            <div class="mb-6 ">
              <label htmlFor="name" class="block mb-2 text-md  text-gray-900 font-semibold">Your Name</label>
              <input 
                type="name" 
                id="name" 
                class="text-sm rounded-lg outline-none w-[300px]  block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " 
                placeholder="name@flowbite.com"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label htmlFor="Email" class="block mb-2 text-md font-semibold  text-gray-900 ">Your Email</label>
              <input 
                type="Email" 
                id="Email" 
                class="text-sm rounded-lg outline-none w-[300px]  block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" flex justify-center items-center gap-5">
              <button type="submit" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 tracking-wider dark:focus:ring-blue-800">Add User</button>
              <Link to="/users" type="submit" class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 tracking-wider dark:focus:ring-red-800">Back</Link >
            </div>
          </form>
    </>
  )
}

export default AddUser
