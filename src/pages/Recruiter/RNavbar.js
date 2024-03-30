import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import SignUp from '../pages/Signup';
// import SignIn from '../pages/SignIn';

import JobsPage from '../JobsPage';
import GoogleTranslate from '../../components/GoogleTranaslate';


function RNavbar() {
 
  return (
    <header className="text-gray-600 body-font">
<div className="w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center z-10 fixed top-0 bg-white">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Intersearch</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          
          <Link to="uploadjob">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Post Jobs
            
          </button>
        </Link>
        <Link to="posts">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            posts
            
          </button>
        </Link>

        {/* <div className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 h-2">
  <GoogleTranslate />
</div> */}
<div className="inline-flex items-center bg-gray-100 border-0  focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
          {/* <GoogleTranslate /> */}
        </div>

        </nav>
        
      </div>
    </header>
  );
}

export default RNavbar;
