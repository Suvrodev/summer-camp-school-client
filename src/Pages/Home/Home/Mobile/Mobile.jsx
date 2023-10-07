import React from "react";
import './Mobile.css'
import MyMath from "./MyMath";

const Mobile = () => {
  return (
    <div>
        <h1 className='bg-white text-orange-600 font-bold text-xl text-center p-5 w-11/12 md:w-8/12 mx-auto rounded-2xl mt-5 myTytle_bg '>Which You Need to know about summer school camp </h1>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 1st Phone start */}
      <div className="mockup-phone m-2 ">
        <div className="camera"></div>
        <div className="display">
          <div className=" phone-1 m-2 ">
              <h1 className="flex items-center h-20 justify-center mt-10 font-bold bg-green-600 text-center m-2 text-white p-2 rounded-2xl">Ans of 10 Public Question</h1>

             <div className="my-10 mobileheight">

             <details className="collapse bg-base-200 my-5">
                <summary className="collapse-title text-xl font-medium text-center">1. What types of activities and programs are offered at the summer camp school?</summary>
                <div className="collapse-content"> 
                    <p className=""> The summer camp school offers a variety of activities such as sports, arts and crafts, nature exploration, swimming, and adventure outings</p>
                </div>
             </details>
              <details className="collapse bg-base-200 my-5">
                <summary className="collapse-title text-xl font-medium text-center">2. What are the age groups that can participate in the summer camp school?</summary>
                <div className="collapse-content"> 
                    <p> The summer camp school is open to children of various age groups, typically ranging from 5 to 17 years old, with age-appropriate activities and programs for each group.</p>
                </div>
             </details>

              <details className="collapse bg-base-200 my-5">
                <summary className="collapse-title text-xl font-medium text-center">3. Is the summer camp school staffed with trained and qualified counselors?</summary>
                <div className="collapse-content"> 
                    <p>Yes, the summer camp school employs trained and qualified counselors who have experience working with children and ensuring their safety and well-being during camp activities.</p>
                </div>
             </details>
              <details className="collapse bg-base-200 my-5">
                <summary className="collapse-title text-xl font-medium text-center">4. Are there any educational components integrated into the summer camp school curriculum?</summary>
                <div className="collapse-content"> 
                    <p>Yes, the summer camp school employs trained and qualified counselors who have experience working with children and ensuring their safety and well-being during camp activities.</p>
                </div>
             </details>
              <details className="collapse bg-base-200 my-5">
                <summary className="collapse-title text-xl font-medium text-center">5. What safety measures are in place to protect the children attending the summer camp school?</summary>
                <div className="collapse-content"> 
                    <p>Yes, the summer camp school employs trained and qualified counselors who have experience working with children and ensuring their safety and well-being during camp activities.</p>
                </div>
             </details>
             </div>
            
            </div>
        </div>
      </div>
      {/* 1st Phone end */}

        {/* 2nd Phone start */}
      <div className="mockup-phone m-2 ">
        <div className="camera"></div>
        <div className="display">
          <div className=" phone-1 m-2">
              <h1 className="mt-10 h-20 flex items-center font-bold bg-green-600 text-center m-2 text-white p-2 rounded-2xl">Usefulness of Summer-camp-school</h1>
             <div className="my-10 mobileheight">
             <table className="table">
                {/* head */}
                <thead>
                <tr className="text-center">
                    <th className="text-center text-white text-3xl">Usefulness</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr className="bg-base-200">
                   <th className="text-left">1. Summer camp school provides an opportunity for children to engage in physical activities and sports, promoting a healthy and active lifestyle.</th>
                </tr>
                <tr className="bg-base-200 ">
                   <th className="text-left">2. It allows children to explore and appreciate nature through outdoor adventures and environmental education programs.</th>
                </tr>
                <tr className="bg-base-200 ">
                   <th className="text-left">3. Summer camp school fosters social interaction and the development of interpersonal skills through team-building activities and group projects.</th>
                </tr>
                <tr className="bg-base-200 ">
                   <th className="text-left">4. It encourages creativity and self-expression through arts and crafts, music, drama, and other creative outlets.</th>
                </tr>
                <tr className="bg-base-200 ">
                   <th className="text-left">5. Summer camp school helps children develop leadership skills by offering opportunities for responsibility and decision-making.</th>
                </tr>
                <tr className="bg-base-200 ">
                   <th className="text-left">6. It provides a break from academic pressures and allows children to relax, have fun, and recharge for the upcoming school year.</th>
                </tr>
               
                </tbody>
            </table>
             </div>
            </div>
        </div>
      </div>
      {/* 2nd Phone end */}

        {/* 2nd Phone start */}
      <div className="mockup-phone m-2 ">
        <div className="camera"></div>
        <div className="display">
          <div className=" phone-1 m-2">
              <h1 className="mt-10 font-bold h-20 bg-green-600 text-center m-2 text-white p-2 rounded-2xl">Give proper Answer 10 math and get cupon code</h1>
             <div className="my-10 mobileheight">
                <MyMath></MyMath>
             </div>
            </div>
        </div>
      </div>
      {/* 2nd Phone end */}
    </div>
    </div>
  );
};

export default Mobile;
