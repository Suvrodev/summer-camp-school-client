import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const AddClass = () => {
    
    const {user}=useContext(AuthContext)
    const IHT=import.meta.env.VITE_Image_Upload_Token
    //console.log(IHT)
    const imageHostingUrl=`https://api.imgbb.com/1/upload?key=${IHT}`
    //console.log('posting url Add: ',imageHostingUrl)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{ 
        console.log(data)
        const {classname,photo,instructorname,instructoremail,availableseat,price}=data
        console.log('ClassName',classname)
        console.log('Photo',photo)
        console.log('Instructor Name: ',instructorname)
        console.log('Instructor Email: ',instructoremail)
        console.log('Available seat',availableseat)
        console.log('Price: ',price)

        let got_pic="";
       const formData=new FormData()
       formData.append('image', data.photo[0])

       fetch(imageHostingUrl,{
        method: 'POST',
        body: formData
       })
       .then(res=>res.json())
       .then(imageResponse=>{
         console.log(imageResponse.data.display_url)
         got_pic=imageResponse.data.display_url

         const savedClass={
            classname,
            image:got_pic,
            instructorname,
            instructoremail,
            availableseat: parseInt(availableseat),
            price: parseFloat(price),
            enrolledstudents: parseInt(0),
            status: 'pending',
            feedback:''
           }
           console.log(savedClass)
        //    fetch('https://summer-camp-school-server-xi.vercel.app/class',{
        //     method: 'POST',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body: JSON.stringify(savedClass)
        //    })
        //    .then(res=>res.json())
        //    .then(data=>{
        //      if(data.insertedId){
        //         Swal.fire({
        //             position: 'top-end',
        //             icon: 'success',
        //             title: 'Class Added Successfully',
        //             showConfirmButton: false,
        //             timer: 1500
        //           })
        //      }
        //    })
        axios.post('https://summer-camp-school-server-xi.vercel.app/class',savedClass)
        .then(data=>{
            console.log(data.data)
                  if(data.data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
             }
        })
       })
    }

    return (
        <div>
              {/* Helmet start */}
         <Helmet>
              <title>Add class | Summer-camp-school</title>
          </Helmet>
          {/* Helmet End */}

          <h1 className='bg-orange-600 text-white w-10/12 text-center mx-auto rounded-xl p-4 font-bold my-5'>Add Class</h1>


            <form onSubmit={handleSubmit(onSubmit)} className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
               
                <div className="form-control">
                        <label className="label">
                        <span className="label-text">Class Name</span>
                        </label>
                        <input
                        type="text"
                        name="classname"
                        placeholder="Name"
                        className="input input-bordered"
                        {...register("classname", { required: true })}
                        />
                    </div>

                <div className="form-control">
                        <label className="label">
                        <span className="label-text">Photo url</span>
                        </label>
                        <input
                        type="file"
                        name="photo"
                        placeholder="Photo url"
                        className="file-input w-full max-w-xs"
                        {...register("photo", { required: true })}

                        />
                    </div>

                <div className="form-control">
                        <label className="label">
                        <span className="label-text">Instructor Name</span>
                        </label>
                        <input
                        type="text"
                        defaultValue={user?.displayName}
                        readOnly
                        className="input input-bordered bg-green-800"
                        {...register("instructorname", { required: true })}
                        />
                    </div>


                <div className="form-control">
                        <label className="label">
                        <span className="label-text">Instructor Email</span>
                        </label>
                        <input
                        type="email"
                        defaultValue={user?.email}
                        readOnly
                        className="input input-bordered bg-green-800"
                        {...register("instructoremail", { required: true })}
                        />
                    </div>
                <div className="form-control">
                        <label className="label">
                        <span className="label-text">Available Seat</span>
                        </label>
                        <input
                        type="number"
                        placeholder='Available seat'
                        className="input input-bordered"
                        {...register("availableseat", { required: true })}
                        />
                    </div>

                <div className="form-control">
                        <label className="label">
                        <span className="label-text">Price</span>
                        </label>
                        <input
                        type="number"
                        placeholder='Price'
                        className="input input-bordered"
                        {...register("price", { required: true })}
                        />
                    </div>

                  
                   
            </div>

                <div className="form-control mt-6">
                    <input className="bg-orange-700 btn btn-block" type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;