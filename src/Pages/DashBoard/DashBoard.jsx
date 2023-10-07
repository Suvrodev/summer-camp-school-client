import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../SharedPage/Header/Header';
import useUserData from '../../Hook/useUserData';
import useTitle from '../../Hook/useTitle';
import { Helmet } from 'react-helmet-async';
import { FaAddressCard, FaCartPlus, FaDollarSign, FaGoogle, FaItunesNote, FaPeopleArrows, FaPeopleCarry, FaPlus, FaTable } from 'react-icons/fa';
import useAdmin from '../../Hook/useAdmin';
import useInstructor from '../../Hook/useInstructor';

const DashBoard = () => {
    const [isAdmin]=useAdmin()
    const [isInstructor]=useInstructor()
    console.log('Dashboard Admin: ',isAdmin)
    console.log('Dashboard Instructor: ',isInstructor)

    const [checkUser]=useUserData()
   

    return (
        
      
      <div>
        <Header></Header>

         {/* Helmet start */}
         <Helmet>
              <title>Dashboard | Summer-camp-school</title>
          </Helmet>
          {/* Helmet End */}

          <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            

            {
                
                
                // checkUser.status=='admin'? <>
                //      <li className='bg-blue-700 p-2 text-center text-2xl text-white rounded-2xl mb-2  '>Admin Activity</li>
                //      <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/dashboard/manageclasses'> <FaItunesNote/> Manage Classes</NavLink></li>
                //      <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/dashboard/manageusers'> <FaPeopleArrows/> Manage Users</NavLink></li>
                // </>
                // :
                // <>
                //     {
                //         checkUser.status=='instructor'?
                //         <>
                //             <li className='bg-green-700 p-2 text-center text-2xl text-white rounded-2xl mb-2  '>Instructor Activity</li>
                //             <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/dashboard/addclass'> <FaPlus/> Add Class</NavLink></li>
                //             <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}   to='/dashboard/myclass'> <FaTable/> My Class</NavLink></li>
                //         </>
                //         :
                //         <>
                //              <li className='bg-orange-600 p-2 text-center text-2xl text-white rounded-2xl mb-2  '>Student Activity</li>
                //             <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/dashboard/myselectedclasses'> <FaCartPlus/> My Selected Classes</NavLink></li>
                //             <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}   to='/dashboard/myenrolledclasses'> <FaDollarSign/> My EnrolledClasses</NavLink></li>
                //             <li> <NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/dashboard/paymenthistory'>  <FaAddressCard/> Payment History</NavLink></li>
                //         </>
                //     }
                // </>
                isAdmin?.admin? <>
                     <li className='bg-blue-700 p-2 text-center text-2xl text-white rounded-2xl mb-2  '>Admin Activity</li>
                     <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/dashboard/manageclasses'> <FaItunesNote/> Manage Classes</NavLink></li>
                     <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/dashboard/manageusers'> <FaPeopleArrows/> Manage Users</NavLink></li>
                </>
                :
                <>
                    {
                        isInstructor?.instructor?
                        <>
                            <li className='bg-green-700 p-2 text-center text-2xl text-white rounded-2xl mb-2  '>Instructor Activity</li>
                            <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/dashboard/addclass'> <FaPlus/> Add Class</NavLink></li>
                            <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}   to='/dashboard/myclass'> <FaTable/> My Class</NavLink></li>
                        </>
                        :
                        <>
                             <li className='bg-orange-600 p-2 text-center text-2xl text-white rounded-2xl mb-2  '>Student Activity</li>
                            <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/dashboard/myselectedclasses'> <FaCartPlus/> My Selected Classes</NavLink></li>
                            <li><NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}   to='/dashboard/myenrolledclasses'> <FaDollarSign/> My EnrolledClasses</NavLink></li>
                            <li> <NavLink className={({isActive})=> isActive? 'text-blue-500 font-extrabold':''}  to='/dashboard/paymenthistory'>  <FaAddressCard/> Payment History</NavLink></li>
                        </>
                    }
                </>
            }

          


          </ul>
        
        </div>
      </div>
      </div>
    );
};

export default DashBoard;