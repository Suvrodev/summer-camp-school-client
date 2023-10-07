import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useTitle from '../../../Hook/useTitle';
import { Helmet } from 'react-helmet-async';

const MyClass = () => {
    const {user}=useContext(AuthContext)
    // const [classes,setClasses]=useState([])
    // useEffect(()=>{
    //     fetch(`https://summer-camp-school-server-xi.vercel.app/class?email=${user.email}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setClasses(data)
    //     })
    // },[])
    const {data: classes=[],refetch}=useQuery({
        queryKey: ['class',user.email],
        queryFn: async ()=>{
            const res = await fetch(`https://summer-camp-school-server-xi.vercel.app/class?email=${user.email}`)
            return res.json()
        }
    })
    console.log(classes)


    useTitle('MyClass')

    return (
        <div>
            {/* Helmet start */}
         <Helmet>
              <title>My Class | Summer-camp-school</title>
          </Helmet>
          {/* Helmet End */}

            <h1 className='text-2xl font-bold text-orange-400'>Hey, <span className='text-green-500 italic'>{user.displayName}</span> </h1>
            <h1 className='bg-orange-600 text-white w-10/12 text-center mx-auto rounded-xl p-4 font-bold my-5'>My Class</h1>

            <h1 className='titleDash  p-4 w-6/12 font-bold rounded-2xl text-center mx-auto'>Number of My Added Class: {classes.length} </h1>
            <table className="table tablebg mt-5">
          {/* head */}
          <thead>
            <tr className="text-xl text-white">
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Available seats</th>
              <th>Status</th>
              <th>Enrolled Students</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classes.map((class_, index) => (
              <tr key={class_._id}>
                <th>{index + 1}</th>
                <td>{class_.classname}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={class_.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className='text-right'>{class_.price}</td>
                <td className='text-center'>{class_.availableseat}</td>
                <td className='text-center'>{class_.status}</td>
                <td className='text-center'>{class_.enrolledstudents}</td>
                <td>{class_.feedback?`${class_.feedback}`:'No Feedback'}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
};

export default MyClass;