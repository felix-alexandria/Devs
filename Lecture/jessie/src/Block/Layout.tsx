import React from "react";
import Header from "./Header";
import Footer from "./Footer"
// import {Outlet} from 'react-router-dom';
import HomeScreen from "../Pages/HomeScreen";

const Layout = () => {
    return (
        <div>
            <Header/>
            <HomeScreen/>
            <Footer/>
        </div>
    )
}

export default Layout;