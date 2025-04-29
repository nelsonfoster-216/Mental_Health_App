import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../common/Footer';

const NoAccess = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">ACCESS DENIED</h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">You are not allowed to view this page</p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Go back to login page to sign in with appropriate credentials</p>
              <Link to="/login" className="inline-flex text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-purple-900 my-4">Back to Login</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NoAccess;