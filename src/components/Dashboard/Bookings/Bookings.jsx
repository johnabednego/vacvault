import React, { useEffect } from 'react'

const Bookings = () => {
  useEffect(() => {

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    };

    scrollToTop()

  }, [])
  return (
    <div className=' pr-4 xl:pr-[77px] pt-[69px] h-[1255px] lg:h-[1210px] pb-3 overflow-hidden overflow-y-scroll'>
      <div className=' flex justify-between'>
        <h1 className=' font-bold text-[32px] sm:text-[40px] text-[#51336A]'>Bookings</h1>
        <button type='button' className=' rounded-[10px] flex items-center justify-center text-center shadow-dashboard w-[120px] h-[58px] sm:w-[190px] sm:h-[68px] font-semibold text-[18px] sm text-[16px]:sm:text-[25px] xl:text-[32px] text-[#6348A5]'>Book Now</button>
      </div>

      {/**Types of bookings */}
      <div className=' flex justify-between sm:justify-start sm:gap-[8%] md:gap-[15%] mt-[41px]'>
        <button className=' flex flex-col gap-[5px]'>
          <h1 className=' font-medium text-[16px] sm:text-[25px] xl:text-[32px] text-[#51336A]'>Current bookings</h1>
          <div className=' w-[128px] sm:w-[190px] xl:w-[246px] h-1 bg-gradient-to-r from-transparent to-[#51336A]' />
        </button>

        <button className=' flex flex-col '>
          <h1 className=' font-medium text-[#8B99B1] text-[16px] sm:text-[25px] xl:text-[32px]'>Past bookings</h1>
        </button>
      </div>

      {/**Bookings */}
      <div className=' w-full mt-[30px] flex flex-col gap-[30px]'>
        <div className=' flex justify-between border-l-[11px] py-6 pl-[12px] lg:pl-[30px] pr-[11px] border-l-[#51336A] rounded-[10px] shadow-dashboard'>
          {/**Code and Date */}
          <div className=' flex flex-col gap-[18px] lg:gap-[28px]'>
            <div className='flex gap-2 lg:gap-5 font-medium text-[16px] sm:text-[25px] xl:text-[32px]'>
              <h1 className=' text-[#51336A]'>Code:</h1>
              <h1>3Vacvault08</h1>
            </div>
            <div className='flex gap-2 lg:gap-5 font-medium text-[16px] sm:text-[25px] xl:text-[32px]'>
              <h1 className=' text-[#51336A]'>Date:</h1>
              <h1>Tue 18 Nov</h1>
            </div>
          </div>
          {/**View and Payment */}
          <div className=' flex flex-col gap-6 items-end'>
            <div className=' rounded-[50px] border-[1px] border-[#4FBF26] px-2 py-[5px] bg-[#D6FBC9] flex items-center justify-center text-center font-bold text-[#4FBF26] text-[12px]'>Online Payment</div>
            <button type='button' className=' rounded-tr-[16px] rounded-bl-[16px] shadow-dashboard w-[70px] sm:w-[90px] xl:w-[109px] h-[30px] sm:h-[46px] font-semibold text-[16px] sm:text-[25px] xl:text-[32px] text-[#6348A5]'>View</button>
          </div>
        </div>

        <div className=' flex justify-between border-l-[11px] py-6 pl-[12px] lg:pl-[30px] pr-[11px] border-l-[#51336A] rounded-[10px] shadow-dashboard'>
          {/**Code and Date */}
          <div className=' flex flex-col gap-[18px] lg:gap-[28px]'>
            <div className='flex gap-2 lg:gap-5 font-medium text-[16px] sm:text-[25px] xl:text-[32px]'>
              <h1 className=' text-[#51336A]'>Code:</h1>
              <h1>3Vacvault08</h1>
            </div>
            <div className='flex gap-2 lg:gap-5 font-medium text-[16px] sm:text-[25px] xl:text-[32px]'>
              <h1 className=' text-[#51336A]'>Date:</h1>
              <h1>Tue 18 Nov</h1>
            </div>
          </div>
          {/**View and Payment */}
          <div className=' flex flex-col gap-6 justify-center'>
            {/* <div className=' rounded-[50px] border-[1px] border-[#4FBF26] px-2 py-[5px] bg-[#D6FBC9] flex items-center justify-center text-center font-bold text-[#4FBF26] text-[12px]'>Online Payment</div> */}
            <button type='button' className=' w-[70px] sm:w-[90px] xl:w-[109px] h-[30px] sm:h-[46px] rounded-tr-[16px] rounded-bl-[16px] shadow-dashboard font-semibold text-[16px] sm:text-[25px] xl:text-[32px] text-[#6348A5]'>View</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Bookings
