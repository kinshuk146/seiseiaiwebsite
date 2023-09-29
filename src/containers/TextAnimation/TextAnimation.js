import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TextAnimation.css'

const MySlider = () => {
  const settings = {
    vertical: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 300,
    slidesToShow: 3,
    infinite: true,
    centerMode: true,
  };

  return (
    <div className='textanimation '>
      <div className='header'>
        <h1>
          No more worrying about
        </h1>
      </div>
      <div className="slider ">
        <Slider {...settings}>
          {/* Add your slide content here */}
          <div>
            <h3>Low Retention</h3>
          </div>
          <div>
            <h3>High Video Production Cost</h3>
          </div>
          <div>
            <h3>Recording Every Single Campaign </h3>
          </div>
          <div>
            <h3>Post Production</h3>
          </div>
          <div>
            <h3>High Brand Ambassador Cost</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MySlider;
