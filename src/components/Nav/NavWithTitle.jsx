import React, { useEffect, useState } from 'react'
import { SetNavSwitch } from '../../features/nav/navSwitchSlice'
import {useDispatch } from 'react-redux'
import Nav from './Nav'

const NavWithTitle = ({ title }) => {
  const dispatch = useDispatch()
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 200;
      const isVisible = currentScrollPos < 200;

      setIsVisible(isVisible);
      // prevScrollPos = currentScrollPos;
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    };

    window.addEventListener('scroll', handleScroll);

      // Scroll to top when the component is mounted
      scrollToTop();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(()=>{
    if(window.location.pathname==="/"){
      dispatch(SetNavSwitch(0))
    }
   else if(window.location.pathname==="/about"){
      dispatch(SetNavSwitch(1))
  }
  else if(window.location.pathname==="/services"){
    dispatch(SetNavSwitch(2))
}
else if(window.location.pathname==="/contact"){
  dispatch(SetNavSwitch(3))
}
else{
  dispatch(SetNavSwitch(-1))
}
}, [dispatch])

  return (
    <div>
      <Nav />
      {/* <div className='bg-nav_bg bg-cover bg-center w-full h-[223.42px] flex flex-col items-center justify-end text-center fixed'>
        <h1 className='text-[54px] text-white -mt-8 font-sans'>{title}</h1>
      </div> */}
      <div
        className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          } bg-nav_bg bg-cover bg-center w-full ${title==="Our Customer Experience"? "h-[170px] xm:h-[223.42px] ":"h-[150px] xm:h-[223.42px]"} flex flex-col items-center justify-end text-center fixed px-[6%] xl:px-[8%]`}
        style={{ top: isVisible ? '0' : '-223.42px' }}
      >
        <h1 className=' text-[34px] xm:text-[54px] text-white -mt-8 font-sans'>{title}</h1>
      </div>
    </div>
  )
}

export default NavWithTitle
