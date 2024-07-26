import React, { useState } from 'react'
import ViewBooking from './ViewBooking'

const ViewBookingModal = ({ bookedView, setBookedView, bookingsType }) => {
    const [isClosing, setIsClosing] = useState(false);

    const hideModal = (event) => {
        const modal = document.getElementById('modal');
        // Check if the clicked element is outside of the modal
        if (event.target !== modal && !modal.contains(event.target)) {
            setIsClosing(true);
            setTimeout(() => {
                setBookedView(null); // Call the function to close the modal
            }, 300); // Duration of the zoom-out animation
        }
    }
    return (
        <div>
            <div
                onClick={hideModal}
                className="cursor-pointer pt-0 h-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[70] outline-none focus:outline-none scrollbar-hide"
            >
                <div data-aos="zoom-in" data-aos-duration="3000" id='modal' className={`relative top-[10%] sm:top-0 mb-3 mx-2 sm:mx-0 ${isClosing ? 'zoom-out' : ''}`}>
                    {/*content*/}
                    <div className="w-full cursor-default border-0 relative rounded-br-[30px] rounded-tl-[30px] shadow-lg flex flex-col bg-white outline-none focus:outline-none max-h-[80vh] overflow-y-auto">
                        <ViewBooking bookingsType={bookingsType} />
                    </div>
                </div>
            </div>
            <div className="opacity-70 fixed inset-0 z-[60] bg-black"></div>
        </div>
    )
}

export default ViewBookingModal
