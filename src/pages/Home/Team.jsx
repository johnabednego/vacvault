import React from 'react'
import man from './assets/team-members/man.png'
import Carousel from '../../components/Carousel/Carousel'

const Team = () => {
  return (
    <div className=' pt-[107.11px]  flex flex-col pb-[100px]'>
      <div className='flex flex-col px-[6%] xl:px-[8%] w-full'>
        <h1 className=' text-[45px] text-black'>Our Team</h1>
        <h1 className=' text-[15px] font-light mt-[20px]'>VacVault was founded by a team of experienced professionals with a passion for providing secure and reliable storage solutions for customers’ belongings.</h1>

        <div className=' larger pt-[77.97px] flex justify-between'>
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

        <div className=' small hidden pt-[77.97px] justify-between'>
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
        {/* <Carousel/> */}
      </div>
    </div>
  )
}

export default Team
