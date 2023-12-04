import React from 'react'

const WhQuestion = ({circle, title, message}) => {
  return (
    <div className={` ${title==="What We Do"?"sm:mt-[30px]":""} flex flex-col items-center justify-center w-[400px]`}>
          <img src={circle} alt="" className=' w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[162.5px] lg:h-[162.5px]' />
          <h1 className=' font-medium text-[18px] mt-[20px]'>{title}</h1>
          <h1 className=' font-light text-[16px] mt-[15px]'>{message}</h1>
        </div>
  )
}

export default WhQuestion
