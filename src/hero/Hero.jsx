import React from 'react';
import './hero.css'

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <div className="hero__header"><h1>Crypto-Powered Marketplace for Local Commerce</h1></div>
      <div className="hero__text"><p>Join the wait for an innovative marketplace that prioritiizes your pirivacy and enables secure transactions</p></div>
      <div className="hero__input heartbeat">
        {/* <input type="email" placeholder='Email Address'/> */}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwDIjzdncHe_JAJFLuxffiYPlWiyJV9tUAytVHePnFb52G5Q/viewform?usp=dialog"><button>Get Early Access</button></a>
      </div>
    </div>
  );
}

export default Hero;
