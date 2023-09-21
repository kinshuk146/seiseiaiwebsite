import React from 'react'
import '../App.css'
import { Typography } from 'antd'
import { Col, Divider, Row } from 'antd';

import { Input, Space } from 'antd';
const { Search } = Input;

function GetStarted() {
    const onSearch = (value, _e, info) => console.log(info?.source, value);

    return (
        <div className='getstarted'>
            <div className='getstarted-header'>
                <Typography.Title level={4}>Get Started in 3 easy steps</Typography.Title>
                <Search
                    placeholder="Email"
                    allowClear
                    enterButton="Get a demo"
                    size="large"
                    onSearch={onSearch}
                    style={{ maxWidth: '300px' }}
                />
            </div>

            <div className='getstarted-body'>
                <Row>
                    <Col xs={24} md={12} className='getstarted-left'>
                        <div >
                            <div className='font1'>
                                Upload
                            </div>
                            <p className='font2'>Add Your Video and Audio Material</p>
                        </div>
                        <div>
                            <div className='font1'>
                                Input Your Script
                            </div>
                            <p className='font2'>Craft Your Message with Custom Variables</p>
                        </div>
                        <div>
                            <div className='font1'>
                                Generate
                            </div>
                            <p className='font2'>Watch Our AI Craft Your Personalized Videos</p>
                        </div>
                    </Col>
                    <Col xs={0} md={12} className='getstarted-right'>
                        <div className='getstarted-image-holder'>
                            <img src="/assets/images5.png"></img>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default GetStarted
