import React from 'react'
import mission from './assets/mission.svg'
import premium from './assets/premium.svg'

const items = [
    { title: "Our Mission", image: mission, text: "At Vacvault, our mission is to provide top-tier secure storage solutions that alleviate travel stress. Through unwavering commitment to safety and convenience, we empower travelers to explore the world with confidence. By fostering a secure environment, offering flexible services, and prioritizing customer care, we aim to redefine the travel experience." },
    { title: "Our Commitment", image: premium, text: "At Vacvault, we hold a steadfast commitment to revolutionizing travel experiences. Our pledge is to provide top-tier secure storage solutions, ensuring your belongings are safeguarded during your journeys. We aspire to build relationships founded on trust, understanding, and a shared dedication to enhancing your travel convenience and peace of mind." }
]
const OurMission = () => {
    return (
        <div className=' mb-[189.67px] mt-[131px] px-[6%] xl:px-[8%] w-full flex flex-col md:flex-row items-center justify-between gap-16'>
            {
                items.map(item => {
                    return (
                        <div className=' flex flex-col items-center justify-center xm:w-[430px]'>
                            <h1 className=' text-center font-medium text-[30px]'>{item.title}</h1>
                            <img src={item.image} alt="" />
                            <h1 className=' font-light text-[16px] text-center xm:text-justify'>{item.text}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OurMission
