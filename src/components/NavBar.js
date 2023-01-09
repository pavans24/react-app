import React, { useState, useEffect, useRef } from 'react';
import * as ReactDOM from 'react-dom';
import './NavBar.css';

export default function NavBar(){

    
    const [check, setCheck] = useState(false);
    const [check2, setCheck2] = useState(false);

    const scrollIt = (pos) => {

        var eleId = 'home';
        if(pos === 0){
            eleId = 'home';
        }
        else if(pos === 1){
            eleId = 'work';
        }
        else if(pos === 2){
            eleId = 'interest';
        }
        else if(pos === 3){
            eleId = 'programming';
        }

        if(pos === 4){
            window.open("https://www.linkedin.com/in/pavan-kumar-sadhu-47693818b/","_self");
            setCheck2(false);
            closeMenu();
        }else {
            const element = document.getElementById(eleId);
            if (element) {
             element.scrollIntoView({ behavior: 'smooth' });
             setCheck2(false);
             closeMenu();
             }
        }

        

  };

    const closeMenu = () => {
setCheck(false);
document.body.style.overflow = "unset";
    };
    
    const showMenu = () => {
if(check2){
    //menu closing condition
    setCheck2(false);
    closeMenu();
}else{
    //menu opening condition
    setCheck(true);
    setCheck2(true);
    document.body.style.overflow = "hidden";
}

    };
    function Menu(){
        return(
            <div className='nav-bar-menu'>
                    <div className="nav-menu-items">
                        <div onClick={() => scrollIt(0)}>Home</div>
                        <div onClick={() => scrollIt(1)} >Work</div>
                        <div onClick={() => scrollIt(2)}>Programming</div>
                        <div onClick={() => scrollIt(3)}>Interests</div>
                        <div onClick={() => scrollIt(4)}><img src={process.env.PUBLIC_URL+"/linkedin-icon.png"} className="linkedin-icon" /></div>
                    </div>
            </div>
        );
    }
    return(
        <div className='nav-bar' id='home'>
            <div className='nav-bar-part1'>
                <h2 className="nav-text">Pavan@TCS</h2>
            </div>
            <div className='nav-bar-part2'>
                    <div className="nav-items">
                        <span onClick={() => scrollIt(0)}>Home</span>
                        <span onClick={() => scrollIt(1)}>Work</span>
                        <span onClick={() => scrollIt(2)}>Programming</span>
                        <span onClick={() => scrollIt(3)}>Interests</span>
                        <span onClick={() => scrollIt(4)} className="linkedin-icon-span" ><img src={process.env.PUBLIC_URL+"/linkedin-icon.png"} className="linkedin-icon" /></span>
                    </div>
            </div>
            <div className="nav-bar-part3">
                <div className="nav-menu">
                    <img src={process.env.PUBLIC_URL+"/menu-icon.png"} className='nav-menu-icon' onClick={showMenu} />
                </div>
                <div className="nav-menu-area">
                {check? <Menu /> : null}
                </div>

            </div>
        </div>
    );
}