import React from 'react';
import './ProgramSection.css';
export default function ProgramSection(){
    return(
        <div className="program-section" id='programming'>
            <div className="program-head">
                <h1>Programming</h1>
            </div>
            <div class="program-main">
                <div class="program-inner-section">
                    <div class="program-tiles"><p>HTML</p></div>
                    <div class="program-tiles"><p>CSS</p></div>
                    <div class="program-tiles"><p>JavaScript</p></div>
                    <div class="program-tiles"><p>React JS</p></div>
                </div>
                <div class="program-inner-section">
                    <div class="program-tiles"><p>Java</p></div>
                    <div class="program-tiles"><p>Spring Boot</p></div>
                    <div class="program-tiles"><p>PHP</p></div>
                    <div class="program-tiles"><p>MySQL</p></div>
                </div>
            </div>
        </div>
    );
}