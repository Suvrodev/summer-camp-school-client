import React from "react";
// import './Banner.css'

import Banner1 from '../../../assets/Banner/Banner-4.jpg'
import Banner2 from '../../../assets/Banner/Banner-5.jpg'
import Banner3 from '../../../assets/Banner/Banner-6.jpeg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Banner = () => {

    

  return (
    <div className=" w-11/12 mx-auto text-white rounded-xl ">
         <Carousel className="">
                <div className="carousel-item relative w-full">
                    <img className="rounded-4xl" src={Banner1} />

                  <div className="bg-gradient-to-r rounded-xl from-[#d321e0] to-[rgba(21,21,21,0)] absolute h-full  flex transform items-center left-0  top-0">
                      <div className='text-white space-y-7 w-full md:w-1/2 pl-12'>
                            <h2 className='text-lg md:text-2xl font-bold'> Every note you sing has the power to touch hearts and inspire souls.</h2>
                            <p>Summer camps provide opportunities for children to engage in outdoor activities, fostering physical fitness and a love for nature.</p>
                        <div>
                          
                        </div>
                   </div>
                </div>
                 
                </div>
                <div>
                    <img src={Banner2} />
                    <div className="bg-gradient-to-r rounded-xl from-[green] to-[rgba(21,21,21,0)] absolute h-full  flex transform items-center left-0  top-0">
                      <div className='text-white space-y-7 w-full md:w-1/2 pl-12'>
                            <h2 className='text-lg md:text-2xl font-bold'> When you sing, you connect with the deepest emotions and create a lasting impact</h2>
                            <p>Summer camps provide a platform for children to explore new interests and hobbies, helping them discover their talents and passions.</p>
                        <div>
                          
                        </div>
                   </div>
                </div>
                </div>
                <div>
                    <img src={Banner3} />
                    <div className="bg-gradient-to-r rounded-xl from-[orange] to-[rgba(21,21,21,0)] absolute h-full  flex transform items-center left-0  top-0">
                      <div className='text-white space-y-7 w-full md:w-1/2 pl-12'>
                            <h2 className='text-lg md:text-2xl font-bold'> Don't hold back your talent; let your voice be a beacon of hope and joy to others</h2>
                            <p>Summer camps offer a structured environment that promotes social skills development, teamwork, and cooperation among peers.</p>
                        <div>
                            
                        </div>
                   </div>
                </div>
                </div>
            </Carousel>
    </div>
  );
};

export default Banner;
