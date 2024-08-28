import React, { useState } from 'react'
import PhoneNumberValidation from '../../PhoneNumberValidation/PhoneNumberValidation'
import errorIcon from '../assets/error.svg'

const Profile = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("233247157301")

    const phoneNumberStyle = { buttonStyle: { "borderTopLeftRadius": "30px", "borderBottomLeftRadius": "30px", "backgroundColor": "#D9D9D9", "width": "70px", "display": "flex", "alignItems": "center", "justifyContent": "center" }, inputStyle: { "backgroundColor": "#F2F2F2", "width": "100%", "display": "flex", "borderRadius": "30px", "height": "40px", "paddingLeft": "75px" }, dropdownStyle: { "marginTop": "260px", "marginLeft": "240px" } }

    return (
        <div className='w-full flex flex-col'>
            <h1 className=' font-bold text-[18px]'>Personal Information</h1>
            <form className="mt-5 w-full flex flex-col gap-[13px]">
                <div className='w-full flex flex-col xl:flex-row gap-[13px]'>
                    <div className=' cursor-not-allowed w-full h-[45px] pl-[21px] rounded-[50px] flex items-center text-center bg-[#E5E5E5] bg-opacity-30 text-[14px] text-[#707070] text-opacity-30'>John</div>
                    <div className=' cursor-not-allowed w-full h-[45px] pl-[21px] rounded-[50px] flex items-center text-center bg-[#E5E5E5] bg-opacity-30 text-[14px] text-[#707070] text-opacity-30'>Jilima</div>
                </div>

                <div className='w-full flex flex-col xl:flex-row gap-[13px]'>
                    <div className=' cursor-not-allowed w-full h-[45px] pl-[21px] rounded-[50px] flex items-center text-center bg-[#E5E5E5] bg-opacity-30 text-[14px] text-[#707070] text-opacity-30'>jilimajohnabednego@gmail.com</div>
                    {/** Phone number */}
                    <div className='box-border m-0 basis-full flex-grow-0 max-w-full'>
                        <div className=' box-border flex flex-wrap w-full'>
                            <div className=' w-full'>
                                <div className={`${errorMessage === "Phone Number is Required" || errorMessage === "Invalid Phone Number" ? "border-[1px] border-[#EB0728] rounded-[30px]" : ""} w-full flex items-start`}>
                                    {/* <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required type="tel" name="phone number" id="phone_number" data-cy="phone number" placeholder="50 567 990" className=' m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 ' /> */}
                                    <PhoneNumberValidation phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} setErrorMessage={setErrorMessage} phoneNumberStyle={phoneNumberStyle} />
                                </div>
                                {errorMessage === "Phone Number is Required" || errorMessage === "Invalid Phone Number" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{errorMessage}</h1> : null}
                                {errorMessage === "Phone Number is Required" || errorMessage === "Invalid Phone Number" ?
                                    <div className=' w-full flex flex-row-reverse z-50 pb-[33px] -mt-[3.3rem] pr-4'>
                                        <img src={errorIcon} alt="" className=' z-[60]' />
                                    </div> :
                                    null}
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className='font-bold text-[18px] mt-[40px]'>Address</h1>
                <div className='w-full flex flex-col xl:flex-row gap-[13px]'>
                    <div className=' cursor-not-allowed w-full h-[45px] pl-[21px] rounded-[50px] flex items-center text-center bg-[#E5E5E5] bg-opacity-30 text-[14px] text-[#707070] text-opacity-30'>Ghana</div>
                    <div className=' cursor-not-allowed w-full h-[45px] pl-[21px] rounded-[50px] flex items-center text-center bg-[#E5E5E5] bg-opacity-30 text-[14px] text-[#707070] text-opacity-30'>Accra</div>
                </div>

                <div className=' mt-5 w-full flex justify-between gap-[13px]'>
                    <div className='w-full hidden xl:flex flex-1' />
                    <button type='submit' className='w-full h-[45px] rounded-[40px] flex flex-1 items-center justify-center bg-[#51336A] text-white text-[18px]'>Save changes</button>
                </div>
            </form>
        </div>
    )
}

export default Profile
