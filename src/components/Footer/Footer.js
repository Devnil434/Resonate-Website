import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="copyright">
          &copy; 2025
        </div>
        <div className="footer-socials">
          <button type="button" aria-label="Instagram"><FaInstagram /></button>
          <button type="button" aria-label="Facebook"><FaFacebookF /></button>
          <button type="button" aria-label="Twitter"><FaTwitter /></button>
          <button type="button" aria-label="LinkedIn"><FaLinkedinIn /></button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
