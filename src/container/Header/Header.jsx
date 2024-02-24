import React from 'react';

import './Header.css';
import images from '../../constants/images'
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The key to Fine Dining</h1>
      <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque optio ad natus aliquam deserunt eum laborum. Provident error soluta quam, atque iste architecto mollitia. Hic libero enim odit officiis qui?</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome_image" />
    </div>
  </div>
);

export default Header;
