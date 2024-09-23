import React, { useState } from 'react'
import logo from '../../../assets/vacvault.svg'
import successIcon from '../../../assets/success.svg'

const ItemEditedSuccessfully = ({ setShowItemEditedSuccess }) => {
    const [isClosing, setIsClosing] = useState(false);
    const hideModal = (event) => {
        const modal = document.getElementById('modal');
        // Check if the clicked element is outside of the modal
        if (event.target !== modal && !modal.contains(event.target)) {
            setIsClosing(true);
            setTimeout(() => {
                setShowItemEditedSuccess(false); // Call the function to close the modal
            }, 300); // Duration of the zoom-out animation
        }
    }
    return (
        <div>
            <div
                onClick={hideModal}
                className=" cursor-pointer  md:pt-0 h-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  z-[70] outline-none focus:outline-none scrollbar-hide"
            >
                <div data-aos="zoom-in" data-aos-duration="3000" id='modal' className={`relative my-6 mx-2 xm:mx-0 ${isClosing ? 'zoom-out' : ''}`}>
                    <div className="  cursor-default border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className=' xf:w-[360px] xm:w-[428px] sm:w-[518px] rounded-[30px] px-[16px] xs:px-[24px] xf:px-[30px] sm:px-[45px] pt-[30px] sm:pt-[65px] pb-[30px] sm:pb-[46px] flex flex-col gap-[30px] sm:gap-[66px]'>
                            <div className='w-full flex flex-col gap-[17px]'>
                                <div className='w-full flex flex-col gap-[11px] items-center justify-center'>
                                    <img src={logo} alt="logo" className=' w-[98px] h-[56px]' />
                                    <img src={successIcon} alt="successIcon" className=' w-[35px] h-[35px]' />
                                </div>
                                <div className='w-full flex flex-col gap-[11px] items-center justify-center text-center'>
                                    <h1 className=' font-bold text-[18px] text-black'>Item Edited</h1>
                                    <div className='w-full flex flex-col gap-[10px] text-[14px] text-[#AAAAAA]'>
                                        <p>The item has been Edited successfully.</p>
                                        <p>People will begin to see the update in the lists of items when they are booking.</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={()=> setShowItemEditedSuccess(false)} className=' w-full h-[40px] rounded-[30px] bg-[#6348A5] flex flex-col items-center justify-center text-center text-white text-[16px] hover:opacity-70 transform transition-all ease-in-out duration-300'>Return</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" opacity-70 fixed inset-0 z-[60] bg-black"></div>
        </div>
    )
}

export default ItemEditedSuccessfully
