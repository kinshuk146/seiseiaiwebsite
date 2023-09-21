import React from 'react'
import '../App.css'
import { Button, Col, Row } from 'antd';
import { Typography } from 'antd'
import VideoCarousel from './VideoCarousel';

function Header() {
    return (
        <div className='header'>
            <Typography.Title level={1} className='header-heading' >Unlock the Future of Content: GenAI's Text-to-Video Platform</Typography.Title>
            <Typography.Paragraph className='header-paragraph' >Convert your text into realistic, personalized videos in minutes. Experience cutting-edge technology that tailors content for your audience.</Typography.Paragraph>
            <Button className='header-button' size='large'>Get our demo!</Button>
            <VideoCarousel/>

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
