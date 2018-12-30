import React from 'react';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-top">
          <section className="footer-service-guide">
            SF SERVICE GUIDE
          </section>
          <section className="footer-links">
            <ul>
              <li>ABOUT US</li>
              <li><a href="sheltertech.org">Our Story</a></li>
              <li><a href="sheltertech.org/volunteer">Volunteer</a></li>
              <li><a href="sheltertech.org/donate">Donate</a></li>
            </ul>
            <ul>
              <li>HELP</li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Digital Literacy</a></li>
            </ul>
            <ul>
              <li>CONNECT</li>
              <li><a href="info@sheltertech.org">Email</a></li>
              <li><a href="https://www.facebook.com/ShelterTechOrg/">Facebook</a></li>
              <li><a href="https://twitter.com/sheltertechorg">Twitter</a></li>
              <li><a href="https://www.instagram.com/shelter_tech/">Instagram</a></li>
            </ul>
            <ul>
              <li>LEGAL</li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><a href="#">API Policy</a></li>
            </ul>
          </section>
        </div>
        <div className="footer-text">
          Created and maintained by ©{ new Date().getFullYear() } ShelterTech, a 501(c)(3) nonprofit | Made with love in San Francisco
        </div>
      </div>
    </footer>
  );
}

export default Footer;
