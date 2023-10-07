import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useUserData from '../../Hook/useUserData';
import { Link } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    const {user}=useContext(AuthContext)
    const [checkUser]=useUserData()
    // console.log('Check User: ',checkUser)

    const [disableButton,setDisableButton]=useState(true)
    // if(checkUser?.status=='student'){
    //     setDisableButton(false)
    // }
  
    if(checkUser.status==='students'){
        // console.log('User status: ', checkUser.status)
    }else{
        // console.log('user status: ',checkUser.status)
    }


    const {data: allClasses=[],refetch}=useQuery({
        queryKey: ['class'],
        queryFn: async ()=>{
            const res = await fetch(`https://summer-camp-school-server-xi.vercel.app/class`)
            return res.json()
        }
    })
    // console.log('All Classes')
    // console.log(allClasses)


    const approvedClasses=allClasses.filter(allClass=>allClass.status=='approved')

    // console.log('Approved Classes')
    // console.log(approvedClasses)



    const handleSelect=(class_)=>{
        console.log('Click')
    }

    useTitle('Classes')
    return (
        <div>

          {/* Helmet start */}
           <Helmet>
              <title>Class | Summer-camp-school</title>
          </Helmet>
          {/* Helmet End */}

            <h1 className='text-2xl font-bold text-orange-400'>Hey, <span className='text-green-500 italic'>{user?.displayName}</span>  </h1>
            <h1 className='font-extrabold text-orange-400'>Number of Class: {approvedClasses?.length} </h1>
            <table className="table tablebg">
          {/* head */}
          <thead className='text-center'>
            <tr className="text-xl text-white ">
              <th>#</th>
              <th>Name</th>
              <th className=''>Image</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Available seats</th>
              {/* <th>Status</th> */}
              <th>Select</th>
             
            </tr>
          </thead>
          <tbody className='text-center'>
            {/* row 1 */}
            {approvedClasses.map((class_, index) => (
              <tr key={class_._id} className={` ${class_.availableseat===0?'bg-red-500 text-white':''}`} >
                <th>{index + 1}</th>
                <td>{class_.classname}</td>
                <td>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={class_.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className='text-right'>{class_.instructorname}</td>
                <td className='text-right'>{class_.price}</td>
                <td className='text-center'>{class_.availableseat}</td>
                {/* <td className='text-center'>{class_.status}</td> */}
                <td className='text-center'>
                  {
                    checkUser.status=='instructor' ?
                    <>
                     <button disabled className='btn btn-primary'>Select</button>
                      
                    </>
                    :
                    <>
                      {
                          checkUser.status=='admin' ?
                          <>
                           <button disabled className='btn btn-primary'>Select</button>
                           </>
                          :
                          <> 
                            {
                              class_.availableseat===0? <> </> :
                              <>
                                  <Link  to={`/selectclass/${class_._id}`}><button disabled={checkUser.status=='instructor' || checkUser.status=='admin' || class_.availableseat==0 } onClick={()=>handleSelect(class_)} className='btn btn-success text-white'>Select</button></Link>
                              </>
                            }
                          </>
                      }
                    </>
                  }
                </td>
              
                
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
};

export default Classes;