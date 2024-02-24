import React from 'react';
import  images  from '../../constants/images';

const SubHeading = (props) => (
  <div>
    <p className='p__cormorant'>{props.title}</p>
    <img src={images.spoon} alt="spoon" />
  </div>
);

export default SubHeading;
