import React from 'react'
import tsikata from './assets/tsikata.svg'
import girl from './assets/girl.svg'
import storagePrice from './assets/storagePrice.svg'

const Services = () => {
    return (
        <div className=' bg-[#51336A] pt-[90px] pb-[155px]'>
            <div className=' px-[6%] xl:px-[8%] w-full flex flex-col justify-center md:flex-row  md:justify-between items-center md:items-start'>
                <h1 className=' text-[30px] xm:text-[45px] text-white'>Our services</h1>
                <button className=' mt-3 md:mt-0 bg-black w-[155.83px] h-[56px] rounded-[6px] text-white text-[14px]'>View All Services</button>
            </div>
            <div className=' hidden sm:flex w-full pt-11'>
                <img className='w-[25%]' src={tsikata} alt="" />
                <img className='w-1/2' src={storagePrice} alt="" />
                <img className='w-[25%]' src={girl} alt="" />
            </div>

            <div className='flex flex-col sm:hidden w-full pt-11'>
                <img className='w-full' src={storagePrice} alt="" />
                <div className='flex w-full justify-center mt-6'>
                    <img className='w-[25%]' src={tsikata} alt="" />
                    <img className='w-[25%]' src={girl} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Services
