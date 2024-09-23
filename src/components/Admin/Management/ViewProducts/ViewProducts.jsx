import React from 'react'
import backIcon from '../../../Dashboard/assets/backIcon.svg'

const ViewProducts = ({setViewProductList}) => {
  return (
    <div className='w-full flex flex-col'>
      <div data-aos="fade-right" data-aos-duration="3000" className=' mt-[50px] w-full flex flex-col '>
        <div className='w-full flex justify-between'>
          <img onClick={() => setViewProductList(null)} src={backIcon} alt="backIcon" className='cursor-pointer w-[36.06px] h-[36.06px] transform transition-all ease-in-out duration-300 hover:opacity-70' />
          <button className=' w-auto h-[48px] px-[22px] bg-[#51336A] rounded-[10px] font-semibold text-[20px] text-white hover:opacity-70 transform transition-all ease-in-out duration-300 shadow-dashboard'>Add Product</button>
        </div>
      </div>
    </div>
  )
}

export default ViewProducts
