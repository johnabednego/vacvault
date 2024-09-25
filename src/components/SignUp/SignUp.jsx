import React, { useEffect, useRef, useState } from 'react'
import baseUrl from '../baseUrl.js'
import './SignUp.css'
import { useDispatch } from 'react-redux'
import { SignUpFalse } from '../../features/nav/signUpSlice'
import { SignInTrue } from '../../features/nav/signInSlice'
import vacvault from './assets/vacvault.svg'
import axios from 'axios'
import errorIcon from './assets/error.svg'
import codeSentIcon from './assets/condeSent.svg'
import SignUpForm from './SignUpForm.jsx'

const SignUp = () => {
    const dispatch = useDispatch()
    const [toVerify, setToVerify] = useState(false);
    const [verifyError, setVerifyError] = useState("");
    const [codes, setCodes] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const [seconds, setSeconds] = useState(9 * 60 + 59);
    const [email, setEmail] = useState("")
   



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
        if (code === "") {
            setVerifyError("Code is Required")
        }
        else if (code.length < 6) {
            setVerifyError("Invalid Code")
        }
        else {
            const data = JSON.stringify({
                email: email,
                otp: code
            })

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${baseUrl}/auth/verify-email`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };
            await axios.request(config)
                .then((response) => {
                    const feedback = response.data

                    if (feedback) {
                        dispatch(SignUpFalse())
                        dispatch(SignInTrue())
                    }
                    // else {
                    //     setVerifyError(feedback.message)
                    // }

                })
                .catch((error) => {
                    console.log(error)
                    
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
            url: `${baseUrl}/auth/`,
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
            <SignUpForm
            email={email}
            setEmail={setEmail}
            setToVerify={setToVerify}
            />
                 :
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
                        <h1 className=' mt-[27px] text-[12px] text-[#707070]'>Didn’t get a code? <span onClick={resendCode} className=' cursor-pointer font-bold text-[#6348A5]'>Click to resend</span></h1>
                        {/** Rsesnd button */}
                        <button onClick={verify} type="button" className=' mt-[10px] bg-[#6348A5] h-[40px] relative border-none rounded-[30px] select-none text-white text-[1rem] w-full '>Verify</button>
                    </div>
                </div>
            }

        </div>
    )
}

export default SignUp
