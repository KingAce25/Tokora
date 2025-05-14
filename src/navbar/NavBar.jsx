import React from 'react';
import './navbar.css';
import Tokora from "../assets/token.png"

const navBar = () => {
  return (
    <div className="navigate" id='navbar'>
        <div className="navbar__outline">
          <div className='navigation'>
            <div className="img">
                <a href="#hero"><img src={Tokora} alt=""/></a>
            </div>
            <div className="sections">
                <a href="#features">Features</a>
                <a href="#how">How it works</a>
                <a href="#faqs">FAQs</a>
            </div>
            <div className="button">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwDIjzdncHe_JAJFLuxffiYPlWiyJV9tUAytVHePnFb52G5Q/viewform?usp=dialog"><button>Join Waitlist</button></a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default navBar;
