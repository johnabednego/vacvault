import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import ShopHero from './ShopHero'
import ShoppingItems from './ShoppingItems'
import Footer from '../../components/Footer/Footer'
import ViewProductModal from './ViewProduct/ViewProductModal'

const Shop = () => {
    const [viewProductState, setViewProductState] = useState(null)

    return (
        <div>
            <Nav />
            <div className='pt-[80px] px-[8%]'>
                <ShopHero />
                <ShoppingItems setViewProductState={setViewProductState} />
                {viewProductState ? <ViewProductModal viewProductState={viewProductState} setViewProductState={setViewProductState} /> : null}
            </div>
            <Footer />
        </div>
    )
}

export default Shop
