import React, { useEffect, useState } from 'react'
import './CarouselElements.css'
import right_arrow from './assets/right_arrow.svg'
import left_arrow from './assets/left_arrow.svg'
import right_gray_arrow from './assets/right_gray_arrow.svg'
import left_gray_arrow from './assets/left_gray_arrow.svg'

const Carousel = (props) => {
    const {children, show} = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const [touchPosition, setTouchPosition] = useState(null)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {
                    currentIndex > 0 ?
                    <button onClick={prev} className="left-arrow">
                        <img src={left_arrow} alt="arrow-left" />
                    </button>
                    :
                    <button onClick={prev} className="left-arrow">
                        <img src={left_gray_arrow} alt="arrow-left"  />
                    </button>
                }
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={` carousel-content show-${show}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
                    >
                        {children}
                    </div>
                </div>
                {
                    currentIndex < (length - show) ?
                    <button onClick={next} className="right-arrow">
                           <img src={right_arrow} alt="arrow-right" />
                    </button>:
                    <button onClick={next} className="right-arrow cursor-not-allowed">
                    <img src={right_gray_arrow} alt="arrow-right" />
             </button>
                }
            </div>
        </div>
    )
}

export default Carousel
