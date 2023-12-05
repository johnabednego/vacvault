import React from 'react'
import NavWithTitle from '../../components/Nav/NavWithTitle'
import circle_1 from './assets/circle_1.svg'
import circle_2 from './assets/circle_2.svg'
import circle_3 from './assets/circle_3.svg'
import WhQuestion from './WhQuestion'

const AboutHero = () => {
  const TheWhQuestions = [
    { circle: circle_1, title: "Who We Are", message: "Vacvault, your trusted travel companion, offers secure and convenient luggage storage solutions. We prioritize safeguarding belongings, providing hassle-free experiences, and ensuring peace of mind for all travelers." },
    { circle: circle_2, title: "What We Do", message: "At Vacvault, we specialize in secure storage for luggage during breaks, offering 24/7 monitoring and flexible durations. Our user-friendly services include easy drop-off, pick-up, and expert assistance with handling." },
    { circle: circle_3, title: "Why We Do It", message: "We exist to make travel worry-free. Vacvault's mission is to offer travelers a safe space for their possessions, removing the luggage burden. We strive to enhance journeys with convenience, security, and peace of mind." }
  ]
  return (
    <div>
      <NavWithTitle title="About Us" />
      <div className='w-full  pt-[95px] xm:pt-[195px] bg-[#51336A]'>
        {/* <img src={woman} alt="" className='' /> */}
        <div className=' w-full h-[513px] flex items-center  bg-about_woman bg-center bg-cover'>
          <div className=' w-full text-center flex flex-col gap-[27px] px-3'>
            <h1 className=' text-[16px] sm:text-[20px] text-white'>We love what we do and we love helping others succeed at what they love to do.</h1>
            <h1 className=' text-[14px] sm:text-[18px] text-[#FAFAFA]'>Prince Vac, <span className=' text-[#A8CF38]'>CEO</span></h1>
          </div>
        </div>
      </div>
      <div className=' px-[6%] xl:px-[8%] w-full flex  flex-wrap gap-10 sm:gap-[30px] lg:gap-[60px] sm:flex-nowrap items-center justify-center text-center mt-[-90px] lg:mt-[-110px]'>
        {TheWhQuestions.map(question => {
          return (
            <WhQuestion circle={question.circle} title={question.title} message={question.message} />
          )
        })}
      </div>
    </div>
  )
}

export default AboutHero
