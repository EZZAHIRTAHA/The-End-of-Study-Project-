import React from 'react'
import { Link } from 'react-router-dom'
import RegisterForm from './RegisterForm'



const Register = () => (
    <section  className="scale-up-center">
    <div className="container p-5 mx-auto">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px] shadow-xl">
            <div className="mb-10 text-center drop-shadow-xl text-xl tracking-wider md:mb-16 text-indigo-500">Ezzahir Taha</div>
            <RegisterForm/>
            <p className="text-base capitalize text-[#adadad]">
              Already Have an account ?
              <Link to="/login" className="text-red-400 pl-2 hover:underline">
                login!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )

export default Register
