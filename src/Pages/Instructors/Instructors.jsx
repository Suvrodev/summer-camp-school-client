import React, { useContext } from 'react';
import './Instructor.css'
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useTitle from '../../Hook/useTitle';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {

    const {user}=useContext(AuthContext)
    const {data: allUsers=[],refetch}=useQuery({
        queryKey: ['user'],
        queryFn: async ()=>{
            const res = await fetch(`https://summer-camp-school-server-xi.vercel.app/user`)
            return res.json()
        }
    })
   
    // console.log(allUsers)

    const instructors= allUsers.filter(instructor=>instructor.status==='instructor')
    // console.log(instructors)
    

    useTitle('Instructor')
    return (
        <div>
           <Helmet>
              <title>Instructor | Summer-camp-school</title>
          </Helmet>

        <h1 className='text-2xl font-bold text-orange-400'>Hey, <span className='text-green-500 italic'>{user?.displayName}</span> </h1>
        <h1 className='font-extrabold text-orange-400'>Number of Instructor: {instructors.length} </h1>
        <table className="table tablebg ">
      {/* head */}
      <thead>
        <tr className="text-xl text-white">
          <th>#</th>
          <th>Name</th>
          <th>Image</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody >
        {/* row 1 */}
        {instructors.map((instructor, index) => (
          <tr key={instructor._id} >
            <th>{index + 1}</th>
            <td>{instructor.name}</td>
            <td>
              <div className="flex items-center space-x-3 ">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={instructor.photo} />
                  </div>
                </div>
              </div>
            </td>
            <td className='text-left'>{instructor.email}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    );
};

export default Instructors;