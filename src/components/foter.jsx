import React from 'react';
import './foter.css';

const FooterContact = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">
        <img src="/logo/logo-beauty-studio.jpg" alt="" className='logo-footer'/>
        <p className="footer-item">Dirección: Campana 961, Dock Sud</p>
        <p className="footer-item">Teléfono: +54 9 11 5976 3452</p>
        <p className="footer-item">Instagram: <a href="https://instagram.com/beautystudio_d.art" target="_blank" rel="noopener noreferrer">@beautystudio_d.art</a></p>
      </div>
    </footer>
  );
}

export default FooterContact;
