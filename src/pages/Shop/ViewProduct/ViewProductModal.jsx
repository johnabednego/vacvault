import React, { useState } from 'react'
import ViewProduct from './ViewProduct'

const ViewProductModal = ({ viewProductState, setViewProductState }) => {
  const [isClosing, setIsClosing] = useState(false);

  const hideModal = (event) => {
    const modal = document.getElementById('modal');
    // Check if the clicked element is outside of the modal
    if (event.target !== modal && !modal.contains(event.target)) {
      setIsClosing(true);
      setTimeout(() => {
        setViewProductState(null)// Call the function to close the modal
      }, 300); // Duration of the zoom-out animation
    }
  }

  return (
    <div>
      <div
        onClick={hideModal}
        className=" cursor-pointer pt-[200px] md:pt-0 h-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  z-[70] outline-none focus:outline-none scrollbar-hide"
      >
        <div data-aos="zoom-in" data-aos-duration="3000" id='modal' className={`w-[80%] sm:w-auto relative my-6 mx-2 xm:mx-0 ${isClosing ? 'zoom-out' : ''}`}>
          {/*content*/}
          <div className="  cursor-default border-0 rounded-br-[30px] rounded-tl-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <ViewProduct viewProductState={viewProductState} />
          </div>
        </div>
      </div>
      <div className=" opacity-70 fixed inset-0 z-[60] bg-black"></div>
    </div>
  )
}

export default ViewProductModal
