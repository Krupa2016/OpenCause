import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-logo">Open Cause</p>
        <ul className="footer-links">
          <li><Link to="/donate">Donate</Link></li>
          <li><Link to="/browse">Browse</Link></li>
          <li><Link to="/start-project">Raise Money</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
        </ul>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Open Cause. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
