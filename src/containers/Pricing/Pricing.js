import React, { useState } from 'react'
import { Typography, Card, Button } from 'antd'
import { Col, Row } from 'antd';
import './Pricing.css'
function Pricing() {
    const [time, setTime] = useState(1);
    return (
        <div className='pricing'>
            <h1 className='pricing-heading font1'>
                Choose your right plan!
            </h1>
            <Col xs={24} md={18} lg={16}>
                <p className='font2 pricing-paragraph'>
                Choose the perfect plan to bring your creative vision to life. Whether you're a solo creator or a large enterprise, we've got you covered.</p>
            </Col>

            <Row style={{ backgroundColor: '#F7FCF8' }} className='pricing-plan-holder'>
                <Col xs={16} ><Button>Yearly (save 10%)</Button></Col>
                <Col xs={6}><Button>Quaterly</Button></Col>
            </Row>

            <Row className='price-card-holder'>
                <Col xs={24} md={10}>
                    <Card
                        style={{
                            width: 300,
                            border: '2px solid #357E5E',
                            minHeight: '550px',
                            maxWidth:'380px'
                        }}
                        className='pricecard'
                    >
                        <div>
                            <p className='card-heading font1'>Creator</p>
                            <p className='card-paragraph '>Ideal for individual creators and small teams looking to make a big impact.</p>
                            <p className='card1-stikeout '><s>$249 per avatar</s></p>
                            <p className='card1-actual-price'>$99 per custom avatar</p>
                            <p className='card1-actual-credit-upper'>$0.12 per credit</p>
                            <p className='card1-actual-credit-lower'>1 Credit = 30s / video</p>
                        </div>

                        <div className='price-card-bottom'>
                            <ul className='custom-list'>
                                <li className='li-text'><b>Free for First 20 Consumers</b></li>
                                <li className='li-text'>1 Seats</li>
                                <li className='li-text'>Customized Solutions</li>
                                <li className='li-text'>No Watermark</li>
                                <li className='li-text'>Quick resolutions</li>
                            </ul>
                            <Button className='price-card-button'>Get Started</Button>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} md={10}>
                    <Card
                        style={{
                            width: 300,
                            border: '2px solid #357E5E',
                            backgroundColor: '#F7FCF8',
                            minHeight: '550px'
                        }}
                        className='pricecard'
                    >
                        <div>
                            <p  className='card-heading font1'>Enterprise</p>
                            <p  className='card-paragraph '>Perfectly suited for businesses requiring scalable solutions and customizations.</p>
                            <p  className='card2-lowerheading'>Let's Talk</p>
                            <p  className='card2-lowersubheading' >Customized Plans</p>
                        </div>

                        <div className='price-card-bottom'>
                            <ul className='custom-list'>
                                <li className='li-text'>Customized Solutions</li>
                                <li className='li-text'>Custom Seats</li>
                                <li className='li-text'>Multiple Avatars</li>
                                <li className='li-text'>API Access</li>
                                <li className='li-text'>Dedicated Account Manager</li>
                                <li className='li-text'>12 Months Validity</li>
                                <li className='li-text'>No Watermark</li>
                            </ul>
                            <Button className='price-card-button-2'>Book A Meeting</Button>
                        </div>
                    </Card>
                </Col>
            </Row>


        </div>
    )
}

export default Pricing