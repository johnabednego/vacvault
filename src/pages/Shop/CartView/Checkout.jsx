import React from 'react'

const Checkout = ({setOpenOrderSuccess}) => {
  return (
    <div className=' w-[375px] h-[171px] rounded-[8px] flex flex-col items-center justify-between py-[28px] border-solid border-[1px] border-[#D5D9D9]'>
      <h1 className=' text-[18px]'>Subtotal (3 items)</h1>
      <button onClick={()=>setOpenOrderSuccess(1)} className=' w-[202px] rounded-[6px] py-[10px] bg-gradient-to-r from-[#51336A] to-[#9F64D0] text-white hover:opacity-80 px-[10px] font-bold text-[12px]  border-solid border-[1px] border-[#51336A] transition-all transform ease-in-out duration-300'>Proceed to checkout</button>
    </div>
  )
}

export default Checkout
