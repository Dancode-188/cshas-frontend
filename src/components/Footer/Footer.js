import React from "react";
import "./Footer.scss";
import facebookIcon from "../../assets/facebook-icon.svg";
import twitterIcon from "../../assets/twitter-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/privacy-policy" className="footer-link">
          Privacy Policy
        </a>
        <a href="/terms-of-service" className="footer-link">
          Terms of Service
        </a>
        <a href="/contact" className="footer-link">
          Contact Us
        </a>
      </div>
      <div className="footer-social">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitterIcon} alt="Twitter" className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
      </div>
      <div className="footer-text">
        &copy; {new Date().getFullYear()} CSHAS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
