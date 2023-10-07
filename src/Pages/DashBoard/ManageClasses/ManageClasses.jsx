import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useAdmin from '../../../Hook/useAdmin';

const ManageClasses = () => {
    const {user}=useContext(AuthContext)

    // const [isAdmin]=useAdmin()
    // console.log('What Admin: ',isAdmin)


    const {data: classes=[],refetch}=useQuery({
        queryKey: ['class'],
        queryFn: async ()=>{
            const res = await fetch(`https://summer-camp-school-server-xi.vercel.app/class`)
            return res.json()
        }
    })
    console.log(classes)


    const [feedback,setFeedback]=useState("")
    const handleFeedbackChange=(event)=>{
        setFeedback(event.target.value);
       
    }
    console.log(feedback)

    const [category,setCategory]=useState('')
    const handleStatus=(event)=>{
        setCategory(event.target.value)
        console.log(event.target.value)
    }

    const handleModify=(class_)=>{
        console.log('Modify: ',class_)
        const {_id,availableseat,classname,enrolledstudents,image,instructoremail,instructorname,price}=class_
        const savedInstructor={
            availableseat,
            classname,
            enrolledstudents,
            image,
            instructoremail,
            instructorname,
            price,
            status: category,
            feedback: feedback
        }
        console.log(savedInstructor)

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
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
             }
           })
    }
    return (
        <div className='overflow-auto'>
            {/* Helmet start */}
            <Helmet>
                  <title>Manage Classes | Summer-camp-school</title>
              </Helmet>
          {/* Helmet End */}

            <h1 className='text-2xl font-bold text-orange-400'>Hey, <span className='text-green-500 italic'>{user?.displayName}</span> </h1>
            <h1 className='bg-orange-600 text-white w-10/12 text-center mx-auto rounded-xl p-4 font-bold my-5'>Manage Class</h1>
            <h1 className='titleDash  p-4 w-6/12 font-bold rounded-2xl text-center mx-auto'>Number of Class: {classes.length} </h1>
            <table className="table tablebg mt-5 overflow-x-scroll">
          {/* head */}

          <thead>
            <tr className="text-xl text-white">
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Price</th>
              <th>Available seats</th>
              <th>Status</th>
              <th>Enrolled Students</th>
              <th>Feedback</th>
              <th>Change</th>
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
                <td className='text-center'>{class_.instructorname}</td>
                <td className='text-center'>{class_.instructoremail}</td>
                <td className='text-right'>{class_.price}</td>
                <td className='text-center'>{class_.availableseat}</td>
                <td className='text-center'>
                    <select defaultValue={class_.status} onChange={handleStatus} className='input'>
                            <option value="pending">pending</option>
                            <option value="approved"> approved</option>
                            <option value="denied">denied</option>
                        </select>
                </td>
                <td className='text-center'>{class_.enrolledstudents}</td>
                <td>
                   <input className='bg-white text-black p-3 font-bold' defaultValue={class_.feedback} onChange={handleFeedbackChange} type="text" />
                </td>
                <td><button onClick={()=>handleModify(class_)} className='btn btn-info'>Modify</button> </td>
                
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
};

export default ManageClasses;