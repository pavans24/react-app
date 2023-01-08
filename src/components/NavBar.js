import React from 'react';
import './NavBar.css';
export default function NavBar(){
    return(
        <div className='nav-bar'>
            <div className='nav-bar-part1'>
                <h2 className="nav-text">Pavan@TCS</h2>
            </div>
            <div className='nav-bar-part2'>
                    <div className="nav-items">
                        <span>Home</span>
                        <span>Work</span>
                        <span>Programming</span>
                        <span>Interests</span>
                    </div>
            </div>
            <div className="nav-bar-part3">
                <div className="nav-menu">
                    <img src={process.env.PUBLIC_URL+"/menu-icon.png"} className='nav-menu-icon' />
                </div>
            </div>
        </div>
    );
}