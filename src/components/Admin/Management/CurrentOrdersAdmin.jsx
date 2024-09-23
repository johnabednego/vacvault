import React, { useState } from 'react'
import ViewOrderAdmin from './ViewOrderAdmin/ViewOrderAdmin'

const CurrentOrdersAdmin = () => {
  const [viewOrderAdmin, setViewOrderAdmin] = useState(null)
  return (
    <div>
      {
        viewOrderAdmin ?
          <ViewOrderAdmin viewOrderAdmin={viewOrderAdmin} setViewOrderAdmin={setViewOrderAdmin} />
          :

          <div className='w-full'>
            <div className=' w-full border-solid border-[1px] border-black' />

            {/**Item */}
            <div className=' w-full flex items-center justify-between py-[25px] border-solid border-b-[1px] border-b-black'>
              <h1 className=' font-bold text-[18px] md:text-[20px] lg:text-[24px] text-black'>5 items</h1>
              <h1 className=' text-[18px] md:text-[20px] lg:text-[24px] text-black'><span className=' font-bold'>Date:</span> 24-01-11</h1>
              <button onClick={() => setViewOrderAdmin(1)} type='button' className=' rounded-[10px] flex items-center justify-center text-center px-[23px] h-[40px] font-semibold text-[18px] sm:text-[20px] bg-black text-white hover:opacity-70 shadow-dashboard transition-all duration-300'>View</button>
            </div>

            {/**Item */}
            <div className=' w-full flex items-center justify-between py-[25px] border-solid border-b-[1px] border-b-black'>
              <h1 className=' font-bold text-[18px] md:text-[20px] lg:text-[24px] text-black'>5 items</h1>
              <h1 className=' text-[18px] md:text-[20px] lg:text-[24px] text-black'><span className=' font-bold'>Date:</span> 24-01-11</h1>
              <button onClick={() => setViewOrderAdmin(1)} type='button' className=' rounded-[10px] flex items-center justify-center text-center px-[23px] h-[40px] font-semibold text-[18px] sm:text-[20px] bg-black text-white hover:opacity-70 shadow-dashboard transition-all duration-300'>View</button>
            </div>
          </div>
      }
    </div>
  )
}

export default CurrentOrdersAdmin
