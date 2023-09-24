import React from 'react'
import './Header.css'
import { Button, Col, Row } from 'antd';
import { Typography } from 'antd'
import VideoCarousel from '../VideoCarousel';

function Header() {

  const videos = [
    {
      title: 'Video 1',
      url: '/assets/neha_mute.mp4',
    },
    {
      title: 'Video 2',
      url: '/assets/gehlot_mute.mp4',
    },
    {
      title: 'Video 3',
      url: '/assets/aqueel_khan_mute.mp4',
    },
    // Add more videos as needed
  ];
  return (
    <div className='header'>
      <div className='header-upper-content'>
        <h1 className='header-heading'  >Unlock the Future of Content: GenAI's Text-to-Video Platform</h1>
        <p className='header-paragraph' >Convert your text into realistic, personalized videos in minutes. Experience cutting-edge technology that tailors content for your audience.</p>
        <Button className='header-button'>Get our demo!</Button>
      </div>
      <VideoCarousel videos={videos} />

      <div className='header-images'>
        <p className='header-image-paragraph '>Trusted by multiple organisations across the globe</p>
        <Row className='header-image-container'>
          <Col xs={24} lg={8}><img src='/assets/images1.png' alt='img' /></Col>
          <Col xs={24} lg={8}><img src='/assets/images2.png' alt='img' /></Col>
          <Col xs={24} lg={8}><img src='/assets/images3.png' alt='img' /></Col>
        </Row>
      </div>
    </div>
  )
}

export default Header
