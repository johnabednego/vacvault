import React, { useEffect, useRef, useState } from 'react'
import baseUrl from '../baseUrl.js'
import './SignUp.css'
import { useDispatch } from 'react-redux'
import { SignUpFalse } from '../../features/nav/signUpSlice'
import { SignInTrue } from '../../features/nav/signInSlice'
import Finish from './Finish'
import vacvault from './assets/vacvault.svg'
import axios from 'axios'
import PhoneNumberValidation from '../PhoneNumberValidation/PhoneNumberValidation'
import errorIcon from './assets/error.svg'
import codeSentIcon from './assets/condeSent.svg'
import visibility_on from './assets/visibility_on.svg'
import visibility_off from './assets/visibility_off.svg'

const SignUp = () => {
    const dispatch = useDispatch()
    const [isChecked, setIsChecked] = useState(false);
    const [isContinue, setIsContinue] = useState(false)
    const [toVerify, setToVerify] = useState(false);
    const [verifyError, setVerifyError] = useState("");
    const [codes, setCodes] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const [seconds, setSeconds] = useState(9 * 60 + 59);
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const [errorMessage, setErrorMessage] = useState("")
    const [finishError, setFinishError] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [passowrd, setPassowrd] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [address, setAddress] = useState("")
    const [address2, setAddress2] = useState("")
    const [digitalAddress, setDigitalAddress] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")

    const [strength, setStrength] = useState(0);
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const tester = (value) => {
        let criteriaMet = 0;

        if (value.length >= 8) criteriaMet++;
        if (/[A-Z]/.test(value)) criteriaMet++;
        if (/[a-z]/.test(value)) criteriaMet++;
        if (/\d/.test(value)) criteriaMet++;
        if (/[!@#$%^&*]/.test(value)) criteriaMet++;

        return criteriaMet
    }

    const passwordOnChange = (value) => {
        setPassowrd(value)
        setStrength(tester(value));
    }

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
        else {
            return ""
        }
    };

    const continue_to_finish = () => {
        const pattern = /^\+?[1-9]\d{1,14}$/;
        let passwordError = handlePasswordChange(passowrd)
        if (firstName.length < 1) {
            setErrorMessage("First name is Required")
        }
        else if (lastName.length < 1) {
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
        else if (!isChecked) {
            setErrorMessage("Agree to Vacvault's terms")
        }
        else {
            setErrorMessage("")
            setIsContinue(!isContinue)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (country.length < 1) {
            setFinishError("Country is requied")
        } else {
            setFinishError("")
            const data = JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password1: passowrd,
                password2:passowrd,
                phone_number: "+" + phoneNumber,
                address: address,
                address2: address2 === "" ? "null" : address2,
                digital_address: digitalAddress === "" ? "null" : digitalAddress,
                country: country,
                city: city,
                zip_code: zipCode === "" ? "null" : zipCode
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
                        const feedback = response.data
                        if (feedback.detail === "Verification e-mail sent.") {
                            setToVerify(true)
                        }
                        else {
                            setErrorMessage(feedback.message)
                        }

                    })
                    .catch((error) => {
                        // console.log(error?.response?.data)
                        setFinishError(error?.response?.data?.error)
                        if (error?.response?.data?.error?.slice(79) === "An account with the given email already exists.") {
                            setFinishError(error.response.data.error.slice(79));
                        }
                        else if (error?.response?.data?.error?.slice(81) === "Invalid phone number format.") {
                            setFinishError(error?.response?.data?.error?.slice(81))
                        }
                        else if (error?.response?.data?.error?.slice(18, 44) === "(InvalidPasswordException)") {
                            // setFinishError(error?.response?.data?.error?.slice(118))
                            setFinishError("Paassword Must contain atleast 1 lowercase, uppercase, symbol and a number")
                        }
                        else if (error?.response?.data?.email) {
                            console.log(error?.response?.data?.email)
                            setFinishError(error?.response?.data?.email)
                        }
                        else if (error?.response?.data?.error) {
                            setFinishError(error?.response?.data?.error)
                            console.log(error?.response?.data?.error)
                        }
                        else {
                            console.log(error)
                            if (error.message) {
                                setFinishError(error.message)
                            }
                            else {
                                setFinishError(error)
                            }

                        }
                    });
            } catch (error) {
                console.log(error)
            }

        }

    }

    const handleInputChange = (e, index) => {
        const newCodes = [...codes];
        newCodes[index] = e.target.value;
        setCodes(newCodes);

        // Move focus to the next input field if there is a value
        if (e.target.value && index < codes.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData('text/plain').slice(0, 6);
        const newCodes = pastedText.split('');
        setCodes(newCodes);
    };

    const verify = async () => {

        let code = ""
        codes.map(c => {
            return code += c
        })
        if(code===""){
            setVerifyError("Code is Required")
        }
        else if(code.length<6){
            setVerifyError("Invalid Code")
        }
        else{
        const data = JSON.stringify({
            email: email,
            confirmation_code: code
        })

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${baseUrl}/confirm/`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        await axios.request(config)
            .then((response) => {
                const feedback = response.data

                if (feedback.message) {
                    dispatch(SignUpFalse())
                    dispatch(SignInTrue())
                }
                else {
                    setVerifyError(feedback.message)
                }

            })
            .catch((error) => {
                console.log(error)
                if (error?.response?.data?.error?.slice(18, 40) === "(ExpiredCodeException)") {
                    setVerifyError(error?.response?.data?.error?.slice(83))
                }
                else if (error?.response?.data?.error?.slice(85) === "User cannot be confirmed. Current status is CONFIRMED") {
                    dispatch(SignUpFalse())
                    dispatch(SignInTrue())
                }
                else if (error?.response?.data?.error === "An error occurred (CodeMismatchException) when calling the ConfirmSignUp operation: Invalid verification code provided, please try again.") {
                    setVerifyError("You have entered a wrong verification code")
                }
                else {
                    console.log(error.message)
                    setVerifyError(error.message)
                }
            })
        }
    }
    const resendCode = async () => {
        const data = JSON.stringify({
            email: email,
        })

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${baseUrl}/resend/`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        await axios.request(config)
            .then((response) => {
                const feedback = response.data

                console.log(feedback)
                if (feedback.message) {
                    setCodes(['', '', '', '', '', ''])
                    setVerifyError("Code Sent")
                    setSeconds(9 * 60 + 59)
                }
                else {
                    setVerifyError(feedback.message)
                }

            })
            .catch((error) => {
                console.log(error)
                console.log(error.message)
                setVerifyError(error.message)
            })
    }

    useEffect(() => {
        // inputRefs.current[0]?.focus();
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [seconds]);

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Format the time to display leading zeros (e.g., 05:03)
    const formattedTime =
        String(minutes).padStart(2, '0') + ':' + String(remainingSeconds).padStart(2, '0');

    return (
        <div className='flex'>
            {toVerify === false ?
                <div className=' smallDevice w-full sm:w-[528px] rounded-[30px] shadow-input bg-white pt-8 pb-[70px] px-[2.875rem] relative'>

                    <div className=' mb-[29px]'>
                        <h1 className='text-[18px] font-bold '>Welcome to Vacvault</h1>
                        <h1 className=' mt-1 text-[14px] text-[#707070] font-normal'>{isContinue ? "Location" : "Personal Information"}</h1>
                    </div>
                    <div className=''>
                        {/**Sign uP */}
                        <div className=' box-border flex flex-wrap '>
                            {finishError.length > 0 && finishError !== "Country is requied" ? <h1 className=' py-[5px] flex justify-center items-center text-center rounded-[20px] bg-[#FFDFE4] border-solid border-[1px] border-[#EB0728] w-full mt-[-15px] mb-[15px] text-[12px] text-[#EB0728]'>
                                <img src={errorIcon} alt="" className='mr-[5px]' />
                                {finishError}
                            </h1> : null}
                            <div className=' box-border m-0 basis-full flex-grow-0 max-w-full '>
                                {/** Email Form */}
                                <div className='box-border m-0 basis-full flex-grow-0 max-w-full'>
                                    <form method='post' onSubmit={handleSubmit}>
                                        <div className=' box-border flex flex-wrap items-center'>
                                            {/** current Level */}
                                            <div className=' mb-[37px] flex w-full justify-center items-center text-center'>
                                                <div onClick={continue_to_finish} className={` ${isContinue ? " cursor-pointer bg-[#D9D9D9] text-[#707070]" : "bg-[#51336A] text-white "} w-[25px] h-[25px] rounded-[25px] items-center justify-center text-center text-[12px] font-bold flex `}>1</div>
                                                <div className=' w-[180px] bg-white border-dashed border-t-[1px] border-[#AAAAAA]' />
                                                <div className={` ${isContinue ? "bg-[#51336A] text-white " : "bg-[#D9D9D9] text-[#707070]"} w-[25px] h-[25px] rounded-[25px] items-center justify-center text-center text-[12px] font-bold flex `}>2</div>
                                            </div>
                                            {!isContinue ?
                                                <div className=' box-border flex flex-wrap items-center'>
                                                    {/** First and Last names */}
                                                    <div className=' box-border m-0 basis-full flex-grow-0 max-w-full'>
                                                        <div className=' box-border flex flex-wrap w-full'>
                                                            <div className=' smallName w-full flex items-start gap-3'>
                                                                <div className=' w-full'>
                                                                    <input value={firstName} onChange={(e) => setFirstName(e.target.value)} required type="text" name="first name" id="first_name" data-cy="first name" placeholder="First Name" className={` ${errorMessage === "First name is Required" ? " border-[1px] border-[#EB0728]" : ""} focus:outline-[#51336A] m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 `} />
                                                                    {errorMessage === "First name is Required" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{errorMessage}</h1> : null}
                                                                    {errorMessage === "First name is Required" ?
                                                                        <div className=' w-full flex flex-row-reverse z-50 pb-[33px] -mt-[3.3rem] pr-4'>
                                                                            <img src={errorIcon} alt="" className='' />
                                                                        </div> : null}
                                                                </div>
                                                                <div className=' w-full'>
                                                                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} required type="text" name="last name" id="last_name" data-cy="last name" placeholder="Last Name" className={` ${errorMessage === "Last name is Required" ? " border-[1px] border-[#EB0728]" : ""} focus:outline-[#51336A]   m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 `} />
                                                                    {errorMessage === "Last name is Required" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{errorMessage}</h1> : null}
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
                                                                    <PhoneNumberValidation setMobileNumber={setPhoneNumber} />
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
                                                                <div className=' -ml-[100px] flex mt-4 gap-[5px] pr-[50px]'>
                                                                    <div className={` ${passowrd.length < 1 ? "bg-[#D9D9D9]" : passowrd.length < 6 ? "bg-[#EB0728]" : strength <= 2 ? "bg-[#EB0728]" : strength === 3 ? " bg-yellow-300" : strength >= 4 ? "bg-[#92D16B]" : "bg-[#92D16B]"} w-2 h-2 rounded-[8px]`} />
                                                                    <div className={` ${passowrd.length < 7 ? "bg-[#D9D9D9]" : strength === 1 ? "bg-[#D9D9D9]" : strength === 2 ? "bg-[#EB0728]" : strength === 3 ? " bg-yellow-300" : strength >= 4 ? "bg-[#92D16B]" : "bg-[#92D16B]"} w-2 h-2 rounded-[8px]`} />
                                                                    <div className={` ${passowrd.length < 8 ? "bg-[#D9D9D9]" : strength === 3 ? " bg-yellow-300" : strength >= 4 ? "bg-[#92D16B]" : ""} w-2 h-2 rounded-[8px]`} />
                                                                    <div className={` ${passowrd.length >= 8 && strength >= 4 ? "bg-[#92D16B]" : "bg-[#D9D9D9]"} w-2 h-2 rounded-[8px]`} />
                                                                    <div className={` ${passowrd.length >= 8 && strength >= 5 ? "bg-[#92D16B]" : "bg-[#D9D9D9]"} w-2 h-2 rounded-[8px]`} />
                                                                </div>
                                                                <div onClick={togglePasswordVisibility} className='-ml-[39px] mt-[10px] cursor-pointer '>
                                                                    {showPassword ? <img src={visibility_on} alt="" /> : <img src={visibility_off} alt="" />}
                                                                </div>
                                                            </div>
                                                            {handlePasswordChange(passowrd) === "Password Must Contain atleast 1 numeric" || errorMessage === "Password is Required" || errorMessage === "Password is too short" || errorMessage === "Password Mismatch"
                                                                || handlePasswordChange(passowrd) === "Password Must Contain atleast 1  lowercase" ||
                                                                handlePasswordChange(passowrd) === "Password Must Contain atleast 1 uppercase" ||
                                                                handlePasswordChange(passowrd) === "Password Must Contains atleast 1 special character" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{passowrd.length > 0 && handlePasswordChange(passowrd) !== "" ? handlePasswordChange(passowrd) :
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
                                                                    {errorMessage === "Confirm Password" || errorMessage === "Password Mismatch" ?
                                                                        <div className=' w-full flex flex-row-reverse z-50 pb-[33px] -mt-[3.3rem] pr-4'>
                                                                            <img src={errorIcon} alt="" className=' z-[60]' />
                                                                        </div> :
                                                                        null}
                                                                </div>
                                                                <div onClick={toggleConfirmPasswordVisibility} className='-ml-[39px] mt-[10px] cursor-pointer '>
                                                                    {showConfirmPassword ? <img src={visibility_on} alt="" /> : <img src={visibility_off} alt="" />}
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

                                                    {/** continue button */}
                                                    <button onClick={continue_to_finish} type="button" className=' mt-[13px] bg-[#EB0728] h-[40px] relative border-none rounded-[30px] select-none text-white text-[1rem] w-full '>Continue</button>
                                                </div> :
                                                <Finish address={address} setAddress={setAddress}
                                                    address2={address2} setAddress2={setAddress2}
                                                    digitalAddress={digitalAddress} setDigitalAddress={setDigitalAddress}
                                                    country={country} setCountry={setCountry}
                                                    city={city} setCity={setCity}
                                                    zipCode={zipCode} setZipCode={setZipCode} finishError={finishError}
                                                />
                                            }
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div> :
                <div className=' smallDevice w-full sm:w-[528px] rounded-[30px] shadow-input bg-white pt-8 pb-[70px] px-[2.875rem] relative'>
                    <div className=' w-full flex flex-col items-center justify-center text-center'>
                        <img src={vacvault} alt="" className=' h-[33px] w-[107px]' />
                        {verifyError?.length > 0 ?
                            <h1 className={` ${verifyError === "Code Sent" ? "bg-[#D6FBC9] border-[1px] border-[#4FBF26] text-[#4FBF26]" : "bg-[#FFDFE4] border-[#EB0728] text-[#EB0728]"}  py-[5px] flex justify-center items-center text-center rounded-[20px]  border-solid border-[1px]  w-full mt-[15px] text-[12px] `}>
                                {verifyError === "Code Sent" ? 
                                <img src={codeSentIcon} alt="" className='mr-[5px]' />
                                :
                                <img src={errorIcon} alt="" className='mr-[5px]' />
                                    }
                                {verifyError}
                            </h1> : null}
                        <h1 className=' mt-[25px] text-[18px] font-bold'>Enter your verification code</h1>
                        <h1 className=' mt-3 text-[14px] text-[#707070]'>
                            We just sent a verification code to your email
                        </h1>
                        <div className='flex items-center justify-center mt-[19px]'>
                            {codes.map((code, index) => (
                                <input
                                    key={index}
                                    type="tel"
                                    className="w-[35.17px] h-[35.17px] text-2xl border-[1px] border-[#AAAAAA] rounded-lg text-center mx-2"
                                    maxLength="1"
                                    value={code}
                                    onChange={(e) => handleInputChange(e, index)}
                                    onPaste={(e) => handlePaste(e)}
                                    ref={(input) => (inputRefs.current[index] = input)} // Assign the ref
                                />
                            ))}
                        </div>
                        <h1 className=' mt-[18.83px] text-[#707070] text-[14px]'>Code expires in <span className=' text-[#EB0728] font-bold'>{formattedTime}</span></h1>
                        <h1 className=' mt-[27px] text-[12px] text-[#707070]'>Didn’t get a code? <span onClick={resendCode} className=' cursor-pointer font-bold text-[#EB0728]'>Click to resend</span></h1>
                        {/** Rsesnd button */}
                        <button onClick={verify} type="button" className=' mt-[10px] bg-[#EB0728] h-[40px] relative border-none rounded-[30px] select-none text-white text-[1rem] w-full '>Verify</button>
                    </div>
                </div>
            }

        </div>
    )
}

export default SignUp
