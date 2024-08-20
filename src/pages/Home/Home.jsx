import React from 'react'
import Hero from './Hero'
import FeaturedIn from './FeaturedIn'
import HomeServices from './HomeServices'
import Team from './Team'
import './Home.css'
import Footer from '../../components/Footer/Footer'

const Home = ({book, setBook}) => {
  return (
    <div>
      <Hero book={book} setBook={setBook}/>
      <FeaturedIn/>
      <HomeServices/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default Home
