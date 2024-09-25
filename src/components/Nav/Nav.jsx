import React, { useEffect, useState } from 'react'
import logo from '../assets/vacvault.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { SetNavSwitch } from '../../features/nav/navSwitchSlice'
import { SignInTrue } from '../../features/nav/signInSlice'
import { SignUpTrue } from '../../features/nav/signUpSlice'
import { useSelector, useDispatch } from 'react-redux'
import SignInModal from '../SignIn/SignInModal'
import SignUpModal from '../SignUp/SignUpModal'
import { AiOutlineLogout } from "react-icons/ai";
import { jwtDecode } from 'jwt-decode';


const Nav = () => {
    const dispatch = useDispatch()
    const navSwitch = useSelector((state) => state.navSwitch.value)
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const signInModal = useSelector((state) => state.signInModal.value)
    const signUpModal = useSelector((state) => state.signUpModal.value)
    const [user, setUser] = useState(null)

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
    const toShop = () => {
        dispatch(SetNavSwitch(4))
        navigate("/shop")
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const hideModal = (event) => {
        const modal = document.getElementById('modal');
        // Check if the clicked element is outside of the modal
        if (event.target !== modal && !modal.contains(event.target)) {
            closeMenu(); // Call the function to close the modal
        }
    }

    // Decode the data before storing it
    function decodeData(data) {
        return atob(data); // Base64 encoding
    }

    useEffect(() => {

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth', // Smooth scrolling behavior
            });
        };

        scrollToTop()

        const storedToken = window.localStorage.getItem('jdgbgiusudgfdyudbudvfudhfgbiyfudvifiudubuydfbduvuydfvuy')
        const decodedToken = storedToken ? decodeData(storedToken) : null;
        const userInfo = decodedToken ? jwtDecode(decodedToken) : null;
        setUser(userInfo)
        if (userInfo) {
            navigate('/dashboard');
        }
        else{
            navigate('/')
        }
    }, [navigate])

    useEffect(() => {
        if (window.location.pathname === "/") {
            dispatch(SetNavSwitch(0))
        }
        else if (window.location.pathname === "/about") {
            dispatch(SetNavSwitch(1))
        }
        else if (window.location.pathname === "/services") {
            dispatch(SetNavSwitch(2))
        }
        else if (window.location.pathname === "/contact") {
            dispatch(SetNavSwitch(3))
        }
        else if (window.location.pathname === "/shop") {
            dispatch(SetNavSwitch(4))
        }
        else {
            dispatch(SetNavSwitch(-1))
        }
    }, [dispatch])


    const LogOut = () =>{
        window.localStorage.clear()
        navigate('/')
    }

    return (
        <>
            {signInModal ? <SignInModal /> : null}
            {signUpModal ? <SignUpModal /> : null}
            <div className=' bg-[#51336A] fixed px-[6%] xl:px-[8%] w-full h-[80px] flex items-center justify-between z-20'>
                <div className=' flex items-center gap-[22px] lg:gap-[42px] xl:gap-[82px]'>
                    <img src={logo} alt="" className=' w-[98px] h-[56px]' />
                    <button onClick={() => toShop()} className={` ${navSwitch === 4 ? " cursor-not-allowed bg-white bg-opacity-50 text-[#6348A5] text-opacity-50 " : "hover:opacity-70 bg-[#6348A5] text-white"} rounded-[6px] flex w-[64px] lg:w-[81.83px] h-[35px] xm:h-[40px] text-center justify-center items-center transition-all duration-300`}>Shop</button>
                </div>

                <div className=' text-[16px] lg:text-[18px] hidden md:flex gap-[15px] lg:gap-[35px]'>
                    <button onClick={() => toHome()} className={` ${navSwitch === 0 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>HOME</button>
                    <button onClick={() => toAbout()} className={` ${navSwitch === 1 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>ABOUT</button>
                    <button onClick={() => toServices()} className={` ${navSwitch === 2 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>SERVICES</button>
                    <button onClick={() => toContact()} className={` ${navSwitch === 3 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>CONTACT </button>
                </div>

                {user ?

                    <>
                        <div className=' hidden xm:flex items-center gap-[18px] xl:gap-[24.17px] text-[14px]'>
                            <button onClick={() => navigate("/dashboard")} className={` ${window.location.pathname === "/dashboard" ? " opacity-20 cursor-not-allowed" : "hover:opacity-70"} w-[138px] h-[40px] rounded-[6px] border-solid border-[1px] border-white flex items-center justify-center text-center font-semibold text-[20px] text-white shadow-dashboard transform transition-all ease-in-out`}>
                                Dashboard
                            </button>
                            <AiOutlineLogout onClick={()=>LogOut()} title="LogOut" className='  tooltip w-[24px] h-[24px] cursor-pointer rotate-[270deg] text-white hover:opacity-70 transition-all transform ease-in-out duration-300' />
                        </div>

                        <div className=' text-white md:hidden'>
                            <RxHamburgerMenu onClick={toggleMenu} className=' w-8 h-8' />
                        </div>
                    </>
                    :
                    <div className=' hidden xm:flex text-[14px] gap-[18px] xl:gap-[24.17px]'>
                        <button onClick={() => dispatch(SignInTrue())} className='hover:opacity-70 flex bg-[#6348A5] text-white text-center items-center justify-center rounded-[6px] w-[64px] lg:w-[92.83px] h-[40px] transition-all duration-300'>Sign In</button>
                        <button onClick={() => dispatch(SignUpTrue())} className='hover:opacity-70 flex bg-[#100C14] text-white text-center items-center justify-center rounded-[6px] w-[64px] lg:w-[92.83px] h-[40px] transition-all duration-300'>Sign Up</button>
                    </div>
                }


                {/* Mobile Menu */}
                {isOpen && (
                    <div onClick={hideModal} className=" md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
                        <div id='modal' className="bg-[#51336A] w-4/5 h-full max-w-[13rem] xm:max-w-[14rem] absolute left-0 transform z-50">
                            {/* Close Button */}
                            <button
                                className="absolute text-white top-5 right-5"
                                onClick={closeMenu}
                            >
                                <IoMdClose className=' w-8 h-8' />
                            </button>
                            {/* Your navigation links here */}
                            <div className=' pl-4 items-start justify-start mt-20 text-[16px] flex flex-col gap-[20px] '>
                                <div className=' w-full justify-between pr-[50px] xm:hidden flex text-[14px] gap-[18px]'>
                                    <button onClick={() => { dispatch(SignInTrue()); closeMenu() }} className='hover:opacity-70 flex bg-[#6348A5] text-white text-center items-center justify-center rounded-[6px] w-[64px] lg:w-[92.83px] h-[40px] transition-all duration-300'>Sign In</button>
                                    <button onClick={() => { dispatch(SignUpTrue()); closeMenu() }} className='hover:opacity-70 flex bg-[#100C14] text-white text-center items-center justify-center rounded-[6px] w-[64px] lg:w-[92.83px] h-[40px] transition-all duration-300'>Sign Up</button>
                                </div>
                                <button onClick={() => toHome()} className={` ${navSwitch === 0 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>HOME</button>
                                <button onClick={() => toAbout()} className={` ${navSwitch === 1 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>ABOUT</button>
                                <button onClick={() => toServices()} className={` ${navSwitch === 2 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>SERVICES</button>
                                <button onClick={() => toContact()} className={` ${navSwitch === 3 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>CONTACT </button>
                                {/* <div className=' pr-5 w-full justify-between xm:hidden flex flex-col text-[14px] gap-[18px]'>
                                    <button onClick={() => navigate("/dashboard")} className={` ${window.location.pathname === "/dashboard" ? " opacity-20 cursor-not-allowed" : "hover:opacity-70"} w-[138px] h-[40px] rounded-[6px] border-solid border-[1px] border-white flex items-center justify-center text-center font-semibold text-[20px] text-white shadow-dashboard transform transition-all ease-in-out`}>
                                        Dashboard
                                    </button>
                                    <div className='w-full flex items-end justify-end'>
                                        <AiOutlineLogout title="LogOut" className='tooltip w-[24px] h-[24px] cursor-pointer rotate-[270deg] text-white hover:opacity-70 transition-all transform ease-in-out duration-300' />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Nav
