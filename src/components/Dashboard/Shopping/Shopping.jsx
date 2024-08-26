import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CurrentOrders from './CurrentOrders'
import PastOrders from './PastOrders'


const Shopping = () => {
  const navigate = useNavigate()
  const [switchShoppings, setSwitchShoppings] = useState(0)
  useEffect(() => {

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    };

    scrollToTop()

  }, [])

  const handleSwitchShoppings = (value) =>{
    setSwitchShoppings(value)
  }
  return (
    <div className=' pt-[20px] sm:pt-0 pr-4 xl:pr-[77px] h-full pb-3 overflow-hidden overflow-y-scroll'>
      <div className=' flex justify-between'>
        <h1 className=' font-bold text-[24px] xm:text-[32px] sm:text-[40px] text-black'>Shopping</h1>
        <button onClick={() => navigate("/shop")} type='button' className=' rounded-[10px] flex items-center justify-center text-center px-[22px] h-[48px] font-semibold text-[18px] sm:text-[20px] bg-black text-white hover:opacity-70 shadow-dashboard transition-all duration-300'>Shop</button>
      </div>

      {/**Types of shopping */}
      <div className=' flex justify-between sm:justify-start sm:gap-[8%] md:gap-[15%] mt-[41px]'>

        {switchShoppings === 0 ?
          <button className=' cursor-not-allowed flex flex-col gap-[5px]'>
            <div data-aos="zoom-in" data-aos-duration="3000" className=' font-medium text-[16px] sm:text-[25px] xl:text-[32px] text-black'>Current orders</div>
            <div data-aos="flip-left" data-aos-duration="3000" className=' w-[105px] sm:w-[165px] xl:w-[211px] h-1 bg-gradient-to-r from-transparent to-black' />
          </button> :
          <button onClick={() => handleSwitchShoppings(0)} className=' flex flex-col hover:opacity-70 transform transition-all ease-in-out duration-300 '>
            <h1 className=' font-medium text-[#8B99B1] text-[16px] sm:text-[25px] xl:text-[32px]'>Current orders</h1>
          </button>
        }
        {switchShoppings === 1 ?
          <button className=' cursor-not-allowed flex flex-col gap-[5px]'>
            <div data-aos="zoom-in" data-aos-duration="3000" className=' font-medium text-[16px] sm:text-[25px] xl:text-[32px] text-black'>Past orders</div>
            <div data-aos="flip-left" data-aos-duration="3000"  className=' w-[80px] sm:w-[125px] xl:w-[160px] h-1 bg-gradient-to-r from-transparent to-black' />
          </button> :
          <button onClick={() => handleSwitchShoppings(1)} className=' flex flex-col hover:opacity-70 transform transition-all ease-in-out duration-300 '>
            <h1 className=' font-medium text-[#8B99B1] text-[16px] sm:text-[25px] xl:text-[32px]'>Past orders</h1>
          </button>
        }
      </div>

      {/**Shopping */}
      <div className=' w-full mt-[30px] flex flex-col gap-[30px]'>
        {switchShoppings === 0 ?
          <CurrentOrders /> :
          <PastOrders />
        }
      </div>
    </div>
  )
}

export default Shopping
