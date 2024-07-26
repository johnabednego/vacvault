import React from 'react'

const ViewBooking = ({ bookingsType }) => {
  return (
    <div className=' w-full flex flex-col gap-[20px] xm:w-[480px]  sm:w-[528px] md:w-[628px]  lg:w-[600px] py-[20px] px-[30px] shadow-input bg-white rounded-br-[30px] rounded-tl-[30px]'>

      <div className=' w-full flex flex-wrap justify-between items-center'>
        {bookingsType === 1 ?
          <h1 className=' h-[25px] animate-bounce whitespace-nowrap text-[#EB0728] text-[16px] border-dashed border-b-[#EB0728] border-b-[1px]'>Past</h1> :
          null
        }
        <div className='w-full flex  items-center justify-end  gap-4'>
          <div className=' whitespace-nowrap h-[30px] rounded-[50px] border-[1px] border-[#4FBF26] px-2 py-[5px] bg-[#D6FBC9] flex items-center justify-center text-center font-bold text-[#4FBF26] text-[12px]'>Online Payment</div>
          <h1 className='font-bold text-[32px]'>₵50</h1>
        </div>
      </div>

      <div className=' w-full flex flex-col gap-[30px]'>
        {/** Items*/}
        <div className='w-full flex flex-col'>
          <h1 className=' w-full font-bold text-[18px] md:text-[20px] lg:text-[24px] text-[#51336A]'>Items</h1>
          <div className=' flex flex-wrap gap-[10px]'>

            <div className=" items-center w-fit gap-[30px] mt-4 bg-gray-200 flex relative  rounded-full px-3 py-1">
              <span>Fridge</span>
              <h1 name="" id="" className={` ml-2 flex items-center justify-center text-center  px-2  focus:outline-[#51336A] m-0 placeholder-[#707070] text-[15px] text-[#707070] font-normal bg-white  rounded-full `}>1</h1>
            </div>

            <div className=" items-center w-fit gap-[30px] mt-4 bg-gray-200 flex relative  rounded-full px-3 py-1">
              <span>Iron</span>
              <h1 name="" id="" className={` ml-2 flex items-center justify-center text-center  px-2  focus:outline-[#51336A] m-0 placeholder-[#707070] text-[15px] text-[#707070] font-normal bg-white  rounded-full `}>1</h1>
            </div>

            <div className=" items-center w-fit gap-[30px] mt-4 bg-gray-200 flex relative  rounded-full px-3 py-1">
              <span>Luggage</span>
              <h1 name="" id="" className={` ml-2 flex items-center justify-center text-center  px-2  focus:outline-[#51336A] m-0 placeholder-[#707070] text-[15px] text-[#707070] font-normal bg-white  rounded-full `}>1</h1>
            </div>

            <div className=" items-center w-fit gap-[30px] mt-4 bg-gray-200 flex relative  rounded-full px-3 py-1">
              <span>Bucket</span>
              <h1 name="" id="" className={` ml-2 flex items-center justify-center text-center  px-2  focus:outline-[#51336A] m-0 placeholder-[#707070] text-[15px] text-[#707070] font-normal bg-white  rounded-full `}>1</h1>
            </div>

            <div className=" items-center w-fit gap-[30px] mt-4 bg-gray-200 flex relative  rounded-full px-3 py-1">
              <span>Other(s)</span>
              <h1 name="" id="" className={` ml-2 flex items-center justify-center text-center  px-2  focus:outline-[#51336A] m-0 placeholder-[#707070] text-[15px] text-[#707070] font-normal bg-white  rounded-full `}>12</h1>
            </div>

            <div className=" items-center w-fit gap-[30px] mt-4 bg-gray-200 flex relative  rounded-full px-3 py-1">
              <span>Cup</span>
              <h1 name="" id="" className={` ml-2 flex items-center justify-center text-center  px-2  focus:outline-[#51336A] m-0 placeholder-[#707070] text-[15px] text-[#707070] font-normal bg-white  rounded-full `}>1</h1>
            </div>
          </div>
        </div>

        {/**Date(s) */}
        <div className='w-full flex justify-between flex-wrap gap-8'>
          {/**Period */}
          <div className=' flex flex-col gap-1'>
            <h1 className='font-bold text-[18px] md:text-[20px]  text-[#51336A]'>Period</h1>
            <h1 className=' text-[14px] sm:text-[16px]'>1 Month</h1>
          </div>

          {/**Pickup Date */}
          <div className=' flex flex-col gap-1'>
            <h1 className='font-bold text-[18px] md:text-[20px]  text-[#51336A]'>Pickup Date</h1>
            <h1 className=' text-[14px] sm:text-[16px]'>11th Jan. 2024</h1>
          </div>

          {/**Delivery Date*/}
          <div className=' flex flex-col gap-1'>
            <h1 className='font-bold text-[18px] md:text-[20px]  text-[#51336A]'>Delivery Date</h1>
            {/* <h1 className={` text-[18px] border-dashed border-b-[2px] border-[#51336A] h-[15px]`}></h1> */}
            <h1 className=' text-[14px] sm:text-[16px]'>11th Jan. 2024</h1>
          </div>
        </div>

        {/**Student Location */}
        <div className='w-full flex justify-between flex-wrap gap-4'>
          {/**School */}
          <div className=' flex flex-col gap-1'>
            <h1 className='font-bold text-[18px] md:text-[20px]  text-[#51336A]'>School</h1>
            <h1 className=' text-[14px] sm:text-[16px]'>UG</h1>
          </div>

          {/**Hall or Hostel */}
          <div className=' flex flex-col gap-1'>
            <h1 className='font-bold text-[18px] md:text-[20px]  text-[#51336A]'>Hall or Hostel</h1>
            <h1 className=' text-[14px] sm:text-[16px]'>11th Jan. 2024</h1>
          </div>

          {/**Emergency Contact */}
          <div className=' flex flex-col gap-1'>
            <h1 className='font-bold text-[18px] md:text-[20px]  text-[#51336A]'>Emergency Contact</h1>
            <h1 className=' text-[14px] sm:text-[16px]'>+233247157301</h1>
          </div>
        </div>
      </div>

      {/**Request */}
      {bookingsType === 0 ?
        <div className=' w-full mt-4 flex items-center justify-center'>
          <button type="button" className=" transform duration-300 ease-in-out rounded-[30px] bg-black  hover:opacity-100 hover:bg-[#1f1e1f] text-white font-bold py-2 px-4">Request Delivery</button>
        </div> :
        null}

    </div>
  )
}

export default ViewBooking
