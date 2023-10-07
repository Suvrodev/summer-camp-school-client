import React from "react";
import './popularClassCard.css'
import { motion } from "framer-motion"

const PopularClassCard = ({ popular }) => {
  // console.log("Class: ", popular);
  const {
    classname,
    image,
    price,
    availableseat,
    enrolledstudents,
    instructorname,
    instructoremail,
    status
  } = popular;
  return (
     <div className="m-2">

      <motion.div
                animate={{
                scale: [1.5, 1, 1, 1, 1],
                rotate: [0, 0, 0, 0, 0],
                borderRadius: ["20%", "20%", "20%", "20%", "20%"],
                
                }}
            >
            <div className="card card-compact w-11/12 md:w-96 mx-auto bg-base-100 shadow-xl  mybg_p">
            <figure>
              <img
              className="w-72 h-96 mt-4 rounded-2xl"
                src={image}
                alt="popularclass"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold text-center">{classname}</h2>
              <h2 className=" text-center">Instructor: {instructorname}</h2>
              <div className="flex justify-between p-2">
                  <div>
                      <p>Available Seat: {availableseat} </p>
                      <p>Enrolled Students: {enrolledstudents} </p>
                  </div>
                  <div className="flex items-center">
                      <p>Price: {price} </p>
                      {/* <p>Status: {status} </p> */}
                  </div>
              </div>
        
            </div>

          </div>
      </motion.div>
     </div>
  );
};

export default PopularClassCard;
