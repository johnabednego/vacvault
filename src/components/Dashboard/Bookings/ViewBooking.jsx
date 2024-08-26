import React from 'react'
import backIcon from '../assets/backIcon.svg'

const ViewBooking = ({ setViewBooking }) => {
  return (
    <div data-aos="fade-right" data-aos-duration="3000" className=' w-full flex flex-col gap-[20px]  py-[20px] px-[30px] bg-white rounded-br-[30px] rounded-tl-[30px]'>
      <img onClick={() => setViewBooking(null)} src={backIcon} alt="backIcon" className='cursor-pointer w-[36.06px] h-[36.06px] transform transition-all ease-in-out duration-300 hover:opacity-70' />
      <div className=' w-full flex flex-col gap-[30px]'>
        {/** Items*/}
        <div className='w-full flex flex-col'>
          <div className=' w-full flex items-center justify-between'>
            <h1 className=' w-full font-bold text-[18px] md:text-[20px] lg:text-[24px] text-black'>Items</h1>
            <h1 className='font-bold text-[32px]'>₵50</h1>
          </div>
          <div className=' flex flex-wrap gap-[10px]'>

            <div className=" items-center w-fit gap-[30px] mt-4 bg-gray-200 flex relative  rounded-full px-3 py-1">
              <span>Fridge (<strong>₵10</strong>)</span>
              <h1 name="" id="" className={` ml-2 flex items-center justify-center text-center  px-2  focus:outline-black m-0 placeholder-[#707070] text-[15px] text-[#707070] font-normal bg-white  rounded-full `}>1</h1>
            </div>

            <div className=" items-center w-fit gap-[30px] mt-4 bg-gray-200 flex relative  rounded-full px-3 py-1">
              <span>Iron</span>
              <h1 name="" id="" className={` ml-2 flex items-center justify-center text-center  px-2  focus:outline-black m-0 placeholder-[#707070] text-[15px] text-[#707070] font-normal bg-white  rounded-full `}>1</h1>
            </div>

            <div className=" items-center w-fit gap-[30px] mt-4 bg-gray-200 flex relative  rounded-full px-3 py-1">
              <span>Luggage</span>
              <h1 name="" id="" className={` ml-2 flex items-center justify-center text-center  px-2  focus:outline-black m-0 placeholder-[#707070] text-[15px] text-[#707070] font-normal bg-white  rounded-full `}>1</h1>
            </div>

            <div className=" items-center w-fit gap-[30px] mt-4 bg-gray-200 flex relative  rounded-full px-3 py-1">
              <span>Bucket</span>
              <h1 name="" id="" className={` ml-2 flex items-center justify-center text-center  px-2  focus:outline-black m-0 placeholder-[#707070] text-[15px] text-[#707070] font-normal bg-white  rounded-full `}>1</h1>
            </div>

            <div className=" items-center w-fit gap-[30px] mt-4 bg-gray-200 flex relative  rounded-full px-3 py-1">
              <span>Other(s)</span>
              <h1 name="" id="" className={` ml-2 flex items-center justify-center text-center  px-2  focus:outline-black m-0 placeholder-[#707070] text-[15px] text-[#707070] font-normal bg-white  rounded-full `}>12</h1>
            </div>

            <div className=" items-center w-fit gap-[30px] mt-4 bg-gray-200 flex relative  rounded-full px-3 py-1">
              <span>Cup</span>
              <h1 name="" id="" className={` ml-2 flex items-center justify-center text-center  px-2  focus:outline-black m-0 placeholder-[#707070] text-[15px] text-[#707070] font-normal bg-white  rounded-full `}>1</h1>
            </div>
          </div>
        </div>

        {/**Date(s) */}
        <div className='w-full flex sm:justify-between flex-wrap gap-8'>
          {/**Period */}
          <div className=' flex flex-col gap-1'>
            <h1 className='font-bold text-[18px] md:text-[20px]  text-black'>Period</h1>
            <h1 className=' text-[14px] sm:text-[16px]'>1 Month</h1>
          </div>

          {/**Pickup Date */}
          <div className=' flex flex-col gap-1'>
            <h1 className='font-bold text-[18px] md:text-[20px]  text-black'>Pickup Date</h1>
            <h1 className=' text-[14px] sm:text-[16px]'>11th Jan. 2024</h1>
          </div>

          {/**Delivery Date*/}
          <div className=' flex flex-col gap-1'>
            <h1 className='font-bold text-[18px] md:text-[20px]  text-black'>Delivery Date</h1>
            {/* <h1 className={` text-[18px] border-dashed border-b-[2px] border-black h-[15px]`}></h1> */}
            <h1 className=' text-[14px] sm:text-[16px]'>11th Jan. 2024</h1>
          </div>

          {/**School */}
          <div className=' flex flex-col gap-1'>
            <h1 className='font-bold text-[18px] md:text-[20px]  text-black'>School</h1>
            <h1 className=' text-[14px] sm:text-[16px]'>UG</h1>
          </div>

          {/**Hall or Hostel */}
          <div className=' flex flex-col gap-1'>
            <h1 className='font-bold text-[18px] md:text-[20px]  text-black'>Hall or Hostel</h1>
            <h1 className=' text-[14px] sm:text-[16px]'>11th Jan. 2024</h1>
          </div>

          {/**Emergency Contact */}
          <div className=' flex flex-col gap-1'>
            <h1 className='font-bold text-[18px] md:text-[20px]  text-black'>Emergency Contact</h1>
            <h1 className=' text-[14px] sm:text-[16px]'>+233247157301</h1>
          </div>
        </div>
      </div>

      {/**Request */}
      <div className=' w-full mt-4 flex items-center justify-center'>
        <button type='button' className=' rounded-[6px] flex items-center justify-center text-center  py-2 px-4 font-semibold text-[18px] sm:text-[20px] bg-black text-white hover:opacity-70 shadow-dashboard transition-all duration-300'>Request Delivery</button>
      </div>
    </div>
  )
}

export default ViewBooking
