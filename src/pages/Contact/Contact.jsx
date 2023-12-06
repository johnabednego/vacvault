import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SetNavSwitch } from '../../features/nav/navSwitchSlice'
import NavWithTitle from '../../components/Nav/NavWithTitle'
import contactIcon from './assets/contact.svg'
import ContactForm from './ContactForm'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (window.location.pathname === "/about") {
            dispatch(SetNavSwitch(1))
        }
        else if (window.location.pathname === "/services") {
            dispatch(SetNavSwitch(2))
        }
        else if (window.location.pathname === "/contact") {
            dispatch(SetNavSwitch(3))
        }
        else {
            dispatch(SetNavSwitch(0))
        }
    }, [dispatch])
    return (
        <div>
            <NavWithTitle title="Contact Us" />
            <div className=' mb-[108px] w-full pt-[150px] xm:pt-[195px] flex flex-col items-center justify-center'>
                <img src={contactIcon} alt="" />
                <div className=' px-[6%] xl:px-[8%] w-full mt-[103px] flex flex-col items-center justify-center text-center'>
                    <h1 className='  font-extrabold text-[24px] xm:text-[28px] sm:text-[32px]'>Contact information</h1>
                    <div className=' gap-5 sm:px-[12%] w-full flex flex-wrap justify-center xm:justify-between items-center mt-[31.39px]'>
                        <div className='text-[16px] flex flex-col'>
                            <h1>Email</h1>
                            <h1 className=' text-[#ADB5BD]'>info@vacvault.@gmail.com</h1>
                        </div>
                        <div className='text-[16px] flex flex-col'>
                            <h1>Phone Number</h1>
                            <h1 className=' text-[#ADB5BD]'>+233234567891</h1>
                        </div>
                    </div>

                    <div className=' mt-[58px]'>
                        <h1 className='  font-extrabold text-[24px] xm:text-[28px] sm:text-[32px]'>Contact</h1>
                        <h1 className=' mt-[31.39px] md:w-[679px] text-[16px] text-center'>If you have any questions, suggestions or complaints, please let us know. We will be happy to
                            answer all your questions. Your recommendations and complaints are very important for us and
                            we value every kind of criticism. Your every criticism will give us a chance to make our service
                            more effective in order to satisfy your needs.</h1>
                    </div>

                    <div className=' w-full mt-[90px]'>
                        <h1 className='  font-extrabold text-[24px] xm:text-[28px] sm:text-[32px]'>Get in touch</h1>
                        <ContactForm/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact
