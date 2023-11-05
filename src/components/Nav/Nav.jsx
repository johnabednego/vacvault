import React from 'react'
import logo from './assets/vaccault.svg'
import {RxHamburgerMenu} from 'react-icons/rx'

const Nav = () => {
    return (
        <div className=' bg-[#51336A] fixed px-[6%] xl:px-[8%] w-full h-[80px] flex items-center justify-between'>
            <div className=' flex items-center gap-[22px] lg:gap-[42px] xl:gap-[82px]'> 
                <img src={logo} alt="" className=' w-[98px] h-[56px]' />
                <button className=' bg-[#6348A5] text-white rounded-[6px] flex w-[64px] lg:w-[81.83px] h-[35px] xm:h-[40px] text-center justify-center items-center'>Shop</button>
            </div>

            <div className=' text-[16px] lg:text-[18px] hidden md:flex gap-[15px] lg:gap-[35px]'>
                <button className=' text-[#989898]'>HOME</button>
                <button className=' text-white'>ABOUT</button>
                <button className=' text-white'>SERVICES</button>
                <button className=' text-white'>CONTACT </button>
            </div>

            <div className=' hidden xm:flex text-[14px] gap-[18px] xl:gap-[24.17px]'>
                <button className='flex bg-[#6348A5] text-white text-center items-center justify-center rounded-[6px] w-[64px] lg:w-[92.83px] h-[40px]'>Sign In</button>
                <button className='flex bg-[#100C14] text-white text-center items-center justify-center rounded-[6px] w-[64px] lg:w-[92.83px] h-[40px]'>Sign Up</button>
            </div>

            <div className=' text-white md:hidden'>
                <RxHamburgerMenu  className=' w-8 h-8'/>
            </div>
        </div>
    )
}

export default Nav
