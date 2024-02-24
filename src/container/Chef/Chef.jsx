import React from 'react';
import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <section className='app__bg app__wrapper  section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chefimage" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="chef's Word" />
      <h1 className='headtext__cormorant'>What we belive in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="qouteImage" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ratione sunt.</p>
        </div>
          <p className='p__opensans'>Excepturi magni, dignissimos iusto labore ipsum ut adipisci, at sunt eum enim voluptatem! Unde, nesciunt non.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Lou</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="signImage" />

      </div>

    </div>
  </section>
);

export default Chef;
