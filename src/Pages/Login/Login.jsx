import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBeer, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginByGoogle, signInByEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const loc = useLocation();
  //console.log(loc)
  const from = loc.state?.from?.pathname || "/";
  // console.log(from)

  const [loginError, setLoginError] = useState("");
  const [disable, setDisable] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const displayPassword = () => {
    setShowPass(!showPass);
  };

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
            navigate(from, { replace: true });
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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    console.log("Email: ", email);
    console.log("Password: ", password);
    signInByEmail(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });

        ///sweet alert start
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Login",
          showConfirmButton: false,
          timer: 1500,
        });
        ///sweet alert end
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  // console.log('Ache')

  return (
    <div className="hero min-h-screen bg-base-200">
      {/* Helmet start */}
      <Helmet>
        <title>Login | Summer-camp-school</title>
      </Helmet>
      {/* Helmet End */}
      <div className="hero-content flex-col gap-10 w-full md:w-1/2 mx-auto ">
          <div className="text-center ">
            <h1 className="text-3xl font-bold p-5 bg-teal-700 text-white rounded-xl">Login now!</h1>
          </div>
        <div className="card  max-w-sm shadow-2xl bg-base-100 w-full md:w-1/2 ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
              {errors.email && (
                <span className="text-red-500 font-bold">
                  Email field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered"
                name="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 font-bold">
                  Password field is required
                </span>
              )}

              <label className="label">
                <span onClick={displayPassword} className=" font-bold">
                  {showPass ? <FaEyeSlash/> : <FaEye/> }
                </span>
              </label>
            </div>
            <div className="form-control">
              <label className="label"></label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
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
            New to Here?{" "}
            <Link to="/signup" className="font-semibold">
              Create an Account
            </Link>{" "}
          </p>
          {loginError && <p className='text-white bg-red-500 w-10/12 mx-auto my-5 text-center rounded-lg p-2'> {loginError} </p> } 

        </div>
      </div>
    </div>
  );
};

export default Login;
