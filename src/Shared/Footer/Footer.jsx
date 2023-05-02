import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <main>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <i className="fab fa-slack"></i>
              <span className="logo_name">Tokyo Kitchen</span>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Get started</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li>
                <a href="#">Hire chef</a>
              </li>
              <li>
                <a href="#">Free recipes</a>
              </li>
              <li>
                <a href="#">Premium recipes</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">My account</a>
              </li>
              <li>
                <a href="#">Prefrences</a>
              </li>
              <li>
                <a href="#">Purchase</a>
              </li>
            </ul>
            
            <ul className="box input-box">
              <li className="link_name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2021 <a href="#">Tokyo Kitchen.</a>All rights reserved
            </span>
            <span className="policy_terms">
              <a href="#">Privacy policy</a>
              <a href="#">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
};

export default Footer;
