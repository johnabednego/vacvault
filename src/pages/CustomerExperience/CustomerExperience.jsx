import React from 'react'
import NavWithTitle from '../../components/Nav/NavWithTitle'
import Footer from '../../components/Footer/Footer'
import line from './assets/line.svg'
import person1 from './assets/person1.png'
import person2 from './assets/person2.png'
import person3 from './assets/person3.png'
import person4 from './assets/person4.png'
import person5 from './assets/person5.png'
import person6 from './assets/person6.png'

const CustomerExperience = () => {
  const customers = [
    {image: person1, name: "Ama", message: "Using Vacvault was truly remarkable. They collected and returned my items promptly and in perfect condition. Their efficiency in delivering within 24 hours astounded me. I'm eager to recommend Vacvault widely." },
    {image: person2, name: "Jerry", message: "My experience with Vacvault was outstanding. They swiftly collected and returned my items in pristine condition. The speed of pickup and delivery within 24 hours was simply amazing. I'll definitely recommend Vacvault to everyone I know." },
    {image: person3, name: "Mary", message: "Vacvault made storage effortless for me. They collected and returned my belongings swiftly and in perfect shape. Their ability to deliver within 24 hours amazed me. I'll be enthusiastically recommending Vacvault."},
    {image: person4, name: "Prince", message: "Choosing Vacvault was an excellent decision. They swiftly collected and returned my items in their original condition. Their speedy delivery within 24 hours surprised me. I'm excited to recommend Vacvault to everyone."},
    {image: person5, name: "Dr. Samuel", message: "I had an amazing experience with Vacvault. They collected and returned my items promptly and in perfect condition. Their quick delivery within 24 hours impressed me. I'll surely recommend Vacvault to all."},
    {image: person6, name: "Portia", message: "Vacvault provided an exceptional service. They collected and returned my items swiftly and in impeccable condition. Their delivery within 24 hours was astonishing. I'll be highly recommending Vacvault."},
  ]
  return (
    <div>
      <NavWithTitle title="Our Customer Experience" />
      <div className='w-full  pt-[95px] xm:pt-[195px]'>
        <div className=' flex flex-col lg:flex-row  flex-wrap justify-between px-[6%] sm:px-[8%] mt-[123.58px]'>
          {customers.map(customer => {
            return (
              <div className=' w-full lg:w-[45%]'>
                <div className=' relative z-[-1] rounded-[95px] w-[95px] h-[95px]  sm:rounded-[195px] sm:w-[195px] sm:h-[195px] border-[5px] border-[#51336A]'>
                  <img src={customer.image} alt="" className=' object-cover rounded-[95px] sm:rounded-[195px] w-full h-full' />
                </div>

                <div className=' px-[12px] xm:px-[34px] py-[37px] relative z-[-2] top-[-56px] sm:top-[-156px] ml-[5px] sm:ml-[39px] w-full  rounded-tr-[50px] rounded-bl-[50px] shadow-customer'>
                  <div className=' w-full flex flex-col items-end justify-end gap-5'>
                    <h1 className=' font-medium text-[24px] text-[#51336A]'>{customer.name}</h1>
                    <img src={line} alt="" />
                  </div>

                  <h1 className=' text-justify mt-[50px] sm:mt-[105px] text-[16px] sm:text-[24px]'>{customer.message}</h1>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CustomerExperience
