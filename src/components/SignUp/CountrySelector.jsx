import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import PopupMessage from "./PopupMessage";

const CountrySelector = ({setUserCountry, setErrorMessage}) => {
  const [fixedCountries, setFixedCountries] = useState(null)
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [fetchingError, setFetchingError] = useState(false)

  const handleInputChange = (e) => {
    if (countries==null){
      setErrorMessage("Check your internet connection and reload!")
    }
    const value = e.target.value;
    setInputValue(value);
    if(value){
      setOpen(true)
    }  
  };

  const handleOpen = () =>{
    setOpen(!open)
      setCountries(fixedCountries)
  }

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setFixedCountries(data)
        setFetchingError(false)
      }).catch(error=>{
       setFetchingError(true)
       console.log(fetchingError)
      })
  }, []);

  useEffect(() => {
    if (!inputValue) {
      // If input value is empty, reset to the original list of countries
      setCountries(fixedCountries);
      return;
    }
  
    const filteredCountry = fixedCountries?.filter(
      (country) => country?.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setCountries(filteredCountry);
  }, [inputValue, fixedCountries]);
  
  return (
    <div className=" w-full cursor-pointer">
       <PopupMessage showMessage={fetchingError} setShowMessage={setFetchingError} />
      <div
        onClick={() => handleOpen()}
        className={` pl-[21px] text-[15px] rounded-[2.5rem] h-[40px] bg-[#E5E5E5] p-2 flex items-center justify-between ${
          !selected && "text-[#707070]"
        }`}
      >
        {/* {selected
          ? selected?.length > 15
            ? selected?.substring(0, 15) + "..."
            : selected
          : "Country"} */}
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Country"
            className="placeholder:text-[#707070] p-2 outline-none bg-[#E5E5E5]"
          />
        <BiChevronDown color="#707070" size={25} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={` shadow-input bg-white mt-2 overflow-y-auto flex flex-col absolute rounded-md z-50 ${
          open ? countries?.length<6? "max-h-fit":"h-[30vh]" : inputValue.length>0? "h-fit": "max-h-0"
        } `}
      >
        {/* <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-[#707070] p-2 outline-none"
          />
        </div> */}
        {countries?.map((country) => (
          <li
            key={country?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              country?.name?.toLowerCase().includes(inputValue)
                ? "block"
                : !open? "hidden":"block"
            }`}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.name);
                setUserCountry(country?.name)
                setOpen(false);
                setInputValue(country?.name);
              }else{
                setOpen(false);
                setSelected(country?.name);
                setInputValue(country?.name);
              }
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountrySelector;