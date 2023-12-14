import React, { useEffect } from 'react'

const Bookings = () => {
  useEffect(()=>{

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    };

    scrollToTop()
    
}, [])
  return (
    <div>
      Bookings
    </div>
  )
}

export default Bookings
