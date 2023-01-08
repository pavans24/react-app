import React from "react";
import './FooterSection.css';
export default function FooterSection(){
    return(
        <div className="footer-section">
            <div className="footer-line-width">
                <div className="footer-line"></div>
            </div>
            <div className="footer-desc">
                <p>Developed with <img src={process.env.PUBLIC_URL+"/love.png"} className="footer-logo" /> By 
                <span className="footer-text-overline"> Pavan</span>
                </p>
            </div>
            <div class="footer-line-width">
                <div className="footer-line"></div>
            </div>
        </div>
    );
}