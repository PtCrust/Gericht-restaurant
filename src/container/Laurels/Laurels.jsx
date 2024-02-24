import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';


const AwardCard = ({imgUrl , title , subtitle}) => (
  <div className='app__laurels_awards-cards'>
    <img src={imgUrl} alt="imgurl_awards" />
    <div className='app__laurels_awards-cards_content'>
      <p className='P__cormorant' style={{color:"#DCCA87"}}>{title}</p>
      <p className='P__cormorant' style={{color:"whitesmoke"}}>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <section className='app__bg app__wrapper  section__padding' id='awards'>
    <div className='app__wrapper_info'>
      <SubHeading title="Awards & Recognition" />
      <h1 className='headtext__cormorant'>Our Laurels</h1>

      <div className='app__laurels_awards'>
        {data.awards.map((item) => (
          <AwardCard {...item} key={item.title} />
        ))}
      </div>
    </div>
    <div className='app__wrapper_img'>
          <img src={images.laurels} alt="laurels" />
    </div>
  </section>
);

export default Laurels;
