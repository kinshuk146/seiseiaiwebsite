import React from 'react'
import '../App.css'
import { Button, Col, Row } from 'antd';
import { Typography } from 'antd'
import VideoCarousel from './VideoCarousel';

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
            <Typography.Title  className='header-heading font1' style={{fontSize:'45px'}} >Unlock the Future of Content: GenAI's Text-to-Video Platform</Typography.Title>
            <Typography.Paragraph className='header-paragraph' style={{fontSize:'22px'}} >Convert your text into realistic, personalized videos in minutes. Experience cutting-edge technology that tailors content for your audience.</Typography.Paragraph>
            <Button className='header-button'>Get our demo!</Button>
            <VideoCarousel videos={videos}/>

            <div className='header-images'>
                <Typography.Paragraph className='header-image-paragraph font2'>Trusted by multiple organisations across the globe</Typography.Paragraph>
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
