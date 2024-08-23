import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import ShopHero from './ShopHero'
import ShoppingItems from './ShoppingItems'
import Footer from '../../components/Footer/Footer'
import ViewProductModal from './ViewProduct/ViewProductModal'
import CartView from './CartView/CartView'

const Shop = () => {
    const [viewProductState, setViewProductState] = useState(null)
    const [openCart, setOpenCart] = useState(null)
    return (
        <div>
            <Nav />
            <div className='pt-[80px]  pb-[100px] px-[8%]'>
                {openCart ?

                    <CartView setOpenCart={setOpenCart} />
                    :
                    <div>
                        <ShopHero setOpenCart={setOpenCart} />
                        <ShoppingItems setViewProductState={setViewProductState} />
                        {viewProductState ? <ViewProductModal viewProductState={viewProductState} setViewProductState={setViewProductState} /> : null}
                    </div>
                }
            </div>
            <Footer />
        </div>
    )
}

export default Shop
