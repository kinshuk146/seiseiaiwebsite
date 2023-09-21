import React from 'react'
import { Typography } from 'antd'
import { useState } from 'react';
import '../App.css'

import {
    AppstoreOutlined,
    SettingOutlined,
  } from '@ant-design/icons';
  import { Divider, Menu, Switch } from 'antd';
  function getItem(label, key, children) {
    return {
      key,
      children,
      label,
    };
  }
  const items = [
    getItem('How can I start using my avatar?', 'sub2', [
      getItem('Post audio video recordings are uploaded, start in less than 1 week', '0'),
    ]),
    getItem('How long can my video script be?', 'sub3', [
      getItem('', '2'),
    ]),
    getItem('How many videos can be generated?', 'sub4', [
      getItem('Post audio video recordings are uploaded, start in less than 1 week', '3'),
    ]),
    getItem('How can we share the video? Do you have any integrations?', 'sub5', [
      getItem('Post audio video recordings are uploaded, start in less than 1 week', '4'),
    ]),
    getItem('What is the required duration of input video/audio?', 'sub6', [
      getItem('Post audio video recordings are uploaded, start in less than 1 week', '5'),
    ]),
  ];

function Faq() {
  return (
    <div className='faq'>
      <Typography.Title level={1} className='font1'>FAQs</Typography.Title>
      <Divider type="vertical" />
      <br />
      <br />
      <Menu
        style={{ width: 1200,backgroundColor:'#F7FCF8',textAlign:'left',fontWeight:'bold' }}
        mode="inline"
        theme="light"
        items={items}
      />
    </div>
  )
}

export default Faq
