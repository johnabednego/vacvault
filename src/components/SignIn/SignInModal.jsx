import React from 'react'
import SignIn from './SignIn'
import { SignInFalse } from '../../features/nav/signInSlice'
import { useDispatch } from 'react-redux'

const SignInModal = () => {
    const dispatch = useDispatch()

    const hideModal = (event) =>{
        const modal = document.getElementById('modal');
        // Check if the clicked element is outside of the modal
        if (event.target !== modal && !modal.contains(event.target)) {
            dispatch(SignInFalse()); // Call the function to close the modal
        }
    }
    return (
        <div>
            <div
                onClick={hideModal}
                className=" cursor-pointer pt-[200px] h-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  z-[70] outline-none focus:outline-none scrollbar-hide"
            >
                <div id='modal' className="relative my-6 mx-2 xm:mx-0 ">
                    {/*content*/}
                    <div className=" cursor-default border-0  relative rounded-br-[50px] rounded-tl-[50px] shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                        <SignIn />
                    </div>
                </div>
            </div>
            <div className="opacity-70 fixed inset-0 z-[60] bg-black"></div>
        </div>
    )
}

export default SignInModal
