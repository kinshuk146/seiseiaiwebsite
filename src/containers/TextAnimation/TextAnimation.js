import { Row, Col } from 'antd'
import { Typography } from 'antd'
import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TypeAnimation } from 'react-type-animation';
import './TextAnimation.css'


const sentences = [
  'Sentence 1',
  'Sentence 2',
  'Sentence 3', // The middle sentence will be colored
  'Sentence 4',
  'Sentence 5',
];


function TextAnimation() {
  return (
    <div className='textanimation'>
      <Row>
        <Col xs={24} md={10}>
          <Typography.Title>No more worrying about</Typography.Title>
        </Col>
        <Col xs={24} md={2}></Col>
        <Col xs={24} md={12} className='textanimation-holder'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Low retention',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'High video production cost',
                1000,
                'Recording Every Single Campaign',
                1000,
                'Post Production',
                1000,
                'High brand ambassador cost',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em'}}
              repeat={Infinity}
              className='font2'
            />
        </Col>
      </Row>
    </div>
  )
}

export default TextAnimation