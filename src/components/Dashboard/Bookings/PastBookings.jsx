import React from 'react'

const PastBookings = ({ setBookedView, setBookingsType }) => {
    const data = [0]
    const handleViewBooking = () =>{
        setBookingsType(1)
        setBookedView(1)
    }
    return (
        data.map((item, index) => (
            <div className=' flex flex-col gap-[30px]'>
                {/**Booking 1 */}
                <div className=' gap-4 xm:gap-0 ml-3 xm:ml-0 flex flex-col-reverse xm:flex-row justify-between  py-6 pl-[12px] lg:pl-[30px] pr-[11px] border-t-[#51336A] border-t-[11px] xm:border-t-0 border-l-0 xm:border-l-[#51336A] xm:border-l-[11px] rounded-[10px] shadow-dashboard'>
                    {/**Code and Date */}
                    <div className=' flex flex-col gap-[14px] text-[18px] md:text-[20px] lg:text-[24px]'>
                        {/**Number of items */}
                        <h1 className=' font-bold text-[#51336A]'>5 items</h1>
                        <div className='flex gap-2'>
                            <h1 className='text-[#51336A] font-bold'>Period:</h1>
                            <h1>1 month</h1>
                        </div>
                        <div className='flex gap-2'>
                            <h1 className='text-[#51336A] font-bold'>Pickup Date:</h1>
                            <h1>24-01-11</h1>
                        </div>
                    </div>
                    {/**View and Payment */}
                    <div className=' flex xm:flex-col gap-6 justify-between xm:justify-normal xm:items-end'>
                        <div className=' whitespace-nowrap h-[30px] rounded-[50px] border-[1px] border-[#4FBF26] px-2 py-[5px] bg-[#D6FBC9] flex items-center justify-center text-center font-bold text-[#4FBF26] text-[12px]'>Online Payment</div>
                        <div className=' flex h-full w-full xm:w-auto justify-end xm:justify-normal items-end'>
                            <button onClick={() => setBookedView(1)} type='button' className=' rounded-tr-[16px] rounded-bl-[16px] shadow-dashboard w-[70px] xs:w-[90px] xl:w-[109px] h-[36px] xs:h-[46px] font-semibold text-[16px] sm:text-[25px] xl:text-[32px] text-[#6348A5]'>View</button>
                        </div>
                    </div>
                </div>

                {/**Booking 1 */}
                <div className=' gap-4 xm:gap-0 ml-3 xm:ml-0 flex flex-col-reverse xm:flex-row justify-between  py-6 pl-[12px] lg:pl-[30px] pr-[11px] border-t-[#51336A] border-t-[11px] xm:border-t-0 border-l-0 xm:border-l-[#51336A] xm:border-l-[11px] rounded-[10px] shadow-dashboard'>
                    {/**Code and Date */}
                    <div className=' flex flex-col gap-[14px] text-[18px] md:text-[20px] lg:text-[24px]'>
                        {/**Number of items */}
                        <h1 className=' font-bold text-[#51336A]'>5 items</h1>
                        <div className='flex gap-2'>
                            <h1 className='text-[#51336A] font-bold'>Period:</h1>
                            <h1>1 month</h1>
                        </div>
                        <div className='flex gap-2'>
                            <h1 className='text-[#51336A] font-bold'>Pickup Date:</h1>
                            <h1>24-01-11</h1>
                        </div>
                    </div>
                    {/**View and Payment */}
                    <div className=' flex xm:flex-col gap-6 justify-between xm:justify-normal xm:items-end'>
                        <div className=' whitespace-nowrap h-[30px] rounded-[50px] border-[1px] border-[#EB0728] px-2 py-[5px] bg-[#FFDFE4] flex items-center justify-center text-center font-bold text-[#EB0728] text-[12px]'>In Person Payment</div>
                        <div className=' flex h-full w-full xm:w-auto justify-end xm:justify-normal items-end'>
                            <button onClick={() => handleViewBooking()} type='button' className=' rounded-tr-[16px] rounded-bl-[16px] shadow-dashboard w-[70px] xs:w-[90px] xl:w-[109px] h-[36px] xs:h-[46px] font-semibold text-[16px] sm:text-[25px] xl:text-[32px] text-[#6348A5]'>View</button>
                        </div>
                    </div>
                </div>
            </div>

        ))
    )
}

export default PastBookings
