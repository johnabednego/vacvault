import React, { useEffect } from 'react'
import Hero from './Hero'
import FeaturedIn from './FeaturedIn'
import HomeServices from './HomeServices'
import Team from './Team'
import './Home.css'
import Footer from '../../components/Footer/Footer'
import { useDispatch } from 'react-redux'
import { SetNavSwitch } from '../../features/nav/navSwitchSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
   if(window.location.pathname==="/about"){
      dispatch(SetNavSwitch(1))
  }
  else if(window.location.pathname==="/services"){
    dispatch(SetNavSwitch(2))
}
else if(window.location.pathname==="/contact"){
  dispatch(SetNavSwitch(1))
}
else{
  dispatch(SetNavSwitch(0))
}
}, [dispatch])

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
