import React from 'react';
import { Link } from 'react-router';
import { isSFServiceGuideSite } from '../../utils/whitelabel';

function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__content">
        <div className="site-footer__top">
          <section className="service-guide">
            <div className="service-guide__icon" />
            <h1 className="service-guide__text">
              {isSFServiceGuideSite() ? 'SF Service Guide' : 'Ask Darcel'}
            </h1>
          </section>
          <section className="site-footer__links">
            <ul>
              <h1>About Us</h1>
              <li><a href="https://www.sheltertech.org" target="_blank" rel="noopener noreferrer">Our Story</a></li>
              <li><a href="https://www.sheltertech.org/volunteer" target="_blank" rel="noopener noreferrer">Volunteer</a></li>
              <li><a href="https://www.sheltertech.org/donate" target="_blank" rel="noopener noreferrer">Donate</a></li>
            </ul>
            {/* <ul>
              <h1>Help</h1>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Digital Literacy</a></li>
            </ul> */}
            <ul>
              <h1>Connect</h1>
              <li><a href="mailto:info@sheltertech.org">Email</a></li>
              <li><a href="https://www.facebook.com/ShelterTechOrg" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/sheltertechorg" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com/shelter_tech" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
            <ul>
              <h1>Legal</h1>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              {/* <li><a href="#">API Policy</a></li> */}
            </ul>
          </section>
        </div>
        <div className="site-footer__disclosure">
          Created and maintained by ©
          { new Date().getFullYear() }
          {' '}
ShelterTech, a 501(c)(3) nonprofit | Made with love in San Francisco
        </div>
      </div>
    </footer>
  );
}

export default Footer;
