import React from 'react';

function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-content">
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li className="footer_text">
            © 2016-{ new Date().getFullYear() } Shelter Tech, a 501(c)(3) nonprofit
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
