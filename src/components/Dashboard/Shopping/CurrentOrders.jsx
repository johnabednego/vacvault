import React, { useState } from 'react'
import ViewShopping from './ViewShopping'
import ViewShoppedProductModal from './ViewShoppedProduct/ViewShoppedProductModal'

const CurrentOrders = () => {
  const [viewShopping, setViewShopping] = useState(null)
  const [viewShoppedProductState, setViewShoppedProductState] = useState(null)


  const handleViewShopping = () => {
    setViewShopping(1)
    // Scroll to top when viewShopping is set to true
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling behavior
    });
  }


  return (
    <div>
      {
        viewShopping ?
          <div>
            <ViewShopping setViewShopping={setViewShopping} setViewShoppedProductState={setViewShoppedProductState}/>
            {viewShoppedProductState? <ViewShoppedProductModal viewShoppedProductState={viewShoppedProductState} setViewShoppedProductState={setViewShoppedProductState}/>:null}
          </div>
          :
          <div className='w-full'>
            <div className=' w-full border-solid border-[1px] border-black' />

            {/**Item */}
            <div  className=' w-full flex items-center justify-between py-[25px] border-solid border-b-[1px] border-b-black'>
              <h1 className=' font-bold text-[24px] text-black'>5 items</h1>
              <h1 className=' text-[24px] text-black'><span className=' font-bold'>Date:</span> 24-01-11</h1>
              <button onClick={() => handleViewShopping()} type='button' className=' rounded-[10px] flex items-center justify-center text-center px-[23px] h-[40px] font-semibold text-[18px] sm:text-[20px] bg-black text-white hover:opacity-70 shadow-dashboard transition-all duration-300'>View</button>
            </div>

            {/**Item */}
            <div  className=' w-full flex items-center justify-between py-[25px] border-solid border-b-[1px] border-b-black'>
              <h1 className=' font-bold text-[24px] text-black'>5 items</h1>
              <h1 className=' text-[24px] text-black'><span className=' font-bold'>Date:</span> 24-01-11</h1>
              <button onClick={() => handleViewShopping()} type='button' className=' rounded-[10px] flex items-center justify-center text-center px-[23px] h-[40px] font-semibold text-[18px] sm:text-[20px] bg-black text-white hover:opacity-70 shadow-dashboard transition-all duration-300'>View</button>
            </div>
          </div>
      }
    </div>
  )
}

export default CurrentOrders
