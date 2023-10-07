import React from 'react';
import './PopularInstructorCard.css'
import { motion } from "framer-motion"


const PopularInstructorCard = ({instructor}) => {
    // console.log('Instructor: ', instructor)
    const {name,email,photo}=instructor
    return (
        <div className='m-2'>
           <motion.div
                animate={{
                scale: [-0.5, 0.5, 1, 1, 1],
                rotate: [10, 0, 0, 0, 0],
                borderRadius: ["20%", "20%", "20%", "20%", "20%"],
                
                }}
            >
              <div className="card card-compact w-11/12 md:w-96 mx-auto bg-base-100 shadow-xl  mybg_i">
            <figure>
              <img
              className="w-72 h-96 mt-4 rounded-2xl"
                src={photo}
                alt="popularInstructor"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold text-center">{name}</h2>
              <h2 className=" text-center">Instructor: {email}</h2>
            </div>
               </div>
          </motion.div>
          
        </div>
    );
};

export default PopularInstructorCard;