import React from 'react';
import notFound from '../../assets/NotFound/notFound.jpg'
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div className='notFound'>
             <Helmet>
               <title>Error Page | Summer Camp School</title>
             </Helmet>

        <h1 className='text-center text-white text-4xl mt-10 bg-red-700 p-7 rounded-3xl'>This Link is not not available in our site</h1>
        <div className='text-center mt-10 '><Link to='/'> <button className='btn btn-warning font-bold'>Go Home Page <FaHome className='ms-2'></FaHome> </button> </Link></div>
      
        <div className="imageConatiner mt-10 ">
         <img className='rounded-3xl' src={notFound} alt="" />
        </div> 
    </div>
    );
};

export default ErrorPage;