import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import useUserData from "../../Hook/useUserData";
import Swal from "sweetalert2";
import useTitle from "../../Hook/useTitle";
import { Helmet } from "react-helmet-async";

const SelectClass = () => {
  const { id } = useParams();

  const {user}=useContext(AuthContext)
  const [userData,refetch]=useUserData()
  //console.log(user)

  const [thisClass, setThisClass] = useState("");
  useEffect(() => {
    fetch(`https://summer-camp-school-server-xi.vercel.app/class/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setThisClass(data);
      });
  }, []);

  // console.log('This Class: ',thisClass);

  const handleConfirm=(userId)=>{

    const savedCart={
        useremail: user?.email,
        classid: thisClass._id,
        classname: thisClass.classname,
        classimage: thisClass.image,
        price: thisClass.price
        
    }
    // console.log('Saved Cart: ',savedCart)

    fetch('https://summer-camp-school-server-xi.vercel.app/cart',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(savedCart)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Class Selected Successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })


  }

  // useTitle('Select Class')

  return (
    <div className=" bg-black w-full md:w-10/12 mx-auto rounded-lg p-10">

        {/* Helmet start */}
         <Helmet>
              <title>Select Class | Summer-camp-school</title>
          </Helmet>
          {/* Helmet End */}

      <div className="flex gap-5 flex-col lg:flex-row w-full items-center">
        <img
          src={thisClass.image}
          className="w-full md:w-6/12 bg-green-300 rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 className="text-5xl font-bold">{thisClass.classname}</h1>
          <p className="py-6 flex flex-col items-center">
             <button onClick={()=>handleConfirm(userData._id)} className="btn bg-teal-600 text-white">Confirm Select</button>
             <span className="text-2xl"><span className="text-green-500">Congratulations</span>, You choose this class </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default SelectClass;
