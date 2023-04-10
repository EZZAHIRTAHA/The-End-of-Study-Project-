import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const MySocial = () => {
  return (
    <>
        <ul className="flex ml-[7rem] flex-row justify-center items-center gap-5">
            <li className='text-2xl  hover:animate-spin hover:text-indigo-500'><Link target='_blank' to='https://www.instagram.com/taha.ezh/'> <BsInstagram/> </Link></li>
            <li className='text-2xl  hover:animate-spin hover:text-indigo-500'><Link target='_blank' to='https://github.com/EZZAHIRTAHA'> <BsGithub/> </Link></li>
            <li className='text-2xl hover:animate-spin  hover:text-indigo-500'><Link target='_blank' to='https://www.linkedin.com/in/taha-ezzahir-5b213b254'><AiFillLinkedin/></Link></li>
        </ul>
    </>
  )
}

export default MySocial
