import React from 'react'

const EmailUs = () => {
  return (
    <div className='w-full flex flex-col gap-10'>
      <div className='w-full flex flex-col gap-[10px] font-medium text-[14px]'>
        <p>If you need assistance or support, please don't hesitate to reach out to us.</p>
        <p>We are here to help you with any questions or concerns you may have.</p>
      </div>

      <div className='w-full flex flex-col gap-[15px]'>
        <h1 className=' font-bold text-[16px] text-black'>Contact Us at Any of the Emails Below:</h1>
        <div className=' w-full flex flex-col text-[14px] text-black gap-[10px]'>
          <h1><span className=' font-semibold'>Support Email 1: </span><a href="mailto:info.vacvault.@gmail.com">info.vacvault.@gmail.com</a></h1>
          <h1><span className=' font-semibold'>Support Email 2: </span><a href="mailto:vacvault.@gmail.com">vacvault.@gmail.com</a></h1>
        </div>
      </div>

      <div className='w-full flex flex-col gap-2'>
        <p>Our dedicated support team is available to assist you with:</p>
        <ul className="flex flex-col gap-2 list-disc ml-2 pl-5">
          <li>Answering any inquiries about our services</li>
          <li>Providing technical support</li>
          <li>Offering guidance and information</li>
          <li>Addressing any concerns or feedback</li>
          <li>We are committed to providing you with the best possible support</li>
        </ul>
        <p>Your satisfaction and well-being are our top priorities</p>

        <h1 className=' mt-3 font-bold text-[14px]'>Don't hesitate to email us now!</h1>
      </div>
    </div>
  )
}

export default EmailUs
