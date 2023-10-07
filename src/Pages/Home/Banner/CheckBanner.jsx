import React from 'react';
import './CheckBanner.css'
import Banner1 from '../../../assets/Banner/Banner_4.jpg'
import Banner2 from '../../../assets/Banner/Banner-5.jpg'
import Banner3 from '../../../assets/Banner/Banner-6.jpeg'

const CheckBanner = () => {
    return (
     <div className='w-11/12 mx-auto'>
         <div className="carousel w-full h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={Banner1} className="w-full h-full rounded-xl" />
                <div className="bg-gradient-to-r rounded-xl from-[#4b85bc] to-[rgba(21,21,21,0)] absolute h-full  flex transform items-center left-0  top-0">
                   <div className='text-white space-y-7 w-full md:w-1/2 pl-12'>
                     <h2 className='text-lg md:text-6xl font-bold'> Explore a World of Imagination</h2>
                     <p>Unleash your child's imagination with our wide selection of toys and ignite endless adventures.</p>
                     <div>
                       <button className="btn btn-primary mr-5">Find Panda</button>
                       <button className="btn btn-outline btn-secondary">Latest Toys</button>
                     </div>
                   </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
        </div>
     </div>
    );
};

export default CheckBanner;