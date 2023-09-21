import React from 'react'
import { Row, Typography } from 'antd'
import { Col } from 'antd'
import { Button } from 'antd'
import '../App.css'

function SalesBox(props) {
  return (
    <Row className={`sales_box ${props.background === "true" ? 'sales_background' : ''}`}>
      <Col xs={12} md={8} className='sales_box-left'>
        <Typography.Title level={5} className='explore-heading1'>{props.heading1}</Typography.Title>
        <Typography.Title level={3}>{props.heading2}</Typography.Title>
        <Button className='explore-button'>Explore</Button>
      </Col>
      <Col xs={12} md={8} ></Col>
      <Col xs={12} md={8} className='sales_box-right'>
        <div className='sales_image-container'>
        <img src={props.imglink}/>
        </div>
      </Col>
    </Row>
  )
}

export default SalesBox
