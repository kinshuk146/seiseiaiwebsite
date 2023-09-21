import React, { Component } from "react";
import Slider from "react-slick";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../App.css'

// export default class VideoCarousel extends Component {
//   render() {
//     const settings = {
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       centerPadding: "60px",
//       slidesToShow: 3,
//       speed: 500
//     };
//     return (
//       <div>
//         <h2>Center Mode</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }



function VideoCarousel() {
  const videoSources = [
    '/assets/gehlot_mute.mp4',
    '/assets/gehlot_mute.mp4',
    '/assets/gehlot_mute.mp4'
  ];
  return (
    <div>
      <AwesomeSlider>
      {videoSources.map((videoSrc, index) => (
        <div key={index} className="video-slide">
          <video controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </AwesomeSlider>
    </div>
  )
}

export default VideoCarousel
