import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const VideoCarousel = ({ videos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
  };

  return (
    <div className="video-carousel">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="video-slide">
            <iframe
              src={video.url}
              title={video.title}
              frameBorder="0"
              allowFullScreen
              controls={0}
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;