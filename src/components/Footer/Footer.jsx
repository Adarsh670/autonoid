import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mb-4">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="footer-heading">Autonoid</h1>
          </div>
          <div className="col-lg-3 ">
            <ul>
              <li >
                <Link to="/">Home</Link>
              </li>
              <li >
                <Link to="/">Vision</Link>
              </li>
              <li >
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 "> 
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Mission</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container copyright-section">
        <p >2023 © Prith-ev. All rights reserved.</p>
        <ul className="social-icons"  >
          <li>
            <FaFacebookF />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <GrLinkedinOption />
          </li>
          <li>
            <BsInstagram />
          </li>
        </ul>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
