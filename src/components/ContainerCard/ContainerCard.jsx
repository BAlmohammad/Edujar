import React from 'react'
import './ContainerCard.css'
import Card from '../Card/Card'
const ContainerCard = () => {
  return (
    <>
    <div className='containercard'>
        <Card 
        image='/img/p1.png'
        title = '25x Lesson'
        type = "Design"
        infocourse = 'Supervised Machine Learning: Regression and Classification'
        moreinfo = 'For athletes, high altitude produces two contradi effects on performance.'
        image2 = '/img/l1.png'
        />
           <Card 
        image='/img/p2.png'
        title = '25x Lesson'
        type = "Design"
        infocourse = 'Programming for Everybody (Getting Started with Python)'
        moreinfo = 'For athletes, high altitude produces two contradi effects on performance.'
        image2 = '/img/l2.png'
        />
           <Card 
        image='/img/p3.png'
        title = '25x Lesson'
        type = "Design"
        infocourse = 'Leading Teams: Developing as a Leader'
        moreinfo = 'For athletes, high altitude produces two contradi effects on performance.'
        image2 = '/img/l3.png'
        />
           <Card 
        image='/img/p4.png'
        title = '25x Lesson'
        type = "Design"
        infocourse = 'Powerful mental tools to help you master tough subjects'
        moreinfo = 'For athletes, high altitude produces two contradi effects on performance.'
        image2 = '/img/l4.png'
        />
           <Card 
        image='/img/p5.png'
        title = '25x Lesson'
        type = "Design"
        infocourse = 'Programming for Everybody (Getting Started with Python)'
        moreinfo = 'For athletes, high altitude produces two contradi effects on performance.'
        image2 = '/img/l5.png'
        />
           <Card 
        image='/img/p6.png'
        title = '25x Lesson'
        type = "Design"
        infocourse = 'Leading Teams: Developing as a Leader'
        moreinfo = 'For athletes, high altitude produces two contradi effects on performance.'
        image2 = '/img/l6.png'
        />

    </div>
    <div className='explorbtn'>
    <button>Explore Courses</button>
</div>
    </>

  )
}

export default ContainerCard