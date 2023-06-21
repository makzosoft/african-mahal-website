import React, { useState } from "react";
import { logo, menuIcon, menuCloseIcon } from "../data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="/">
          <img className="logo" src={logo} alt={logo} />
        </a>
      </div>
      
      <ul className="navlinks">
        <li className="menu-dropdown-list-item menu-dropdown-list-item-highlighted"
          onClick={toggleMenu}
        >
          <a href="https://wa.me/+971569067492" target="_blank" rel="noreferrer">Contact us</a>
        </li>
        <li className="menu-dropdown">
          <div className="menu-dropdown-btn" onClick={toggleMenu}>
          {isMenuOpen ? (
              <img
                className="menu-close-icon"
                src={menuCloseIcon}
                alt={menuCloseIcon}
              />
            ) : (
              <img className="menu-icon" src={menuIcon} alt={menuIcon} />
           )}
          </div>
        </li>
      </ul>

      <ul
        className={`${
          isMenuOpen
            ? "menu-dropdown-list  menu-dropdown-is-active"
            : "menu-dropdown-list"
        }`}
      >
        <li className="menu-dropdown-list-item" onClick={toggleMenu}>
          <a href="/">Home</a>
        </li>
        <li className="menu-dropdown-list-item" onClick={toggleMenu}>
          <a href="#services">Our services</a>
        </li>
        <li className="menu-dropdown-list-item" onClick={toggleMenu}>
          <a href="#about">About us</a>
        </li>
        <li
          className="menu-dropdown-list-item menu-dropdown-list-item-highlighted"
          onClick={toggleMenu}>
          <a href="https://wa.me/+971569067492" target="_blank" rel="noreferrer">Contact us</a>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(Navbar)
