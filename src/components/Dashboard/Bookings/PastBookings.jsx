import React, { useState } from 'react'
import ViewBooking from './ViewBooking';
import commentIcon from '../assets/commentIcon.svg'
import CustomTooltip from '../../CustomTooltip/CustomTooltip';

const PastBookings = () => {
    const [viewBooking, setViewBooking] = useState(false)
    const handleViewBooking = () => {
        setViewBooking(true)
        // Scroll to top when viewBooking is set to true
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling behavior
        });
    }
    return (
        <div>
            {
                viewBooking ?
                    <ViewBooking setViewBooking={setViewBooking} />
                    :
                    <div className='flex flex-col gap-[30px]'>

                        {/**Booking 1 */}
                        <div className=' gap-4 xm:gap-0 ml-3 xm:ml-0 flex flex-col-reverse xm:flex-row justify-between  py-[10px] pl-[12px] lg:pl-[20px] pr-[11px] border-t-black border-t-[11px] xm:border-t-0 border-l-0 xm:border-l-black xm:border-l-[11px] rounded-[10px] shadow-dashboard'>
                            {/**Code and Date */}
                            <div className=' flex flex-col gap-[14px] text-[18px] md:text-[20px] lg:text-[24px]'>
                                {/**Number of items */}
                                <h1 className=' font-bold text-black'>5 items</h1>
                                <div className='flex gap-2'>
                                    <h1 className='text-black font-bold'>Period:</h1>
                                    <h1>1 month</h1>
                                </div>
                                <div className='flex gap-2'>
                                    <h1 className='text-black font-bold'>Pickup Date:</h1>
                                    <h1>24-01-11</h1>
                                </div>
                            </div>
                            {/**View and Payment */}
                            <div className=' flex xm:flex-col gap-6 justify-between xm:justify-normal xm:items-end'>
                                {/**Status and Comment */}
                                <div className='flex items-center gap-[30px]'>
                                    <CustomTooltip text="12. Which of the following is essential components of data science?
a. Data Collection, Data Cleaning, Data Analysis
b. Data Visualization, Data Modeling, Data Deployment
c. Data Storage, Data Retrieval, Data Deletion
d. Data Mining, Data Entry, Data">
                                        <img src={commentIcon} alt="commentIcon" className=' cursor-pointer w-[18.33px] min-w-[18.33px] h-[18.33px] min-h-[18.33px]' />
                                    </CustomTooltip>                                    <div className=' whitespace-nowrap w-[80px] h-[25px] rounded-[50px] border-[1px] border-[#EB0728] px-2 py-[5px] bg-[#FFDFE4] flex items-center justify-center text-center font-bold text-[#EB0728] text-[12px]'>Declined</div>
                                </div>
                                <div className=' flex h-full w-full xm:w-auto justify-end xm:justify-normal items-end'>
                                    <button onClick={() => handleViewBooking()} type='button' className=' rounded-[6px] flex items-center justify-center text-center w-[70px] xs:w-[90px] h-[38px] sm:h-[40px] font-semibold text-[18px] sm:text-[20px] bg-black text-white hover:opacity-70 shadow-dashboard transition-all duration-300'>View</button>
                                </div>
                            </div>
                        </div>

                        {/**Booking 2 */}
                        <div className=' gap-4 xm:gap-0 ml-3 xm:ml-0 flex flex-col-reverse xm:flex-row justify-between  py-[10px] pl-[12px] lg:pl-[20px] pr-[11px] border-t-black border-t-[11px] xm:border-t-0 border-l-0 xm:border-l-black xm:border-l-[11px] rounded-[10px] shadow-dashboard'>
                            {/**Code and Date */}
                            <div className=' flex flex-col gap-[14px] text-[18px] md:text-[20px] lg:text-[24px]'>
                                {/**Number of items */}
                                <h1 className=' font-bold text-black'>5 items</h1>
                                <div className='flex gap-2'>
                                    <h1 className='text-black font-bold'>Period:</h1>
                                    <h1>1 month</h1>
                                </div>
                                <div className='flex gap-2'>
                                    <h1 className='text-black font-bold'>Pickup Date:</h1>
                                    <h1>24-01-11</h1>
                                </div>
                            </div>
                            {/**View and Payment */}
                            <div className=' flex xm:flex-col gap-6 justify-between xm:justify-normal xm:items-end'>
                                {/**Status and Comment */}
                                <div className='flex items-center gap-[30px]'>
                                    <CustomTooltip text="12. Which of the following is essential components of data science?
a. Data Collection, Data Cleaning, Data Analysis
b. Data Visualization, Data Modeling, Data Deployment
c. Data Storage, Data Retrieval, Data Deletion
d. Data Mining, Data Entry, Data">
                                        <img src={commentIcon} alt="commentIcon" className=' cursor-pointer w-[18.33px] min-w-[18.33px] h-[18.33px] min-h-[18.33px]' />
                                    </CustomTooltip>
                                    <div className=' whitespace-nowrap w-[80px] h-[25px] rounded-[50px] border-[1px] border-[#EB0728] px-2 py-[5px] bg-[#FFDFE4] flex items-center justify-center text-center font-bold text-[#EB0728] text-[12px]'>Cancelled</div>
                                </div>
                                <div className=' flex h-full w-full xm:w-auto justify-end xm:justify-normal items-end'>
                                    <button onClick={() => handleViewBooking()} type='button' className=' rounded-[6px] flex items-center justify-center text-center w-[70px] xs:w-[90px] h-[38px] sm:h-[40px] font-semibold text-[18px] sm:text-[20px] bg-black text-white hover:opacity-70 shadow-dashboard transition-all duration-300'>View</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default PastBookings
