import React from 'react';
import HeroSection from '../HeroSection';
import Main from '../Main';
import './Home.css';
export default function Home()
{
    return(
        <>
        
        <HeroSection />
        <div className="main">
        <Main />
        </div>
    
        </>
    );
}