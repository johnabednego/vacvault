import React, { useEffect, useState } from 'react'
import CallUs from './CallUs';
import EmailUs from './EmailUs';
import MessageUs from './MessageUs';

const HelpAndSupport = () => {
  const [switchValue, setSwitchValue] = useState('Call')


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
      <h1 className=' font-bold text-[24px] xm:text-[32px] lg:text-[40px] text-black'>Help & Support Center</h1>

      {/**Switch */}
      <div className='w-full flex flex-col gap-6'>
        <div className={` ${switchValue === "Call" ? " pr-5 xf:pr-[50px] sm:pr-[25px] lg:pr-[50px]" : switchValue === "Email" ? " px-5 xf:px-[50px] sm:px-[25px] lg:px-[50px]" : " pl-5 xf:pl-[50px] sm:pl-[25px] lg:pl-[50px]"} mt-[41px] w-full xl:w-[577px] h-[60px] rounded-[80px] flex gap-5 xf:gap-[45px] items-center justify-between bg-white border-solid border-[1px] border-[#C1C1C1] shadow-switch`}>
          {switchValue === 'Call' ?
            <div data-aos="fade-left" data-aos-duration="2000" className=' cursor-not-allowed ml-2 w-[130px] xm:w-[150px] lg:w-[180px] h-[45px] rounded-[30px] flex items-center justify-center text-center bg-[#51336A] font-bold text-[18px] text-white'>Call</div>
            :
            <button onClick={() => setSwitchValue("Call")} className=' font-bold text-[18px]'>Call</button>
          }

          {switchValue === "Email" ?
            <div data-aos="fade-right" data-aos-duration="2000" className=' cursor-not-allowed mr-2 w-[130px] xm:w-[150px] lg:w-[180px] h-[45px] rounded-[30px] flex items-center justify-center text-center bg-[#51336A] font-bold text-[18px] text-white transform transition-all ease-in-out duration-300'>Email</div>
            :
            <button onClick={() => setSwitchValue("Email")} className=' font-bold text-[18px]'>Email</button>
          }

          {switchValue === "Message" ?
            <div data-aos="fade-right" data-aos-duration="2000" className=' cursor-not-allowed mr-2 w-[130px] xm:w-[150px] lg:w-[180px] h-[45px] rounded-[30px] flex items-center justify-center text-center bg-[#51336A] font-bold text-[18px] text-white transform transition-all ease-in-out duration-300'>Message</div>
            :
            <button onClick={() => setSwitchValue("Message")} className=' font-bold text-[18px]'>Message</button>
          }
        </div>
      </div>

      <div className='w-full flex flex-col mt-[30px] mb-5'>
        {switchValue === "Call" ? <CallUs /> : null}
        {switchValue === "Email" ? <EmailUs /> : null}
        {switchValue === "Message" ? <MessageUs /> : null}
      </div>
    </div>
  )
}

export default HelpAndSupport
