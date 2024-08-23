import React from 'react'
import CartHero from './CartHero'
import ShoppedItem from './ShoppedItem'
import Checkout from './Checkout'
import RecommemdedProducts from './RecommemdedProducts'

const CartView = ({ setOpenCart }) => {
  return (
    <div>
      <CartHero setOpenCart={setOpenCart} />
      <div className='w-full flex flex-col lg:flex-row gap-5 lg:gap-1'>
        <div className='w-full flex justify-center mb-[20px] lg:hidden'>
          <Checkout />
        </div>
        <div className="w-full flex flex-col lg:flex-1">
          <ShoppedItem />
          <ShoppedItem />
          <ShoppedItem />
          <ShoppedItem />
          <ShoppedItem />
        </div>
        <div className="w-full flex flex-col gap-[50px] lg:flex-1 lg:items-end">
          <div className=' hidden lg:flex'>
            <Checkout />
          </div>
          <RecommemdedProducts />
        </div>
      </div>
    </div>
  )
}

export default CartView
