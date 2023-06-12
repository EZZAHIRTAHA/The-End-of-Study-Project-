import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {GrClose} from 'react-icons/gr'
import  {AiOutlineMenu} from 'react-icons/ai'
import useAuthContext from '../context/AuthContext'
import Logout from './Logout'
import MySocial from './MySocial'
import { FaUserAlt } from 'react-icons/fa'


const PhoneNav = ({toggle, user}) => {
  

  return(
    <>
    {toggle && <div className="block w-full md:hidden md:w-auto scale-up-center">
    <ul className="mt-4 text-red-500 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium justify-center items-center">
      
         <li>
          {user&&<h1 className='text-black flex gap-4 mt-10 text-xl mb-5'><FaUserAlt      className='text-xl'/>Welcome {user&&user?.name}</h1>}
         </li>
      <li>
        {!user ?<NavLink exact="true" to="/login" activeclassname='active' className="block rounded py-2 pr-4 pl-3 hover:bg-red-500 transition duration-300 hover:text-white">
          Login
        </NavLink> : ""}
      </li>
      <li>
        {!user ?<NavLink exact="true" to="/register" activeclassname='active' className="block rounded py-2 pr-4 pl-3 hover:bg-red-500 transition duration-300 hover:text-white md:border-0">
          Register
        </NavLink> : ""}
      </li>
      <li>
        {user && <Logout/>}
      </li>
    </ul>
  </div>}
  </>
  )
}


const Navbar = () => {

  const [toggle, setToggle] = React.useState(false)

  const handleClick = () => {
    setToggle(toggle => !toggle)
  }

  const {user} = useAuthContext()

  return (
    <nav className="rounded-[20px] shadow-lg   bg-white text-red-500 px-2 py-2.5 sm:px-4">
      
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center text-xl">
            <img src="https://www.1min30.com/wp-content/uploads/2019/02/Logo-OFPPT-1-2.jpg" alt="" className='w-[100px] h-[100px]' />
          </Link>
          <div onClick={handleClick} className="block  scale-up-center md:hidden m-3 cursor-pointer text-">
            {toggle ? <GrClose className='text-[2rem] scale-up-center font-bold' /> : <AiOutlineMenu className='text-[2rem] scale-up-center font-bold' />}
          </div>
          
          <div className=" flex-wrap justify-center items-center hidden md:block ">
            <MySocial/>
          {user&&<h1 className='text-black flex gap-4 mt-10 text-xl mb-5'><FaUserAlt      className='text-2xl'/>Welcome {user&&user?.name}</h1>}
          </div>
          <div className="hidden  w-full md:block md:w-auto">
            <ul className="mt-4 text-red-500 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
             
              {user ? <div className='flex justify-center items-center gap-5'>
              
              <Logout/>
                <NavLink className="block rounded py-2 pr-4 pl-3 bg-indigo-900 transition duration-300 text-white hover:bg-indigo-800" to='/users'> Users</NavLink>
              </div> : <>

         
                <li>
                <NavLink exact="true" to="/login" activeclassname='active' className="block rounded py-2 pr-4 pl-3 hover:bg-red-500 transition duration-300 hover:text-white">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to="/register" activeclassname='active' className="block rounded py-2 pr-4 pl-3 hover:bg-red-500 transition duration-300 hover:text-white md:border-0">
                  Register
                </NavLink>
              </li>
              <li>
              </li>
                </>}
            </ul>
          </div>
          <PhoneNav user={user} toggle={toggle}/>
        </div>
      </nav>
  )
}

export default Navbar
