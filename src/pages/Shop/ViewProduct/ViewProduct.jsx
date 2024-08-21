import React, { useState } from 'react'
import bag from '../assets/bag.png'
import arrowIcon from '../assets/arrow.svg'

const ViewProduct = ({ viewProductState }) => {
    const [quantity, setQuantity] = useState(1)

    return (
        <div className=' w-full sm:w-[581px] flex flex-col sm:flex-row gap-[20px] rounded-[30px] shadow-input bg-white pt-[20px] pb-[20px] px-[20px] sm:px-[2.875rem] relative'>
            <img src={bag} alt="bag" className=' w-full object-cover object-center sm:w-[232px] sm:h-[235px] rounded-[10px] shadow-lg' />
            <div className='flex flex-col gap-[42px]'>
                <div className='flex flex-col gap-5'>
                    <h1 className=' font-bold text-[20px]'>Three in One Luggage</h1>
                    <p className=' text-[14px]'>
                        Three in One Luggage for all use. It is  best for
                        all usage and boundaries for all kind of travels
                        and all occasions in good quality.
                    </p>
                    <div className='flex flex-col gap-[3px]'>
                        <h1 className='text-[12px]'><span className=' font-bold'>Color:</span> Black</h1>
                        <div className=' w-fit px-[10px] h-[29px] flex gap-[10px] items-center rounded-[7px] bg-[#F0F2F2] border-solid border-[1px] border-[#D5D9D9]'>
                            <span className=' text-[13px]'>Qty: 1</span>
                            <img src={arrowIcon} alt="arrowIcon" className=' w-[15px]' />
                        </div>
                    </div>
                    <h1 className=' font-bold text-[18px]'>₵500.00</h1>
                </div>
                <button className=' hover:opacity-80 px-[10px] w-fit h-[44px] rounded-[6px] bg-gradient-to-r from-[#51336A] to-[#9F64D0] font-bold text-[14px] text-white border-solid border-[1px] border-[#51336A] transition-all transform ease-in-out duration-300'>Add to Cart</button>
            </div>
        </div>
    )
}

export default ViewProduct
