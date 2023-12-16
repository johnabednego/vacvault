import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import { IoIosArrowForward } from "react-icons/io";
import profile from './assets/profile.png'
import line from './assets/line.svg'
import booking_black from './assets/booking_black.svg'
import booking_white from './assets/booking_white.svg'
import shop_black from './assets/shop_black.svg'
import shop_white from './assets/shop_white.svg'
import payment_black from './assets/payment_black.svg'
import payment_white from './assets/payment_white.svg'
import notification_black from './assets/notification_black.svg'
import notification_white from './assets/notification_white.svg'
import settings_black from './assets/settings_black.svg'
import settings_white from './assets/settings_white.svg'
import help_black from './assets/help_black.svg'
import help_white from './assets/help_white.svg'
import feedback_black from './assets/feedback_black.svg'
import feedback_white from './assets/feedback_white.svg'
import Bookings from '../../components/Dashboard/Bookings/Bookings'
import Shopping from '../../components/Dashboard/Shopping/Shopping'
import Payment from '../../components/Dashboard/Payment/Payment'
import Notifications from '../../components/Dashboard/Notifications/Notifications'
import Settings from '../../components/Dashboard/Settings/Settings'
import HelpAndSupport from '../../components/Dashboard/HelpAndSupport/HelpAndSupport'
import Feedback from '../../components/Dashboard/Feedback/Feedback'

const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const [navigationChange, setNavigationChange] = useState(0)
    return (
        <div>
            <Nav />
            <div className="flex gap-[4%] xl:gap-[8%] pt-[80px] h-full">
                <div
                    className={` ${open ? " w-[200px] md:w-[300px] lg:w-[422px]" : "w-[165px] "} shadow-dashboard rounded-tr-[30px] rounded-br-[30px] h-full pl-[15px] pt-[36px] relative duration-1000`}>
                    <IoIosArrowForward onClick={() => setOpen(!open)} className={` text-white absolute cursor-pointer -right-3 top-9 w-7 h-7 bg-[#51336A] border-[#51336A] border-2 rounded-full  ${!open && " duration-1000 rotate-180"}`} />
                    <div className=' pt-6 pb-[17px]'>
                        <div className=' flex flex-col'>
                            <div className=' break-all flex flex-col items-center lg:items-start lg:flex-row gap-[19px] lg:gap-[29px]'>
                                <div className={` ${open ? " rotate-[360deg] duration-500" : ""} relative z-[-1] rounded-[95px] w-[95px] h-[95px]  lg:rounded-[124px] lg:w-[124px] lg:h-[124px] border-[5px] border-[#51336A]`}>
                                    <img src={profile} alt="" className={`  object-cover rounded-[95px] lg:rounded-[124px] w-full h-full`} />
                                </div>
                                <div className={` ${!open ? "hidden" : " "} duration-1000 leading-[24px] flex flex-col justify-center items-start`}>
                                    <h1 className=' font-medium  text-[18px] lg:text-[25px] xl:text-[32px] text-[#51336A]'>Portia</h1>
                                    <h1 className=' text-[#989898] text-[16px] lg:text-[18px] xl:text-[24px] mt-[11px]'>portia@gmail.com</h1>
                                </div>
                            </div>
                            <div className=' w-full flex items-center justify-center mt-[17px]'>
                                <img src={line} alt="" />
                            </div>

                            {/**Navigations */}
                            <div className=' text-[18px] lg:text-[25px] xl:text-[32px] font-medium leading-[24px] flex flex-col gap-[68px] mt-[72px] px-[14px] md:px-[20px] lg:px-[50px]'>
                                <div onClick={() => setNavigationChange(0)} className={` ${!open ? " pl-1 ml-0 px-1" : ""} ${navigationChange === 0 ? " pr-3 md:pr-0 w-max  md:w-full bg-gradient-to-r from-[#51336A] to-[#51336A9C] text-white pl-5 -ml-5 cursor-not-allowed" : " cursor-pointer"} items-center  flex gap-2 md:gap-4 lg:gap-8 h-[60px] w-full rounded-[10px]`}>
                                    <img src={navigationChange === 0 ? booking_white : booking_black} alt="" className=' w-[36px] h-[36px]' />
                                    <h1 className={`${!open ? "hidden" : " "}`}>Bookings</h1>
                                </div>
                                <div onClick={() => setNavigationChange(1)} className={` ${!open ? " pl-1 ml-0 px-1" : ""} ${navigationChange === 1 ? " pr-3 md:pr-0 w-max  md:w-full bg-gradient-to-r from-[#51336A] to-[#51336A9C] text-white pl-5 -ml-5 cursor-not-allowed" : " cursor-pointer"} items-center  flex gap-2 md:gap-4 lg:gap-8 h-[60px] w-full rounded-[10px]`}>
                                    <img src={navigationChange === 1 ? shop_white : shop_black} alt="" className=' w-[36px] h-[36px]'/>
                                    <h1 className={`${!open ? "hidden" : " "}`}>Shopping</h1>
                                </div>
                                <div onClick={() => setNavigationChange(2)} className={` ${!open ? " pl-1 ml-0 px-1" : ""} ${navigationChange === 2 ? " pr-3 md:pr-0 w-max  md:w-full bg-gradient-to-r from-[#51336A] to-[#51336A9C] text-white pl-5 -ml-5 cursor-not-allowed" : " cursor-pointer"} items-center  flex gap-2 md:gap-4 lg:gap-8 h-[60px] w-full rounded-[10px]`}>
                                    <img src={navigationChange === 2 ? payment_white : payment_black} alt="" className=' w-[36px] h-[36px]' />
                                    <h1 className={`${!open ? "hidden" : " "}`}>Payment</h1>
                                </div>
                                <div onClick={() => setNavigationChange(3)} className={` ${!open ? " pl-1 ml-0 px-1" : ""} ${navigationChange === 3 ? " pr-3 md:pr-0 w-max  md:w-full bg-gradient-to-r from-[#51336A] to-[#51336A9C] text-white pl-5 -ml-5 cursor-not-allowed" : " cursor-pointer"}  flex flex-col items-center justify-center h-[60px] w-full rounded-[10px]`}>
                                    <div className=' w-full'>
                                        <div className=' mt-[-10px] relative z-0 flex items-center gap-2 md:gap-4 lg:gap-8 w-full'>
                                            <img src={navigationChange === 3 ? notification_white : notification_black} alt="" className=' w-[36px] h-[36px]' />
                                            <h1 className={`${!open ? "hidden" : " "}`}>Notifications</h1>
                                        </div>
                                        <div className=' relative z-10 mt-[-33px] ml-[14px] flex items-center justify-center text-center w-[15px] h-[15px] rounded-[15px] bg-[#FF0000] text-white text-[10px] p-[0.6rem]'>0</div>
                                    </div>
                                </div>
                                <div onClick={() => setNavigationChange(4)} className={` ${!open ? " pl-1 ml-0 px-1" : ""} ${navigationChange === 4 ? " pr-3 md:pr-0 w-max  md:w-full bg-gradient-to-r from-[#51336A] to-[#51336A9C] text-white pl-5 -ml-5 cursor-not-allowed" : " cursor-pointer"} items-center  flex gap-2 md:gap-4 lg:gap-8 h-[60px] w-full rounded-[10px]`}>
                                    <img src={navigationChange === 4 ? settings_white : settings_black} alt="" className=' w-[36px] h-[36px]' />
                                    <h1 className={`${!open ? "hidden" : " "}`}>Settings</h1>
                                </div>
                                <div onClick={() => setNavigationChange(5)} className={` ${!open ? " pl-1 ml-0 px-1" : ""} ${navigationChange === 5 ? " pr-3 md:pr-0   md:w-full bg-gradient-to-r from-[#51336A] to-[#51336A9C] text-white pl-5 -ml-5 cursor-not-allowed" : " cursor-pointer"} items-center  flex gap-2 md:gap-4 lg:gap-8 h-[60px] w-full rounded-[10px]`}>
                                    <img src={navigationChange === 5 ? help_white : help_black} alt="" className=' w-[36px] h-[36px]' />
                                    <h1 className={`${!open ? "hidden" : " "}`}>Help & Support</h1>
                                </div>
                                <div onClick={() => setNavigationChange(6)} className={` ${!open ? " pl-1 ml-0 px-1" : ""} ${navigationChange === 6 ? " pr-3 md:pr-0 w-max  md:w-full bg-gradient-to-r from-[#51336A] to-[#51336A9C] text-white pl-5 -ml-5 cursor-not-allowed" : " cursor-pointer"} items-center  flex gap-2 md:gap-4 lg:gap-8 h-[60px] w-full rounded-[10px]`}>
                                    <img src={navigationChange === 6 ? feedback_white : feedback_black} alt="" className=' w-[36px] h-[36px]' />
                                    <h1 className={`${!open ? "hidden" : " "}`}>Feedback</h1>
                                </div>
                            </div>

                            {/**Chat */}
                            <div className=' w-full flex items-end justify-end pr-[29px]'>
                                <button type='button' className=' float-right font-bold  text-[18px] lg:text-[25px] xl:text-[32px] text-[#51336A] flex items-center justify-center text-center shadow-dashboard mt-16 w-[105px] h-[58px] bg-white rounded-tr-[30px] rounded-bl-[30px]'>Chat</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex-1 pt-7 lg:p-7 lg:pb-0">
                    {navigationChange === 0 ? <Bookings /> : null}
                    {navigationChange === 1 ? <Shopping /> : null}
                    {navigationChange === 2 ? <Payment /> : null}
                    {navigationChange === 3 ? <Notifications /> : null}
                    {navigationChange === 4 ? <Settings /> : null}
                    {navigationChange === 5 ? <HelpAndSupport /> : null}
                    {navigationChange === 6 ? <Feedback /> : null}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
