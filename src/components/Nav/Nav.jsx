import React from 'react'
import logo from './assets/vaccault.svg'
import {RxHamburgerMenu} from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
import {SetNavSwitch} from '../../features/nav/navSwitchSlice'
import { useSelector, useDispatch } from 'react-redux'

const Nav = () => {
    const dispatch = useDispatch()
    const navSwitch = useSelector((state)=>state.navSwitch.value) 
    const navigate = useNavigate()
    
    const toHome = () =>{
        dispatch(SetNavSwitch(0))
        navigate("/") 
    }
    const toAbout = () =>{
        dispatch(SetNavSwitch(1))
        navigate("/about") 
    }
    const toServices = () =>{
        dispatch(SetNavSwitch(2))
        navigate("/services") 
    }
    const toContact = () =>{
        dispatch(SetNavSwitch(3))
        navigate("/contact") 
    }

  
    return (
        <div className=' bg-[#51336A] fixed px-[6%] xl:px-[8%] w-full h-[80px] flex items-center justify-between z-10'>
            <div className=' flex items-center gap-[22px] lg:gap-[42px] xl:gap-[82px]'> 
                <img src={logo} alt="" className=' w-[98px] h-[56px]' />
                <button className=' bg-[#6348A5] text-white rounded-[6px] flex w-[64px] lg:w-[81.83px] h-[35px] xm:h-[40px] text-center justify-center items-center'>Shop</button>
            </div>

            <div className=' text-[16px] lg:text-[18px] hidden md:flex gap-[15px] lg:gap-[35px]'>
                <button onClick={()=>toHome()} className={` ${navSwitch===0?"text-[#989898] cursor-not-allowed":"text-white cursor-pointer"}`}>HOME</button>
                <button onClick={()=>toAbout()} className={` ${navSwitch===1?"text-[#989898] cursor-not-allowed":"text-white cursor-pointer"}`}>ABOUT</button>
                <button onClick={()=>toServices()} className={` ${navSwitch===2?"text-[#989898] cursor-not-allowed":"text-white cursor-pointer"}`}>SERVICES</button>
                <button  onClick={()=>toContact()} className={` ${navSwitch===3?"text-[#989898] cursor-not-allowed":"text-white cursor-pointer"}`}>CONTACT </button>
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
