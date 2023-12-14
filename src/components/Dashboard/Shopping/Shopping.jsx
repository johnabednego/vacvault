import React, { useEffect } from 'react'

const Shopping = () => {
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
      Shopping
    </div>
  )
}

export default Shopping
