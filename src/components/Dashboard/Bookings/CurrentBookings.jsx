import React, { useState } from 'react'
import backIcon from '../assets/backIcon.svg'
const CurrentBookings = ({ setBookedView }) => {
    const data = [0]
    const [viewBooking, setViewBooking] = useState(false)
    const handleViewBooking = () => {
        setBookedView(1)
        setViewBooking(true)
    }
    return (
        <div>
            {
                viewBooking?
                    <div data-aos="zoom-in-right" data-aos-duration="3000"  className=' w-full flex flex-col gap-[20px]  py-[20px] px-[30px] bg-white rounded-br-[30px] rounded-tl-[30px]'>
                        <img onClick={()=>setViewBooking(false)} src={backIcon} alt="backIcon" className=' cursor-pointer w-[36.06px] h-[36.06px]' />
                        <div className=' w-full flex flex-col gap-[30px]'>
                            {/** Items*/}
                            <div className='w-full flex flex-col'>
                                <div className=' w-full flex items-center justify-between'>
                                    <h1 className=' w-full font-bold text-[18px] md:text-[20px] lg:text-[24px] text-black'>Items</h1>
                                    <h1 className='font-bold text-[32px]'>₵50</h1>
                                </div>
                                <div className=' flex flex-wrap gap-[10px]'>

                                    <div className=" items-center w-fit gap-[30px] mt-4 bg-gray-200 flex relative  rounded-full px-3 py-1">
                                        <span>Fridge</span>
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
                            <button type="button" className=" transform duration-300 ease-in-out rounded-[30px] bg-black  hover:opacity-100 hover:bg-[#1f1e1f] text-white font-bold py-2 px-4">Request Delivery</button>
                        </div>
                    </div>
                    :
                    data.map((item, index) => (
                        <div key={index} className=' flex flex-col gap-[30px]'>
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
                                        <button onClick={() => handleViewBooking()} type='button' className=' rounded-[6px] flex items-center justify-center text-center w-[70px] xs:w-[90px] h-[38px] sm:h-[40px] font-semibold text-[18px] sm:text-[20px] bg-black text-white hover:opacity-70 shadow-dashboard transition-all duration-300'>View</button>
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
                                    <div className=' whitespace-nowrap w-[80px] h-[25px] rounded-[50px] border-[1px] border-[#4FBF26] px-2 py-[5px] bg-[#D6FBC9] flex items-center justify-center text-center font-bold text-[#4FBF26] text-[12px]'>Active</div>
                                    <div className=' flex h-full w-full xm:w-auto justify-end xm:justify-normal items-end'>
                                        <button onClick={() => handleViewBooking()} type='button' className=' rounded-[6px] flex items-center justify-center text-center w-[70px] xs:w-[90px] h-[38px] sm:h-[40px] font-semibold text-[18px] sm:text-[20px] bg-black text-white hover:opacity-70 shadow-dashboard transition-all duration-300'>View</button>
                                    </div>
                                </div>
                            </div>


                        </div>

                    ))
            }
        </div>
    )
}

export default CurrentBookings
