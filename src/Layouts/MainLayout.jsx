import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>

            <Outlet></Outlet>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;