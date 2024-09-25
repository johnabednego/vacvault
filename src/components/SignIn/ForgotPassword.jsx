import React from 'react'
import vacvault from './assets/vacvault.svg'
import errorIcon from './assets/error.svg'

const ForgotPassword = ({resetRequestPassword, restRequestError, forgotPasswordEmail, setForgotPasswordEmail, backToSignIn}) => {
    return (
        <form method='post' onSubmit={resetRequestPassword}>
            <div className=' smallDevice w-full sm:w-[528px] rounded-[30px] shadow-input bg-white pt-8 pb-[56px] px-[2.875rem] relative'>
                <div className=' w-full flex flex-col items-center justify-center text-center'>
                    <img src={vacvault} alt="" className=' h-[33px] w-[107px]' />
                    {restRequestError.length > 0 ? <h1 className=' py-[5px] flex justify-center items-center text-center rounded-[20px] bg-[#FFDFE4] border-solid border-[1px] border-[#EB0728] w-full mt-[15px] text-[12px] text-[#EB0728]'>
                        <img src={errorIcon} alt="" className='mr-[5px]' />
                        {restRequestError}
                    </h1> : null}
                    <h1 className=' mt-[25px] text-[18px] font-bold'>Forgot Password?</h1>
                    <h1 className=' mt-1 text-[14px] text-[#707070]'>
                        No worries, we will send you reset instructions
                    </h1>
                    {/** email */}
                    <div className=' w-full mt-[23px] box-border m-0 basis-full flex-grow-0 max-w-full'>
                        <div className=' box-border flex flex-wrap w-full'>
                            <div className='w-full flex items-start'>
                                <input value={forgotPasswordEmail} onChange={(e) => setForgotPasswordEmail(e.target.value)} required type="email" name="forgotPasswordEmail" id="forgotPasswordEmail" data-cy="forgotPasswordEmail" placeholder="Email" className=' m-0 text-[15px] text-[#707070] w-full font-normal bg-[#E5E5E5] h-[40px] rounded-[30px] pl-5 ' />
                            </div>
                        </div>
                        {/** reset pasword button */}
                        <button type="submit" className=' mt-[15px] bg-[#51336A] h-[40px] relative border-none rounded-[30px] select-none text-white text-[1rem] w-full '>reset password</button>
                        <button onClick={() => backToSignIn()} className=' mt-[29px] font-bold text-[12px] text-[#707070]'>BACK TO SIGN IN</button>
                    </div>

                </div>
            </div>
        </form>
    )
}

export default ForgotPassword
