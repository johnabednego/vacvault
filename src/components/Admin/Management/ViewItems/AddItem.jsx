import React, { useState } from 'react'

const AddItem = ({ setShowAddModal, setShowItemAddedSuccess }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const hideModal = (event) => {
        const modal = document.getElementById('modal');
        // Check if the clicked element is outside of the modal
        if (event.target !== modal && !modal.contains(event.target)) {
            setIsClosing(true);
            setTimeout(() => {
                setShowAddModal(null); // Call the function to close the modal
            }, 300); // Duration of the zoom-out animation
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowAddModal(null);
        setShowItemAddedSuccess(true)
    }

    return (
        <div>
            <div
                onClick={hideModal}
                className=" cursor-pointer md:pt-0 h-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  z-[70] outline-none focus:outline-none scrollbar-hide"
            >
                <div data-aos="zoom-in" data-aos-duration="3000" id='modal' className={`relative my-6 mx-2 xm:mx-0 ${isClosing ? 'zoom-out' : ''}`}>
                    {/*content*/}
                    <div className="  cursor-default border-0 rounded-bl-[30px] rounded-tr-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className=' xf:w-[360px] rounded-tl-[30px] rounded-br-[30px] px-[16px] xs:px-[24px] xf:px-[30px] py-[30px] flex flex-col gap-[40px]'>
                            <div className='w-full flex flex-col gap-[10px]'>
                                <h1 className=' font-bold text-[20px]'>Add New Item</h1>
                                <p className=' font-normal text-[#707070] text-[14px]'>Add a new item to the booking list</p>
                            </div>

                            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-[30px]'>
                                <div className='w-full flex flex-col gap-[20px]'>
                                    <input required value={itemName} onChange={(e) => setItemName(e.target.value)} type="text" placeholder='Item name' className=' px-[20px] w-full h-[38px] rounded-[30px] bg-[#E5E5E5] text-black text-[15px]' />
                                    <input
                                        required
                                        value={itemPrice.length > 0 ? `₵${itemPrice}` : itemPrice}  // Append ₵ symbol to display
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/[^\d.]/g, '');  // Remove non-numeric characters
                                            setItemPrice(value);  // Set only the numeric value
                                        }}
                                        type="text"  // Change input type to text to allow the symbol
                                        placeholder='Price'
                                        className='px-[20px] w-full h-[38px] rounded-[30px] bg-[#E5E5E5] text-black text-[15px]'
                                    />
                                </div>
                                <div className='w-full flex items-center justify-center'>
                                    <button type='submit' className=' h-[35px] px-[22px] rounded-[10px] bg-black flex items-center justify-center font-semibold text-[16px] text-white hover:opacity-70 transform transition-all ease-in-out duration-300 shadow-dashboard'>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" opacity-70 fixed inset-0 z-[60] bg-black"></div>
        </div>
    )
}

export default AddItem
