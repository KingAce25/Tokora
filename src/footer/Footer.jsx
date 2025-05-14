import React from 'react';
import './footer.css'
import Tokora from '../assets/IMG-20250510-WA0002 1.png'
import Twitter from '../assets/X.png'
import Telegram from '../assets/Telegram.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer__header">
        <div className="foot_img">
            <img src={Tokora} alt=""/>
        </div>
        <div className="foot_text">
            <h6>Join the Waitlist</h6>
            <p>Be the first to experience Tokora's privacy first marketplace, signup for early access</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwDIjzdncHe_JAJFLuxffiYPlWiyJV9tUAytVHePnFb52G5Q/viewform?usp=dialog"><button>Get Early Access</button></a>
        </div>
        </div>
        <div className="footer__footer">
            <div className="foot-top">
                <h6>Follow Us On</h6>
                <div className="foot-img2">
                    <a href=""><img src={Twitter} alt=""/></a>
                    <a href=""><img src={Telegram} alt=""/></a>
                </div>
            </div>
        </div>
        <div className="foot-final">
            <h1>TOKORA</h1>
        </div>
    </div>
  );
}

export default Footer;
