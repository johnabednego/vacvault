import React, { useEffect, useState } from 'react'
import logo from '../assets/vacvault.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom'
import { AiOutlineLogout } from "react-icons/ai";
import { jwtDecode } from 'jwt-decode';


const AdminNav = ({ adminSwitch, setAdminSwitch }) => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    // Encode the data before storing it
    function encodeData(data) {
        return btoa(data); // Base64 encoding
    }

    // Decode the data after retrieving it
    function decodeData(encodedData) {
        return atob(encodedData); // Base64 decoding
    }


    const toManagement = () => {
        setAdminSwitch(0)
        window.localStorage.setItem(encodeData('adminswitch'), encodeData(0))
    }
    const toNotificationCenter = () => {
        setAdminSwitch(1)
        window.localStorage.setItem(encodeData('adminswitch'), encodeData(1))
    }
    const toHelpDesk = () => {
        setAdminSwitch(2)
        window.localStorage.setItem(encodeData('adminswitch'), encodeData(2))
    }
    const toUserFeedback = () => {
        setAdminSwitch(3)
        window.localStorage.setItem(encodeData('adminswitch'), encodeData(3))
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

    useEffect(() => {

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth', // Smooth scrolling behavior
            });
        };

        scrollToTop()

        const encodedStoredSwitch = window.localStorage.getItem(encodeData('adminswitch'))
        const storedSwitch = decodeData(encodedStoredSwitch)
        const parsedStoredSwitch = parseInt(storedSwitch)
        if (parsedStoredSwitch >= 0 && parsedStoredSwitch <= 3) {
            setAdminSwitch(parsedStoredSwitch)
        }
        else {
            setAdminSwitch(0)
        }
    }, [setAdminSwitch])

    // useEffect(() => {

    //     const scrollToTop = () => {
    //         window.scrollTo({
    //             top: 0,
    //             behavior: 'smooth', // Smooth scrolling behavior
    //         });
    //     };

    //     scrollToTop()

    //     const storedToken = window.localStorage.getItem('jdgbgiusudgfdyudbudvfudhfgbiyfudvifiudubuydfbduvuydfvuy')
    //     const decodedToken = storedToken ? decodeData(storedToken) : null;
    //     const userInfo = decodedToken ? jwtDecode(decodedToken) : null;
    //     if (userInfo) {
    //         if(userInfo?.user?.role==='admin'){
    //             navigate('/admin')
    //         }
    //         else{
    //             navigate('/dashboard')
    //         }
    //     }
    //     else{
    //         navigate('/')
    //     }
    // }, [navigate])

    const LogOut = () =>{
        window.localStorage.clear()
        navigate('/')
    }

    return (
        <>
            <div className=' bg-[#51336A] fixed px-[6%] md:px-[2%] lg:px-[4%] xl:px-[8%] w-full h-[80px] flex items-center justify-between z-20'>
                <img src={logo} alt="" className='w-[98px] h-[56px] md:w-[80px] md:h-[40px] lg:w-[98px] lg:h-[56px]' />

                <div className=' text-[16px] lg:text-[18px] hidden md:flex gap-[25px] lg:gap-[35px]'>
                    <button onClick={() => toManagement()} className={` ${adminSwitch === 0 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>Management</button>
                    <button onClick={() => toNotificationCenter()} className={` ${adminSwitch === 1 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>Notification Center</button>
                    <button onClick={() => toHelpDesk()} className={` ${adminSwitch === 2 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>Help Desk</button>
                    <button onClick={() => toUserFeedback()} className={` ${adminSwitch === 3 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>User Feedback </button>
                </div>

                <div className=' hidden xm:flex items-center gap-[18px] xl:gap-[24.17px] text-[14px]'>
                    <button onClick={() => navigate("/dashboard")} className={` ${window.location.pathname === "/dashboard" ? " opacity-20 cursor-not-allowed" : "hover:opacity-70"} w-[138px] md:w-[120px] lg:w-[138px] h-[40px] md:h-[30px] lg:h-[40px] rounded-[6px] border-solid border-[1px] border-white flex items-center justify-center text-center font-semibold text-[20px] md:text-[18px] lg:text-[20px] text-white shadow-dashboard transform transition-all ease-in-out`}>
                        Dashboard
                    </button>
                    <AiOutlineLogout onClick={()=>LogOut()} title="LogOut" className='tooltip w-[24px] h-[24px] cursor-pointer rotate-[270deg] text-white hover:opacity-70 transition-all transform ease-in-out duration-300' />
                </div>

                <div className=' text-white md:hidden'>
                    <RxHamburgerMenu onClick={toggleMenu} className=' w-8 h-8' />
                </div>
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
                                <button onClick={() => toManagement()} className={` ${adminSwitch === 0 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>Management</button>
                                <button onClick={() => toNotificationCenter()} className={` ${adminSwitch === 1 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>Notification Center</button>
                                <button onClick={() => toHelpDesk()} className={` ${adminSwitch === 2 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>Help Desk</button>
                                <button onClick={() => toUserFeedback()} className={` ${adminSwitch === 3 ? "text-[#989898] cursor-not-allowed" : "text-white cursor-pointer"}`}>User Feedback </button>
                                <div className=' pr-5 w-full justify-between xm:hidden flex flex-col text-[14px] gap-[18px]'>
                                    <button onClick={() => navigate("/dashboard")} className={` ${window.location.pathname === "/dashboard" ? " opacity-20 cursor-not-allowed" : "hover:opacity-70"} w-[138px] h-[40px] rounded-[6px] border-solid border-[1px] border-white flex items-center justify-center text-center font-semibold text-[20px] text-white shadow-dashboard transform transition-all ease-in-out`}>
                                        Dashboard
                                    </button>
                                    <div className='w-full flex items-end justify-end'>
                                        <AiOutlineLogout title="LogOut" className='tooltip w-[24px] h-[24px] cursor-pointer rotate-[270deg] text-white hover:opacity-70 transition-all transform ease-in-out duration-300' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default AdminNav

