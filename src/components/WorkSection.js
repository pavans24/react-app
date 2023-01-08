import React from 'react';
import './WorkSection.css';
export default function WorkSection(){
    return(
        <div className="work-section" id="work">
            <div className='work-head'>
            <h1>Work</h1>
            </div>
            <div className='work-main'>
            <div className='work-inner-section'>
<div className="work-tiles">
    <p>
    Developed dynamic responsive websites with high speed performance, involving form handling, storing data into databases
     and fetching data from it and google sheets,optimization of speed,design, api integration and events on elements.
    </p>
    <h2>- FullStack</h2>
</div>
<div className="work-tiles">
    <p>
    Developed microservices which use the spring boot framework involving connecting microservices to interact with databases, identifying and 
    finding solutions to bugs and implementing JUnit test cases and well written documentation for the individual microservices.
    </p>
    <h2>- Backend</h2>
</div>
</div>
            </div>
            
        </div>
    );
}