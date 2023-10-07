import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckOutFrom = ({price,class_}) => {

    const {user}=useContext(AuthContext)
  //  console.log('Destine Price: ', price)
    console.log('Destine Class: ', class_)
    console.log('Class ID: ',class_.classid)

    ///// Retrieve class start
    const [targetClass,setTargetClass]=useState('')
    useEffect(()=>{
        fetch(`https://summer-camp-school-server-xi.vercel.app/class/${class_.classid}`)
        .then(res=>res.json())
        .then(data=>{
            setTargetClass(data)
        })
    },[]) 
    console.log('Target Class: ',targetClass)
    ///// Retrieve class end

    const [transactionId,setTransactionId]=useState('')
    const [processing,setProcessing]=useState(false)
    const [cardError,setCardError]=useState('')
    const stripe = useStripe();
    const elements = useElements();

    const [clientSecret,setClientSecret]=useState('')

    useEffect(()=>{
        fetch('https://summer-camp-school-server-xi.vercel.app/create-payment-intent',{
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({price}),
        })
        .then(res=>res.json())
        .then(data=>{
           // console.log(data.clientSecret)
            setClientSecret(data.clientSecret)
        })
    },[price])

    const handleSubmit = async (event) => {
        // Block native form submission.F
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
    
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);
    
        if (card == null) {
          return;
        }
    
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
    
        if (error) {
          console.log('[error]', error);
          setCardError(error.message)
        } else {
            setCardError('')
         // console.log('PaymentMethod', paymentMethod);
        }
        setProcessing(true)

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
           clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'unKnow mail',
                  name: user?.displayName || 'UnKnown'
                },
              },
            },
          );
          if(confirmError){
            console.log(confirmError)
          }
          console.log('Payment Intent: ',paymentIntent)
          setProcessing(false)

          if(paymentIntent.status==='succeeded'){
            setTransactionId(paymentIntent.id);
            const transactionId=paymentIntent.id

            ///Save payment info
            const payment={
                email: user?.email,
                transactionId,
                price,
                classid:class_.classid,
                classname:class_.classname,
                classimage:class_.classimage,
                date: new Date(),
                status_: 'service done',
                cart_id: class_._id
            }
            fetch('https://summer-camp-school-server-xi.vercel.app/payment',{
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(payment)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                /////Class Modify start
                const {_id,availableseat,classname,enrolledstudents,feedback,status,image,instructoremail,instructorname,price}=targetClass
                const savedInstructor={
                    availableseat: availableseat-1,
                    classname,
                    enrolledstudents: enrolledstudents+1,
                    image,
                    instructoremail,
                    instructorname,
                    price,
                    status,
                    feedback,
                }
                console.log('Target Class Data(2): ',savedInstructor)
                fetch(`https://summer-camp-school-server-xi.vercel.app/class/${_id}`,{
                    method: 'PATCH',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(savedInstructor)
                   })
                   .then(res=>res.json())
                   .then(data=>{
                    console.log(data)
                     if(data.modifiedCount){
                      
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                     }
                   })

                /////Class Modify start
            })
          }
      };

    return (
       <>
            <form className='bg-gray-300 border border-solid p-5 rounded-lg' onSubmit={handleSubmit}>
                <CardElement
                options={{
                    style: {
                    base: {
                        fontSize: '16px',
                        color: 'black',
                        '::placeholder': {
                        color: 'black',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                    },
                }}
                />
                <button className='btn  btn-primary mt-2' type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
                </button>
            </form>

            { cardError && <p className='bg-red-500 text-white p-2 mt-2 text-center font-bold rounded-lg'>{cardError}</p> }
            { transactionId && <p className='bg-green-600 text-white p-2 mt-2 text-center rounded-lg'>Transaction complete with transaction id <span className='font-bold'> {transactionId} </span></p> }
       </>
    );
};

export default CheckOutFrom;