import React, { useEffect, useState } from 'react'
import CurrentBookings from './CurrentBookings';
import PastBookings from './PastBookings';

const Bookings = ({ setBook, setBookedView, setBookingsType }) => {
  const [switchBookings, setSwitchBookings] = useState(0)
  useEffect(() => {

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    };

    scrollToTop()

  }, [])

  const handleSwitchBookings = (value) =>{
    setBookingsType(value)
    setSwitchBookings(value)
  }
  return (
    <div className=' pr-4 xl:pr-[77px] pt-[69px] h-[1255px] lg:h-[1210px] pb-3 overflow-hidden overflow-y-scroll'>
      <div className=' flex justify-between'>
        <h1 className=' font-bold text-[24px] xm:text-[32px] sm:text-[40px] text-[#51336A]'>Bookings</h1>
        <button onClick={() => setBook(true)} type='button' className=' rounded-[10px] flex items-center justify-center text-center shadow-dashboard w-[110px] h-[48px] xm:w-[120px] xm:h-[58px] sm:w-[190px] sm:h-[68px] font-semibold text-[18px] sm text-[16px]:sm:text-[25px] xl:text-[32px] text-[#6348A5]'>Book Now</button>
      </div>

      {/**Types of bookings */}
      <div className=' flex justify-between sm:justify-start sm:gap-[8%] md:gap-[15%] mt-[41px]'>

        {switchBookings === 0 ?
          <button className=' cursor-not-allowed flex flex-col gap-[5px]'>
            <h1 className=' font-medium text-[16px] sm:text-[25px] xl:text-[32px] text-[#51336A]'>Current bookings</h1>
            <div className=' w-[128px] sm:w-[190px] xl:w-[246px] h-1 bg-gradient-to-r from-transparent to-[#51336A]' />
          </button> :
          <button onClick={() => handleSwitchBookings(0)} className=' flex flex-col '>
            <h1 className=' font-medium text-[#8B99B1] text-[16px] sm:text-[25px] xl:text-[32px]'>Current bookings</h1>
          </button>
        }
        {switchBookings === 1 ?
          <button className=' cursor-not-allowed flex flex-col gap-[5px]'>
            <h1 className=' font-medium text-[16px] sm:text-[25px] xl:text-[32px] text-[#51336A]'>Past bookings</h1>
            <div className=' w-[105px] sm:w-[155px] xl:w-[200px] h-1 bg-gradient-to-r from-transparent to-[#51336A]' />
          </button> :
          <button onClick={() => handleSwitchBookings(1)} className=' flex flex-col '>
            <h1 className=' font-medium text-[#8B99B1] text-[16px] sm:text-[25px] xl:text-[32px]'>Past bookings</h1>
          </button>
        }
      </div>

      {/**Bookings */}
      <div className=' w-full mt-[30px] flex flex-col gap-[30px]'>
        {switchBookings === 0 ?
          <CurrentBookings setBookedView={setBookedView} setBookingsType={setBookingsType} /> :
          <PastBookings setBookedView={setBookedView} setBookingsType={setBookingsType} />
        }
      </div>
    </div>
  )
}

export default Bookings
