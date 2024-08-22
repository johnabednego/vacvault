import React, { useState } from 'react'
import bag from '../assets/bag.png'
import arrowIcon from '../assets/arrow.svg'
import ColorSelector from './ColorSelector'
import QuantitySelector from './QuantitySelector'

const ViewProduct = ({ viewProductState }) => {

    //Color Selection
    const [color, setColor] = useState("Any")
    const [openColorSelector, setOpenColorSelector] = useState(false)
    const [colorSelected, setColorSelected] = useState("");

    //Quantity Selection
    const [quantity, setQuantity] = useState(1)
    const [openQuantitySelector, setOpenQuantitySelector] = useState(false)
    const [quantitySelected, setQuantitySelected] = useState("");



    return (
        <div className=' w-full xm:w-[400px] sm:w-[581px] flex flex-col sm:flex-row gap-[20px] rounded-[10px]  shadow-input bg-white pt-[20px] pb-[20px] px-[20px] sm:px-[2.875rem] relative'>
            <img src={bag} alt="bag" className=' w-full sm:w-[232px] h-[180px] xm:h-[200px] sm:h-[235px] object-cover object-center rounded-[10px] shadow-lg' />
            <div className='flex flex-col gap-[42px]'>
                <div className='flex flex-col gap-5'>
                    <h1 className=' font-bold text-[20px]'>Three in One Luggage</h1>
                    <p className=' text-[14px]'>
                        Three in One Luggage for all use. It is  best for
                        all usage and boundaries for all kind of travels
                        and all occasions in good quality.
                    </p>

                    {/**Color Selector */}
                    <div className=' flex gap-[10px] items-center text-[12px]'><span className=' font-bold'>Color:</span>
                        <div onClick={() => setOpenColorSelector(true)} className=' cursor-pointer w-fit px-[10px] h-[29px] flex gap-[10px] items-center rounded-[7px] bg-[#F0F2F2] border-solid border-[1px] border-[#D5D9D9]'>
                            <span className=' text-[13px]'>{color}</span>
                            <img src={arrowIcon} alt="arrowIcon" className={` w-[15px] ${openColorSelector ? "rotate-180" : ""}`} />
                        </div>
                    </div>

                    {/**Color Drop down */}
                    {openColorSelector ?
                        <ColorSelector setOpenColorSelector={setOpenColorSelector} openColorSelector={openColorSelector}
                            setColorSelected={setColorSelected} colorSelected={colorSelected} setColor={setColor} color={color}
                        /> :
                        null
                    }


                    {/**Quantity Selector */}
                    <div className=' flex gap-[10px] items-center text-[12px]'><span className=' font-bold'>Quantity:</span>
                        <div onClick={() => setOpenQuantitySelector(true)} className=' cursor-pointer w-fit px-[10px] h-[29px] flex gap-[10px] items-center rounded-[7px] bg-[#F0F2F2] border-solid border-[1px] border-[#D5D9D9]'>
                            <span className=' text-[13px]'>{quantity}</span>
                            <img src={arrowIcon} alt="arrowIcon" className={` w-[15px] ${openQuantitySelector ? "rotate-180" : ""}`} />
                        </div>
                    </div>

                    {/**Quantity Drop down */}
                    {openQuantitySelector ?
                        <QuantitySelector setOpenQuantitySelector={setOpenQuantitySelector} openQuantitySelector={openQuantitySelector}
                            setQuantitySelected={setQuantitySelected} quantitySelected={quantitySelected} setQuantity={setQuantity} quantity={quantity}
                        /> :
                        null
                    }
                </div>
                {/**Button */}
                <div className=' w-full flex justify-center sm:justify-normal'>
                    <button className=' hover:opacity-80 px-[10px] w-fit h-[44px] rounded-[6px] bg-gradient-to-r from-[#51336A] to-[#9F64D0] font-bold text-[14px] text-white border-solid border-[1px] border-[#51336A] transition-all transform ease-in-out duration-300'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct
