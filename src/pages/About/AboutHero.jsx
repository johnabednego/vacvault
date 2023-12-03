import React from 'react'
import NavWithTitle from '../../components/Nav/NavWithTitle'
import woman from './assets/woman.svg'
import what from './assets/what.svg'

const AboutHero = () => {
  return (
    <div className=' pb-[60px]'>
      <NavWithTitle title="About Us" />
      <div className='w-full  pt-[195px]'>
        {/* <img src={woman} alt="" className='' /> */}
        <div className=' w-full h-[513px] flex items-center  bg-about_woman bg-center bg-cover'>
          <div className=' w-full text-center flex flex-col gap-[27px] px-3'>
            <h1 className=' text-[16px] sm:text-[20px] text-white'>We love what we do and we love helping others succeed at what they love to do.</h1>
            <h1 className=' text-[14px] sm:text-[18px] text-[#FAFAFA]'>Prince Vac, <span className=' text-[#A8CF38]'>CEO</span></h1>
          </div>
        </div>
      </div>
     <div className=' w-full flex items-center justify-center'>
     <img src={what} alt="" className=' mt-[-8%]' />
     </div>
    </div>
  )
}

export default AboutHero
