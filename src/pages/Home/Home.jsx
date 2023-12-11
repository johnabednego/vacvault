import React, { useEffect } from 'react'
import Hero from './Hero'
import FeaturedIn from './FeaturedIn'
import HomeServices from './HomeServices'
import Team from './Team'
import './Home.css'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  useEffect(()=>{

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    };

    scrollToTop()
    
}, [])

  return (
    <div>
      <Hero/>
      <FeaturedIn/>
      <HomeServices/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default Home
