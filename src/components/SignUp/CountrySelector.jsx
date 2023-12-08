import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const CountrySelector = ({setUserCountry}) => {
  const [fixedCountries, setFixedCountries] = useState(null)
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);


  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filteredCountry = countries.filter(
      (country) => country?.name.toLowerCase().includes(value.toLowerCase())
    );
    setCountries(filteredCountry);   
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
      });
  }, []);
  return (
    <div className=" w-full cursor-pointer">
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