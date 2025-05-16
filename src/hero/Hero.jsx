import React, { useEffect, useRef } from 'react';
import './hero.css';
import { useTheme } from '../theme/ThemeToggle';

const Hero = () => {
  const { darkMode } = useTheme();
  const heroRef = useRef(null);
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <div
      className={`hero ${darkMode ? 'dark' : 'light'} ${visible ? 'visible' : ''}`}
      id="hero"
      ref={heroRef}
    >
      {/* Removed local toggle button */}

      <div className="hero__header">
        <h1>Crypto-Powered Marketplace for Local Commerce</h1>
      </div>
      <div className="hero__text">
        <p>
          Join the wait for an innovative marketplace that prioritizes your privacy
          and enables secure transactions.
        </p>
      </div>
      <div className="hero__input heartbeat">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwDIjzdncHe_JAJFLuxffiYPlWiyJV9tUAytVHePnFb52G5Q/viewform?usp=dialog">
          <button>Get Early Access</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
