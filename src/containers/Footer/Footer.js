import React from 'react'
import './Footer.css'
import { Typography } from 'antd'
import { Col, Divider, Row } from 'antd';


function FooterComponent() {
    return (
        <div>
            <div className='footer'>
                <div className='footer-left'>
                    <h1 className='footer-left-heading'><a href='/'>SeiSei.ai</a></h1>
                    <h1 className='footer-left-subheading'>Synthetic Video Saas</h1>
                    <p className='footer-left-paragraph font2'>Realistic and affordable, sounds unreal, we made it real :)</p>
                </div>
                <div className='footer-right '>
                    <h1  className='footer-right-heading'>COMPANY</h1>
                    <Row className='footer-links'>
                        <Col className=' footer-link'><a href='aboutus'>About Us</a></Col>
                        <Col className=' footer-link'><a href='ethics'>Ethics Guidlines</a></Col>
                        <Col className=' footer-link'><a href='careers'>Careers</a></Col>
                        <Col className=' footer-link'>Use Cases</Col>
                        <Col className=' footer-link'>Pricing</Col>
                        <Col className=' footer-link'><a href='contactus'>Contact Us</a></Col>
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
