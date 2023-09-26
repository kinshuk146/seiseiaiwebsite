import React, { Component } from 'react';
import './VideoCarousel.css'

export default class VideoCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideoIndex: 0
    };

    this.videoRef = React.createRef();
  }

  handleNext = () => {
    const nextIndex = this.state.currentVideoIndex + 1;
    if (nextIndex < this.props.videos.length) {
      this.setState({ currentVideoIndex: nextIndex });
    }
  };

  handlePrevious = () => {
    const prevIndex = this.state.currentVideoIndex - 1;
    if (prevIndex >= 0) {
      this.setState({ currentVideoIndex: prevIndex });
    }
  };


  render() {
    const currentVideo = this.props.videos[this.state.currentVideoIndex];

    if (!currentVideo) return null;

    return (
      <div>
        <h2>{currentVideo.title}</h2>
        <div className='video-container'>
          <video
            ref={this.videoRef}
            width="480"
            height="360"
            controls={false}
            src={currentVideo.url}
            autoPlay={true}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <button onClick={this.handlePrevious} disabled={this.state.currentVideoIndex === 0}>
            Previous
          </button>
          <button onClick={this.handleNext} disabled={this.state.currentVideoIndex === this.props.videos.length - 1}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
