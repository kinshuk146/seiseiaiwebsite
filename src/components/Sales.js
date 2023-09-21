import React from 'react'
import SalesBox from './SalesBox'

function Sales() {
  return (
    <div className='sales'>
      <SalesBox background="true" heading1="Unlock growth at every touchpoint" heading2="Boost Engagement and Enhance conversions throughout the sales journey." 
      imglink="/assets/sales1.png"/>
      <SalesBox heading1="Personalize your marketing for each individual" heading2="Supercharge marketing campaigns with hyper-personalized messages" 
      imglink="/assets/sales2.png"/>
      <SalesBox background="true" heading1="Add a Personal Touch to every interaction" heading2="Build stronger stakeholder relations with personalized communication" imglink=""/>
    </div>
  )
}

export default Sales
