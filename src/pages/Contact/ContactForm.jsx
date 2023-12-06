import React from 'react'

const ContactForm = () => {
    return (
        <div className=' w-full sm:px-[12%] mt-[33px]'>
            <form action="" method="post">
                <div className=' flex flex-col gap-4 xm:gap-[30px]'>
                    {/**First Name and Last Name */}
                    <div className=' w-full flex flex-col xm:flex-row gap-4'>
                        <div className=' w-full text-left flex flex-col gap-[5px]'>
                            <label htmlFor="firstname" className=' font-semibold text-[16px]'>First Name <span className=' text-[#CC0000] text-[14px]'>*</span></label>
                            <input required type="text" name="firstname" id="firstname" className=' focus:outline-[#51336A] pl-2 w-full h-[34px] border-[1px] border-[#CED4DA] rounded-[4px]' />
                        </div>

                        <div className=' w-full text-left flex flex-col gap-[5px]'>
                            <label htmlFor="lastname" className=' font-semibold text-[16px]'>Last Name <span className=' text-[#CC0000] text-[14px]'>*</span></label>
                            <input required type="text" name="lastname" id="lastname" className=' focus:outline-[#51336A] pl-2 w-full h-[34px] border-[1px] border-[#CED4DA] rounded-[4px]' />
                        </div>
                    </div>

                    {/**Email and Phone Number */}
                    <div className=' w-full flex flex-col xm:flex-row gap-4'>
                        <div className=' w-full text-left flex flex-col gap-[5px]'>
                            <label htmlFor="email" className=' font-semibold text-[16px]'>Email Address <span className=' text-[#CC0000] text-[14px]'>*</span></label>
                            <input required type="email" name="email" id="email" className=' focus:outline-[#51336A] pl-2 w-full h-[34px] border-[1px] border-[#CED4DA] rounded-[4px]' />
                        </div>

                        <div className=' w-full text-left flex flex-col gap-[5px]'>
                            <label htmlFor="phone_number" className=' font-semibold text-[16px]'>Phone Number <span className=' text-[#CC0000] text-[14px]'>*</span></label>
                            <input required type="tel" name="phone_number" id="phone_number" className=' focus:outline-[#51336A] pl-2 w-full h-[34px] border-[1px] border-[#CED4DA] rounded-[4px]' />
                        </div>
                    </div>
                </div>
                <div className=' w-full flex flex-col text-left items-start justify-start mt-[47px]'>
                    <label htmlFor="message" className=' font-semibold text-[16px]'>How may we help you? <span className=' text-[#CC0000] text-[14px]'>*</span></label>
                    <textarea required  name="message" id="message" cols="30" rows="10" className='focus:outline-[#51336A] pl-2  mt-[10px] w-full border-[1px] border-[#CED4DA] rounded-[4px] resize-none'></textarea>
                </div>

                <div className=' w-full flex items-center justify-center text-center mt-[44px]'>
                    <button type="submit" className=' bg-[#51336A] font-medium text-[13px] text-white rounded-[4px] w-[360px] h-[48px]'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
