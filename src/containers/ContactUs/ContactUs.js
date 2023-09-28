import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className='contactus'>
      <h1>Customer Support</h1>
      <br />
      <p>If you need assistance with your STUDIO, have a question about our products or services, want to submit a request, or would like to discuss your account, please contact our customer support team via Email.
        <br/>
        <br/>
        Opening hours: Daily 9am - 7pm (IST)
        <br/>
        Contacting Support: email us at hello@seisei.ai</p>
      <div className='input-container'>
        <input className='customer-input' placeholder='Email'></input>
        <button className='customer-input-button'>Book A Demo</button>
      </div>
    </div>
  )
}

export default ContactUs
