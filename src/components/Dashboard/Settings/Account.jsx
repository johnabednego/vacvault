import React, { useState } from 'react'
import visibility_on from '../../SignUp/assets/visibility_on.svg'
import visibility_off from '../../SignUp/assets/visibility_off.svg'

const Account = () => {
    const [errorMessage, setErrorMessage] = useState("")

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)


    const handlePasswordChange = (passwordValue) => {
        // checkPasswordStrength(passwordValue);
        // console.log(getPasswordStrengthIndicator())
        // Regular expressions to check for lowercase, uppercase, and special characters
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const numeric = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        // Check if the password meets the criteria
        const containsLowercase = lowercaseRegex.test(passwordValue);
        const containsUppercase = uppercaseRegex.test(passwordValue);
        const containsNumeric = numeric.test(passwordValue)
        const containsSpecialChar = specialCharRegex.test(passwordValue);

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
        else if (passwordValue?.length < 8) {
            return "Password Must be atleast 8 characters long"
        }
        else {
            return ""
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const pattern = /^\+?[1-9]\d{1,14}$/;
        let passwordError = handlePasswordChange(newPassword)
        if (newPassword.length < 1) {
            setErrorMessage("Password is Required")
        }
        else if (newPassword.length < 8) {
            setErrorMessage("Password is too short")
        }
        else if (passwordError.length > 0) {
            setErrorMessage(passwordError)
        }
        else if (confirmPassword.length < 1) {
            setErrorMessage("Confirm Password")
        }
        else if (confirmPassword !== newPassword) {
            setErrorMessage("Password Mismatch")
        }
        else {
            setErrorMessage("")
        }

    }

    return (
        <div className='w-full flex flex-col gap-10 pb-5 items-start justify-between'>
            <div className='w-full flex flex-col'>
                <h1 className=' font-bold text-[18px]'>Update password</h1>
                <form onSubmit={handleSubmit} className="mt-5 w-full flex flex-col gap-3">
                    {/** current password */}
                    <div className='box-border m-0 basis-full flex-grow-0 max-w-full'>
                        <div className=' box-border flex flex-wrap w-full'>
                            <div className='w-full flex items-start'>
                                <div className=' w-full'>
                                    <input value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required type={showCurrentPassword ? "text" : "password"} name="current password" id="current_password" data-cy="password" placeholder="Current Password" className={`${errorMessage === "Password Mismatch" ? " border-[1px] border-[#EB0728]" : ""} focus:outline-[#51336A]  m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 `} />
                                    {errorMessage === "Password Mismatch" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{errorMessage}</h1> : null}
                                    {/* {errorMessage === "Confirm Password" || errorMessage === "Password Mismatch" ?
                                                            <div className=' w-full flex flex-row-reverse z-50 pb-[33px] -mt-[3.3rem] pr-4'>
                                                                <img src={errorIcon} alt="" className=' z-[60]' />
                                                            </div> :
                                                            null} */}
                                </div>
                                <div onClick={() => setShowCurrentPassword(!showCurrentPassword)} className='-ml-[39px] mt-[10px] cursor-pointer '>
                                    {showCurrentPassword ? <img src={visibility_on} alt="" /> : <img src={visibility_off} alt="" />}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/** New Password */}
                    <div className='box-border m-0 basis-full flex-grow-0 max-w-full'>
                        <div className=' box-border flex flex-wrap w-full'>
                            <div className='w-full flex items-start'>
                                <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required type={showNewPassword ? "text" : "password"} name="password" id="password" data-cy="password" placeholder="New Password" className={`
                                                                ${(newPassword.length > 0 && handlePasswordChange(newPassword) !== "") ||
                                        (newPassword.length < 4 && errorMessage === "Password is Required") ||
                                        (newPassword.length < 4 && errorMessage === "Password is too short") ||
                                        errorMessage === "Password Mismatch"
                                        ? " border-[1px] border-[#EB0728]" : ""} focus:outline-[#51336A]  m-0 placeholder-[#707070] text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 `} />
                                <div onClick={() => setShowNewPassword(!showNewPassword)} className='-ml-[39px] mt-[10px] cursor-pointer '>
                                    {showNewPassword ? <img src={visibility_on} alt="" /> : <img src={visibility_off} alt="" />}
                                </div>
                            </div>
                            {(newPassword.length > 0 && handlePasswordChange(newPassword) !== "") || errorMessage === "Password is Required" || errorMessage === "Password Mismatch" ? <h1 className=' pl-5 w-full mt-[5px] text-red-600 text-[12px] text-left'>{newPassword.length > 0 && handlePasswordChange(newPassword) !== "" ? handlePasswordChange(newPassword) :
                                (newPassword.length < 4 && errorMessage === "Password is Required") ||
                                    (newPassword.length < 4 && errorMessage === "Password is too short") ||
                                    errorMessage === "Password Mismatch" ? errorMessage : ""}</h1> : null}
                        </div>
                    </div>

                    {/** Confirm New Password */}
                    <div className='box-border m-0 basis-full flex-grow-0 max-w-full'>
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
                                <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='-ml-[39px] mt-[10px] cursor-pointer '>
                                    {showConfirmPassword ? <img src={visibility_on} alt="" /> : <img src={visibility_off} alt="" />}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className=' mt-5 w-full flex justify-between gap-[13px]'>
                        <div className='w-full hidden xl:flex flex-1' />
                        <button type='submit' className='w-full h-[45px] rounded-[40px] flex flex-1 items-center justify-center bg-[#51336A] text-white text-[18px] hover:opacity-70 transform transition-all ease-in-out duration-300'>Save changes</button>
                    </div>
                </form>
            </div>
            <button className='font-bold text-[18px] text-black border-solid border-b-[1px] border-b-black hover:opacity-50 transform transition-all ease-in-out duration-300'>Delete account</button>
        </div>
    )
}

export default Account
