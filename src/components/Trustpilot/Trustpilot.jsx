import React from 'react'
import './Trustpilot.css'
import InfoEdujar from '../InfoEdujar/InfoEdujar'

const Trustpilot = (props) => {

    const imglink = './img/Group.png'
  return (
    <div className='trustpilot'>
        <InfoEdujar followers ="60K+"
        title = "Live Courses"
        />
         <InfoEdujar followers ="60K+"
        title = "Category"
        />
         <InfoEdujar followers ="Trustpilot"
        truststar ={imglink}
        title = "View our 1,602 reviews"
        show = {true} 
        ratestar = '/img/Star.svg'
        />
         <InfoEdujar followers ="25K+"
        title = "Professionals"
        />
         <InfoEdujar followers ="125K+"
        title = "Students"
        />

    </div>
  )
}

export default Trustpilot