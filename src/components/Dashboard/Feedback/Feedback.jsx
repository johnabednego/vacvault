import React, { useEffect } from 'react'

const Feedback = () => {
  useEffect(() => {

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    };

    scrollToTop()

  }, [])
  return (
    <div className=' pt-[20px] sm:pt-0 pr-4 xl:pr-[77px] h-full pb-3 overflow-hidden overflow-y-scroll'>
      <h1 className=' font-bold text-[24px] xm:text-[32px] lg:text-[40px] text-black'>Let your feedback be known</h1>
      <div className=' mt-10 w-full flex flex-col gap-3 text-[13px] text-black'>
        <h1 className=' font-bold text-[14px] text-black'>We Value Your Feedback!</h1>
        <p>Your opinion matters to us.</p>
        <p>At VacVault, we strive to provide the best experience possible,
          and your feedback plays a crucial role in helping us achieve that.</p>
        <p>We invite you to share your thoughts, suggestions,
          or any issues you may have encountered while using our website.
          Simply type out your feedback in the box provided and click the 'Submit' button.</p>
        <p>Your input will be sent directly to our team, and
          we assure you that it will be reviewed with the utmost attention.</p>
        <p>Thank you for taking the time to help us improve. We look forward to hearing from you!</p>
      </div>

      {/**Submit your feedback */}
      <div className=' mt-[60px] w-full flex flex-col gap-[30px]'>
        <h1 className=' font-bold text-[14px] text-black'>Submit Your Feedback:</h1>
        <form className='w-full max-w-[566px] flex flex-col items-center gap-[30px]'>
          <textarea required name="message" id="message" placeholder='Message' className=' w-full h-[176px] rounded-[10px] p-3 resize-none border-solid border-[1px] border-black'></textarea>
          <button type="submit" className=' w-[180px] sm:w-[214px] h-[60px] rounded-[80px] px-2 flex items-center justify-center bg-[#51336A] border-solid border-[1px] border-[#C1C1C1] shadow-switch hover:opacity-70 transform transition-all ease-in-out duration-300'><span className='w-full h-[45px] rounded-[30px] flex items-center justify-center text-center bg-[#51336A] border-solid border-[1px] border-white font-bold text-[18px] text-white'>Send</span></button>
        </form>
      </div>
    </div>
  )
}

export default Feedback
