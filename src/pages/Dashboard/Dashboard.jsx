import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import { IoIosArrowForward } from "react-icons/io";
import profile from './assets/profile.png'
import line from './assets/line.svg'

const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User", gap: true },
        { title: "Schedule ", src: "Calendar" },
        { title: "Search", src: "Search" },
        { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true },
        { title: "Setting", src: "Setting" },
    ];

    return (
        <div>
            <Nav />
            <div className="flex pt-[80px] h-screen">
                <div
                    className={` ${open ? "w-[422px]" : "w-[165px] "} shadow-dashboard rounded-tr-[30px] rounded-br-[30px] h-full pl-[15px] pt-[36px] relative duration-1000`}>
                    <IoIosArrowForward onClick={() => setOpen(!open)} className={` text-white absolute cursor-pointer -right-3 top-9 w-7 h-7 bg-[#51336A] border-[#51336A] border-2 rounded-full  ${!open && " duration-1000 rotate-180"}`} />
                    {/* <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul> */}
                    <div className=' pt-6'>
                        <div className=' flex flex-col'>
                            <div className=' flex gap-[29px]'>
                                <div className={` ${open ? " rotate-[360deg] duration-500" : ""} relative z-[-1] rounded-[95px] w-[95px] h-[95px]  sm:rounded-[124px] sm:w-[124px] sm:h-[124px] border-[5px] border-[#51336A]`}>
                                    <img src={profile} alt="" className={`  object-cover rounded-[95px] sm:rounded-[124px] w-full h-full`} />
                                </div>
                                <div className={` ${!open ? "hidden" : " "} duration-1000 leading-[24px] flex flex-col justify-center items-start`}>
                                    <h1 className=' font-medium text-[32px] text-[#51336A]'>Portia</h1>
                                    <h1 className=' text-[#989898] text-[24px] mt-[11px]'>portia@gmail.com</h1>
                                </div>
                            </div>
                            <div className=' w-full flex items-center justify-center mt-[17px]'>
                                <img src={line} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-screen flex-1 p-7">
                    <h1 className="text-2xl font-semibold ">Home Page</h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
