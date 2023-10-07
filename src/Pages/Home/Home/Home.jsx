import React, { useEffect, useState } from "react";
import "./Home.css";
import "../../../app.css";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClasses/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Chart from "../Chart/Chart";
import useTitle from "../../../Hook/useTitle";
import { Helmet } from "react-helmet-async";
import NewBanner from "../Banner/NewBanner";
import CheckBanner from "../Banner/CheckBanner";
import Footer from "../../SharedPage/Footer/Footer";
import Mobile from "./Mobile/Mobile";


const Home = () => {


//   const [theme,setTheme]=useState(localStorage.getItem('theme')? localStorage.getItem('theme'): 'light')

//   const handleToggle=(e)=>{
//     if(e.target.checked){
//         setTheme('light')
//     }else{
//         setTheme('dark')
//     }
//   }
//   useEffect(()=>{
//     localStorage.setItem('theme', theme)
//     const localTheme=localStorage.getItem('theme')
//     document.querySelector('html').setAttribute('data-theme', localTheme )
//   },[theme])


  
  return (
    <div>
     <Helmet>
        <title>Home | Summer Camp School</title>
     </Helmet>

    
      {/* <CheckBanner></CheckBanner> */}
      {/* <NewBanner></NewBanner> */}
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <Mobile></Mobile>
      <Chart></Chart>
    
     
    </div>
  );
};

export default Home;
