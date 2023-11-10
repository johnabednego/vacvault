import React from 'react'
import Hero from './Hero'
import FeaturedIn from './FeaturedIn'
import Services from './Services'
import Team from './Team'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedIn/>
      <Services/>
      <Team/>
    </div>
  )
}

export default Home
