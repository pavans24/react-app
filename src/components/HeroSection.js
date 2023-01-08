import React, { useState, useRef, useEffect } from 'react';
import './HeroSection.css';
export default function HeroSection()
{
    
   const [urlLink, setUrlLink] = useState({hits: []});
   const [fileData, setFileData] = useState({hits: []});
   const videoRef = useRef(null);
  
   function data(){
    
    var jsonData = {
        "url" : "https://www.instagram.com/reel/Cm8NNrfMXqo/?utm_source=ig_web_copy_link"
    };
    
    fetch('http://localhost:8080/service/v1/instareel',{
       method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then((response) => response.json())
    .then((actualData) => {
        console.log(actualData.instaReelData);
        const bytes = actualData.instaReelData;
        setFileData(bytes);
    });
    //const videoRef = useRef(null);
    const blob = new Blob([fileData],{type:'video/mp4'});
    const url = URL.createObjectURL(blob);
    videoRef.current.src = url;
    setUrlLink(url); 
   }
   

    return(
        <div className="hero-section">
            <div className='hero-part-1'>
    <img src={process.env.PUBLIC_URL+"/pavan.png"} alt="profile" class="profile" />
    </div>
    <div className="hero-part-2">
        <div className='hero-part-2-inner'>
            <h2>Java Backend Developer</h2>
            <p>
                As a Java Spring Boot Developer, I am one of the key members of the team building highly scalable Enterprise Applications. I coordinate with Technical Architect,
                  Development Leads in understanding the project requirements and work on effective implementation. 
            </p>
</div>
</div>
</div>
    );
}