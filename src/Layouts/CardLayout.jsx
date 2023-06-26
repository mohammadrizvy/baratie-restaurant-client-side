import React from 'react';
import Cards from '../Pages/Cards/Cards';
import Navbar from "../Pages/Shared/Navbar";
import Footer from '../Pages/Shared/Footer';
import { Outlet } from 'react-router-dom';

const CardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Cards></Cards>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default CardLayout;