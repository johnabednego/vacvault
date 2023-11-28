import React from 'react'
import NavWithTitle from '../../components/Nav/NavWithTitle'
import woman from './assets/woman.svg'
const AboutHero = () => {
  return (
    <div className=' pb-[60px]'>
       <NavWithTitle title="About Us"/>
       <div className='w-full h-[513px] pt-[195px]'>
        <img src={woman} alt="" />
       </div>
    </div>
  )
}

export default AboutHero
