import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import grayCartIcon from '../assets/gray-cart.svg'

const CartHero = ({setOpenCart}) => {
    return (
        <div className=' w-full flex flex-col gap-5 mt-[15px] mb-5'>
            <div className=' w-full flex items-center justify-between'>
                {/**Arrow */}
                <FaArrowLeftLong onClick={()=>setOpenCart(null)} className=' cursor-pointer w-[20px] h-[15.7px] text-[#51336A]' />
                {/**Cart */}
                <div className=' w-full flex items-center justify-end'>
                    <button className='flex flex-col'>
                        <div className=' min-w-[41px] flex items-center justify-center mb-[-7px]'>
                            <h1 className=' font-bold text-[#6348A5] text-[16px] text-opacity-30'>10</h1>
                        </div>
                        <div className='flex items-center gap-[5px]'>
                            <img src={grayCartIcon} alt="grayCartIcon" className='w-[40.83px] h-[28.58px]' />
                            <h1 className=' font-bold text-black text-[14px] text-opacity-30'>Cart</h1>
                        </div>
                    </button>
                </div>
            </div>

            <div className='w-full flex items-center justify-center text-center'>
                <h1 className=' font-bold text-[20px] text-black'>Shopping Cart</h1>
            </div>
            <hr  className=' w-full h-[1px] text-[#D5D9D9]'/>
        </div>
    )
}

export default CartHero
