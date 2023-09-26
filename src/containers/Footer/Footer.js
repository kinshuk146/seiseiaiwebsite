import React from 'react'
import './Footer.css'
import { Typography } from 'antd'
import { Col, Divider, Row } from 'antd';
import { useNavigate } from 'react-router-dom';


function FooterComponent() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='footer'>
                <div className='footer-left'>
                    <h1 className='footer-left-heading' onClick={()=>{navigate('/')}}>SeiSei.ai</h1>
                    <h1 className='footer-left-subheading'>Synthetic Video Saas</h1>
                    <p className='footer-left-paragraph font2'>Realistic and affordable, sounds unreal, we made it real :)</p>
                </div>
                <div className='footer-right '>
                    <h1  className='footer-right-heading'>COMPANY</h1>
                    <Row className='footer-links'>
                        <Col className=' footer-link' onClick={()=>{navigate('/aboutus')}}>About Us</Col>
                        <Col className=' footer-link' onClick={()=>{navigate('/ethics')}}>Ethics Guidlines</Col>
                        <Col className=' footer-link' onClick={()=>{navigate('/careers')}}>Careers</Col>
                        <Col className=' footer-link' onClick={()=>{navigate('/')}}><a href='#usecases'>Use Cases</a></Col>
                        <Col className=' footer-link' onClick={()=>{navigate('/')}}><a href='#pricing'>Pricing</a></Col>
                        <Col className=' footer-link' onClick={()=>{navigate('/contactus')}}>Contact Us</Col>
                    </Row>
                    <h1  className='footer-right-heading lower-heading' >SOCIAL</h1>
                    <Row className='footer-links'>
                        <Col className=' footer-link'><a href='https://www.linkedin.com/company/seisei-ai/'
                        target='_blank'>LinkedIn</a></Col>
                        <Col className=' footer-link'><a href='https://www.youtube.com/playlist?list=PLqKwFgGmv-tN-ldy5zxNceST-_q_8UQF0'
                        target="_blank">YouTube</a></Col>
                        <Col className=' footer-link'>Careers</Col>
                        <Col className=' footer-link'>Instagram</Col>
                        <Col className=' footer-link'>Facebook</Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent
