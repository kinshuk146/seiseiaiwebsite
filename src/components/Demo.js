import React from 'react'
import { Row,Col, Button } from 'antd'
import {Typography} from 'antd'
import '../App.css'

function Demo() {
  return (
    <div className=''>
      <Row className='demo'>
        <Col xs={24} md={16} style={{backgroundColor:'#357E5E',padding:'56px',}}>
            <Typography.Title style={{color:'white',fontSize:'28px',fontWeight:'bold'}} className='font2'>Ready to Transform Your Creative Journey?</Typography.Title>
            <Typography.Paragraph style={{color:'white',fontSize:'22px'}} className='font2'>You've seen what we can offer. Now it's time to make your choice. Don't settle for less when you can have the best.</Typography.Paragraph>
            <Button size='large'>Get a demo</Button>
        </Col>
        <Col xs={0} md={8} style={{backgroundColor:'#C5E2D5',padding:'33px'}}>
            <div className='demo-img'>
            <img src='/assets/images4.png'></img>
            </div>
        </Col>
      </Row>
    </div>
  )
}

export default Demo
