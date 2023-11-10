import React from 'react'
import Hero from './Hero'
import FeaturedIn from './FeaturedIn'
import Services from './Services'
import Team from './Team'
import './Home.css'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedIn/>
      <Services/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default Home
