import React from 'react';
import '../components/HowNB.css';
export default function HowNB()
{
   let content = [];
    for(let i = 0; i < 4; i++)
    {
        content.push(<div key={i} className="how-nb-tile">
        <p className="how-nb-tiles-step">
            1

        </p>
        <div className="how-nb-tiles-icon"></div>
        <h3 className="how-nb-tile-head">
        Fill a form

        </h3>
        <div className="how-nb-tiles-desc">
                Just click on 'Manage my home' &amp; you will get a call back direct from our agent

        </div>
</div>)
    }

    return (
        <div className="how-nb section-space">
	         <h2 className="headings">
                How NoBroker Property Management Company in India Service works ?
					</h2>
					<div className="head_desc">
					Just click of a button and all the work will be done by NoBroker Property Management in India.
					</div>
             <div className="how-nb-tiles-div">
             {content}
             </div>   
        </div>
    );
}