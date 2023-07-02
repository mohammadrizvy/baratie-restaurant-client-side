import React from 'react';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Cards from '../Pages/Home/Cards/Cards';
import Banner from '../Pages/Home/Banner/Banner';
import About from '../Pages/Home/About/About';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Cards></Cards>
            <About></About>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;