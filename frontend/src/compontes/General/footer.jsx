import React from 'react';
import Facebook from '../../Image/facebook.png';
import Twitter from '../../Image/twitter.png';
import Linkedin from '../../Image/linkedin.png';

const Footer = () => {
  return (
    <footer style={{ padding: '20px', textAlign: 'center' }}>
      <p style={{ marginBottom: '10px' }}>© 2023 PIP. Tous droits réservés.</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="#" style={{ marginRight: '10px' }}>
          <img src={Linkedin} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
        </a>
        <a href="#" style={{ marginRight: '10px' }}>
          <img src={Facebook} alt="Facebook" style={{ width: '20px', height: '20px' }} />
        </a>
        <a href="#">
          <img src={Twitter} alt="Twitter" style={{ width: '20px', height: '20px' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
