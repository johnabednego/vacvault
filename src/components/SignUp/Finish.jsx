import React from 'react'
import CountrySelector from './CountrySelector'

const Finish = ({
    address, setAddress,
    address2, setAddress2,
    digitalAddress, setDigitalAddress,
    setCountry,
    city, setCity,
    zipCode, setZipCode,
    finishError,
}) => {

    return (
        <div className=' box-border flex flex-wrap items-center'>
            {/** address */}
            <div className='  box-border m-0 basis-full flex-grow-0 max-w-full'>
                <div className=' box-border flex flex-wrap w-full'>
                    <div className='w-full flex items-start'>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} required type="text" name="address" id="address" data-cy="address" placeholder="Address" className=' focus:outline-[#51336A] placeholder-[#707070] m-0 text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 ' />
                    </div>
                </div>
            </div>

            {/** optional address */}
            <div className=' mt-[15px]  box-border m-0 basis-full flex-grow-0 max-w-full'>
                <div className=' box-border flex flex-wrap w-full'>
                    <div className='w-full flex items-start'>
                        <input value={address2} onChange={(e) => setAddress2(e.target.value)} type="text" name="address2" id="address2" data-cy="address2" placeholder="Address 2 (Optional)" className=' focus:outline-[#51336A] m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 ' />
                    </div>
                </div>
            </div>

            {/** digital address and country */}
            <div className=' mt-[15px] box-border m-0 basis-full flex-grow-0 max-w-full'>
                <div className=' box-border flex flex-wrap w-full'>
                    <div className=' smallName w-full flex items-start gap-3'>
                        <input value={digitalAddress} onChange={(e) => setDigitalAddress(e.target.value)} type="text" name="digital address" id="digital_address" data-cy="digital address" placeholder="Digital Address" className=' focus:outline-[#51336A] m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 ' />
                        <div className=' w-full'>
                            <div className={` ${finishError === "Country is requied" ? "border-[1px] border-[#51336A] w-full rounded-[30px]" : " w-full"}`}>
                                <CountrySelector setUserCountry={setCountry} />
                            </div>
                            {finishError === "Country is requied" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{finishError}</h1> : null}
                        </div>
                    </div>
                </div>
            </div>
            {/** city and zip code */}
            <div className=' mt-[15px] box-border m-0 basis-full flex-grow-0 max-w-full'>
                <div className=' box-border flex flex-wrap w-full'>
                    <div className=' smallName w-full flex items-start gap-3'>
                        <input value={city} onChange={(e) => setCity(e.target.value)} required type="text" name="city" id="city" data-cy="city" placeholder="City" className=' focus:outline-[#51336A] m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 ' />
                        <input value={zipCode} onChange={(e) => setZipCode(e.target.value)} type="number" name="zip code" id="zip_code" data-cy="zip code" placeholder="Zip Code" className=' focus:outline-[#51336A] appearance-none m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 ' />
                    </div>
                </div>
            </div>
            {/** finish button */}
            <button type="submit" className=' mt-[13px] bg-[#51336A] h-[40px] relative border-none rounded-[30px] select-none text-white text-[1rem] w-full '>Finish</button>

        </div>
    )
}

export default Finish
