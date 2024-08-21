
import React, { useState, useEffect, useRef } from "react";

const Selector = ({ options, open, setOpen, productName, setproductName }) => {
  const [data, setData] = useState(options);
  const [selected, setSelected] = useState("");
  const selectorRef = useRef(null);


  const hideSelector = (event) => {
    const modal = document.getElementById('modal');
    // Check if the clicked element is outside of the modal
    if (event.target !== modal && !modal.contains(event.target)) {
      setOpen(!open)
    }
  }


  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);


  useEffect(() => {
    const filteredOptions = options?.filter(
      (option) => option?.name.toLowerCase().includes(productName?.toLowerCase())
    );
    setData(filteredOptions);
  }, [options]);

  return (
    <div ref={selectorRef} className={`sm:w-[12.75rem] md:w-[14.75rem] lg:w-[16.75rem] xl:w-[18.75rem] cursor-pointer`}>
      <div>
        <div
          onClick={hideSelector}
          className=" cursor-pointer w-full h-full justify-center flex overflow-x-hidden overflow-y-auto z-[70] outline-none focus:outline-none scrollbar-hide"
        >
          <ul
            id='modal'
            className={` ${!open ? "hidden" : ""} rounded-[20px] mt-2 w-[90%] sm:w-[12.75rem] md:w-[14.75rem] lg:w-[16.75rem] xl:w-[18.75rem] absolute shadow-input bg-white overflow-y-auto z-50 ${open ? options?.length < 6 ? "max-h-fit" : "h-[190px]" : "max-h-0"
              }`}
          >
            {options && options.length > 0 ? options?.map((item, index) => (
              <li
                key={index}
                className={`p-2 text-sm hover:bg-[#EB0728] hover:text-white
                                    ${item?.name.toLowerCase() === selected?.toLowerCase() &&
                  "bg-[#EB0728] text-white"
                  }
                                    ${item?.name.toLowerCase().includes(productName)
                    ? "block"
                    : !open ? "hidden" : "block"
                  }`}
                onClick={() => {
                  if (item?.name.toLowerCase() !== selected.toLowerCase()) {
                    setSelected(item?.name);
                    setOpen(false);
                    setproductName(item?.name)
                  } else {
                    setOpen(false);
                    setSelected(item?.name);
                    setproductName(item?.name)
                  }
                }}
              >
                {item?.name}
              </li>
            )) :
              <li className="p-2 text-sm text-[#EB0728]">no results found</li>
            }
          </ul>
        </div>
        <div className="opacity-70 fixed z-[60] bg-black"></div>
      </div>
    </div>
  );
};
export default Selector;
