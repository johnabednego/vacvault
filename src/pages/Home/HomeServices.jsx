import React from 'react'
import tsikata from './assets/tsikata.svg'
import girl from './assets/girl.svg'
import storagePrice from './assets/storagePrice.svg'
import dot from './assets/dot.svg'

const HomeServices = () => {
    return (
        <div className=' bg-[#51336A] pt-[90px] pb-[155px]'>
            <div className=' px-[6%] xl:px-[8%] w-full flex flex-col justify-center md:flex-row  md:justify-between items-center md:items-start'>
                <h1 className=' text-[24px] sm:text-[30px] xm:text-[45px] text-white'>Our services</h1>
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
                    <img className=' w-1/2 sm:w-[25%]' src={tsikata} alt="" />
                    <img className=' w-1/2 sm:w-[25%]' src={girl} alt="" />
                </div>
            </div>

            <div className='px-[6%] xl:px-[8%] w-full flex flex-col pt-[83.33px]'>
                <div className='flex w-full whitespace-nowrap justify-center items-center'>
                    <div className=' border-t-white border-t-[1px] w-full' />
                    <div className=' px-[10px]'>
                        <h1 className=' font-light text-[12px] sm:text-[15px] text-white'>Features & Benefits</h1>
                    </div>
                    <div className=' border-t-white border-t-[1px] w-full' />
                </div>

                <div className=' flex flex-col md:flex-row pt-[62.17px] pl-[10px] text-white items-center  md:items-start justify-between'>
                    <div className=' flex flex-col w-full md:w-[347px]'>
                        <h1 className=' text-[24px] sm:text-[30px]'>Features</h1>
                        <div className=' text-[12px] sm:text-[15px] flex flex-col pt-[20px] gap-[10px]'>
                            <div className=' w-full  items-center  flex gap-[10px]'>
                                <img src={dot} alt="" />
                                <h1 className='  font-light'>Secure storage facilities for luggage</h1>
                            </div>

                            <div className=' w-full  items-center  flex gap-[10px]'>
                                <img src={dot} alt="" />
                                <h1 className=' font-light'>Convenient and easy drop-off and pick-up options</h1>
                            </div>

                            <div className=' w-full  items-center  flex gap-[10px]'>
                                <img src={dot} alt="" />
                                <h1 className=' font-light'>24/7 surveillance and monitoring of stored luggage</h1>
                            </div>

                            <div className=' w-full  items-center  flex gap-[10px]'>
                                <img src={dot} alt="" />
                                <h1 className=' font-light'>Flexible storage durations to suit your travel needs</h1>
                            </div>

                            <div className=' w-full  items-center  flex gap-[10px]'>
                                <img src={dot} alt="" />
                                <h1 className=' font-light'>Assistance with handling and transporting luggage to and from storage</h1>
                            </div>
                        </div>
                    </div>

                    <div className=' pt-10 md:pt-0 flex flex-col w-full md:w-[347px]'>
                        <h1 className=' text-[24px] sm:text-[30px]'>Benefits</h1>
                        <div className=' text-[12px] sm:text-[15px] flex flex-col pt-[20px] gap-[10px]'>
                            <div className=' w-full  items-center  flex gap-[10px]'>
                                <img src={dot} alt="" />
                                <h1 className=' font-light'>Convenient and secure storage solutions for your luggage</h1>
                            </div>

                            <div className=' w-full  items-center  flex gap-[10px]'>
                                <img src={dot} alt="" />
                                <h1 className=' font-light'>Hassle-free experience with easy drop-off and pick-up options</h1>
                            </div>

                            <div className=' w-full  items-center  flex gap-[10px]'>
                                <img src={dot} alt="" />
                                <h1 className=' font-light'>Peace of mind knowing that your belongings are stored in a safe and monitored environment</h1>
                            </div>

                            <div className=' w-full  items-center  flex gap-[10px]'>
                                <img src={dot} alt="" />
                                <h1 className=' font-light'>Flexibility to store your luggage for short or long periods of time</h1>
                            </div>

                            <div className=' w-full  items-center  flex gap-[10px]'>
                                <img src={dot} alt="" />
                                <h1 className=' font-light'>Professional and friendly staff ready to assist you with any storage needs</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeServices
