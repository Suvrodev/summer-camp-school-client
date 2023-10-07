import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutFrom from './checkOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const stripePromise=loadStripe(import.meta.env.VITE_Payment_Getway_PK)
const Payment = () => {
    const {user}=useContext(AuthContext)
    
    const loc=useLocation()
    console.log('Location: ',loc)
    const class_=loc.state?.from;
    console.log('Class_',class_)
    const {price}=class_;
    console.log('Price: ',price)

    return (
        <div className='w-full md:w-6/12 mx-auto'>
              {/* Helmet start */}
         <Helmet>
              <title>Payment | Summer-camp-school</title>
          </Helmet>
          {/* Helmet End */}
          <h1 className='myTytle_bg text-white w-full md:w-11/12 text-center mx-auto rounded-xl p-4 font-bold my-5'>Do Payment</h1>

            {/* <h1>This is Payment</h1> */}
            <Elements stripe={stripePromise}>
              <CheckOutFrom class_={class_} price={price}></CheckOutFrom>
            </Elements>
    
           
        </div>
    );
};

export default Payment;