import React from 'react'
import backIcon from '../assets/backIcon.svg'

const ViewNotification = ({ setViewNotification }) => {
    return (
        <div data-aos="fade-right" data-aos-duration="3000" className=' w-full flex flex-col gap-[20px]  py-[20px] bg-white rounded-br-[30px] rounded-tl-[30px]'>
            <img onClick={() => setViewNotification(null)} src={backIcon} alt="backIcon" className='cursor-pointer w-[36.06px] h-[36.06px] transform transition-all ease-in-out duration-300 hover:opacity-70' />

            <div className='w-full flex flex-col gap-4 mt-3'>
                <h1 className=' font-bold text-[24px]'>Your Order has been Purchased and is On Its Way!</h1>
                <div className='w-full flex flex-col gap-3 text-[14px]'>
                    <p>Dear John,</p>
                    <p>We are pleased to inform you that your shopping items have been successfully purchased and are now on their way to you. Our delivery team is working diligently to ensure your items arrive promptly.</p>
                    <p>Order Details:</p>
                    <p>Items Purchased: 5 Items<br></br>
                        Estimated Delivery Date: Tuesday, 24th August 2024.<br></br>
                        If you have any questions or need further assistance, please do not hesitate to contact us at 0247157301
                    </p>
                    <p>Thank you for shopping with us!</p>
                    <p>
                    Best regards,<br></br>
                    Vacvault
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ViewNotification
