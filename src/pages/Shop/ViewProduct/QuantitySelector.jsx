import React from 'react'

const quantityData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const QuantitySelector = ({setOpenQuantitySelector, openQuantitySelector, setQuantitySelected, quantitySelected, setQuantity, quantity}) => {

    const hideQuantitySelector = (event) => {
        const modal = document.getElementById('quantity');
        // Check if the clicked element is outside of the modal
        if (event.target !== modal && !modal.contains(event.target)) {
            setOpenQuantitySelector(false)
        }
    }

    return (
        <div onClick={hideQuantitySelector} className={` mt-[-18px] w-full flex items-start cursor-pointer`}>
            <div
                className=" cursor-pointer w-[60px] h-full flex overflow-x-hidden overflow-y-auto outline-none focus:outline-none scrollbar-hide z-10"
            >
                <ul
                    id='quantity'
                    className={` border-solid border-[1px] border-[#D5D9D9] ${!openQuantitySelector ? "hidden" : ""} w-[60px] rounded-[5px] absolute shadow-input bg-white overflow-y-auto ${openQuantitySelector ? quantityData?.length < 6 ? "max-h-fit" : "h-[190px]" : "max-h-0"
                        }`}
                >
                    {quantityData && quantityData.length > 0 ? quantityData?.map((item, index) => (
                        <li
                            key={index}
                            className={`p-2 text-sm hover:bg-[#D5D9D9]
    ${item === quantitySelected &&
                                "bg-[#D5D9D9]"
                                }
    ${item === quantity
                                    ? "block"
                                    : !openQuantitySelector ? "hidden" : "block"
                                }`}
                            onClick={() => {
                                if (item !== quantitySelected) {
                                    setQuantitySelected(item);
                                    setOpenQuantitySelector(false);
                                    setQuantity(item)
                                } else {
                                    setOpenQuantitySelector(false);
                                    setQuantitySelected(item);
                                    setQuantity(item)
                                }
                            }}
                        >
                            {item}
                        </li>
                    )) :
                        <li className="p-2 text-sm text-[#6348A5]">no results found</li>
                    }
                </ul>
            </div>
            <div className="fixed inset-0 z-[5] bg-transparent"></div>
        </div>
    )
}

export default QuantitySelector
