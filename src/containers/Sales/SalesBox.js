import React from 'react'
import './Sales.css'



function SalesBox(props) {
  return (
    <div className={`sales_box ${props.background === "true" ? 'sales_background' : ''}`}>
      <div className='sales_box-left'>
        <h1  className='explore-heading1'>{props.heading1}</h1>
        <h1  className='explore-heading2'>{props.heading2}</h1>
        <button className='explore-button'>Explore</button>
      </div>
      <div className='sales_box-right'>
        <div className='sales_image-container'>
          <img src={props.imglink} />
        </div>
      </div>
    </div>
  )
}

export default SalesBox
