import React from 'react'
import logo from './assets/logo.svg'

const Footer = () => {
    return (
        <div className=''>
            <div className=' bg-[#51336A] px-[6%] xl:px-[8%] pt-1 md:pt-[52px] pb-[63.38px] flex flex-col md:flex-row gap-5 justify-between '>
                <img src={logo} alt="" className=' w-[182px] h-[89px] lg:w-[232px] lg:h-[139px]' />
                <div className=' hidden md:flex flex-col gap-[14px] w-[339px]'>
                    <h1 className=' font-medium text-[18px] text-white'>Secure and Convenient Luggage Storage Solution</h1>
                    <h1 className=' font-light text-[15px] text-[#FFFDFD]'>Our luggage storage service provides a secure and
                        convenient solution for travelers to safely store their
                        bags while exploring the city.</h1>
                    <button className=' w-[84px] h-[40px] bg-[#6A57B2] rounded-[6px] flex justify-center items-center text-center text-white text-[14px]'>Read More</button>
                </div>
                <div className='hidden md:flex flex-col gap-[14px] w-[327px]'>
                    <h1 className=' font-medium text-[18px] text-white'>Reliable Storage Solutions for Your Belongings</h1>
                    <h1 className=' font-light text-[15px] text-[#FFFDFD]'>Our Secure Warehousing service provides a highly
                        reliable and controlled environment for the safe
                        storage of your valuable assets.</h1>
                    <button className=' w-[84px] h-[40px] bg-[#6A57B2] rounded-[6px] flex justify-center items-center text-center text-white text-[14px]'>Read More</button>
                </div>

                {/**Small devices */}
                <div className=' flex flex-col sm:flex-row md:hidden w-full justify-between items-center sm:items-start gap-8 sm:gap-5'>
                    <div className=' flex flex-col gap-[14px] sm:w-[239px] md:w-[339px]'>
                        <h1 className=' font-medium text-[18px] text-white'>Secure and Convenient Luggage Storage Solution</h1>
                        <h1 className=' font-light text-[15px] text-[#FFFDFD]'>Our luggage storage service provides a secure and
                            convenient solution for travelers to safely store their
                            bags while exploring the city.</h1>
                        <button className=' w-[84px] h-[40px] bg-[#6A57B2] rounded-[6px] flex justify-center items-center text-center text-white text-[14px]'>Read More</button>
                    </div>

                    <div className='flex flex-col gap-[14px] sm:w-[227px] md:w-[327px]'>
                        <h1 className=' font-medium text-[18px] text-white'>Reliable Storage Solutions for Your Belongings</h1>
                        <h1 className=' font-light text-[15px] text-[#FFFDFD]'>Our Secure Warehousing service provides a highly
                            reliable and controlled environment for the safe
                            storage of your valuable assets.</h1>
                        <button className=' w-[84px] h-[40px] bg-[#6A57B2] rounded-[6px] flex justify-center items-center text-center text-white text-[14px]'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
