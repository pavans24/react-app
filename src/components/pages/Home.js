import React from 'react';
import FooterSection from '../FooterSection';
import HeroSection from '../HeroSection';
import InterestSection from '../InterestSection';
import Main from '../Main';
import NavBar from '../NavBar';
import ProgramSection from '../ProgramSection';
import WorkSection from '../WorkSection'
import './Home.css';
export default function Home()
{
    return(
        <>
        
        <NavBar />
        <HeroSection />
        <div className='home-main'>
        <WorkSection />
        <ProgramSection />
        <InterestSection />
        <FooterSection />
        </div>
        <div className="main">
        <Main />
        </div>
    
        </>
    );
}