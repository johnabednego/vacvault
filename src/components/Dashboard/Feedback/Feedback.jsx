import React, { useEffect } from 'react'

const Feedback = () => {
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
      Feedback
    </div>
  )
}

export default Feedback
