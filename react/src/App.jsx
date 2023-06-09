import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Navbar, Register, ForgotPassword, ResetPassword, Users, AddUser, NotFound } from './components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AuthLayout from './layouts/AuthLayout';
import GuestLayout from './layouts/GuestLayout';
import useAuthContext from './context/AuthContext';
const App = () => {
  const {user} = useAuthContext()
  return (
    <div className="bg-white p-3 min-h-screen transition-all duration-500 scroll-smooth">
      {user && <Navbar/>}
      <div className="max-w-7xl mx-auto mt-6">
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={500}>
            <Routes>
              <Route element={ <AuthLayout/> }>
                <Route path='/' element={<Home/>} />
                <Route path='/users' element={<Users/>} />
                <Route path='/users/addUser' element={<AddUser/>} key="userCreate" />
                <Route path='/users/:id' element={<AddUser/>} key="userUpdate" />
              </Route>
              <Route element={<GuestLayout/>}>
                <Route path='/login' element={!user && <Login/>} />
                <Route path='/register' element={!user && <Register/>} />
                <Route path='/forgot-password' element={!user &&<ForgotPassword/>} />
                <Route path='/password-reset/:token' element={!user && <ResetPassword />} />
              </Route>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;
