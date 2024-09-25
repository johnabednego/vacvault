import React, { useEffect, useRef, useState } from 'react'
import baseUrl from '../baseUrl.js'
import { useDispatch } from 'react-redux'
import {SignInFalse } from '../../features/nav/signInSlice.js'
import { SignUpFalse, SignUpTrue } from '../../features/nav/signUpSlice'
import './SignIn.css'
import vacvault from './assets/vacvault.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import errorIcon from './assets/error.svg'
import codeSentIcon from './assets/condeSent.svg'
import correctIcon from './assets/correct.svg'
import visibility_on from './assets/visibility_on.svg'
import visibility_off from './assets/visibility_off.svg'
import ForgotPassword from './ForgotPassword.jsx'


const SignIn = () => {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState("")
    const [restRequestError, setRestRequestError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [forgotPassword, setForgotPassword] = useState(0)
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState("")
    const navigate = useNavigate()

    const [toVerify, setToVerify] = useState(false);
    const [enterCode, setEnterCode] = useState(false)
    const [verifyError, setVerifyError] = useState("");
    const [codes, setCodes] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const [seconds, setSeconds] = useState(9 * 60 + 59);

    const [newPassword, setNewPassword] = useState("")
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [newPassError, setNewPassError] = useState("")
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [strength, setStrength] = useState(0);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };


    // Encode the data before storing it
    function encodeData(data) {
        return btoa(data); // Base64 encoding
    }

    // Decode the data after retrieving it
    // function decodeData(encodedData) {
    //     return atob(encodedData); // Base64 decoding
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = JSON.stringify({
            email: email,
            password: password
        })

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${baseUrl}/auth/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        try {
            axios.request(config)
                .then((response) => {

                    const token = response?.data?.token
                    if (token) {
                        dispatch(SignInFalse())
                        navigate("/dashboard")
                        window.localStorage.setItem("jdgbgiusudgfdyudbudvfudhfgbiyfudvifiudubuydfbduvuydfvuy", encodeData(JSON.stringify(token)))
                    }
                })
                .catch((error) => {
                    //Catch User is not confirmed Exception 
                    if(error?.response?.data?.msg){
                        setErrorMessage(error?.response?.data?.msg)
                    }
                    else{
                        console.log(error)
                    }
                    
                });
        } catch (error) {
            console.log(error)
        }
    }
    const toForgotPassword = () => {
        setForgotPassword(1)
    }
    const backToSignIn = () => {
        setForgotPassword(0)
    }

    const verify = async () => {

        let code = ""
        codes.map(c => {
            return code += c
        })
        if (code === "") {
            setVerifyError("Code is Required")
        }
        else if (code.length < 6) {
            setVerifyError("Invalid Code")
        }
        else {

            let code = ""
            codes.map(c => {
                return code += c
            })
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
                        // dispatch(SignUpFalse())
                        // dispatch(SignUpTrue())
                        setToVerify(false)
                    }
                    else {
                        setVerifyError(feedback.message)
                    }

                })
                .catch((error) => {
                    if (error?.response?.data?.error?.slice(18, 40) === "(ExpiredCodeException)") {
                        setVerifyError(error?.response?.data?.error?.slice(83))
                    }
                    else if (error?.response?.data?.error?.slice(85) === "User cannot be confirmed. Current status is CONFIRMED") {
                        dispatch(SignUpFalse())
                        dispatch(SignUpTrue())
                    }
                    else if (error?.response?.data?.error === "An error occurred (CodeMismatchException) when calling the ConfirmSignUp operation: Invalid verification code provided, please try again.") {
                        setVerifyError("You have entered a wrong verification code")
                    }
                    else {
                        console.log(error)
                        if (error?.response?.data?.error) {
                            setVerifyError(error?.response?.data?.error)
                        }
                        else {
                            setVerifyError(error.message + "\n Try Again")
                        }
                    }
                })
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
                setVerifyError(error.message + "\n Try Again")
            })
    }

    const resetRequestPassword = async (event) => {
        event.preventDefault();
        const data = JSON.stringify({
            email: forgotPasswordEmail
        })
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${baseUrl}/auth/request-password-reset`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        await axios.request(config)
            .then((response) => {
                const feedback = response.data
                if (feedback) {
                    // dispatch(SignUpFalse())
                    // dispatch(SignUpTrue())
                    setForgotPassword(2)
                }
                
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const resendRequestPasswordCode = async (event) => {
        event.preventDefault();
        const data = JSON.stringify({
            email: forgotPasswordEmail
        })
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${baseUrl}/reset/request/`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        await axios.request(config)
            .then((response) => {
                const feedback = response.data

                if (feedback?.message === "Password reset requested successfully") {
                    // dispatch(SignUpFalse())
                    // dispatch(SignUpTrue())
                    setCodes(['', '', '', '', '', ''])
                    setVerifyError("Code Sent")
                    setSeconds(9 * 60 + 59)
                }
                else {
                    setRestRequestError(feedback.message)
                }

            })
            .catch((error) => {
                if (error?.data?.data?.error) {
                    setVerifyError(error?.data?.data?.error)
                }
                else if (error?.data?.error) {
                    setVerifyError(error?.data?.error)
                }
                else {
                    setVerifyError(error.message)
                }
            })
    }

    const resetVerification = () => {
        let code = ""
        codes.map(c => {
            return code += c
        })
        if (code === "") {
            setVerifyError("Code is Required")
        }
        else if (code.length < 6) {
            setVerifyError("Invalid Code")
        }
        else {
            setForgotPassword(3)
        }
    }

    const handlePasswordChange = (newPassword) => {
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

    const changePassword = async () => {
        let passwordError = handlePasswordChange(newPassword)
        if (newPassword.length < 1) {
            setNewPassError("Password is Required")
        }
        else if (newPassword.length < 8) {
            setNewPassError("Password is too short")
        }
        else if (passwordError.length > 0) {
            setNewPassError(passwordError)
        }
        else if (confirmPassword.length < 1) {
            setNewPassError("Confirm Password")
        }
        else if (confirmPassword !== newPassword) {
            setNewPassError("Password Mismatch")
        }
        else {
            setNewPassError("")
            let code = ""
            codes.map(c => {
                return code += c
            })

            const data = JSON.stringify({
                email: forgotPasswordEmail,
                otp: code,
                newPassword: newPassword
            })
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${baseUrl}/auth/set-new-password`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            await axios.request(config)
                .then((response) => {
                    const feedback = response.data
                    if (feedback.message === "Password reset confirmed and password changed successfully") {

                        setForgotPassword(4)
                    }
                    else {
                        setNewPassError(feedback.message)
                    }

                }).catch((error) => {
                    if (error?.response?.data?.error === "An error occurred (CodeMismatchException) when calling the ConfirmForgotPassword operation: Invalid verification code provided, please try again.") {
                        setForgotPassword(2)
                        setVerifyError("Invalid verification code provided, please try again")
                    }
                    else if (error?.response?.data?.error === "An error occurred (LimitExceededException) when calling the ConfirmForgotPassword operation: Attempt limit exceeded, please try after some time.") {
                        setNewPassError("Attempt limit exceeded, please try after some time.")
                    }
                    else if (error?.response?.data?.error) {
                        setNewPassError(error?.response?.data?.error)
                    }
                    else {
                        setNewPassError(error.message + "\n Try Again")
                    }
                })
        }
    }
    const tester = (value) => {
        let criteriaMet = 0;

        if (value.length >= 8) criteriaMet++;
        if (/[A-Z]/.test(value)) criteriaMet++;
        if (/[a-z]/.test(value)) criteriaMet++;
        if (/\d/.test(value)) criteriaMet++;
        if (/[!@#$%^&*]/.test(value)) criteriaMet++;

        return criteriaMet
    }

    const newPasswordOnChange = (value) => {
        setNewPassword(value)
        setStrength(tester(value));
    }

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
        }, 1000);

        return () => {
            clearInterval(timer);
            // document.body.removeChild(script);
        };

    }, [seconds]);


    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Format the time to display leading zeros (e.g., 05:03)
    const formattedTime = String(minutes).padStart(2, '0') + ':' + String(remainingSeconds).padStart(2, '0');



    return (
        <div className='flex'>
            {forgotPassword === 0 ?

                !toVerify ?
                    <div className=' smallDevice w-full xm:w-[480px] sm:w-[528px]  rounded-br-[30px] rounded-tl-[30px] shadow-input bg-white pt-8 pb-[36px] px-[2.875rem] relative'>

                        <div className=' mb-[29px]'>
                            <h1 className='text-[18px] font-bold '>Welcome to  VacVault</h1>
                            <h1 className=' mt-1 text-[14px] text-[#707070] font-normal'>Sign In details</h1>
                        </div>
                        <div className=''>
                            {/**Sign in */}
                            <div className=' box-border flex flex-wrap '>
                                {errorMessage.length > 0 ? <h1 className=' mb-2 py-[5px] flex justify-center items-center text-center rounded-[20px] bg-[#FFDFE4] border-solid border-[1px] border-[#EB0728] w-full mt-[15px] text-[12px] text-[#EB0728]'>
                                    <img src={errorIcon} alt="" className='mr-[5px]' />
                                    {errorMessage}
                                </h1> : null}
                                <div className=' box-border m-0 basis-full flex-grow-0 max-w-full '>
                                    {/** Email Form */}
                                    <div className='box-border m-0 basis-full flex-grow-0 max-w-full'>
                                        <form method='post' onSubmit={handleSubmit}>
                                            <div className=' box-border flex flex-wrap items-center'>
                                                {/** Email */}
                                                <div className=' box-border m-0 basis-full flex-grow-0 max-w-full'>
                                                    <div className=' box-border flex flex-wrap w-full'>
                                                        <div className='w-full flex items-start'>
                                                            <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" data-cy="email" placeholder="Email" className=' focus:outline-[#51336A] m-0 text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 ' />
                                                        </div>
                                                    </div>

                                                </div>
                                                {/** Password */}
                                                <div className=' mt-[15px] box-border m-0 basis-full flex-grow-0 max-w-full'>
                                                    <div className=' box-border flex flex-wrap w-full'>
                                                        <div className='w-full flex items-start'>
                                                            <input value={password} onChange={(e) => setPassword(e.target.value)} required type={showPassword ? "text" : "password"} name="password" id="password" data-cy="password" placeholder="Password" className=' focus:outline-[#51336A] m-0 text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 ' />
                                                            <div onClick={togglePasswordVisibility} className='-ml-[39px] mt-[10px] cursor-pointer '>
                                                                {showPassword ? <img src={visibility_on} alt="" /> : <img src={visibility_off} alt="" />}
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                {/**Forget Password */}
                                                <h1 onClick={() => toForgotPassword()} className=' text-[12px] font-normal mt-[7px] cursor-pointer text-[#707070]'>Forgot password?</h1>
                                                {/** Sign In button */}
                                                <button type="submit" className=' mt-[13px] bg-[#51336A] h-[40px] relative border-none rounded-[30px] select-none text-white text-[1rem] w-full '>Sign In</button>

                                                {/**Sign Up */}
                                                <h1 className=' w-full text-center text-[#707070] text-[12px] mt-[10px]'>Don’t have a  VacVault account? <span onClick={()=>{
                                                    dispatch(SignInFalse())
                                                    dispatch(SignUpTrue())
                                                }} className=' text-[#51336A] font-bold cursor-pointer'>Sign up</span></h1>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div>
                        {enterCode ?
                            <div className=' smallDevice w-full sm:w-[528px] rounded-[30px] shadow-input bg-white pt-8 pb-[70px] px-[2.875rem] relative'>
                                {/**Enter Code to Verify */}
                                <div className=' w-full flex flex-col items-center justify-center text-center'>
                                    <img src={vacvault} alt="" className=' h-[33px] w-[107px]' />
                                    {verifyError?.length > 0 ?
                                        <h1 className={` ${verifyError === "Code Sent" ? "bg-[#D6FBC9] border-[1px] border-[#4FBF26] text-[#4FBF26]" : "bg-[#FFDFE4] border-[#EB0728] text-[#EB0728]"}  py-[5px] flex justify-center items-center text-center rounded-[20px]  border-solid border-[1px]  w-full mt-[15px] text-[12px] `}>
                                            {verifyError === "Code Sent" ?
                                                <img src={codeSentIcon} alt="" className='mr-[5px]' />
                                                :
                                                <img src={errorIcon} alt="" className='mr-[5px]' />}
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
                                    <h1 className=' mt-[18.83px] text-[#707070] text-[14px]'>Code expires in <span className=' text-[#51336A] font-bold'>{formattedTime}</span></h1>
                                    <h1 className=' mt-[27px] text-[12px] text-[#707070]'>Didn’t get a code? <span onClick={resendCode} className=' cursor-pointer font-bold text-[#51336A]'>Click to resend</span></h1>
                                    {/** Rsesnd button */}
                                    <button onClick={verify} type="button" className=' mt-[10px] bg-[#51336A] h-[40px] relative border-none rounded-[30px] select-none text-white text-[1rem] w-full '>Verify</button>
                                </div>
                            </div> :
                            <div className=' smallDevice w-full sm:w-[528px] rounded-[30px] shadow-input bg-white pt-8 pb-[56px] px-[2.875rem] relative'>
                                <div className=' w-full flex flex-col items-center justify-center text-center'>
                                    <img src={vacvault} alt="" className=' h-[33px] w-[107px]' />
                                    <img src={correctIcon} alt="" className=' mt-[31px]' />
                                    <h1 className=' mt-[16px] text-[18px] font-bold'>Verify your email address</h1>
                                    <h1 className=' mt-1 text-[14px] text-[#707070]'>
                                        It seems you already have an account with this email
                                        <span className=' text-[#51336A]'> {email}</span>  Please verify this email
                                        address by clicking the button below
                                    </h1>
                                    {/** email */}
                                    <div className=' w-full mt-[16px] box-border m-0 basis-full flex-grow-0 max-w-full'>
                                        {/** Sign In */}
                                        <button onClick={() => {
                                            resendCode()
                                            setEnterCode(true)
                                        }} type="button" className=' mt-[15px] bg-[#51336A] h-[40px] relative border-none rounded-[30px] select-none text-white text-[1rem] w-full '>Verify your email</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                :
                forgotPassword === 1 ?
                <ForgotPassword resetRequestPassword={resetRequestPassword} restRequestError={restRequestError} forgotPasswordEmail={forgotPasswordEmail} setForgotPasswordEmail={setForgotPasswordEmail} backToSignIn={backToSignIn}/>   
                : forgotPassword === 2
                        ?
                        <div className=' smallDevice w-full sm:w-[528px] rounded-[30px] shadow-input bg-white pt-8 pb-[70px] px-[2.875rem] relative'>
                            <div className=' w-full flex flex-col items-center justify-center text-center'>
                                <img src={vacvault} alt="" className=' h-[33px] w-[107px]' />
                                {verifyError?.length > 0 ?
                                    <h1 className={` ${verifyError === "Code Sent" ? "bg-[#D6FBC9] border-[1px] border-[#4FBF26] text-[#4FBF26]" : "bg-[#FFDFE4] border-[#51336A] text-[#51336A]"}  py-[5px] flex justify-center items-center text-center rounded-[20px]  border-solid border-[1px]  w-full mt-[15px] text-[12px] `}>
                                        {verifyError === "Code Sent" ?
                                            <img src={codeSentIcon} alt="" className='mr-[5px]' />
                                            :
                                            <img src={errorIcon} alt="" className='mr-[5px]' />}
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
                                <h1 className=' mt-[18.83px] text-[#707070] text-[14px]'>Code expires in <span className=' text-[#51336A] font-bold'>{formattedTime}</span></h1>
                                <h1 className=' mt-[27px] text-[12px] text-[#707070]'>Didn’t get a code? <span onClick={resendRequestPasswordCode} className=' cursor-pointer font-bold text-[#51336A]'>Click to resend</span></h1>
                                {/** Rsesnd button */}
                                <button onClick={resetVerification} type="button" className=' mt-[10px] bg-[#51336A] h-[40px] relative border-none rounded-[30px] select-none text-white text-[1rem] w-full '>Verify</button>
                            </div>
                        </div> :
                        forgotPassword === 3 ?
                            <div className=' smallDevice w-full sm:w-[528px] rounded-[30px] shadow-input bg-white pt-8 pb-[70px] px-[2.875rem] relative'>
                                <div className=' w-full flex flex-col items-center justify-center text-center'>
                                    <img src={vacvault} alt="" className=' h-[33px] w-[107px]' />
                                    {newPassError.length > 0 ? <h1 className=' py-[5px] flex justify-center items-center text-center rounded-[20px] bg-[#FFDFE4] border-solid border-[1px] border-[#51336A] w-full mt-[15px] text-[12px] text-[#51336A]'>
                                        <img src={errorIcon} alt="" className='mr-[5px]' />
                                        {newPassError}
                                    </h1> : null}
                                    <h1 className=' mt-[25px] text-[18px] font-bold'>Change Password</h1>
                                    <h1 className=' mt-3 text-[14px] text-[#707070]'>
                                        Password should be longer than 8 characters
                                    </h1>
                                    <div className=' box-border flex flex-wrap items-center'>
                                        {/** Password */}
                                        <div className=' mt-[15px] box-border m-0 basis-full flex-grow-0 max-w-full'>
                                            <div className=' box-border flex flex-wrap w-full'>
                                                <div className='w-full flex items-start'>
                                                    <input value={newPassword} onChange={(e) => newPasswordOnChange(e.target.value)} required type={showNewPassword ? "text" : "password"} name="password" id="password" data-cy="password" placeholder="New Password" className={`
                                                                ${(newPassword.length > 0 && handlePasswordChange(newPassword) !== "") ||
                                                            (newPassword.length < 4 && newPassError === "Password is Required") ||
                                                            (newPassword.length < 4 && newPassError === "Password is too short") ||
                                                            newPassError === "Password Mismatch"
                                                            ? " border-[1px] border-[#51336A]" : ""}  m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 `} />
                                                    <div className=' -ml-[100px] flex mt-4 gap-[5px] pr-[50px]'>
                                                        <div className={` ${newPassword.length < 1 ? "bg-[#D9D9D9]" : newPassword.length < 6 ? "bg-[#51336A]" : strength <= 2 ? "bg-[#51336A]" : strength === 3 ? " bg-yellow-300" : strength >= 4 ? "bg-[#92D16B]" : "bg-[#92D16B]"} w-2 h-2 rounded-[8px]`} />
                                                        <div className={` ${newPassword.length < 7 ? "bg-[#D9D9D9]" : strength === 1 ? "bg-[#D9D9D9]" : strength === 2 ? "bg-[#51336A]" : strength === 3 ? " bg-yellow-300" : strength >= 4 ? "bg-[#92D16B]" : "bg-[#92D16B]"} w-2 h-2 rounded-[8px]`} />
                                                        <div className={` ${newPassword.length < 8 ? "bg-[#D9D9D9]" : strength === 3 ? " bg-yellow-300" : strength >= 4 ? "bg-[#92D16B]" : ""} w-2 h-2 rounded-[8px]`} />
                                                        <div className={` ${newPassword.length >= 8 && strength >= 4 ? "bg-[#92D16B]" : "bg-[#D9D9D9]"} w-2 h-2 rounded-[8px]`} />
                                                        <div className={` ${newPassword.length >= 8 && strength >= 5 ? "bg-[#92D16B]" : "bg-[#D9D9D9]"} w-2 h-2 rounded-[8px]`} />
                                                    </div>
                                                    <div onClick={toggleNewPasswordVisibility} className='-ml-[39px] mt-[10px] cursor-pointer '>
                                                        {showNewPassword ? <img src={visibility_on} alt="" /> : <img src={visibility_off} alt="" />}
                                                    </div>
                                                </div>
                                                {handlePasswordChange(newPassword) === "Password Must Contain atleast 1 numeric" || newPassError === "Password is Required" || newPassError === "Password is too short" || newPassError === "Password Mismatch"
                                                    || handlePasswordChange(newPassword) === "Password Must Contain atleast 1  lowercase" ||
                                                    handlePasswordChange(newPassword) === "Password Must Contain atleast 1 uppercase" ||
                                                    handlePasswordChange(newPassword) === "Password Must Contains atleast 1 special character" ? <h1 className={`${newPassError.length < 1 ? "hidden" : "flex"} pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left`}>{newPassword.length > 0 && handlePasswordChange(newPassword) !== "" ? handlePasswordChange(newPassword) :
                                                        (newPassword.length < 4 && newPassError === "Password is Required") ||
                                                            (newPassword.length < 4 && newPassError === "Password is too short") ||
                                                            newPassError === "Password Mismatch" ? newPassError : ""}</h1> : null}
                                                {/* {errorMessage === "Password is Required" || errorMessage === "Password is too short!" || errorMessage === "Password Mismatch!!"
                                                            || errorMessage === "Password Must Contain atleast 1  lowercase" ||
                                                            errorMessage === "Password Must Contain atleast 1 uppercase" ||
                                                            errorMessage === "Password Must Contains atleast 1 special character" ?
                                                            <div className=' w-full flex flex-row-reverse z-50 pb-[33px] -mt-[3.3rem] pr-4'>
                                                                <img src={errorIcon} alt="" className='' />
                                                            </div> :
                                                            null} */}
                                            </div>
                                        </div>

                                        {/** Confirm Password */}
                                        <div className=' mt-[15px] box-border m-0 basis-full flex-grow-0 max-w-full'>
                                            <div className=' box-border flex flex-wrap w-full'>
                                                <div className='w-full flex items-start'>
                                                    <div className=' w-full'>
                                                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required type={showConfirmPassword ? "text" : "password"} name="confirm password" id="confirm_password" data-cy="password" placeholder="Re-enter Password" className={`${newPassError === "Confirm Password" || newPassError === "Password Mismatch" ? " border-[1px] border-[#51336A]" : ""}  m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 `} />
                                                        {newPassError === "Confirm Password" || newPassError === "Password Mismatch" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{newPassError}</h1> : null}
                                                        {newPassError === "Confirm Password" || newPassError === "Password Mismatch" ?
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
                                    </div>
                                    <button onClick={changePassword} type="button" className=' mt-[10px] bg-[#51336A] h-[40px] relative border-none rounded-[30px] select-none text-white text-[1rem] w-full '>change password</button>
                                    <button onClick={() => backToSignIn()} className=' mt-[29px] font-bold text-[12px] text-[#707070]'>BACK TO SIGN IN</button>
                                </div>
                            </div> :
                            forgotPassword === 4 ?
                                <div className=' smallDevice w-full sm:w-[528px] rounded-[30px] shadow-input bg-white pt-8 pb-[56px] px-[2.875rem] relative'>
                                    <div className=' w-full flex flex-col items-center justify-center text-center'>
                                        <img src={vacvault} alt="" className=' h-[33px] w-[107px]' />
                                        <img src={correctIcon} alt="" className=' mt-[31px]' />
                                        <h1 className=' mt-[16px] text-[18px] font-bold'>Password Reset</h1>
                                        <h1 className=' mt-1 text-[14px] text-[#707070]'>
                                            Your password has been successfully reset<br></br>
                                            Click below to sign In
                                        </h1>
                                        {/** email */}
                                        <div className=' w-full mt-[16px] box-border m-0 basis-full flex-grow-0 max-w-full'>
                                            {/** Sign In */}
                                            <button onClick={() => backToSignIn()} type="button" className=' mt-[15px] bg-[#51336A] h-[40px] relative border-none rounded-[30px] select-none text-white text-[1rem] w-full '>Sign In</button>
                                        </div>
                                    </div>
                                </div> : ""
            }

        </div>
    )
}

export default SignIn
