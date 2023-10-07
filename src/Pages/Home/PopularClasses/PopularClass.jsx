import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import PopularClassCard from './PopularClassCard';
import { motion } from "framer-motion"


const PopularClass = () => {
    const {user}=useContext(AuthContext)
    const [popularClass,setPopularClass]=useState([])

    useEffect(()=>{
        fetch('https://summer-camp-school-server-xi.vercel.app/class/')
        .then(res=>res.json())
        .then(data=>{
            setPopularClass(data)
            //  console.log(data)
           
        })
    },[])

    let approvedPopularClass=popularClass.filter(p=>p.status=='approved')
    approvedPopularClass=approvedPopularClass.slice(0,6)
   // console.log('Popular Class: ', popularClass)

   
    return (
        <div>
            <h1 className='text-center bg-green-600 mt-10 p-5 text-white text-2xl w-11/12 md:w-3/12 mx-auto rounded-xl font-bold myTytle_bg'>Popular Classes</h1>
           {/* <p>Total Class: {popularClass.length} </p>
           <p>Total Class: {approvedPopularClass.length} </p> */}
           <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-y-10'>
               {
                    approvedPopularClass.map(popular=> <PopularClassCard
                    key={popular._id}
                    popular={popular}
                    ></PopularClassCard> )
                }
           </div>

           {/* Framer motion start */}
          
           {/* Framer motion end */}
        </div>
    );
};

export default PopularClass;