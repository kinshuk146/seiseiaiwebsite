import React from 'react'
import SalesBox from './SalesBox'
import './Sales.css'
import { useNavigate } from "react-router-dom";


const text1 = (
  <div>
    <span>Boost Engagement</span> and <span>Enhance conversions</span> throughout the sales journey.
  </div>
);

const text2 = (
  <div>
    <span>Supercharge marketing campaigns</span> with hyper-personalized messages
  </div>
);

const text3 = (
  <div>
    <span>Stronger stakeholder relations</span> with personalized communication
  </div>
);



function Sales() {
  const navigate = useNavigate();
  return (
    <div className='sales' id="usecases">
      <SalesBox background="true" heading1="Unlock growth at every touchpoint" heading2={text1}
        onClick={() => { navigate('/usecase/stakeholder') }} imglink="/assets/sales1.png" />
      <SalesBox heading1="Personalize your marketing for each individual" heading2={text2}
        onClick={() => { navigate('/usecase/marketing') }} imglink="/assets/sales2.png" />
      <SalesBox background="true" heading1="Add a Personal Touch to every interaction" heading2={text3}
        onClick={() => { navigate('/usecase/d2c') }} imglink="/assets/sales1.png" />
    </div>
  )
}

export default Sales
