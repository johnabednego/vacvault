import React, { useState } from 'react'
import BookingsAdmin from '../../components/Admin/Management/BookingsAdmin'
import ViewItems from '../../components/Admin/Management/ViewItems/ViewItems'
import OrdersAdmin from '../../components/Admin/Management/OrdersAdmin'
import ViewProducts from '../../components/Admin/Management/ViewProducts/ViewProducts'

const Management = () => {
    const [managementSwitch, setManagementSwitch] = useState(0)
    const [bookingAdmin, setBookingAdmin] = useState(0)
    const [viewItemList, setViewItemList] = useState(null)
    const [viewProductList, setViewProductList] = useState(null)
    return (
        <div className='w-full flex flex-col items-center'>
            {/**View All Users */}
            <div className='w-full flex items-start justify-start'>
                <button className=' w-[174px] h-[48px] rounded-[10px] bg-[#6348A5] flex items-center justify-center text-center font-semibold text-[20px] text-white hover:opacity-70 transform transition-all ease-in-out duration-300 shadow-dashboard'>View All Users</button>
            </div>
            {/**Switch */}
            <div className={` mt-5 ${managementSwitch === 0 ? " pl-[10px] pr-[40px]" : "pl-[40px] pr-[10px]"} w-[250px] xf:w-[280px] xm:w-[300px] sm:w-[353px] h-[59px] py-[7px] rounded-[80px] flex items-center justify-between border-solid border-[1px] border-[#C1C1C1] shadow-switch`}>

                {
                    managementSwitch === 0 ?
                        <div className='w-full flex items-center justify-between '>
                            <div className="cursor-not-allowed px-[30px] h-[45px] rounded-[30px] bg-[#51336A] text-white flex items-center justify-center text-center  font-bold text-[14px] xf:text-[16px] sm:text-[18px]">Bookings</div>
                            <div onClick={() => setManagementSwitch(1)} className="cursor-pointer text-black flex items-center justify-center text-center  font-bold text-[14px] xf:text-[16px] sm:text-[18px]">Orders</div>
                        </div> :
                        <div className='w-full flex items-center justify-between '>
                            <div onClick={() => setManagementSwitch(0)} className=" cursor-pointer text-black flex items-center justify-center text-center  font-bold text-[14px] xf:text-[16px] sm:text-[18px]">Bookings</div>
                            <div className="cursor-not-allowed px-[30px] h-[45px] rounded-[30px] bg-[#51336A] text-white flex items-center justify-center text-center  font-bold text-[14px] xf:text-[16px] sm:text-[18px]">Orders</div>
                        </div>
                }
            </div>

            {
                managementSwitch === 0 ?
                    viewItemList ?
                        <ViewItems viewItemList={viewItemList} setViewItemList={setViewItemList} /> :
                        <BookingsAdmin viewItemList={viewItemList} setViewItemList={setViewItemList} />
                    :
                    viewProductList ?
                        <ViewProducts viewProductList={viewProductList} setViewProductList={setViewProductList} /> :
                        <OrdersAdmin viewProductList={viewProductList} setViewProductList={setViewProductList} />
            }


        </div>
    )
}

export default Management