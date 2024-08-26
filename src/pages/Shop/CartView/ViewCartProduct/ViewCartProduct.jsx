import React from 'react'
import bag2 from '../../assets/bag2.png'

const ViewCartProduct = () => {
    return (
        <div className=' w-full xm:w-[400px] sm:w-[581px] flex flex-col sm:flex-row gap-[20px] rounded-[10px]  shadow-input bg-white pt-[20px] pb-[20px] px-[20px] sm:px-[2.875rem] relative'>
            <img src={bag2} alt="bag" className=' w-full sm:w-[232px] h-[180px] xm:h-[200px] sm:h-[235px] object-cover object-center rounded-[10px] shadow-lg' />
            <div className='flex flex-col gap-[42px]'>
                <div className='flex flex-col gap-5'>
                    <h1 className=' font-bold text-[20px]'>Three in One Luggage</h1>
                    <p className=' text-[14px]'>
                        Three in One Luggage for all use. It is  best for
                        all usage and boundaries for all kind of travels
                        and all occasions in good quality.
                    </p>

                    {/**Color and Quantity*/}
                    <div className='flex flex-col'>
                        <h1 className='text-[14px]'><span className=' font-bold'>Color:</span> Black</h1>
                        <h1 className='text-[14px]'><span className=' font-bold'>Quantity:</span> 1</h1>
                    </div>

                    {/**Delete and Share */}
                    <div className=' mt-[20px] flex items-center gap-[10px]'>
                        <button className=' text-[#007185] hover:opacity-70'>Delete</button>
                        <div className=' h-[25px] border-solid border-[1px] border-[#D5D9D9]' />
                        <button className=' text-[#007185] hover:opacity-70'>Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCartProduct
