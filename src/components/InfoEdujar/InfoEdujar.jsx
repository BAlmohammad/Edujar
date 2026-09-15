import React from 'react'
import './InfoEdujar.css'

const InfoEdujar = (props) => {
  return (
    <div className='InfoEdujar'>
        
        <section className='desc'><img src={props.truststar} style={{display:(props.show)?'block' : 'none'}} alt="" />
        <h3>{props.followers}</h3>
        </section>
        <section className='rate'>
        <p>{props.title}</p>
        
            {props.ratestar &&(
            <div className='ratestar'>
                <p>4.9</p>
                <img src={props.ratestar}  alt="" />
                
            </div>
        
    )}
        </section>
    
    
    </div>
  )
}

export default InfoEdujar