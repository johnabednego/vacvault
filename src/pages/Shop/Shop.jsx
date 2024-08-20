import React from 'react'
import Nav from '../../components/Nav/Nav'
import ShopHero from './ShopHero'
import ShoppingItems from './ShoppingItems'
import Footer from '../../components/Footer/Footer'

const Shop = () => {
    return (
        <div>
            <Nav />
            <div className='pt-[80px] px-[8%]'>
                <ShopHero />
                <ShoppingItems />
            </div>
            <Footer />
        </div>
    )
}

export default Shop
