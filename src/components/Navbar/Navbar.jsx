import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { CgMenuRightAlt } from "react-icons/cg";
const Navbar = () => {
 
  const [menuActive, setMenuState] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [mobilenavbar, setMobilenavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const Mobilenavbar = () => {
    if (window.scrollY >=830) {
      setMobilenavbar(true);
    } else {
      setMobilenavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  window.addEventListener("scroll", Mobilenavbar);
  return (
    <div>
      <div className={mobilenavbar?"mobile-navbar":"mobile-navbar mobileactiveColor"}>
        <div className="nav_row">
          <div className="logo">
            <Link to="/">Autonoid</Link>
          </div>
          <div className="nav_toggle" onClick={() => setMenuState(!menuActive)}>
            <span>
              <CgMenuRightAlt />
            </span>
          </div>
        </div>
        {/* <div
          className={`nav-overlay ${menuActive ? "open" : "mobile"}`}
          onClick={() => setMenuState(!menuActive)}
        ></div> */}

        <div className={`navv ${menuActive ? "navopen" : "navclose"}`}>
          <strong>Autonoid</strong>
          <div className="colse" onClick={() => setMenuState(!menuActive)}>
            <MdClose />
          </div>
          <ul>
            <li onClick={() => setMenuState(!menuActive)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setMenuState(!menuActive)}>
              <Link to="about">About Us</Link>
            </li>
            <li onClick={() => setMenuState(!menuActive)}>
              <Link to="vision">Vision</Link>
            </li>
            <li onClick={() => setMenuState(!menuActive)}>
              <Link to="perspective">Mission</Link>
            </li>

            <li onClick={() => setMenuState(!menuActive)}>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Desktop */}
      <div className={navbar?"desktop-menu ":"desktop-menu activeColor"}>
        <div className="logo">
          <Link to="/">Autonoid</Link>
        </div>
        <div className="nav-links">
          <ul>
            <li data-aos="fade-in">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="vision">Vision</Link>
            </li>
            <li>
              <Link to="perspective">Mission</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
