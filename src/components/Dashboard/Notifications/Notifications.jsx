import React, { useEffect, useState } from 'react'
import ViewNotification from './ViewNotification';

const Notifications = () => {
  const [viewNotification, setViewNotification] = useState(null)

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
    <div className=' pt-[20px] sm:pt-0 pr-4 xl:pr-[77px] h-full pb-3 overflow-hidden overflow-y-scroll'>
      <h1 className=' font-bold text-[24px] xm:text-[32px] sm:text-[40px] text-black'>Notifications (5)</h1>

      {
        viewNotification ? <ViewNotification setViewNotification={setViewNotification} /> :
          <div className='w-full flex flex-col mt-[47px]'>
            <div className=' w-full border-solid border-[1px] border-black' />
            {/**Notice */}
            <div className='w-full flex justify-between py-[20px] border-solid border-b-[1px] border-b-black'>
              <h1 className=' font-bold text-[24px]'>Booking Successful</h1>
              <button onClick={() => setViewNotification(1)} type='button' className=' rounded-[10px] flex items-center justify-center text-center px-[23px] h-[40px] font-semibold text-[18px] sm:text-[20px] bg-black text-white hover:opacity-70 shadow-dashboard transition-all duration-300'>View</button>
            </div>
          </div>
      }
    </div>
  )
}

export default Notifications
