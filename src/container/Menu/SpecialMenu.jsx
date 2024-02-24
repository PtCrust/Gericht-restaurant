import React from 'react';
import './SpecialMenu.css';
import { images, data } from '../../constants';
import { MenuItem, SubHeading } from '../../components';



const SpecialMenu = () => {
  return (
    <section className='app__specialMenu flex__center section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title="Menu That Fits you Palatte" />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>

      <div className='app__specialMenu-menu'>

        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu_heading'>Wine & Beer</p>
          <div className='app__specialMenu_menu_items'>
            {data.wines.map((item, index) => (
              <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
            ))}
          </div>
        </div>

        <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt="menuImage" />
        </div>


        <div className='app__specialMenu-menu_cocktails flex__center'>
          <p className='app__specialMenu_heading'>Wine & Beer</p>
          <div className='app__specialMenu_menu_items'>
            {data.cocktails.map((item, index) => (
              <MenuItem key={item.title + index} title={item.title} price={item.price} tags={item.tags} />
            ))}
          </div>
        </div>

      </div>
      <button className='custom__button' style={{ marginTop: "15px" }}>View More</button>
    </section>
  )
};

export default SpecialMenu;
