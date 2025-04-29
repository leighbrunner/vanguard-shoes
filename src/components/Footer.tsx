import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="footer-section">
            <h3 className="footer-heading">Vanguard</h3>
            <p className="footer-text">
              Celebrating 50 years of helping investors reach their financial goals.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shoes">Anniversary Shoes</Link></li>
              <li><Link to="/etf">Crypto ETF</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <p className="footer-text">
              100 Vanguard Blvd<br />
              Malvern, PA 19355
            </p>
            <p className="footer-text">
              <a href="tel:877-662-7447">877-662-7447</a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} The Vanguard Group, Inc. All rights reserved.
          </p>
          <p className="disclaimer">
            This is a demonstration website for Vanguard's 50th anniversary and not an official Vanguard website.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 