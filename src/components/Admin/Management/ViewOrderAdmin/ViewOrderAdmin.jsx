import React, { useState } from 'react'
import backIcon from '../../../Dashboard/assets/backIcon.svg'
import bag2 from '../../../../pages/Shop/assets/bag2.png'
import { FaEye } from 'react-icons/fa'
import ViewOrderAdminProduct from './ViewOrderAdminProduct'

const ViewOrderAdmin = ({ viewOrderAdmin, setViewOrderAdmin }) => {
    const [viewOrderAdminProduct, setViewOrderAdminProduct] = useState(null)
    return (
        <div>
            {viewOrderAdminProduct ?
                <ViewOrderAdminProduct setViewOrderAdminProduct={setViewOrderAdminProduct} /> : null}
            <div data-aos="fade-right" data-aos-duration="3000" className=' w-full flex flex-col gap-[20px]  py-[20px] px-[30px] bg-white rounded-br-[30px] rounded-tl-[30px]'>
                <img onClick={() => setViewOrderAdmin(null)} src={backIcon} alt="backIcon" className='cursor-pointer w-[36.06px] h-[36.06px] transform transition-all ease-in-out duration-300 hover:opacity-70' />
                <div className=' w-full flex flex-col gap-[30px]'>
                    {/** Items*/}
                    <div className='w-full flex flex-col'>
                        <div className=' w-full flex flex-wrap gap-2 items-center justify-between'>
                            <h1 className='font-bold text-[18px] md:text-[20px] lg:text-[24px] text-black'>Items</h1>
                            <h1 className='whitespace-nowrap text-[18px]'>Subtotal (5 items)</h1>
                        </div>

                        <div className=' w-full flex flex-col xm:flex-row gap-[30px] pt-[20px] pb-[13px] border-solid border-b-[1px] border-b-[#D5D9D9]'>
                            <img src={bag2} alt="bag2" className=' w-[200px] h-[200px] xm:w-[232px] xm:h-[235px] object-cover object-center' />
                            <div className='flex flex-col gap-5'>
                                <h1 className=' text-[18px]'>Three in One Luggage</h1>
                                <div className='flex xm:flex-col gap-5'>
                                    <div className='flex flex-col'>
                                        <h1 className='text-[14px]'><span className=' font-bold'>Color:</span> Black</h1>
                                        <h1 className='text-[14px]'><span className=' font-bold'>Quantity:</span> 1</h1>
                                    </div>
                                    <button onClick={() => setViewOrderAdminProduct(1)} className=' w-fit flex gap-1 items-center bg-black text-white py-2 px-4 rounded-lg font-bold hover:opacity-70 transform transition-all ease-in-out duration-300'> <FaEye className='w-[25px] h-[20px]' /> <span>View</span></button>
                                </div>
                                <div className=' mt-[20px] flex items-center gap-[10px]'>
                                    <button className=' text-[#007185] hover:opacity-70'>Share</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewOrderAdmin
