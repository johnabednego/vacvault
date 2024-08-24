import React from 'react'
import logo from '../../../components/assets/vacvault.svg'
import successIcon from '../../../components/assets/success.svg'
const OrderSuccessful = ({setOpenOrderSuccess, setIsClosing}) => {

  const hideModal = (event) => {
        setIsClosing(true);
        setTimeout(() => {
            setOpenOrderSuccess(null)  // Call the function to close the modal
        }, 300); // Duration of the zoom-out animation
}

  return (
    <div className=' w-full xm:w-[418px] sm:w-[518px] sm:min-h-[413px] px-[25px] sm:px-[45px] pt-[35px] sm:pt-[65px] pb-[46px] flex flex-col items-center sm:justify-between'>
      <div className=' w-full flex flex-col items-center'>
        <img src={logo} alt="logo" className=' w-[98px] h-[56px]' />
        <img src={successIcon} alt="success" className=' w-[35px] h-[35px] mt-[11px]' />
        <h1 className=' mt-[15px] font-bold text-[18px]'>Order Successful</h1>
        <div className=' w-full flex flex-col text-center text-[14px] text-[#AAAAAA]'>
          <p>Your order has been successfully submitted.</p>
          <p>We’ll review your request and get back to you shortly.</p>
          <p>Thanks for your patience.</p>
        </div>
      </div>
      <button onClick={()=>hideModal()} className=' mt-[15px] w-full h-[40px] rounded-[30px] bg-[#6348A5] text-white text-[16px]'>Home</button>
    </div>
  )
}

export default OrderSuccessful
