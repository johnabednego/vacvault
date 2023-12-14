import React, { useEffect } from 'react'

const HelpAndSupport = () => {
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
      HelpAndSupport
    </div>
  )
}

export default HelpAndSupport
