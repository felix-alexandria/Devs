import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Services from "./Services";
import Features from "./Features";
import Blog from "./Blog";

const HomeScreen = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Services/>
            <Features/>
            <Blog/>
            <Contact/>
        </div>
    )
}

export default HomeScreen;

// npm i styled-components @types/styled-components