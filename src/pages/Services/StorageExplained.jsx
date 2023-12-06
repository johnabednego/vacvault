import React from 'react'
import step1 from './assets/step1.svg'
import step2 from './assets/step2.svg'
import step3 from './assets/step3.svg'
import step4 from './assets/step4.svg'

const StorageExplained = () => {
    
    const items = [
        { id:"1", image: step1, title: "Book", text: "Click on Book Now to  fill up a form  and make payment online or in person" },
        {id:"2", image:step2, title:"Get Items Ready", text:"Prepare and get your items ready for us to pick them up"},
        {id:"3", image:step3, title:"Pick Up", text:"We will come to the location of your items to pick them up for storage"},
        {id:"4", image:step4, title:"Request Item", text:"Request for your items to be brought to you as picked"}
    ]
    
    return (
        <div className=' px-[6%] xl:px-[8%] mt-[132px] mb-[197px]'>
            <h1 className=' w-full text-center font-extrabold text-[24px] sm:text-[32px]'>Storage explained</h1>
            <h1 className=' w-full text-center font-normal text-[20px] sm:text-[24px]'>Four simple steps</h1>
            <div className=' mt-[50px] w-full flex flex-wrap items-center justify-center md:justify-between  gap-[100px] md:gap-[25px] lg:gap-[50px] xl:gap-[100px]'>
                {items.map(item => {
                    return (
                        <div className=' mt-3 flex flex-col md:w-[300px] lg:w-[400px] xl:w-[450px]'>
                            <img src={item.image} alt="" />
                            <div className='flex gap-6 mt-5'>
                                <div className=' w-[36px] h-[32px] rounded-[31px] bg-[#51336A] text-white flex items-center justify-center text-center'>{item.id}</div>
                                <div className=' w-full flex flex-col gap-[10px]'>
                                    <h1 className=' font-bold text-[24px]'>{item.title}</h1>
                                    <h1 className=' text-[24px]'>{item.text}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default StorageExplained
