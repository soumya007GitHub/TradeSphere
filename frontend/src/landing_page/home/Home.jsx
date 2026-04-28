import React from 'react'
import Hero from "./Hero.jsx"
import Awards from "./Awards.jsx";
import Education from "./Education.jsx"
import Pricing from "./Pricing.jsx"
import Stats from "./Stats.jsx"
import OpenAccount from "../OpenAccount.jsx";
import NavBar from "../Navbar.jsx";
import Footer from "../Footer.jsx";


const Home = () => {
    return (
            <div className='px-5 md:px-10 lg:px-48 mt-20'>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            </div>
    )
}

export default Home