import React, { useState } from 'react'
import OrderSuccessful from './OrderSuccessful'

const OrderSuccessfulModal = ({setOpenOrderSuccess}) => {
    const [isClosing, setIsClosing] = useState(false);


    return (
        <div>
            <div
                className=" h-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  z-[70] outline-none focus:outline-none scrollbar-hide"
            >
                <div data-aos="zoom-in" data-aos-duration="3000" id='modal' className={`relative my-6 mx-2 xm:mx-0 ${isClosing ? 'zoom-out' : ''}`}>
                    {/*content*/}
                    <div className="  cursor-default border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <OrderSuccessful setOpenOrderSuccess={setOpenOrderSuccess} setIsClosing={setIsClosing} />
                    </div>
                </div>
            </div>
            <div className=" opacity-70 fixed inset-0 z-[60] bg-black"></div>
        </div>
    )
}

export default OrderSuccessfulModal
