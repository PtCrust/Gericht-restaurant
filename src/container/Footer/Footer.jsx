import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <section className='app__footer section__padding' id='footer'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>+20 01205131600</p>
        <p className='p__opensans'>+20 01008084628</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt="logo" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoonLogo" style={{ marginTop: "1rem" }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Ours</h1>
        <p className='p__opensans'>Monday - Friday : 09:00 am - 02:00 pm</p>
        <p className='p__opensans'>Saturday - Sunday : 7:00 am - 01:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2021 Gericht. All Rights reserved.</p>
    </div>
  </section>
);

export default Footer;
