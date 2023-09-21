import React from 'react'
import { Layout } from 'antd'
import '../App.css'
import { Typography } from 'antd'
import { Col, Divider, Row } from 'antd';

const { Footer } = Layout

function FooterComponent() {
    return (
        <div>
            <Footer className='footer'>
                <div className='footer-left'>
                    <Typography.Title level={3}className='font2' style={{}}>SeiSei.ai</Typography.Title>
                    <Typography.Title level={4} style={{marginTop:0}} className='font1'>Synthetic Video Saas</Typography.Title>
                    <Typography.Paragraph className='footer-left-paragraph font2'>Realistic and affordable, sounds unreal, we made it real :)</Typography.Paragraph>
                </div>
                <div className='footer-right '>
                    <Typography.Title level={4} className='font1 color1' style={{ color: '#357E5E' }}>COMPANY</Typography.Title>
                    <Row className='footer-links'>
                        <Col className='font1 footer-link'>About Us</Col>
                        <Col className='font1 footer-link'>Ethics Guidlines</Col>
                        <Col className='font1 footer-link'>Careers</Col>
                        <Col className='font1 footer-link'>Use Cases</Col>
                        <Col className='font1 footer-link'>Pricing</Col>
                        <Col className='font1 footer-link'>Contact Us</Col>
                    </Row>
                    <Typography.Title level={4} className='font1 color1' style={{ color: '#357E5E' }} >SOCIAL</Typography.Title>
                    <Row className='footer-links'>
                        <Col className='font1 footer-link'>LinkedIn</Col>
                        <Col className='font1 footer-link'>YouTube</Col>
                        <Col className='font1 footer-link'>Careers</Col>
                        <Col className='font1 footer-link'>Instagram</Col>
                        <Col className='font1 footer-link'>Facebook</Col>
                    </Row>
                </div>
            </Footer>
        </div>
    )
}

export default FooterComponent
