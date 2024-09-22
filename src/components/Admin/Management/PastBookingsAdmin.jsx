import React, { useState } from 'react'
import ViewBookingAdmin from './ViewBookingAdmin';
const PastBookingsAdmin = () => {
    // data-aos="fade-left" data-aos-duration="3000"
    const [viewBookingAdmin, setViewBookingAdmin] = useState(null)
    const handleViewBookingAdmin = () => {
        setViewBookingAdmin(1)
        // Scroll to top when viewBookingAdmin is set to true
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling behavior
        });
    }
    return (
        <div>
            {
                viewBookingAdmin ?
                    <ViewBookingAdmin setViewBookingAdmin={setViewBookingAdmin} />
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
                                <div className=' whitespace-nowrap w-[80px] h-[25px] rounded-[50px] border-[1px] border-[#4FBF26] px-2 py-[5px] bg-[#D6FBC9] flex items-center justify-center text-center font-bold text-[#4FBF26] text-[12px]'>Active</div>
                                <div className=' flex h-full w-full xm:w-auto justify-end xm:justify-normal items-end'>
                                    <button onClick={() => handleViewBookingAdmin()} type='button' className=' rounded-[6px] flex items-center justify-center text-center w-[70px] xs:w-[90px] h-[38px] sm:h-[40px] font-semibold text-[18px] sm:text-[20px] bg-black text-white hover:opacity-70 shadow-dashboard transition-all duration-300'>View</button>
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
                                <div className=' whitespace-nowrap w-[80px] h-[25px] rounded-[50px] border-[1px] border-[#707070] px-2 py-[5px] bg-[#E5E5E5] flex items-center justify-center text-center font-bold text-[#707070] text-[12px]'>Pending</div>
                                <div className=' flex h-full w-full xm:w-auto justify-end xm:justify-normal items-end'>
                                    <button onClick={() => handleViewBookingAdmin()} type='button' className=' rounded-[6px] flex items-center justify-center text-center w-[70px] xs:w-[90px] h-[38px] sm:h-[40px] font-semibold text-[18px] sm:text-[20px] bg-black text-white hover:opacity-70 shadow-dashboard transition-all duration-300'>View</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default PastBookingsAdmin
