import React from 'react';
import './main.css'
import { Outlet } from 'react-router-dom';
import Header from '../Pages/SharedPage/Header/Header';
import Footer from '../Pages/SharedPage/Footer/Footer';

const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            {/* <h1>Main</h1> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;