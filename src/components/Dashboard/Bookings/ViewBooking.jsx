import React from 'react'

const ViewBooking = () => {
  return (
    <div className=' w-full xm:w-[480px]  sm:w-[528px] md:w-[628px]  lg:w-[828px] py-[57px] px-[65px] h-[757px] shadow-input bg-white rounded-br-[30px] rounded-tl-[30px]'>
      <div className='w-full flex items-center justify-between gap-4'>
        <h1 className=' w-full flex-1 font-bold text-[36px] text-[#51336A]'>Items</h1>
        <div className=' flex w-full flex-[1.6] items-center justify-between gap-4 -mt-20'>
          <div className=' whitespace-nowrap h-[30px] rounded-[50px] border-[1px] border-[#4FBF26] px-2 py-[5px] bg-[#D6FBC9] flex items-center justify-center text-center font-bold text-[#4FBF26] text-[12px]'>Online Payment</div>
          <h1 className='font-bold text-[32px]'>₵50</h1>
        </div>
      </div>
      {/** Items*/}
      <div className=' mt-[14px] flex flex-wrap gap-[38px]'>
        <div className=" items-center w-fit gap-[30px] mt-4 bg-gray-200 flex relative  rounded-full px-3 py-1">
          <span>Fridge</span>
          <h1 name="" id="" className={` ml-2 flex items-center justify-center text-center  px-2  focus:outline-[#51336A] m-0 placeholder-[#707070] text-[15px] text-[#707070] font-normal bg-white  rounded-full `}>1</h1>
        </div>
      </div>

      {/**Date(s) */}
      <div className='w-full flex justify-between flex-wrap gap-8 mt-[60px]'>
        {/**Period */}
        <div className=' flex flex-col gap-1'>
          <h1 className='font-bold text-[26px] text-[#51336A]'>Period</h1>
          <h1 className=' text-[18px]'>1 Month</h1>
        </div>

        {/**Pickup Date */}
        <div className=' flex flex-col gap-1'>
          <h1 className='font-bold text-[26px] text-[#51336A]'>Pickup Date</h1>
          <h1 className=' text-[18px]'>11th Jan. 2024</h1>
        </div>

        {/**Delivery Date*/}
        <div className=' flex flex-col gap-1'>
          <h1 className='font-bold text-[26px] text-[#51336A]'>Delivery Date</h1>
          <h1 className=' text-[18px]'>Null</h1>
        </div>
      </div>

      {/**Student Location */}
      <div className='w-full flex justify-between flex-wrap gap-4 mt-[60px]'>
        {/**School */}
        <div className=' flex flex-col gap-1'>
          <h1 className='font-bold text-[26px] text-[#51336A]'>School</h1>
          <h1 className=' text-[18px]'>UG</h1>
        </div>

        {/**Hall or Hostel */}
        <div className=' flex flex-col gap-1'>
          <h1 className='font-bold text-[26px] text-[#51336A]'>Hall or Hostel</h1>
          <h1 className=' text-[18px]'>11th Jan. 2024</h1>
        </div>
      </div>
    </div>
  )
}

export default ViewBooking
