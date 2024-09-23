import React, { useState } from 'react'
import logo from '../../../assets/vacvault.svg'

const DeleteItem = ({ deleteItem, setDeleteItem }) => {
    const [isClosing, setIsClosing] = useState(false);
    const hideModal = (event) => {
        const modal = document.getElementById('modal');
        // Check if the clicked element is outside of the modal
        if (event.target !== modal && !modal.contains(event.target)) {
            setIsClosing(true);
            setTimeout(() => {
                setDeleteItem(null); // Call the function to close the modal
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
                        <div className=' xf:w-[360px] xm:w-[428px] sm:w-[518px] sm:min-h-[413px] rounded-[30px] px-[16px] xs:px-[24px] xf:px-[30px] sm:px-[45px] pt-[30px] sm:pt-[65px] pb-[30px] sm:pb-[46px] flex flex-col gap-[30px] sm:gap-[41px] items-center justify-center text-center'>
                            <img src={logo} alt="logo" className=' w-[98px] h-[56px]' />
                            <div className='w-full flex flex-col gap-[7px] items-center justify-center text-center'>
                                <h1 className=' font-bold text-[18px] text-black'>Delete</h1>
                                <p className=' text-[16px] text-[#707070]'>Are you sure you want to delete this item?</p>
                            </div>

                            <div className='w-full flex gap-[24px] items-center justify-center'>
                                <button onClick={() => setDeleteItem(null)} type="button" className=' w-[120px] xf:w-[130px] xm:w-[171px] h-[45px] rounded-[30px] border-solid border-[2px] border-[#AAAAAA] flex items-center justify-center text-center text-[18px] text-black hover:opacity-70 transform transition-all ease-in-out duration-300'>Cancel</button>
                                <button type="button" className=' w-[120px] xf:w-[130px] xm:w-[171px] h-[45px] rounded-[30px] bg-[#EB0728] flex items-center justify-center text-center text-[18px] text-white hover:opacity-70 transform transition-all ease-in-out duration-300'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" opacity-70 fixed inset-0 z-[60] bg-black"></div>
        </div>
    )
}

export default DeleteItem
