import React from 'react';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Cards from '../Pages/Cards/Cards';
import Banner from '../Pages/Shared/Banner/Banner';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Cards></Cards>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;