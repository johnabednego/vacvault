import React from 'react'
import { FaEye } from "react-icons/fa";
import bag2 from '../assets/bag2.png'

const ShoppedItem = ({setViewCartProductState}) => {
  return (
    <div className=' w-full flex flex-col xm:flex-row gap-[30px] pt-[20px] pb-[13px] border-solid border-b-[1px] border-b-[#D5D9D9]'>
      <img src={bag2} alt="bag2" className=' w-[200px] h-[200px] xm:w-[232px] xm:h-[235px] object-cover object-center' />
      <div className='flex flex-col gap-5'>
        <h1 className=' text-[18px]'>Three in One Luggage</h1>
        <div className='flex xm:flex-col gap-5'>
          <div className='flex flex-col'>
            <h1 className='text-[14px]'><span className=' font-bold'>Color:</span> Black</h1>
            <h1 className='text-[14px]'><span className=' font-bold'>Quantity:</span> 1</h1>
          </div>
          <button onClick={()=>setViewCartProductState(1)} className=' w-fit flex gap-1 items-center bg-black text-white py-2 px-4 rounded-lg font-bold hover:opacity-70 transform transition-all ease-in-out duration-300'> <FaEye className='w-[25px] h-[20px]' /> <span>View</span></button>
        </div>
        <div className=' mt-[20px] flex items-center gap-[10px]'>
          <button className=' text-[#007185] hover:opacity-70'>Delete</button>
          <div className=' h-[25px] border-solid border-[1px] border-[#D5D9D9]' />
          <button className=' text-[#007185] hover:opacity-70'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default ShoppedItem
