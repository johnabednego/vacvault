import React from 'react'
import luggage from './assets/luggage.svg'
import items from './assets/items.svg'

const ServicesInfo = () => {
  return (
    <div className=' px-[31px] sm:px-[61px] pt-[35px]'>
      {/**Book */}
      <div className=' flex flex-col'>
        <div className=' flex flex-col lg:flex-row gap-[34px] items-center lg:items-start'>
          <img src={luggage} alt="" className=' w-[503px] xl:w-[603px]' />
          <h1 className=' leading-[40px] xl:leading-[47px] text-[16px] xm:text-[20px] xl:text-[24px] text-justify'>It’s often said that your university years are some of the best in your life, but they are also some of the busiest. Between juggling your exams and countless social events, the last thing you need to worry about is finding a reliable and affordable self storage company to store your belongings. At VacVault, we tick all these bags, boxes and more. With our flexible contracts, wide variety of unit sizes, convenient locations, and moving services, you can store all your possessions over long vacations or between big moves with ease.</h1>
        </div>
        <div className=' flex w-full items-center justify-center mt-[56px]'>
          <button className=' rounded-[6px] bg-[#51336A] text-white w-[113.83px] h-[56px]'>Book Now</button>
        </div>
      </div>

      {/**Shop */}
      <div className=' flex flex-col mt-[145px]'>
        <div className=' flex flex-col-reverse lg:flex-row gap-[34px] items-center lg:items-start'>
          <h1 className=' leading-[40px] xl:leading-[47px] text-[16px] xm:text-[20px] xl:text-[24px] text-justify'>Vacvault isn't just a storage solution for students' belongings during vacations; it's also your one-stop online shop for all your student needs.Vacvault offers a wide range of essential items. With the convenience of online shopping, students can browse and buy what they need, knowing that their purchases will be delivered to under 24hours. Simplifying student life, Vacvault combines secure storage with a seamless shopping experience, making sure you're prepared for every academic and vacation-related demand.</h1>
          <img src={items} alt="" className=' w-[503px] xl:w-[603px]' />
        </div>
        <div className=' flex w-full items-center justify-center mt-[56px]'>
          <button className=' rounded-[6px] bg-[#51336A] text-white w-[113.83px] h-[56px]'>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default ServicesInfo
