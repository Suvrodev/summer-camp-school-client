import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const SignUp = () => {

    const {user,signUpByEmail,updateUserProfile,loginByGoogle}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
   // console.log(location)
    const [signUpError,setSignUpError]=useState('') 
    const [showPass,setShowPass]=useState(false)
    const [showConfirmPass,setShowConfirmPass]=useState(false)
    const displayPassword=()=>{
      setShowPass(!showPass)
    }
    const displayConfirmPassword=()=>{
        setShowConfirmPass(!showConfirmPass)
    }

   // console.log(showPass)
    const [accept,setAccept]=useState(false)
    const handleAccept=()=>{
      setAccept(!accept)
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log('Form Data: ')
        console.log(data)
        const {name,photo,email,phone,gender,password,confirmPassword}=data;
        console.log('Name',name,'\nEmail: ',email,'\nphoto: ',photo,'\npassword: ',password)

        if(password.length<6){
            setSignUpError('Password Should be minimum 6 character')
            return
        }
        if(password!==confirmPassword){
            setSignUpError('Password and Confirm Password not matched')
            return
        }


      


        ///authentication in firebase
        signUpByEmail(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log('1. LoggedUser',loggedUser)

            //update Profile--> set name and image url
            updateUserProfile(name,photo)
            .then(result=>{
                console.log('Set Name and Image Successfully')
                
                ////post data in database
                const savedUser={
                    name,photo,email,phone,
                    status:'student',
                }
                fetch('https://summer-camp-school-server-xi.vercel.app/user',{
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.insertedId){
                        ///sweet alert start
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Successfully Sign Up',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        //Sweet Alert end
                        navigate('/', {replace: true})
                    }
                })
            })
            .catch(error=>{
                console.log(error.message)
                setSignUpError(error.message)
            })
            
        })
        .catch(error=>{
            console.log(error.message)
            setSignUpError(error.message)
        })
      };



        //////Sign in by google start
        const handleGoogleLogin = () => {
            loginByGoogle()
              .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                ////post data in database
                const savedUser = {
                  name: loggedUser.displayName,
                  photo: loggedUser.photoURL,
                  email: loggedUser.email,
                  phone: loggedUser.phoneNumber,
                  gender: "",
                  status: "student",
                  booked: [],
                };
                fetch("https://summer-camp-school-server-xi.vercel.app/user", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(savedUser),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                    navigate('/', { replace: true });
                    ///sweet alert start
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Successfully Login",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    ///sweet alert end
                  });
              })
              .catch((error) => {
                console.log(error.message);
                setLoginError(error.message);
              });
          };
        
        //////Sign in by google end

    return (
        <div className="hero min-h-screen bg-base-200">
              {/* Helmet start */}
         <Helmet>
              <title>Signup | Summer-camp-school</title>
          </Helmet>
          {/* Helmet End */}

      <div className="hero-content flex-col gap-10 w-full md:w-1/2 mx-auto">
          <div className="text-center ">
            <h1 className="text-3xl font-bold p-5 bg-teal-700 text-white rounded-xl">Register now!</h1>
          </div>

          <div className="card  shadow-2xl bg-base-100 w-full ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">

              <div className='grid md:grid-cols-2 gap-5'>

                  {/* Name */}
              <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    name="name"
                    {...register("name", { required: true }) }
                />
                {errors.name && <span className='text-red-600 font-bold'>Name field is required</span>}
              </div>


              {/* Photo url */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo url"
                  className="input input-bordered"
                  name="photo"
                  {...register("photo",{required:true})}
                />
                {errors.photo && <span className='text-red-500 font-bold'>photo url is required</span>}

              </div>

              {/* Email  */}
              <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    name="email"
                    {...register("email", { required: true })}
                />
                {errors.email && <span className='text-red-500 font-bold'>Email field is required</span>}
              </div>


              {/* Phone Number  */}
              <div className="form-control">
                <label className="label">
                    <span className="label-text">Phone Number</span>
                </label>
                <input
                    type="number"
                    placeholder="Phone Number"
                    className="input input-bordered"
                    name="phone"
                    {...register("phone", { required: true })}
                />
                {errors.phone && <span className='text-red-500 font-bold'>Phone Number field is required</span>}
              </div>

            



              {/* Password*/}
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Password</span>
              </label>
              <input
                  type={showPass? 'text':'password'}
                  placeholder="Password"
                  className="input input-bordered"
                  name="password"
                  {...register("password" , { 
                    required: true,
                    minLength: 6,
                    // pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/


                })}
              />
              {errors.password?.type=='required' && <span className='text-red-500 font-bold'>Password field is required</span>}
              {errors.password?.type=='minLength' && <span className='text-red-500 font-bold'>Password Should be minimum 6 character </span>}
              {errors.password?.type=='pattern' && <span className='text-red-500 font-bold'>In Password should be 1 capital letter, 1 special character </span>}

              <label className="label">
                  <span onClick={displayPassword}  className=" font-bold">
                     {showPass? <FaEyeSlash/> : <FaEye/> }
                  </span>
              </label>
              </div>


              {/*Confirm Password */}
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Confirm Password</span>
              </label>
              <input
                  type={showConfirmPass? 'text':'password'}
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  name="confirmPassword"
                  {...register("confirmPassword" , { required: true })}
              />
              {errors.confirmPassword && <span className='text-red-500 font-bold'>Confirm Password field is required</span>}

              <label className="label">
                  <span onClick={displayConfirmPassword}  className=" font-bold">
                     {showConfirmPass? <FaEyeSlash/>: <FaEye/> }
                  </span>
              </label>
              </div>

              </div>

              <p className='w-full mx-auto'>
                <input onClick={handleAccept} className='ms-2' type="checkbox" name="accept" id="" />
                <span className='ms-2'>Accept Our Terms and Condition</span>
              </p>
           
              <div className="form-control mt-6">
              <input
              disabled={!accept}
                  type="submit"
                  className="btn btn-primary"
                  value="Register"
              />
              </div>
          </form>
          <div className="text-center mb-5 ">
            <button
              onClick={handleGoogleLogin}
              className="btn bg-green-800 text-yellow-200"
            >
              {" "}
              <FaGoogle />{" "}
            </button>
          </div>
        
          <p className="text-center">
              Already Registered?{" "}
              <Link to="/login" className="font-semibold">
                Go to Login
              </Link>{" "}
          </p>
          {signUpError && <p className='text-white bg-red-500 w-10/12 mx-auto my-5 text-center rounded-lg p-2'> {signUpError} </p> } 

          </div>
      </div>
      </div>
    );
};

export default SignUp;