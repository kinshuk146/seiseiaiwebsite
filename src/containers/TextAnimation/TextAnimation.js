import { Row, Col } from 'antd'
import { Typography } from 'antd'
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './TextAnimation.css'





function TextAnimation() {
  return (
    <div className='textanimation'>
      <Row>
        <Col xs={24} md={10}>
          <Typography.Title>No more worrying about</Typography.Title>
        </Col>
        <Col xs={24} md={2}></Col>
        <Col xs={24} md={12} className='textanimation-holder'>
        <div class="container">
        <div class="content">
          <div class="content__container">
            <ul class="content__container__list">
              <li class="content__container__list__item">Low retention</li>
              <li class="content__container__list__item">High video production cost</li>
              <li class="content__container__list__item">Recording Every Single Campaign</li>
              <li class="content__container__list__item">Post Production</li>
              <li class="content__container__list__item">High Ambassador cost</li>
            </ul>
          </div>
        </div>
      </div>
        </Col>
      </Row>
    </div>
  )
}

export default TextAnimation