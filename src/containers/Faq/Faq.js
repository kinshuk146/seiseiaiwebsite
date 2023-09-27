import React from 'react'
import { Typography } from 'antd'
import './Faq.css'


function Faq() {
  return (
    <div className='faq'>
      <h1>FAQs</h1>
      <div className='faq-section'>
        <details class="accordion-item" >
          <summary class="accordion-header">How can I start using my avatar?</summary>
          <div class="accordion-content">
            Post audio video recordings are uploaded, start in less than 1 week
          </div>
        </details>

        <details class="accordion-item">
          <summary class="accordion-header">How long can my video script be?</summary>
          <div class="accordion-content">
            For both English and Hindi languages, the maximum length of the script is 5000 characters.
          </div>
        </details>

        <details class="accordion-item">
          <summary class="accordion-header">How many videos can be generated?</summary>
          <div class="accordion-content">
            With one base video, we allow you generate millions of personalized videos at scale
          </div>
        </details>

        <details class="accordion-item">
          <summary class="accordion-header">How can we share the video? Do you have any integrations?</summary>
          <div class="accordion-content">
            We possess system integrations that enable us to share the video directly with your customers via email or WhatsApp. If you prefer to share it directly with customers, there are no restrictions on integration needs.
          </div>
        </details>

        <details class="accordion-item">
          <summary class="accordion-header">What is the required duration of input video/audio?</summary>
          <div class="accordion-content">
            10 minutes of video or audio input is required for optimal output. It can be as low as 2 minutes.</div>
        </details>
      </div>
    </div>
  )
}

export default Faq
