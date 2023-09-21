import { Row,Col } from 'antd'
import {Typography} from 'antd'
import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const sentences = [
  'Sentence 1',
  'Sentence 2',
  'Sentence 3', // The middle sentence will be colored
  'Sentence 4',
  'Sentence 5',
];


function TextAnimation() {
        const [currentIndex, setCurrentIndex] = useState(0);
      
        useEffect(() => {
          // Rotate through the sentences every 3 seconds
          const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
          }, 3000);
      
          return () => clearInterval(interval);
        }, [currentIndex])
  return (
    <div>
        <Row>
            <Col xs={24} md={10}>
                <Typography.Title>No more worrying about</Typography.Title>
            </Col>
            <Col xs={24} md={2}></Col>
            <Col xs={24} md={12}>
            <div>
      <TransitionGroup className="text-container">
        {sentences.map((sentence, index) => (
          <CSSTransition
            key={index}
            classNames="text-item"
            timeout={1000}
            in={index === currentIndex}
          >
            <div
              className={`text-item ${index === 2 ? 'colored' : ''}`}
            >
              {sentence}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
            </Col>
        </Row>
    </div>
  )
}

export default TextAnimation