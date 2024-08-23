import React from 'react'
import bag2 from '../assets/bag2.png'

const RecommemdedProducts = () => {
    return (
        <div className=' w-full lg:w-[375px] h-[630px] rounded-[8px] p-[40px] flex flex-col gap-[50px] items-start border-solid border-[1px] border-[#D5D9D9]'>
            <h1 className=' font-bold text-[16px]'>You might also like</h1>
            <div className=' w-full flex flex-col gap-[25px]'>
                {/**Item */}
                <div className='flex gap-3'>
                    <img src={bag2} alt="bag2" className=' w-[100px] h-[100px] object-cover object-center' />
                    <div className='flex flex-col gap-5'>
                        <h1 className=' text-[18px]'>Three in One Luggage</h1>
                        <button className=' hover:opacity-80 px-[10px] w-fit h-[35px] rounded-[6px] bg-gradient-to-r from-[#51336A] to-[#9F64D0] font-bold text-[12px] text-white border-solid border-[1px] border-[#51336A] transition-all transform ease-in-out duration-300'>Add to Cart</button>
                    </div>
                </div>
                <hr />
                {/**Item */}
                <div className='flex gap-3'>
                    <img src={bag2} alt="bag2" className=' w-[100px] h-[100px] object-cover object-center' />
                    <div className='flex flex-col gap-5'>
                        <h1 className=' text-[18px]'>Three in One Luggage</h1>
                        <button className=' hover:opacity-80 px-[10px] w-fit h-[35px] rounded-[6px] bg-gradient-to-r from-[#51336A] to-[#9F64D0] font-bold text-[12px] text-white border-solid border-[1px] border-[#51336A] transition-all transform ease-in-out duration-300'>Add to Cart</button>
                    </div>
                </div>
                <hr />
                {/**Item */}
                <div className='flex gap-3'>
                    <img src={bag2} alt="bag2" className=' w-[100px] h-[100px] object-cover object-center' />
                    <div className='flex flex-col gap-5'>
                        <h1 className=' text-[18px]'>Three in One Luggage</h1>
                        <button className=' hover:opacity-80 px-[10px] w-fit h-[35px] rounded-[6px] bg-gradient-to-r from-[#51336A] to-[#9F64D0] font-bold text-[12px] text-white border-solid border-[1px] border-[#51336A] transition-all transform ease-in-out duration-300'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommemdedProducts
