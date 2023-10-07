import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import PopularInstructorCard from './PopularInstructorCard';

const PopularInstructor = () => {
    const {user}=useContext(AuthContext)
    const [allUser,setAllUser]=useState([])
   
    useEffect(()=>{
        fetch('https://summer-camp-school-server-xi.vercel.app/user')
        .then(res=>res.json())
        .then(data=>{
            setAllUser(data)
        })
    },[])
    // console.log('All User: ',allUser)

    let popularInstructor=allUser.filter(u=>u.status=='instructor')
    popularInstructor= popularInstructor.slice(0,6)
    // console.log('Popular Instructor: ',popularInstructor)
    return (
        <div>
            <h1 className='text-center bg-green-600 mt-10 p-5 text-white text-2xl w-11/12 md:w-3/12 mx-auto rounded-xl font-bold myTytle_bg'>Popular Instructor</h1>
           {/* <p>Total User: {allUser.length} </p>
           {
            popularInstructor && 
            <p>Popular Instructor: {popularInstructor.length} </p> 
           } */}

           <div className='mt-10 grid grid-cols-1 md:grid-cols-3  gap-y-10'>
                {
                    popularInstructor.map(instructor=> <PopularInstructorCard
                    key={instructor._id}
                    instructor={instructor}
                    ></PopularInstructorCard> )
                }
           </div>
        
        </div>
    );
};

export default PopularInstructor;