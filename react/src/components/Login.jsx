import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import useAuthContext from '../context/AuthContext';


const Login = () => {
  

  return(

  <>
    { <section className="  scale-up-center p-5 md:p-0">
      <div className="container p-5 mx-auto ">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative shadow-2xl mx-auto max-w-[525px] overflow-hidden rounded-lg py-16 px-10 text-center sm:px-12 md:px-[60px]">
              <div className=" flex justify-center align-center mb-5">
                <img src="./ofppt-logo.png" className='w-[100px]' alt="ofppt-logo" />
              </div>
              <div className="mb-10  text-center font-medium text-xl tracking-wider md:mb-16 text-red-400">LOG INTO YOUR ACCOUNT</div>
              <LoginForm/>
              <Link to="/forgot-password" className=" mb-2 inline-block text-base text-red-400  hover:underline">
                Forgot Password?
              </Link>
              <p className="text-base text-[#adadad]">
                You don't have an account?
                <Link to="/register" className="text-red-400 pl-2 hover:underline">
                  Sign Up!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>}
    </>
)} ;

export default Login;
