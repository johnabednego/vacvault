import React from 'react'
import ug from './assets/ug.svg'
import knust from './assets/knust.svg'
import upsa from './assets/upsa.svg'
import ucc from './assets/ucc.svg'
import rate from './assets/rate.svg'


const FeaturedIn = () => {
    return (
        <div className=' px-[8%] pt-[60px] xl:pt-[119px] pb-[100px]'>
            <div className=' w-full flex flex-col xl:flex-row items-center xl:gap-[88px]'>
                <h1 className=' flex text-[28px] font-semibold text-black whitespace-nowrap'>Featured In</h1>
                <div className=' flex w-full mt-4 xl:mt-0 flex-wrap justify-center md:justify-between gap-6'>
                    <img src={ug} alt="" />
                    <img src={knust} alt="" />
                    <img src={upsa} alt="" />
                    <img src={ucc} alt="" />
                </div>
            </div>
            <div className=' pt-[121px] flex justify-between items-center'>
                <div className='flex flex-col md:flex-row w-full justify-center items-center text-center md:text-left md:items-start md:justify-between gap-12 lg:gap-14'>

                    <div className=' flex flex-col xm:flex-row gap-12 lg:gap-14'>
                        <div className='flex flex-col items-center xm:items-baseline'>
                            <h1 className=' text-[45px]'>4.8</h1>
                            <img src={rate} alt="" className=' w-[105px] h-[20px]' />
                            <h1 className=' text-[15px] font-bold mt-[15px] whitespace-nowrap '>2,394 Ratings</h1>
                            <h1 className=' text-[20px] font-bold mt-[15px] whitespace-nowrap '>Google Reviews</h1>
                        </div>

                        <div className='flex flex-col items-center xm:items-baseline'>
                            <h1 className=' text-[45px]'>A+</h1>
                            <img src={rate} alt="" className=' w-[105px] h-[20px]' />
                            <h1 className=' text-[15px] font-bold mt-[15px] whitespace-nowrap '>1,125 Reviews</h1>
                            <h1 className=' text-[20px] font-bold mt-[15px] whitespace-nowrap '>BBB Rating</h1>
                        </div>
                    </div>

                    <div className='flex flex-col md:w-[526px]'>
                        <h1 className=' text-[24px] xl:text-[30px]'>Trusted by numerous Travelers, tourists</h1>
                        <h1 className=' text-[#5E45CE] text-[18px] font-medium mt-[16px] xl:mt-[29px]'>Abednego John</h1>
                        <h1 className=' font-light text-[#4D4D4D] text-[15px] mt-[14px] xl:mt-[20px]'>
                            I was thoroughly impressed with the secure storage options and excellent
                            service provided by this company for storing my luggage during my travels.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedIn
