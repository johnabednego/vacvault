import React from 'react'
import man from './assets/team-members/man.png'
import Carousel from '../../components/Carousel/Carousel'
import customerPic from './assets/customer.svg'
import { useNavigate } from 'react-router-dom'

const Team = () => {
  const navigate = useNavigate()
  return (
    <div className=' pt-[107.11px]  flex flex-col pb-[100px]'>
      <div className='flex flex-col px-[6%] xl:px-[8%] w-full'>
        <h1 className=' text-[45px] text-black'>Our Team</h1>
        <h1 className=' text-[15px] font-light mt-[20px]'>VacVault was founded by a team of experienced professionals with a passion for providing secure and reliable storage solutions for customers’ belongings.</h1>

        <div className=' larger pt-[77.97px] pb-[137.97px] flex justify-between'>
          <Carousel
            show={2}
          >
            <div className=' h-[320.06px] flex gap-[45px] item'>
              <img src={man} alt="" className=' rounded-[6px] w-[213.38px]' />
              <div className='flex flex-col w-[168px] overflow-scroll'>
                <h1 className=' text-[30px] -mt-[12px] name'>Jamie Morrison</h1>
                <h1 className='  info  mt-[15px] font-light text-[15px]'>
                  With a strong
                  background in logistics
                  and a sharp eye for
                  detail, I leverage my
                  expertise to provide
                  efficient and secure
                  storage solutions for our
                  customers’ luggage,
                  ensuring their peace of
                  mind during their travels.
                </h1>
              </div>
            </div>

            <div className=' h-[320.06px] flex gap-[45px] item'>
              <img src={man} alt="" className=' rounded-[6px] w-[213.38px]' />
              <div className='flex flex-col w-[168px] overflow-scroll'>
                <h1 className=' text-[30px] -mt-[12px] name'>Jamie Morrison</h1>
                <h1 className='   info  mt-[15px] font-light text-[15px]'>
                  With a strong
                  background in logistics
                  and a sharp eye for
                  detail, I leverage my
                  expertise to provide
                  efficient and secure
                  storage solutions for our
                  customers’ luggage,
                  ensuring their peace of
                  mind during their travels.
                </h1>
              </div>
            </div>

            <div className=' h-[320.06px] flex gap-[45px] item'>
              <img src={man} alt="" className=' rounded-[6px] w-[213.38px]' />
              <div className='flex flex-col w-[168px] overflow-scroll'>
                <h1 className=' text-[30px] -mt-[12px] name'>Jamie Morrison</h1>
                <h1 className='   info  mt-[15px] font-light text-[15px]'>
                  With a strong
                  background in logistics
                  and a sharp eye for
                  detail, I leverage my
                  expertise to provide
                  efficient and secure
                  storage solutions for our
                  customers’ luggage,
                  ensuring their peace of
                  mind during their travels.
                </h1>
              </div>
            </div>

            <div className=' h-[320.06px] flex gap-[45px] item'>
              <img src={man} alt="" className=' rounded-[6px] w-[213.38px]' />
              <div className='flex flex-col w-[168px] overflow-scroll'>
                <h1 className=' text-[30px] -mt-[12px] name'>Jamie Morrison</h1>
                <h1 className='   info  mt-[15px] font-light text-[15px]'>
                  With a strong
                  background in logistics
                  and a sharp eye for
                  detail, I leverage my
                  expertise to provide
                  efficient and secure
                  storage solutions for our
                  customers’ luggage,
                  ensuring their peace of
                  mind during their travels.
                </h1>
              </div>
            </div>
          </Carousel>
        </div>

        <div className=' small hidden pt-[77.97px] pb-[137.97px] justify-between'>
          <Carousel
            show={1}
          >
            <div className=' h-[320.06px] flex gap-[45px] item'>
              <img src={man} alt="" className=' rounded-[6px] w-[213.38px]' />
              <div className='flex flex-col w-[168px] overflow-scroll'>
                <h1 className=' text-[30px] -mt-[12px] name'>Jamie Morrison</h1>
                <h1 className='   info  mt-[15px] font-light text-[15px]'>
                  With a strong
                  background in logistics
                  and a sharp eye for
                  detail, I leverage my
                  expertise to provide
                  efficient and secure
                  storage solutions for our
                  customers’ luggage,
                  ensuring their peace of
                  mind during their travels.
                </h1>
              </div>
            </div>

            <div className=' h-[320.06px] flex gap-[45px] item'>
              <img src={man} alt="" className=' rounded-[6px] w-[213.38px]' />
              <div className='flex flex-col w-[168px] overflow-scroll'>
                <h1 className=' text-[30px] -mt-[12px] name'>Jamie Morrison</h1>
                <h1 className='   info  mt-[15px] font-light text-[15px]'>
                  With a strong
                  background in logistics
                  and a sharp eye for
                  detail, I leverage my
                  expertise to provide
                  efficient and secure
                  storage solutions for our
                  customers’ luggage,
                  ensuring their peace of
                  mind during their travels.
                </h1>
              </div>
            </div>

            <div className=' h-[320.06px] flex gap-[45px] item'>
              <img src={man} alt="" className=' rounded-[6px] w-[213.38px]' />
              <div className='flex flex-col w-[168px] overflow-scroll'>
                <h1 className=' text-[30px] -mt-[12px] name'>Jamie Morrison</h1>
                <h1 className='   info  mt-[15px] font-light text-[15px]'>
                  With a strong
                  background in logistics
                  and a sharp eye for
                  detail, I leverage my
                  expertise to provide
                  efficient and secure
                  storage solutions for our
                  customers’ luggage,
                  ensuring their peace of
                  mind during their travels.
                </h1>
              </div>
            </div>

            <div className=' h-[320.06px] flex gap-[45px] item'>
              <img src={man} alt="" className=' rounded-[6px] w-[213.38px]' />
              <div className='flex flex-col w-[168px] overflow-scroll'>
                <h1 className=' text-[30px] -mt-[12px] name'>Jamie Morrison</h1>
                <h1 className='   info  mt-[15px] font-light text-[15px]'>
                  With a strong
                  background in logistics
                  and a sharp eye for
                  detail, I leverage my
                  expertise to provide
                  efficient and secure
                  storage solutions for our
                  customers’ luggage,
                  ensuring their peace of
                  mind during their travels.
                </h1>
              </div>
            </div>
          </Carousel>
        </div>

        {/**Happy Customers */}
        <div className=' flex flex-col sm:flex-row items-center justify-between w-full gap-8 sm:gap-0'>
          <div className='flex flex-col items-start px-[10px] text-left sm:w-[400px] md:w-[430px] gap-5'>
            <h1 className=' text-[30px] xl:text-[45px]'>Happy Customers</h1>
            <h1 className='font-light text-[15px] text-[#4D4D4D]'>Our secure and reliable luggage storage services provide peace of
              mind for customers, earning their trust and loyalty.</h1>
              <button onClick={()=>navigate("/customer_experience")} className=' bg-[#212121] flex text-white text-center items-center justify-center w-[250px] h-[56px] rounded-[6px] text-[14px]'>View Our Customers Experience</button>
          </div>
          <img src={customerPic} alt="" className=' sm:w-[393.14px] sm:h-[212.27px] lg:w-[493.14px] lg:h-[312.27px] xl:w-[593.14px] xl:h-[412.27px]' />
        </div>
      </div>
    </div>
  )
}

export default Team
