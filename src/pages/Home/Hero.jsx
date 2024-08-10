import React from 'react'
import Nav from '../../components/Nav/Nav'
import bags from '../Home/assets/bag.svg'

const Hero = () => {
  return (
    <div className='bg-[#51336A] pb-[60px]'>
      <Nav />
      <div className=' flex flex-col sm:flex-row items-center justify-between px-[8%] pt-[110px] gap-[20px] sm:gap-[40px] md:gap-[80px] lg:gap-[150px] xl:gap-0'>
        <div className=' flex flex-col text-white'>
          <div className='flex flex-wrap gap-2 md:gap-0 md:flex-nowrap md:flex-col'>
            <h1 className='font-sans text-[30px] md:text-[30px] lg:text-[50px] xl:text-[60px]'>Secure Storage</h1>
            <h1 className='font-sans text-[30px] md:text-[30px] lg:text-[50px] xl:text-[60px] lg:mt-[-20px]'>Solutions for Your</h1>
            <h1 className='font-sans text-[30px] md:text-[30px] lg:text-[50px] xl:text-[60px]  lg:mt-[-20px]'>Luggage</h1>
          </div>

          <h1 className=' font-light text-[15px] text-[#FFFDFD] mt-[31px]'>Store your luggage securely with VacVault, the trusted solution for all your storage needs.</h1>
          <button className='hover:opacity-70 bg-[#212121] w-[113.83px] h-[56px] rounded-[6px] mt-[30px] flex text-center items-center justify-center transition-all duration-300'>Book Now</button>
        </div>
        <img src={bags} alt="" className=' w-[250px] md:w-[321.5px] md:h-[321.5px]' />
      </div>
    </div>
  )
}

export default Hero
