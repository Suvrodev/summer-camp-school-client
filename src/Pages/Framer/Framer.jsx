import React from 'react';
import { motion } from "framer-motion"


const Framer = () => {
    const handlePasswordChange=(e)=>{

    }
    return (
        <div>
             <motion.div
                animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [0, 0, 10, 10, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                
                }}
            >

                <h1 className='bg-green-600 font-bold text-white p-5 w-4/12 mx-auto text-center'> Framer Motion</h1>
             </motion.div>

             {/* <div>
             <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
            />
             </div> */}
        </div>
    );
};

export default Framer;