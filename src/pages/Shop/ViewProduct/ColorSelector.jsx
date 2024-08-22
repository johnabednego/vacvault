import React from 'react'

const colorData = ["Any", "Black", "White", "Red", "Blue", "Green", "Yellow", "Violet"]


const ColorSelector = ({ setOpenColorSelector, openColorSelector, setColorSelected, colorSelected, setColor, color }) => {

    const hideColorSelector = (event) => {
        const modal = document.getElementById('quantity');
        // Check if the clicked element is outside of the modal
        if (event.target !== modal && !modal.contains(event.target)) {
            setOpenColorSelector(false)
        }
    }

    return (
        <div onClick={hideColorSelector} className={` ml-12 mt-[-18px] w-full flex items-start cursor-pointer`}>
            <div
                className=" cursor-pointer w-[60px] h-full flex overflow-x-hidden overflow-y-auto outline-none focus:outline-none scrollbar-hide z-10"
            >
                <ul
                    id='quantity'
                    className={` border-solid border-[1px] border-[#D5D9D9] ${!openColorSelector ? "hidden" : ""} w-[60px] rounded-[5px] absolute shadow-input bg-white overflow-y-auto ${openColorSelector ? colorData?.length < 6 ? "max-h-fit" : "h-[190px]" : "max-h-0"
                        }`}
                >
                    {colorData && colorData.length > 0 ? colorData?.map((item, index) => (
                        <li
                            key={index}
                            className={`p-2 text-sm hover:bg-[#D5D9D9]
    ${item === colorSelected &&
                                "bg-[#D5D9D9]"
                                }
    ${item === color
                                    ? "block"
                                    : !openColorSelector ? "hidden" : "block"
                                }`}
                            onClick={() => {
                                if (item !== colorSelected) {
                                    setColorSelected(item);
                                    setOpenColorSelector(false);
                                    setColor(item)
                                } else {
                                    setOpenColorSelector(false);
                                    setColorSelected(item);
                                    setColor(item)
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

export default ColorSelector
