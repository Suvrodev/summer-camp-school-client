import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Instructors from "../Instructors/Instructors";
import Classes from "../Classes/Classes";
import DashBoard from "../DashBoard/DashBoard";
import AddClass from "../DashBoard/AddClass/AddClass";
import MyClass from "../DashBoard/MyClass/MyClass";
import PrivateRoutes from "./PrivateRoutes";
import ManageClasses from "../DashBoard/ManageClasses/ManageClasses";
import ManageUsers from "../DashBoard/ManageUsers/ManageUsers";
import MySelectedClass from "../DashBoard/MySelectedClass/MySelectedClass";
import MyEnrolledClasses from "../DashBoard/MyEnrolledClasses/MyEnrolledClasses";
import SelectClass from "../Classes/SelectClass";
import Payment from "../DashBoard/Payment/Payment";
import ErrorPage from "../ErrorPage.jsx/ErrorPage";
import Framer from "../Framer/Framer";
import PaymentHistory from "../DashBoard/PaymentHistory/PaymentHistory";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/instructors',
            element: <Instructors></Instructors>
        },
        {
            path:'/classes',
            element: <Classes></Classes>
        },
        {
            path: '/selectclass/:id',
            element: <PrivateRoutes><SelectClass></SelectClass></PrivateRoutes>
        },
        {
            path: '/framer',
            element: <Framer></Framer>
        }
      ]
    },
    {
        path:'dashboard',
        element:<PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>,
        children:[
            {
                path: 'addclass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myclass',
                element: <MyClass></MyClass>
            },
            {
                path: 'manageclasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'myselectedclasses',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: 'myenrolledclasses',
                element: <MyEnrolledClasses></MyEnrolledClasses>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path:'paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            }
            
        ]
    }
  ]);

export default router
