import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-contact-us">
          Contact Us
          <br />
          <div className="dev-name-container">
            <a
              target="_blank"
              rel="noreferrer"
              className="dev-link"
              href="https://www.linkedin.com/in/julio-pacheco-06958bb7/"
            >
              <img
                className="linkin-logo"
                src="https://image.flaticon.com/icons/png/512/61/61109.png"
                alt=""
              />
              <li className="dev-name">Julio Pacheco</li>
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              className="dev-link"
              href="https://www.linkedin.com/in/john-kim-910269201/"
            >
              <img
                className="linkin-logo"
                src="https://image.flaticon.com/icons/png/512/61/61109.png"
                alt=""
              />
              <li className="dev-name">John Kim</li>
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              className="dev-link"
              href="https://www.linkedin.com/in/gary-grant-709307177/"
            >
              <img
                className="linkin-logo"
                src="https://image.flaticon.com/icons/png/512/61/61109.png"
                alt=""
              />
              <li className="dev-name">Gary Grant</li>
            </a>
          </div>
        </div>
        <div className="footer-menu">
          Menu
          <br />
          <div className="footer-link-container">
            <Link to="/products" className="nav-link">
              <li className="footer-link">Browse</li>
            </Link>
            <br />
            <Link to="/add-products" className="nav-link">
              <li className="footer-link">Add Item</li>
            </Link>
            <br />
            <Link to="/sign-up" className="nav-link">
              <li className="footer-link">Sign Up</li>
            </Link>
            <br />
            <Link to="/sign-in" className="nav-link">
              <li className="footer-link">Sign In</li>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
