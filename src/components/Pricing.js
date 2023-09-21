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

            <Row style={{backgroundColor:'#F7FCF8'}} className='pricing-plan-holder'>
                <Col xs={16} ><Button>Yearly (save 10%)</Button></Col>
                <Col xs={6}><Button>Quaterly</Button></Col>
            </Row>

            <Row className='price-card-holder'>
                <Col xs={24} md={10}>
                    <Card
                    style={{
                        width: 300,
                        border: '2px solid #357E5E',
                        minHeight:'550px'
                    }}
                >
                    <div>
                        <Typography.Paragraph level={5} style={{ marginBottom: 0,fontSize:'20px' }} className='font1'>Creator</Typography.Paragraph>
                        <Typography.Paragraph level={5} style={{ fontSize:'16px' }} className='font2'>Ideal for individual creators and small teams looking to make a big impact.</Typography.Paragraph>
                        <Typography.Paragraph level={4} className='color1' style={{ marginBottom: 0}}><s>$249 per avatar</s></Typography.Paragraph>
                        <Typography.Paragraph level={4} className='color1 font2' style={{fontSize:'20px'}}>$99 per custom avatar</Typography.Paragraph>
                        <Typography.Paragraph level={5} style={{ marginBottom: 0,fontWeight:700}}>$0.12 per credit</Typography.Paragraph>
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
                <Col xs={24} md={10}>
                    <Card
                    style={{
                        width: 300,
                        border: '2px solid #357E5E',
                        backgroundColor:'#F7FCF8',
                        minHeight:'550px'
                    }}
                >
                     <div>
                        <Typography.Paragraph level={5} style={{ marginBottom: 0,fontSize:'20px' }} className='font1'>Enterprise</Typography.Paragraph>
                        <Typography.Paragraph level={5} style={{ fontSize:'16px' }} className='font2'>Perfectly suited for businesses requiring scalable solutions and customizations.</Typography.Paragraph>
                        <Typography.Paragraph level={4} className='color1 font2' style={{fontSize:'20px'}}>Customized Plans</Typography.Paragraph>
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
                    <Button className='price-card-button-2' size='large'>Book A Meeting</Button>
                    </div>
                </Card>
                </Col></Row>
                

        </div>
    )
}

export default Pricing
