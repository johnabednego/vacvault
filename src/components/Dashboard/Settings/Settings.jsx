import React, { useEffect, useState } from 'react'
import Profile from './Profile';
import Account from './Account';

const Settings = () => {
  const [switchValue, setSwitchValue] = useState('Profile')
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
    <div className=' xl:-ml-8 pt-[20px] sm:pt-0 pr-4 xl:pr-[77px] h-full pb-3 overflow-hidden overflow-y-scroll'>

      {switchValue === 'Profile' ?
        <h1 className=' font-bold text-[24px] xm:text-[32px] sm:text-[40px] text-black'>Personal Information</h1>
        :
        <h1 className=' ml-1 font-bold text-[24px] xm:text-[32px] sm:text-[40px] text-black'>Account Information</h1>
      }
      {/**Switch */}
      <div className='w-full flex flex-col gap-6'>
        <div className={` ${switchValue === "Profile" ? "justify-start" : "justify-end"} xf:ml-3 mt-[41px] w-full xf:w-[386px] h-[60px] rounded-[80px] flex gap-5 xf:gap-[45px] items-center bg-white border-solid border-[1px] border-[#C1C1C1] shadow-switch`}>
          {switchValue === 'Profile' ?
            <div data-aos="fade-left" data-aos-duration="2000" className=' cursor-not-allowed ml-2 w-[180px] h-[45px] rounded-[30px] flex items-center justify-center text-center bg-[#51336A] font-bold text-[18px] text-white'>PROFILE</div>
            :
            <button onClick={() => setSwitchValue("Profile")} className=' font-bold text-[18px]'>PROFILE</button>
          }

          {switchValue === "Account" ?
            <div data-aos="fade-right" data-aos-duration="2000" className=' cursor-not-allowed mr-2 w-[180px] h-[45px] rounded-[30px] flex items-center justify-center text-center bg-[#51336A] font-bold text-[18px] text-white transform transition-all ease-in-out duration-300'>ACCOUNT</div>
            :
            <button onClick={() => setSwitchValue("Account")} className=' font-bold text-[18px]'>ACCOUNT</button>
          }
        </div>

        <div className=' sm:ml-3 w-full pb-6 rounded-[30px] pt-[34px] px-3 xs:px-5 xm:px-8 sm:px-10 border-solid border-[1px] border-[#C1C1C1]'>
          {switchValue === 'Profile' ?
            <Profile /> :
            <Account />
          }
        </div>
      </div>
    </div>
  )
}

export default Settings
