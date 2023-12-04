import React from 'react'
import team from './assets/team.svg'

const FoudationInfo = () => {
    return (
        <div className=' px-[6%] xl:px-[8%] mt-[131px] flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start  gap-[28px]'>
            <img src={team} alt=""  className=' md:w-[341px] md:h-[342px] lg:w-[441px] lg:h-[442px]'/>
            <div className='flex flex-col gap-[30px] font-light lg:text-[20px]'>
                <div className=' flex flex-col'>
                    <h1>Founded with a spirit of innovation,
                        Vacvault emerged as a beacon of reliable luggage storage solutions.
                        In the wake of a changing travel landscape, our dedicated team acquired the company,
                        infusing it with renewed purpose and determination.
                    </h1>
                    <h1>Our journey mirrors the adaptability
                        we offer travelers. With an unwavering commitment to security, convenience, and peace of
                        mind, we've evolved to serve your needs.</h1>
                    <h1>We're not just a service; we're your travel ally,
                        striving to unburden your journeys, whatever it takes.</h1>
                </div>
                <h1>This is a tough business, but we want to help. Whatever it takes.</h1>
            </div>
        </div >
    )
}

export default FoudationInfo
