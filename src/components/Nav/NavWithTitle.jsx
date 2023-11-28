import React from 'react'
import Nav from './Nav'

const NavWithTitle = ({title}) => {
  return (
    <div>
      <Nav />
      <div className='bg-nav_bg bg-cover bg-center w-full h-[223.42px] flex flex-col items-center justify-end text-center fixed'>
        <h1 className='text-[54px] text-white -mt-8 font-sans'>{title}</h1>
      </div>
    </div>
  )
}

export default NavWithTitle
