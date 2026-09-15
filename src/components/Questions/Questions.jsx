import React from 'react'
import './Questions.css'

const Questions = () => {
  return (
    <div className='questions'>
        <div className='anyquestions'>
           <section>  <h4>Frequently Asked Questions</h4>
            <h2>Any Questions? Find here.</h2>
            <button>Send massege</button></section>
            <img src="/img/person.png" alt="" />

        </div>
        <div className='listinfo'>
        <ul>
            <li>
                <h5>Can Conversix sync my data to my CRM? <span >-</span></h5>
                <p>Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.</p>
                <hr/>
            </li>
            <li> <h5>Can Conversix sync my data to my CRM? <span>+</span></h5></li>
            <hr />
            <li> <h5>Can Conversix sync my data to my CRM? <span>+</span></h5></li>
            <hr />
            <li> <h5>Can Conversix sync my data to my CRM? <span>+</span></h5></li>
        </ul>    
         </div>
    </div>
    
  )
}

export default Questions