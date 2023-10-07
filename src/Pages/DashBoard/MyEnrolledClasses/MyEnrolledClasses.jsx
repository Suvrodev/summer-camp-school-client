import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const MyEnrolledClasses = () => {
    const {user}=useContext(AuthContext)

    const [enrolledClasses,setEnrolledClasses]=useState([])
    useEffect(()=>{
        fetch(`https://summer-camp-school-server-xi.vercel.app/payment?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setEnrolledClasses(data)
        })
    },[])

    console.log('Enrolled Classes: ',enrolledClasses)

    return (
        <div>
            {/* Helmet start */}
         <Helmet>
              <title>My Enrolled Class | Summer-camp-school</title>
          </Helmet>
          {/* Helmet End */}

            <h1 className='text-2xl font-bold text-orange-400'>Hey, <span className='text-green-500 italic'>{user?.displayName}</span> </h1>
            <h1 className='bg-green-600 text-white w-10/12 text-center mx-auto rounded-xl p-4 font-bold my-5'>My Enrolled  Class</h1>
            <h1 className='titleDash  p-4 w-6/12 font-bold rounded-2xl text-center mx-auto'>Number of Enrolled Class: {enrolledClasses?.length} </h1>
           
            <table className="table tablebg mt-5 ">
      
          <thead>
            <tr className="text-xl text-white">
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th className='text-center'>Date</th>
             
            </tr>
          </thead>
          <tbody>
          
            {enrolledClasses?.map((class_, index) => (
              <tr key={class_._id}>
                <th>{index + 1}</th>
                <td>{class_.classname}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={class_.classimage} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{class_.price}</td>
                <td>{class_.date}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      


        </div>
    );
};

export default MyEnrolledClasses;