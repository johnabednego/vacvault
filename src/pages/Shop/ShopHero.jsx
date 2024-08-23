import React from 'react'
import cartIcon from './assets/cart.svg'

const ShopHero = ({setOpenCart}) => {
    return (
        <div className=' mt-[15px]'>
            {/**Cart */}
            <div onClick={()=>setOpenCart(1)} className=' w-full flex items-center justify-end'>
                <button className='flex flex-col'>
                    <div className=' min-w-[41px] flex items-center justify-center mb-[-7px]'>
                        <h1 className=' font-bold text-[#6348A5] text-[16px]'>10</h1>
                    </div>
                    <div className='flex items-center gap-[5px]'>
                        <img src={cartIcon} alt="cartIcon" className='w-[40.83px] h-[28.58px]' />
                        <h1 className=' font-bold text-black text-[14px]'>Cart</h1>
                    </div>
                </button>
            </div>

            {/**Description */}
            <div className='w-full flex flex-col gap-[10px] text-center items-center justify-center'>
                <h1 className=' font-bold text-black text-[24px]'>Discover Your Perfect Purchase</h1>
                <div className=' text-[14px] text-[#4B4B4B] text-opacity-70'>
                    <p>Find exactly what you need from our curated selection of items.</p>
                    <p>Use the search bar below to explore!</p>
                </div>
            </div>
        </div>
    )
}

export default ShopHero
