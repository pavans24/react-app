import React from 'react';
import './HeroSection.css';
import OnPageForm from './OnPageForm';
export default function HeroSection()
{
    return(
        <div className="hero-background">
           <div className="hero-main">
             <div className="hero-left">
               <h1 className="hero-left-head">Looking for Property Management in India for your Rental Home?</h1>
						
                <div className="hero-left-usp">
                    <img src="https://www.nobroker.in/prophub/wp-content/uploads/2020/04/iStock-692279620.jpg" alt="tick"  className="tick-icon" />
                    <h3 className="usp-points">Verified Tenants</h3>
                </div>
                <div className="hero-left-usp">
                    <img src="https://www.nobroker.in/prophub/wp-content/uploads/2020/04/iStock-692279620.jpg"  alt="tick" className="tick-icon" />
                    <h3 className="usp-points">On Time Rent</h3>
                </div>
                <div className="hero-left-usp">
                    <img src="https://www.nobroker.in/prophub/wp-content/uploads/2020/04/iStock-692279620.jpg" alt="tick"  className="tick-icon" />
                    <h3 className="usp-points">Periodic Home Maintenance</h3>
                </div>
                <div className="hero-left-usp">
                    <img src="https://www.nobroker.in/prophub/wp-content/uploads/2020/04/iStock-692279620.jpg" alt="tick"  className="tick-icon" />
                    <h3 className="usp-points">Free Rent Agreement</h3>
                </div>	

             </div>
             <div className="hero-right">
               <OnPageForm />
             </div>
           </div>
        </div>
    );
}