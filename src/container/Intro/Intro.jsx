import React, { useRef, useState } from 'react';
import './Intro.css';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';


const Intro = () => {
  const vidRef = useRef();

  const [playVideo, setPlayVideo] = useState(false)
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }

  }

  return (
    <section className='app__video'>
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted={true}
      />
      <div className='app__video-overlay flex__center '>
        <div className='app__video-overlay_circle flex__center '
          onClick={handleVideo}
        >
          {playVideo
            ? <BsFillPlayFill color='#fff' fontSize={30} />
            : <BsPauseFill color='#fff' fontSize={30}/>
          }
        </div>
      </div>

    </section>
  )
};

export default Intro;
