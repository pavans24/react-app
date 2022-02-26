import React from 'react';
import NavBar from '../NavBar';
import HeroSection from '../HeroSection';
import Main from '../Main';
import './Home.css';
export default function Home()
{
    return(
        <>
        <NavBar />
        <HeroSection />
        <div className="main">
        <Main />
        </div>
    
        </>
    );
}