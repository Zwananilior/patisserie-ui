import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer offset-left">
    <div className="footer-row">
      <img
        src="/public/cup.png"
        alt="Cupcake"
        className="footer-image"
      />

      <div className="follow-container">
        <p className="follow-text">Follow Us</p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook">
            <img src="/public/facebook.png" alt="Facebook" />
          </a>
          <a href="#" aria-label="Twitter/X">
            <img src="/public/x.png" alt="X/Twitter" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
