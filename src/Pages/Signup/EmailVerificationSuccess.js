import React from 'react';
import { Link } from 'react-router-dom';

function EmailVerificationSuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600 mb-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.646 14.354a.5.5 0 00.708 0l5-5a.5.5 0 00-.708-.708L9 12.293l-3.646-3.647a.5.5 0 10-.708.708l4 4zM3 10a7 7 0 1114 0 7 7 0 01-14 0z" clipRule="evenodd" />
      </svg>
      <h1 className="text-2xl font-bold mb-2">Email Has Been Verified!</h1>
      <p className="text-gray-700 mb-8">We have Successfully verified your account. Now you can dive into the dashboard,</p>
      <Link to='/dashboard' className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Open Dashboard</Link>
    </div>
  );
}

export default EmailVerificationSuccess;
