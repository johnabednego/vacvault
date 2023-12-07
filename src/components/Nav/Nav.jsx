import React, { useState } from 'react'
import logo from './assets/vaccault.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { SetNavSwitch } from '../../features/nav/navSwitchSlice'
import {SignInTrue} from '../../features/nav/signInSlice'
import {SignUpTrue} from '../../features/nav/signUpSlice'
import { useSelector, useDispatch } from 'react-redux'
import SignInModal from '../SignIn/SignInModal'
import SignUpModal from '../SignUp/SignUpModal'

const Nav = () => {
    const dispatch = useDispatch()
    const navSwitch = useSelector((state) => state.navSwitch.value)
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const signInModal = useSelector((state)=>state.signInModal.value)
    const signUpModal = useSelector((state)=>state.signUpModal.value)

    const toHome = () => {
        dispatch(SetNavSwitch(0))
        navigate("/")
    }
    const toAbout = () => {
        dispatch(SetNavSwitch(1))
        navigate("/about")
    }
    const toServices = () => {
        dispatch(SetNavSwitch(2))
        navigate("/services")
    }
    const toContact = () => {
        dispatch(SetNavSwitch(3))
        navigate("/contact")
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
        {signInModal?<SignInModal/>:null}
        {signUpModal?<SignUpModal/>:null}
        <div className=' bg-[#51336A] fixed px-[6%] xl:px-[8%] w-full h-[80px] flex items-center justify-between z-10'>
            <div className=' flex items-center gap-[22px] lg:gap-[42px] xl:gap-[82px]'>
                <img src={logo} alt="" className=' w-[98px] h-[56px]' />
                <button className=' bg-[#6348A5] text-white rounded-[6px] flex w-[64px] lg:w-[81.83px] h-[35px] xm:h-[40px] text-center justify-center items-center'>Shop</button>
            </div>

            <div className=' text-[16px] lg:text-[18px] hidden md:flex gap-[15px] lg:gap-[35px]'>
                <button onClick={() => toHome()} className={` ${navSwitch === 0 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>HOME</button>
                <button onClick={() => toAbout()} className={` ${navSwitch === 1 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>ABOUT</button>
                <button onClick={() => toServices()} className={` ${navSwitch === 2 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>SERVICES</button>
                <button onClick={() => toContact()} className={` ${navSwitch === 3 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>CONTACT </button>
            </div>

            <div className=' hidden xm:flex text-[14px] gap-[18px] xl:gap-[24.17px]'>
                <button onClick={()=>dispatch(SignInTrue())} className='flex bg-[#6348A5] text-white text-center items-center justify-center rounded-[6px] w-[64px] lg:w-[92.83px] h-[40px]'>Sign In</button>
                <button onClick={()=>dispatch(SignUpTrue())} className='flex bg-[#100C14] text-white text-center items-center justify-center rounded-[6px] w-[64px] lg:w-[92.83px] h-[40px]'>Sign Up</button>
            </div>

            <div className=' text-white md:hidden'>
                <RxHamburgerMenu onClick={toggleMenu} className=' w-8 h-8' />
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className=" md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
                    <div className="bg-[#51336A] w-4/5 h-full max-w-[12rem] absolute left-0 transform z-50">
                        {/* Close Button */}
                        <button
                            className="absolute text-white top-5 right-5"
                            onClick={closeMenu}
                        >
                            <IoMdClose className=' w-8 h-8' />
                        </button>
                        {/* Your navigation links here */}
                        <div className=' pl-4 items-start justify-start mt-20 text-[16px] flex flex-col gap-[15px] '>
                            <div className=' xm:hidden flex text-[14px] gap-[18px]'>
                                <button onClick={()=>{dispatch(SignInTrue()); closeMenu()}} className='flex bg-[#6348A5] text-white text-center items-center justify-center rounded-[6px] w-[64px] lg:w-[92.83px] h-[40px]'>Sign In</button>
                                <button onClick={()=>{dispatch(SignUpTrue()); closeMenu()}} className='flex bg-[#100C14] text-white text-center items-center justify-center rounded-[6px] w-[64px] lg:w-[92.83px] h-[40px]'>Sign Up</button>
                            </div>
                            <button onClick={() => toHome()} className={` ${navSwitch === 0 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>HOME</button>
                            <button onClick={() => toAbout()} className={` ${navSwitch === 1 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>ABOUT</button>
                            <button onClick={() => toServices()} className={` ${navSwitch === 2 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>SERVICES</button>
                            <button onClick={() => toContact()} className={` ${navSwitch === 3 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>CONTACT </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default Nav
