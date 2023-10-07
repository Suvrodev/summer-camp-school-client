import React, { useContext, useEffect, useState } from 'react';
import useUserData from '../../../Hook/useUserData';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hook/useTitle';
import { Helmet } from 'react-helmet-async';

const MySelectedClass = () => {

    const {user}=useContext(AuthContext)

    const [allClasses,setAllClasses]=useState([])

    const [def,setDef]=useState(true)

    const token=localStorage.getItem('school');
     useEffect(()=>{
        fetch(`https://summer-camp-school-server-xi.vercel.app/cart?email=${user.email}`,{
          headers:{
            authorization: `bearer ${token}`
          } 
        })
        .then(res=>res.json())
        .then(data=>{
            setAllClasses(data)
        })
     },[def])

    const handleDelete=(id)=>{
        console.log('Select: ',id)
        fetch(`https://summer-camp-school-server-xi.vercel.app/cart/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                setDef(!def)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Delete Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    console.log(allClasses)
    

    useTitle('My Selected Class')
    return (
        <div>
            {/* Helmet start */}
         <Helmet>
              <title>My Selected Class | Summer-camp-school</title>
          </Helmet>
          {/* Helmet End */}

            <h1 className='text-2xl font-bold text-orange-400'>Hey, <span className='text-green-500 italic'>{user?.displayName}</span> </h1>
            <h1 className='bg-green-600 text-white w-10/12 text-center mx-auto rounded-xl p-4 font-bold my-5'>My Selected Class</h1>
            <h1 className='titleDash  p-4 w-6/12 font-bold rounded-2xl text-center mx-auto'>Number of Selected Class: {allClasses?.length} </h1>
           
            <table className="table tablebg mt-5">
      
          <thead>
            <tr className="text-xl text-white">
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
          
            {allClasses?.map((class_, index) => (
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
                <td className='text-white'> <button onClick={()=>handleDelete(class_._id)} className='btn bg-red-500 text-white'>X</button> </td>
                {/* <td className='text-white'> <Link to={'/dashboard/payment'}><button className='btn bg-green-600 text-white'>Pay</button></Link> </td> */}
                <td className='text-white'> <Link state={{from:class_}} to={'/dashboard/payment'}><button className='btn bg-green-600 text-white'>Pay</button></Link> </td>
              </tr>
            ))}
          </tbody>
        </table>
      


        </div>
    );
};

export default MySelectedClass;