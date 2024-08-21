import React, { useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import bestOffers from './assets/bestOffers.svg'
import bag from './assets/bag.png'
import bag2 from './assets/bag2.png'


const options = [
    { name: "Luggage" },
    { name: "Bag" },
    { name: "Iron" },
    { name: "Cooker" },
    { name: "Zip" },
    { name: "Spoon" },
]
const ShoppingItems = ({ setViewProductState }) => {
    const [openAllDropDown, setOpenAllDropDown] = useState(false)
    const [productName, setproductName] = useState("")
    const [selected, setSelected] = useState("");
    const [data, setData] = useState(options)

    const hideSelector = (event) => {
        const modal = document.getElementById('modal');
        // Check if the clicked element is outside of the modal
        if (event.target !== modal && !modal.contains(event.target)) {
            setOpenAllDropDown(false)
        }
    }

    const handleSearchInput = (value) => {
        if (openAllDropDown === false) setOpenAllDropDown(true)
        setproductName(value)
        setData(options?.filter((item) => item.name.toLowerCase().includes(value?.toLowerCase())))
    }

    return (
        <div className='pt-[50px] pb-[100px]'>
            {/**Search */}
            <div className='w-full flex items-center justify-center'>
                <div className='flex w-[710.39px] h-[40px]'>
                    {/**All */}
                    <button onClick={() => setOpenAllDropDown(PREV => !PREV)} className='min-w-[52px] pl-[10px] h-full rounded-l-full bg-black flex items-center justify-center text-white text-[12px]'>
                        <span>All</span>
                        <IoMdArrowDropdown className={` w-[25px] h-[20px] ${openAllDropDown ? "rotate-180" : ""}`} />
                    </button>
                    {/**Input */}
                    <input type="text" value={productName} onChange={(e) => handleSearchInput(e.target.value)} className=' w-full h-full pl-[10px] border-solid border-y-[1px] border-y-black outline-none' placeholder='Search Vacvault' />
                    {/**Quick Search */}
                    <button className='min-w-[45px] h-full rounded-r-full bg-black flex items-center justify-center text-white text-[12px]'>
                        <IoSearchSharp className=' w-[25px] h-[20px]' />
                    </button>
                </div>
            </div>

            {/**Selector */}
            {openAllDropDown ?
                <div onClick={hideSelector} className={` w-full flex items-center justify-center cursor-pointer`}>
                    <div
                        className=" cursor-pointer w-[210px] xs:w-[310px] xf:w-[380px] xm:w-[430px]  sm:w-[510px] md:w-[680px] lg:w-[710.39px] h-full flex overflow-x-hidden overflow-y-auto outline-none focus:outline-none scrollbar-hide z-10"
                    >
                        <ul
                            id='modal'
                            className={` border-solid border-[1px] border-black ${!openAllDropDown ? "hidden" : ""} w-[210px] xs:w-[310px] xf:w-[380px] xm:w-[430px]  sm:w-[510px] md:w-[680px] lg:w-[710.39px] rounded-[20px] mt-2 absolute shadow-input bg-white overflow-y-auto ${openAllDropDown ? data?.length < 6 ? "max-h-fit" : "h-[190px]" : "max-h-0"
                                }`}
                        >
                            {data && data.length > 0 ? data?.map((item, index) => (
                                <li
                                    key={index}
                                    className={`p-2 text-sm hover:bg-black hover:text-white
                            ${item?.name.toLowerCase() === selected?.toLowerCase() &&
                                        "bg-black text-white"
                                        }
                            ${item?.name.toLowerCase().includes(productName)
                                            ? "block"
                                            : !openAllDropDown ? "hidden" : "block"
                                        }`}
                                    onClick={() => {
                                        if (item?.name.toLowerCase() !== selected.toLowerCase()) {
                                            setSelected(item?.name);
                                            setOpenAllDropDown(false);
                                            setproductName(item?.name)
                                        } else {
                                            setOpenAllDropDown(false);
                                            setSelected(item?.name);
                                            setproductName(item?.name)
                                        }
                                    }}
                                >
                                    {item?.name}
                                </li>
                            )) :
                                <li className="p-2 text-sm text-[#6348A5]">no results found</li>
                            }
                        </ul>
                    </div>
                    <div className="fixed inset-0 z-[5] bg-transparent"></div>
                </div> :
                null
            }


            {/**Items */}
            <div className='w-full flex flex-wrap gap-[40px] mt-[50px]'>
                {/**Item */}
                <div className='relative w-[309px] h-[301px] cursor-pointer hover:scale-105 transform transition-all ease-in-out duration-300'>
                    {/**Best Offers tag */}
                    <img src={bestOffers} alt="" className='absolute mt-[5px]' />
                    {/**Item attributes */}
                    <div className='ml-[5px] w-[301px] h-[301px] rounded-[10px] border-solid border-[1px] border-black overflow-hidden'>
                        <img src={bag} alt="item" className='w-full h-[197px] object-cover object-center' />
                        <div className='w-full flex flex-col gap-[10px] p-[12px] text-black'>
                            <h1 className='font-bold text-[16px]'>Three in One Luggage</h1>
                            <p className='text-[14px]'>Three in One Luggage for all use. It is best for all usage and boundaries...</p>
                        </div>
                    </div>
                    {/**Overlay with View Button */}
                    <div className=' ml-[6px] rounded-[10px] w-[301px] h-[301px] absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300'>
                        <button onClick={()=>setViewProductState(1)} className='flex gap-1 items-center bg-white text-black py-2 px-4 rounded-lg font-bold hover:opacity-70 transform transition-all ease-in-out duration-300'> <FaEye className='w-[25px] h-[20px]' /> <span>View</span></button>
                    </div>
                </div>

                {/**Item 2 */}
                <div className='relative w-[309px] h-[301px] cursor-pointer hover:scale-105 transform transition-all ease-in-out duration-300'>
                    {/**Best Offers tag */}
                    <img src={bestOffers} alt="" className='absolute mt-[5px]' />
                    {/**Item attributes */}
                    <div className='ml-[5px] w-[301px] h-[301px] rounded-[10px] border-solid border-[1px] border-black overflow-hidden'>
                        <img src={bag2} alt="item" className='w-full h-[197px] object-cover object-center' />
                        <div className='w-full flex flex-col gap-[10px] p-[12px] text-black'>
                            <h1 className='font-bold text-[16px]'>Three in One Luggage</h1>
                            <p className='text-[14px]'>Three in One Luggage for all use. It is best for all usage and boundaries...</p>
                        </div>
                    </div>
                    {/**Overlay with View Button */}
                    <div className=' ml-[6px] rounded-[10px] w-[301px] h-[301px] absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-300'>
                        <button onClick={()=>setViewProductState(1)} className='flex gap-1 items-center bg-white text-black py-2 px-4 rounded-lg font-bold hover:opacity-70 transform transition-all ease-in-out duration-300'> <FaEye className='w-[25px] h-[20px]' /> <span>View</span></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShoppingItems
