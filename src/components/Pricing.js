import React from 'react'
import { Typography, Card, Button } from 'antd'
import { Col, Divider, Row } from 'antd';
import '../App.css'
function Pricing() {
    return (
        <div className='pricing'>
            <Typography.Title level={2} className='font1'>
                Choose your right plan!
            </Typography.Title>
            <Col xs={24} md={18} lg={16}>
                <Typography.Paragraph className='font2 pricing-paragraph' style={{ fontSize: '20px' }}
                >Choose the perfect plan to bring your creative vision to life. Whether you're a solo creator or a large enterprise, we've got you covered.</Typography.Paragraph>
            </Col>

            <Row style={{backgroundColor:'#F7FCF8'}}>
                <Col xs={18}><Button>Yearly (save 10%)</Button></Col>
                <Col xs={6}><Button>Quaterly</Button></Col>
            </Row>

            <Row className='price-card-holder'>
                <Col xs={24} md={10}><Card
                    style={{
                        width: 300,
                        border: '2px solid #357E5E',
                    }}
                >
                    <div>
                        <Typography.Paragraph level={5} style={{ marginBottom: 0 }}>Creator</Typography.Paragraph>
                        <Typography.Paragraph level={5}>Ideal for individual creators and small teams looking to make a big impact.</Typography.Paragraph>
                        <Typography.Paragraph level={4}>$249 per avatar</Typography.Paragraph>
                        <Typography.Paragraph level={4}>$99 per custom avatar</Typography.Paragraph>
                        <Typography.Paragraph level={5}>$0.12 per credit</Typography.Paragraph>
                        <Typography.Paragraph level={5}>1 Credit = 30s / video</Typography.Paragraph>
                    </div>

                    <div className='price-card-bottom'> 
                    <ul className='custom-list'>
                        <li className='li-text'>Free for First 20 Consumers</li>
                        <li className='li-text'>1 Seats</li>
                        <li className='li-text'>Customized Solutions</li>
                        <li className='li-text'>No Watermark</li>
                        <li className='li-text'>Quick resolutions</li>
                    </ul>
                    <Button className='price-card-button' size='large'>Get Started</Button>
                    </div>
                </Card>
                </Col>
                <Col xs={24} md={4}></Col>
                <Col xs={24} md={10}><Card
                    style={{
                        width: 300,
                        border: '2px solid #357E5E',
                        backgroundColor:'#F7FCF8'
                    }}
                >
                    <div>
                        <Typography.Paragraph level={5} style={{ marginBottom: 0 }}>Creator</Typography.Paragraph>
                        <Typography.Paragraph level={5}>Ideal for individual creators and small teams looking to make a big impact.</Typography.Paragraph>
                        <Typography.Paragraph level={4}>$249 per avatar</Typography.Paragraph>
                        <Typography.Paragraph level={4}>$99 per custom avatar</Typography.Paragraph>
                        <Typography.Paragraph level={5}>$0.12 per credit</Typography.Paragraph>
                        <Typography.Paragraph level={5}>1 Credit = 30s / video</Typography.Paragraph>
                    </div>

                    <div className='price-card-bottom'> 
                    <ul className='custom-list'>
                        <li className='li-text'>Free for First 20 Consumers</li>
                        <li className='li-text'>1 Seats</li>
                        <li className='li-text'>Customized Solutions</li>
                        <li className='li-text'>No Watermark</li>
                        <li className='li-text'>Quick resolutions</li>
                    </ul>
                    <Button className='price-card-button-2' size='large'>Book A Meeting</Button>
                    </div>
                </Card>
                </Col></Row>

        </div>
    )
}

export default Pricing
