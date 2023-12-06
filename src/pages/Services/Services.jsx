import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SetNavSwitch } from '../../features/nav/navSwitchSlice'
import ServiceHero from './ServiceHero'
import ServicesInfo from './ServicesInfo'
import StorageExplained from './StorageExplained'
import Footer from '../../components/Footer/Footer'

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
    dispatch(SetNavSwitch(3))
  }
  else{
    dispatch(SetNavSwitch(0))
  }
  }, [dispatch])

  return (
    <div>
      <ServiceHero/>
      <ServicesInfo/>
      <StorageExplained/>
      <Footer/>
    </div>
  )
}

export default Services
