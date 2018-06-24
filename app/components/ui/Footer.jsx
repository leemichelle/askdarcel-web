import React from 'react';

function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-text">
            ©{ new Date().getFullYear() } Shelter Tech
        </div>
        <ul className="footer-links">
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">API Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
