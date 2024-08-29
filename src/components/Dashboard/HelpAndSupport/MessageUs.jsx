import React from 'react'

const MessageUs = () => {
  return (
    <div className='w-full flex flex-col gap-10'>
      <div className='w-full flex flex-col gap-[10px] font-medium text-[14px]'>
        <p>If you need assistance or support, please don't hesitate to reach out to us.</p>
        <p>We are here to help you with any questions or concerns you may have.</p>
      </div>
      <form className='w-full max-w-[566px] flex flex-col items-center gap-[30px]'>
      <textarea required name="message" id="message" placeholder='Message' className=' w-full h-[176px] rounded-[10px] p-3 resize-none border-solid border-[1px] border-black'></textarea>
      <button type="submit" className=' w-[180px] sm:w-[214px] h-[60px] rounded-[80px] px-2 flex items-center justify-center bg-[#51336A] border-solid border-[1px] border-[#C1C1C1] shadow-switch hover:opacity-70 transform transition-all ease-in-out duration-300'><span className='w-full h-[45px] rounded-[30px] flex items-center justify-center text-center bg-[#51336A] border-solid border-[1px] border-white font-bold text-[18px] text-white'>Send</span></button>
      </form>
    </div>
  )
}

export default MessageUs
