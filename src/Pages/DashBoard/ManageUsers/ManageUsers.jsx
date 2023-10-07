import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ManageUsers = () => {
    const {user}=useContext(AuthContext)
    const {data: allUsers=[],refetch}=useQuery({
        queryKey: ['user'],
        queryFn: async ()=>{
            const res = await fetch(`https://summer-camp-school-server-xi.vercel.app/user`)
            return res.json()
        }
    })
    console.log(allUsers)

    const [category,setCategory]=useState('')
    const handleStatus=(event)=>{
        setCategory(event.target.value)
        console.log(event.target.value)
    }

    const handleModify=(user_)=>{
        console.log(user_)
        const {_id,name,email,gender,phone,photo,booked}=user_;
        const savedUser={
            name,
            email,
            gender,
            phone,
            photo,
            booked,
            status: category
        }
        console.log(savedUser)

        fetch(`https://summer-camp-school-server-xi.vercel.app/user/${_id}`,{
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(savedUser)
           })
           .then(res=>res.json())
           .then(data=>{
            console.log(data)
             if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
             }
           })
    }
  

    return (
        <div>

            {/* Helmet start */}
         <Helmet>
              <title>Manage Users | Summer-camp-school</title>
          </Helmet>
          {/* Helmet End */}

        <h1 className='text-2xl font-bold text-orange-400'>Hey, <span className='text-green-500 italic'>{user.displayName}</span> </h1>
        <h1 className='bg-orange-600 text-white w-10/12 text-center mx-auto rounded-xl p-4 font-bold my-5'>Manage User</h1>

        <h1 className='titleDash  p-4 w-6/12 font-bold rounded-2xl text-center mx-auto'>Number of User: {allUsers .length} </h1>
        <table className="table mt-5 tablebg ">
      {/* head */}
      <thead>
        <tr className="text-xl text-white">
          <th>#</th>
          <th>Name</th>
          <th>Image</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Modify</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        {allUsers.map((user_, index) => (
          <tr key={user_._id}>
            <th>{index + 1}</th>
            <td>{user_.name}</td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user_.photo} />
                  </div>
                </div>
              </div>
            </td>
            <td className='text-left'>{user_.email}</td>
            <td className='text-right'>{user_.gender}</td>
            <td className='text-right'>{user_.phone}</td>
           
            <td className='text-center'>
                <select defaultValue={user_.status} onChange={handleStatus} className='input'>
                        <option value="student">student</option>
                        <option value="instructor"> instructor</option>
                        <option value="admin">admin</option>
                    </select>
            </td>
            <td><button onClick={()=>handleModify(user_)} className='btn btn-info'>Modify</button> </td>
            
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    );
};

export default ManageUsers;