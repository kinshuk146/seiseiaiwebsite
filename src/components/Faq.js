import React from 'react'
import { Typography } from 'antd'
import '../App.css'

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
      getItem('For both English and Hindi languages, the maximum length of the script is 5000 characters.', '2'),
    ]),
    getItem('How many videos can be generated?', 'sub4', [
      getItem('With one base video, we allow you generate millions of personalized videos at scale', '3'),
    ]),
    getItem('How can we share the video? Do you have any integrations?', 'sub5', [
      getItem('We possess system integrations that enable us to share the video directly with your customers via email or WhatsApp. If you prefer to share it directly with customers, there are no restrictions on integration needs.', '4'),
    ]),
    getItem('What is the required duration of input video/audio?', 'sub6', [
      getItem('10 minutes of video or audio input is required for optimal output. It can be as low as 2 minutes.', '5'),
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
