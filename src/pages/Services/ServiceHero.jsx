import React from 'react'
import NavWithTitle from '../../components/Nav/NavWithTitle'

const ServiceHero = () => {
    return (
        <div>
            <NavWithTitle title="Our Services" />
            <div className='w-full  pt-[95px] xm:pt-[195px] bg-[#51336A]'>
                {/* <img src={woman} alt="" className='' /> */}
                <div className=' px-[6%] xl:px-[8%] w-full h-[670px] flex items-center justify-center bg-holding_bag bg-center bg-cover'>
                        <h1 className=' -mt-5 leading-[47px] md:w-[700px] text-center text-[20px] sm:text-[24px] text-white'>At Vacvault, we offer comprehensive solutions to simplify student life. Secure storage for vacation belongings, plus essential student items available for purchase. Your one-stop destination for convenience.</h1>
                </div>
            </div>
        </div>
    )
}

export default ServiceHero
