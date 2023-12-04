import React, { useEffect } from 'react'
import AboutHero from './AboutHero'
import { useDispatch } from 'react-redux'
import { SetNavSwitch } from '../../features/nav/navSwitchSlice'
import FoudationInfo from './FoudationInfo'

const About = () => {

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
      <AboutHero/>
      <FoudationInfo/>
    </div>
  )
}

export default About
