import React from 'react'
import './Demo.css'

function Demo() {
  return (
      <div className='demo'>
        <div className="demo-left" >
            <h1>Ready to Transform Your Creative Journey?</h1>
            <p className='font2'>You've seen what we can offer. Now it's time to make your choice. Don't settle for less when you can have the best.</p>
            <button className='demo-button'>Get a demo</button>
        </div>
        <div className='demo-right' >
            <div className='demo-img'>
            <img src='/assets/images4.png'></img>
            </div>
        </div>
      </div>
  )
}

export default Demo
