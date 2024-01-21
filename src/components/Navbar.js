import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../pages/Signup';
import SignIn from '../pages/SignIn';

import JobsPage from '../pages/JobsPage';


function Navbar() {
  // const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  // const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  // const openSigninModal = () => {
  //   setIsLoginModalOpen(true);
  //   setIsSignUpModalOpen(false); // Close SignUp modal if open
  // };

  // const closeSigninModal = () => {
  //   setIsLoginModalOpen(false);
  // };

  // const openSignUpModal = () => {
  //   setIsSignUpModalOpen(true);
  //   setIsLoginModalOpen(false); // Close Login modal if open
  // };

  // const closeSignUpModal = () => {
  //   setIsSignUpModalOpen(false);
  // };

  return (
    <header className="text-gray-600 body-font">
<div className="w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center z-10 fixed top-0 bg-white">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Internsearch</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to={'/signup'} className="mr-5 hover:text-gray-900">
            Signup
          </Link>
          <Link to={'/login'} className="mr-5 hover:text-gray-900">
            Signin
          </Link>
          {/* <Link to="jobspage">
          <button onClick={openSigninModal} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            JobsPage
            
          </button>
        </Link> */}
        </nav>
        <Link to="/signin">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
           Recruiter
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
        {/* {isSignUpModalOpen && (
          <SignUp onCloseSignup={closeSignUpModal} openSignin={openSigninModal} />
        )}
        {isLoginModalOpen && (
          <SignIn onCloseSignin={closeSigninModal} openLogin={openSignUpModal} />
        )} */}
      </div>
    </header>
  );
}

export default Navbar;
