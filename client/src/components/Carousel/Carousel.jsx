import React, { useState, useEffect } from 'react';
import carouselPicOne from '../../images/carousel-pic-one.png'
import carouselPicTwo from '../../images/carousel-pic-two.png'
import carouselPicThree from '../../images/carousel-pic-three.png'
import carouselPicFour from '../../images/carousel-pic-four.png'
// import carouselPicFour from '../../images/carousel-pic-four.png'
import './Carousel.css'

const Carousel = () => {
    const [carouselPics] = useState([
        carouselPicOne,
        carouselPicTwo,
        carouselPicThree,
        carouselPicFour
    ])
    const [picId, setPicId] = useState(0)

    useEffect(() => {
        if (true) {
            const interval = setInterval(nextPic, 4000)
            return () => clearInterval(interval)
        }

    })

    const previousPic = () => {
        if (picId <= 0) {
            setPicId(0)
        } else {
            setPicId(picId - 1)
        }
    }

    const nextPic = () => {

        if (picId === carouselPics.length - 1) {
            setPicId(0)
        } else {
            setPicId(picId + 1)
        }
    }
    return (
        <div>
            <div className='carousel' style={{ backgroundImage: `url(${carouselPics[picId]})` }}>
                {/* <button className="previous" onClick={previousPic}>Prev</button>
                <button className="next" onClick={nextPic}>Next</button> */}

            </div>
        </div>
    );
};

export default Carousel;