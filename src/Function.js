import React, { useState, useRef, useEffect } from 'react';
export default function Function()
{
        const [fileData, setFileData] = useState({hits: []});
        const [urlLink, setUrlLink] = useState({hits: []});
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
        return url;        
}