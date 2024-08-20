import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import bestOffers from './assets/bestOffers.svg'
import bag from './assets/bag.png'
import bag2 from './assets/bag2.png'

const ShoppingItems = () => {
    return (
        <div className='pt-[50px] pb-[100px]'>
            {/**Search */}
            <div className='w-full flex items-center justify-center'>
                <div className='flex w-[710.39px] h-[40px]'>
                    {/**All */}
                    <button className='min-w-[52px] pl-[10px] h-full rounded-l-full bg-black flex items-center justify-center text-white text-[12px]'>
                        <span>All</span>
                        <IoMdArrowDropdown className=' w-[25px] h-[20px]' />
                    </button>
                    {/**Input */}
                    <input type="text" className=' w-full h-full pl-[10px] border-solid border-y-[1px] border-y-black outline-none' placeholder='Search Vacvault' />
                    {/**Quick Search */}
                    <button className='min-w-[45px] h-full rounded-r-full bg-black flex items-center justify-center text-white text-[12px]'>
                        <IoSearchSharp className=' w-[25px] h-[20px]' />
                    </button>
                </div>
            </div>


            {/**Items */}
            <div className='w-full flex flex-wrap gap-[40px] mt-[50px]'>
                {/**Item */}
                <div className=' relative w-[309px] h-[301px] '>
                    {/**Best Offers tag */}
                    <img src={bestOffers} alt="" className=' absolute mt-[5px]' />
                    {/**Item attributes */}
                    <div className=' ml-[5px] w-[301px] h-[301px] rounded-[10px] border-solid border-[1px] border-black overflow-hidden'>
                        <img src={bag} alt="item" className=' w-full h-[197px] object-cover object-center' />
                        <div className=' w-full flex flex-col gap-[10px] p-[12px] text-black'>
                            <h1 className=' font-bold text-[16px]'>Three in One Luggage </h1>
                            <p className=' text-[14px]'>Three in One Luggage for all use. It is  best for all usage and boundaries...</p>
                        </div>
                    </div>
                </div>
                {/**Item 2 */}
                <div className=' relative w-[309px] h-[301px] '>
                    {/**Best Offers tag */}
                    <img src={bestOffers} alt="" className=' absolute mt-[5px]' />
                    {/**Item attributes */}
                    <div className=' ml-[5px] w-[301px] h-[301px] rounded-[10px] border-solid border-[1px] border-black overflow-hidden'>
                        <img src={bag2} alt="item" className=' w-full h-[197px] object-cover object-center' />
                        <div className=' w-full flex flex-col gap-[10px] p-[12px] text-black'>
                            <h1 className=' font-bold text-[16px]'>Three in One Luggage </h1>
                            <p className=' text-[14]px'>Three in One Luggage for all use. It is  best for all usage and boundaries...</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShoppingItems
