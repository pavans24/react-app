import React from 'react';
import '../components/NavBar.css';
export default function NavBar()
{
    return(
        <div className="nav-bar-sticky">
            <div className="nav-bar">
            <div className="nav-item">
        <img src="https://www.nobroker.in/prophub/wp-content/uploads/2020/05/NoBroker.com-Logo.png" className="logo" alt="logo" />
        </div>
        <div className="nav-item align-right">
            <div className="align-vertical">
            <button className="contact-btn">
                Contact Us
            </button>
            </div>
        </div>
            </div>
        
        </div>
    );
}