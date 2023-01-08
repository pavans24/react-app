import React from "react";
import './InterestSection.css';
export default function InterestSection(){
    return(
        <div className="interest-section" id="interest">
            <div className="interest-head">
                <h1>Interests</h1>
            </div>
            <div className="interest-main">
                <div className="interest-inner-section">
                    <div className="interest-tiles">
                        <p>Artificial Intelligence</p>
                    </div>
                    <div className="interest-tiles">
                        <p>Machine Learning</p>
                    </div>
                </div>
            </div>
        </div>
    );
}