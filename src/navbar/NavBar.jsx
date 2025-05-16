import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import Tokora from "../assets/token.png";
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../theme/ThemeToggle';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  const { darkMode, toggleTheme } = useTheme();

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        overlayRef.current &&
        overlayRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navigate" id="navbar">
      <div className="navbar__outline">
        <div className="navigation">
          <div className="img">
            <a href="#hero"><img src={Tokora} alt="Logo" /></a>
          </div>

          <div className="sections">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQs</a>
          </div>

          <div className="actions">
            <div className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwDIjzdncHe_JAJFLuxffiYPlWiyJV9tUAytVHePnFb52G5Q/viewform?usp=dialog">
            <button>Join Waitlist</button>
            </a>
          </div>

          <div className="hamburger" onClick={toggleSidebar}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="overlay" ref={overlayRef}>
          <div className={`sidebar ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
            <div className="sidebar__logo">
              <a href="#hero" onClick={toggleSidebar}>
                <img src={Tokora} alt="Logo" />
              </a>
            </div>

            <a href="#features" onClick={toggleSidebar}>Features</a>
            <a href="#how" onClick={toggleSidebar}>How it works</a>
            <a href="#faqs" onClick={toggleSidebar}>FAQs</a>

            {/* <div className="theme-toggle" onClick={() => {
              toggleTheme();
              toggleSidebar();
            }}>
              {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </div> */}

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwDIjzdncHe_JAJFLuxffiYPlWiyJV9tUAytVHePnFb52G5Q/viewform?usp=dialog" onClick={toggleSidebar}>
              <button>Join Waitlist</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
