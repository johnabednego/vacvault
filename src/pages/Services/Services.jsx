import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SetNavSwitch } from '../../features/nav/navSwitchSlice'
import ServiceHero from './ServiceHero'
import ServicesInfo from './ServicesInfo'

const Services = () => {
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
      <ServiceHero/>
      <ServicesInfo/>
    </div>
  )
}

export default Services
