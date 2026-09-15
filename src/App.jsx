import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Trustpilot from './components/Trustpilot/Trustpilot'
import Categories from './components/Categories/Categories'
import CategoriesTitle from './components/CategoriesTitle/CategoriesTitle'
import Popular from './components/Popular/Popular'
import ContainerCard from './components/ContainerCard/ContainerCard'
import Questions from './components/Questions/Questions'
import OurClients from './components/OurClients/OurClients'
import SlideCourses from './components/SlideCourses/SlideCourses'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
    <NavBar />
    <Hero/>
    <Trustpilot />
    <CategoriesTitle/>
    <Categories />
    <Popular />
   <ContainerCard />
   <Questions />
   <OurClients />
   <SlideCourses />
   <Footer  edu="Edu" jar="jar" 
 title="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat..."
 copy="© 2024 edujar - All Rights Reserved"
 
 quick1={[{title:"Quick Links" , content:"Home"},{content:"Courses"},{content:"About us"},{content:"Works"},{content:"Blog"}]}
 quick2={[{title:"Legal" , content:"Terms of use"},{content:"Terms & conditions"},{content:"Privacy policy"},{content:"Works"},{content:"Cookie policy"}]}
 
 ti="Quick Links"
 enter="Enter Email"
 subs="Subscribe"
 />
    </> 
  )
}

export default App