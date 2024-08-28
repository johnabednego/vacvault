import React, { useState } from 'react'
import baseUrl from '../baseUrl.js'
import errorIcon from './assets/error.svg'
import PhoneNumberValidation from '../PhoneNumberValidation/PhoneNumberValidation';
import axios from 'axios';
import visibility_on from './assets/visibility_on.svg'
import visibility_off from './assets/visibility_off.svg'
import CountrySelector from './CountrySelector.jsx'
import { useDispatch } from 'react-redux';
import { SignUpFalse } from '../../features/nav/signUpSlice'
import {SignInTrue} from '../../features/nav/signInSlice.js'

const SignUpForm = ({email, setEmail, setToVerify}) => {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [passowrd, setPassowrd] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isChecked, setIsChecked] = useState(false);


    const passwordOnChange = (value) => {
        setPassowrd(value)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handlePasswordChange = (newPassword) => {
        // checkPasswordStrength(newPassword);
        // console.log(getPasswordStrengthIndicator())
        // Regular expressions to check for lowercase, uppercase, and special characters
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const numeric = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        // Check if the password meets the criteria
        const containsLowercase = lowercaseRegex.test(newPassword);
        const containsUppercase = uppercaseRegex.test(newPassword);
        const containsNumeric = numeric.test(newPassword)
        const containsSpecialChar = specialCharRegex.test(newPassword);

        // You can further use these boolean values to display error messages or change styles.
        // console.log('Contains lowercase:', containsLowercase);
        // console.log('Contains uppercase:', containsUppercase);
        // console.log('Contains special character:', containsSpecialChar);
        if (!containsLowercase) {
            return "Password Must Contain atleast 1  lowercase"
        }
        else if (!containsUppercase) {
            return "Password Must Contain atleast 1 uppercase"
        }
        else if (!containsNumeric) {
            return "Password Must Contain atleast 1 numeric"
        }
        else if (!containsSpecialChar) {
            return "Password Must Contains atleast 1 special character"
        }
        else if (newPassword?.length < 8) {
            return "Password Must be atleast 8 characters long"
        }
        else {
            return ""
        }
    };

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const pattern = /^\+?[1-9]\d{1,14}$/;
        let passwordError = handlePasswordChange(passowrd)
        if (firstName.length < 2) {
            setErrorMessage("First name is Required")
        }
        else if (lastName.length < 2) {
            setErrorMessage("Last name is Required")
        }
        else if (email.length < 1) {
            setErrorMessage("Email is Required")
        }
        else if (!email.includes("@") || email.endsWith("@")) {
            setErrorMessage("Invalid Email")
        }
        else if (phoneNumber.length < 1) {
            setErrorMessage("Phone Number is Required")
        }
        else if (phoneNumber.length < 10 || !pattern.test(phoneNumber)) {
            setErrorMessage("Invalid Phone Number")
        }
        else if (passowrd.length < 1) {
            setErrorMessage("Password is Required")
        }
        else if (passowrd.length < 8) {
            setErrorMessage("Password is too short")
        }
        else if (passwordError.length > 0) {
            setErrorMessage(passwordError)
        }
        else if (confirmPassword.length < 1) {
            setErrorMessage("Confirm Password")
        }
        else if (confirmPassword !== passowrd) {
            setErrorMessage("Password Mismatch")
        }
        else if (country.length < 2) {
            setErrorMessage("Country is requied")
        }
        else if (city.length < 3) {
            setErrorMessage("City is requied")
        }
        else if (!isChecked) {
            setErrorMessage("Agree to Vacvault's terms")
        }
        else {
            setErrorMessage("")
            const data = JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password1: passowrd,
                password2: passowrd,
                phone_number: "+" + phoneNumber,
                country: country,
                city: city,
            })
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${baseUrl}/signup/`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            try {
                await axios.request(config)
                    .then((response) => {
                        console.log(response)
                        setToVerify(true)
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            } catch (error) {
                console.log(error)
            }

        }

    }

    const phoneNumberStyle = {buttonStyle:{ "borderTopLeftRadius": "30px", "borderBottomLeftRadius": "30px", "backgroundColor": "#D9D9D9", "width": "70px", "display": "flex", "alignItems": "center", "justifyContent": "center" }, inputStyle:{ "backgroundColor": "#E5E5E5", "width": "100%", "display": "flex", "borderRadius": "30px", "height": "40px", "paddingLeft": "75px" }, dropdownStyle:{ "marginTop": "260px", "marginLeft": "240px" }}
    return (
        <div className=' smallDevice w-full sm:w-[528px]  rounded-bl-[30px] rounded-tr-[30px] shadow-input bg-white pt-8 pb-[70px] px-[2.875rem] relative'>

            <div className=' mb-[29px]'>
                <h1 className='text-[18px] font-bold '>Welcome to Vacvault</h1>
                <h1 className=' mt-1 text-[14px] text-[#707070] font-normal'>Personal Information</h1>
            </div>
            <div className=''>
                {/**Sign uP */}
                <div className=' box-border flex flex-wrap '>
                    <div className=' box-border m-0 basis-full flex-grow-0 max-w-full '>
                        {/** Email Form */}
                        <div className='box-border m-0 basis-full flex-grow-0 max-w-full'>
                            <form method='post' onSubmit={handleSubmit}>
                                <div className=' box-border flex flex-wrap items-center'>
                                    <div className=' box-border flex flex-wrap items-center'>
                                        {/** First and Last names */}
                                        <div className=' box-border m-0 basis-full flex-grow-0 max-w-full'>
                                            <div className=' box-border flex flex-wrap w-full'>
                                                <div className=' smallName w-full flex items-start gap-3'>
                                                    <div className=' w-full'>
                                                        <input value={firstName} onChange={
                                                            (e) => {
                                                                setFirstName(e.target.value);
                                                                if (e.target.value.length < 0) { setErrorMessage("First name is Required") }
                                                                else if (e.target.value.length < 2) { setErrorMessage("First name is too short") }
                                                                else { setErrorMessage("") }
                                                            }} required type="text" name="first name" id="first_name" data-cy="first name" placeholder="First Name" className={` ${errorMessage === "First name is Required" || errorMessage === "First name is too short" ? " border-[1px] border-[#EB0728]" : ""} focus:outline-[#51336A] m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 `} />
                                                        {errorMessage === "First name is Required" || errorMessage === "First name is too short" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{errorMessage}</h1> : null}
                                                        {errorMessage === "First name is Required" ?
                                                            <div className=' w-full flex flex-row-reverse z-50 pb-[33px] -mt-[3.3rem] pr-4'>
                                                                <img src={errorIcon} alt="" className='' />
                                                            </div> : null}
                                                    </div>
                                                    <div className=' w-full'>
                                                        <input value={lastName} onChange={(e) => {
                                                            setLastName(e.target.value);
                                                            if (e.target.value.length < 0) { setErrorMessage("Last name is Required") }
                                                            else if (e.target.value.length < 2) { setErrorMessage("Last name is too short") }
                                                            else { setErrorMessage("") }
                                                        }} required type="text" name="last name" id="last_name" data-cy="last name" placeholder="Last Name" className={` ${errorMessage === "Last name is Required" || errorMessage === "Last name is too short" ? " border-[1px] border-[#EB0728]" : ""} focus:outline-[#51336A]   m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 `} />
                                                        {errorMessage === "Last name is Required" || errorMessage === "Last name is too short" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{errorMessage}</h1> : null}
                                                        {errorMessage === "Last name is Required" ?
                                                            <div className=' w-full flex flex-row-reverse z-50 pb-[33px] -mt-[3.3rem] pr-4'>
                                                                <img src={errorIcon} alt="" className='' />
                                                            </div> :
                                                            null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/** Email */}
                                        <div className=' mt-[15px]  box-border m-0 basis-full flex-grow-0 max-w-full'>
                                            <div className=' box-border flex flex-wrap w-full'>
                                                <div className='w-full flex items-start'>
                                                    <div className=' w-full'>
                                                        <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" data-cy="email" placeholder="Email" className={` ${errorMessage === "Email is Required" || errorMessage === "Invalid Email" ? " border-[1px] border-[#EB0728]" : ""} focus:outline-[#51336A]  m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 `} />
                                                        {errorMessage === "Email is Required" || errorMessage === "Invalid Email" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{errorMessage}</h1> : null}
                                                        {errorMessage === "Email is Required" || errorMessage === "Invalid Email" ?
                                                            <div className=' w-full flex flex-row-reverse z-50 pb-[33px] -mt-[3.3rem] pr-4'>
                                                                <img src={errorIcon} alt="" className='' />
                                                            </div> :
                                                            null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/** Phone number */}
                                        <div className='  mt-[15px]  box-border m-0 basis-full flex-grow-0 max-w-full'>
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
                                        {/** Password */}
                                        <div className=' mt-[15px] box-border m-0 basis-full flex-grow-0 max-w-full'>
                                            <div className=' box-border flex flex-wrap w-full'>
                                                <div className='w-full flex items-start'>
                                                    <input value={passowrd} onChange={(e) => passwordOnChange(e.target.value)} required type={showPassword ? "text" : "password"} name="password" id="password" data-cy="password" placeholder="Create Password" className={`
                                                                ${(passowrd.length > 0 && handlePasswordChange(passowrd) !== "") ||
                                                            (passowrd.length < 4 && errorMessage === "Password is Required") ||
                                                            (passowrd.length < 4 && errorMessage === "Password is too short") ||
                                                            errorMessage === "Password Mismatch"
                                                            ? " border-[1px] border-[#EB0728]" : ""} focus:outline-[#51336A]  m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 `} />
                                                    <div onClick={togglePasswordVisibility} className='-ml-[39px] mt-[10px] cursor-pointer '>
                                                        {showPassword ? <img src={visibility_on} alt="" /> : <img src={visibility_off} alt="" />}
                                                    </div>
                                                </div>
                                                {(passowrd.length > 0 && handlePasswordChange(passowrd) !== "") || errorMessage === "Password is Required" || errorMessage === "Password Mismatch" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{passowrd.length > 0 && handlePasswordChange(passowrd) !== "" ? handlePasswordChange(passowrd) :
                                                    (passowrd.length < 4 && errorMessage === "Password is Required") ||
                                                        (passowrd.length < 4 && errorMessage === "Password is too short") ||
                                                        errorMessage === "Password Mismatch" ? errorMessage : ""}</h1> : null}
                                            </div>
                                        </div>

                                        {/** Confirm Password */}
                                        <div className=' mt-[15px] box-border m-0 basis-full flex-grow-0 max-w-full'>
                                            <div className=' box-border flex flex-wrap w-full'>
                                                <div className='w-full flex items-start'>
                                                    <div className=' w-full'>
                                                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required type={showConfirmPassword ? "text" : "password"} name="confirm password" id="confirm_password" data-cy="password" placeholder="Confirm Password" className={`${errorMessage === "Confirm Password" || errorMessage === "Password Mismatch" ? " border-[1px] border-[#EB0728]" : ""} focus:outline-[#51336A]  m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 `} />
                                                        {errorMessage === "Confirm Password" || errorMessage === "Password Mismatch" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{errorMessage}</h1> : null}
                                                        {/* {errorMessage === "Confirm Password" || errorMessage === "Password Mismatch" ?
                                                            <div className=' w-full flex flex-row-reverse z-50 pb-[33px] -mt-[3.3rem] pr-4'>
                                                                <img src={errorIcon} alt="" className=' z-[60]' />
                                                            </div> :
                                                            null} */}
                                                    </div>
                                                    <div onClick={toggleConfirmPasswordVisibility} className='-ml-[39px] mt-[10px] cursor-pointer '>
                                                        {showConfirmPassword ? <img src={visibility_on} alt="" /> : <img src={visibility_off} alt="" />}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        {/** country and City */}
                                        <div className=' mt-[15px] box-border m-0 basis-full flex-grow-0 max-w-full'>
                                            <div className=' box-border flex flex-wrap w-full'>
                                                <div className=' smallName w-full flex items-start gap-3'>
                                                    <div className=' w-full'>
                                                        <div className={` ${errorMessage === "Country is requied" ? "border-[1px] border-[#51336A] w-full rounded-[30px]" : " w-full"}`}>
                                                            <CountrySelector setUserCountry={setCountry} setErrorMessage={setErrorMessage} />
                                                        </div>
                                                        {errorMessage === "Country is requied" || errorMessage === "Check your internet connection and reload!" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{errorMessage}</h1> : null}
                                                    </div>
                                                    <div className=' w-full'>
                                                        <input value={city} onChange={(e) => {
                                                            setCity(e.target.value);
                                                            if (e.target.value.length < 0) { setErrorMessage("City is requied") }
                                                            else if (e.target.value.length < 2) { setErrorMessage("City name is too short") }
                                                            else { setErrorMessage("") }
                                                        }} required type="text" name="city" id="city" data-cy="city" placeholder="City" className={`${errorMessage === "City is requied" || errorMessage === "City name is too short" ? " border-[1px] border-[#EB0728]" : ""} focus:outline-[#51336A] m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 `} />
                                                        {errorMessage === "City is requied" || errorMessage === "City name is too short" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{errorMessage}</h1> : null}
                                                        {errorMessage === "City is requied" ?
                                                            <div className=' w-full flex flex-row-reverse z-50 pb-[33px] -mt-[3.3rem] pr-4'>
                                                                <img src={errorIcon} alt="" className=' z-[60]' />
                                                            </div> :
                                                            null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/** Terms Agreement */}
                                        <div className=' w-full'>
                                            <div className=' w-full items-center flex gap-[5px]'>
                                                {/** Checkbox */}
                                                <input type="checkbox" name="agreement" id="agreement"
                                                    onChange={toggleCheckbox}
                                                    checked={isChecked}
                                                    className={` ${!isChecked ? ` appearance-none ${errorMessage === "Agree to Vacvault's terms" ? " border-[1px] border-[#EB0728]" : ""} ` : null} bg-[#D9D9D9] mt-2 rounded-[5px] w-[13px] h-[13px] checked:bg-white`} />
                                                <h1 className=' text-[12px] font-normal mt-[7px] cursor-pointer text-[#707070]'>I agree to Vacvault’s terms of service</h1>
                                            </div>
                                            {errorMessage === "Agree to Vacvault's terms" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{errorMessage}</h1> : null}

                                        </div>

                                        {/** Submit button */}
                                        <button onClick={handleSubmit} type="submit" className=' mt-[13px] bg-[#51336A] h-[40px] relative border-none rounded-[30px] select-none text-white text-[1rem] w-full '>Submit</button>
                                        {/**Sign Up */}
                                        <h1 className=' w-full text-center text-[#707070] text-[12px] mt-[10px]'>Already have a  VacVault account? <span onClick={() => {
                                            dispatch(SignUpFalse())
                                            dispatch(SignInTrue())
                                        }} className=' text-[#51336A] font-bold cursor-pointer'>Sign In</span></h1>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUpForm
