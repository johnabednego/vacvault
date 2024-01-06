import React from 'react'
import Book from './Book';

const BookModal = ({setBook}) => {

    const hideModal = (event) =>{
        const modal = document.getElementById('modal');
        // Check if the clicked element is outside of the modal
        if (event.target !== modal && !modal.contains(event.target)) {
            setBook(false); // Call the function to close the modal
        }
    }
    return (
        <div>
            <div
                onClick={hideModal}
                className=" cursor-pointer pt-0 h-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  z-[70] outline-none focus:outline-none scrollbar-hide"
            >
                <div id='modal' className="relative mt-[500px] xm:mt-[400px] sm:mt-[300px] xl:mt-[200px] mb-3  mx-2 sm:mx-0 ">
                    {/*content*/}
                    <div className=" cursor-default border-0  relative  rounded-bl-[30px] rounded-tr-[30px] shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                        <Book />
                    </div>
                </div>
            </div>
            <div className="opacity-70 fixed inset-0 z-[60] bg-black"></div>
        </div>
    )
}

export default BookModal
