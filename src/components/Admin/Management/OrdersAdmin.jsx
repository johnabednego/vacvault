import React, { useState } from 'react'
import CurrentOrdersAdmin from './CurrentOrdersAdmin'
import PastOrdersAdmin from './PastOrdersAdmin'

const OrdersAdmin = ({viewProductList, setViewProductList}) => {
    const [switchOrders, setSwitchOrders] = useState(0)

    const handleSwitchOrders = (value) => {
        setSwitchOrders(value)
    }
    return (
        <div className='w-full flex flex-col'>
            <div className=' mt-[50px] w-full'>
                <div className='w-full flex items-center justify-between'>
                    <h1 className=' font-bold text-[24px] xm:text-[32px] sm:text-[40px] text-black'>Orders</h1>
                    <button type='button' onClick={()=>setViewProductList(1)} className=' cursor-pointer px-[16px] sm:px-[22px] h-[40px] sm:h-[48px] rounded-[10px] bg-black flex items-center justify-center text-center font-semibold text-[18px] sm:text-[20px] text-white hover:opacity-70 transform transition-all ease-in-out duration-300 shadow-dashboard'>View Products</button>
                </div>
            </div>

            {/**Types of Orders */}
            <div className=' flex justify-between sm:justify-start sm:gap-[8%] md:gap-[15%] mt-[41px]'>

                {switchOrders === 0 ?
                    <button className=' cursor-not-allowed flex flex-col gap-[5px]'>
                        <div data-aos="zoom-in" data-aos-duration="3000" className=' font-medium text-[16px] sm:text-[25px] xl:text-[32px] text-black'>Current Orders</div>
                        <div data-aos="flip-left" data-aos-duration="3000" className=' w-[128px] sm:w-[190px] xl:w-[246px] h-1 bg-gradient-to-r from-transparent to-black' />
                    </button> :
                    <button onClick={() => handleSwitchOrders(0)} className=' flex flex-col hover:opacity-70 transform transition-all ease-in-out duration-300 '>
                        <h1 className=' font-medium text-[#8B99B1] text-[16px] sm:text-[25px] xl:text-[32px]'>Current Orders</h1>
                    </button>
                }
                {switchOrders === 1 ?
                    <button className=' cursor-not-allowed flex flex-col gap-[5px]'>
                        <div data-aos="zoom-in" data-aos-duration="3000" className=' font-medium text-[16px] sm:text-[25px] xl:text-[32px] text-black'>Past Orders</div>
                        <div data-aos="flip-left" data-aos-duration="3000" className=' w-[105px] sm:w-[155px] xl:w-[200px] h-1 bg-gradient-to-r from-transparent to-black' />
                    </button> :
                    <button onClick={() => handleSwitchOrders(1)} className=' flex flex-col hover:opacity-70 transform transition-all ease-in-out duration-300 '>
                        <h1 className=' font-medium text-[#8B99B1] text-[16px] sm:text-[25px] xl:text-[32px]'>Past Orders</h1>
                    </button>
                }
            </div>

            {/**Orders */}
            <div className=' w-full mt-[30px] flex flex-col gap-[30px]'>
                {switchOrders === 0 ?
                    <CurrentOrdersAdmin /> :
                    <PastOrdersAdmin />
                }
            </div>
        </div>
    )
}

export default OrdersAdmin
