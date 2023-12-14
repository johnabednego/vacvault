import React, { useEffect } from 'react'

const Notifications = () => {
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
      Notifications
    </div>
  )
}

export default Notifications
