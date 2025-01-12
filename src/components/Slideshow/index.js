import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import meetingImage1 from '../../assets/images/Meetings/DSC_0065.JPG';
import meetingImage2 from '../../assets/images/Meetings/DSC_0075.JPG';
import meetingImage3 from '../../assets/images/Meetings/DSC_0180.JPG';
import meetingImage4 from '../../assets/images/Meetings/DSC_0181.JPG';
import meetingImage5 from '../../assets/images/Meetings/DSC_0182.JPG';
import meetingImage6 from '../../assets/images/Meetings/DSC_0190.JPG';
import meetingImage8 from '../../assets/images/Meetings/DSC_0207.JPG';
import meetingImage9 from '../../assets/images/Meetings/DSC_0208.JPG';
import meetingImage10 from '../../assets/images/Meetings/DSC_0210.JPG';
import meetingImage11 from '../../assets/images/Meetings/DSC_0214.JPG';
import meetingImage12 from '../../assets/images/Meetings/DSC_0224.JPG';

const Slideshow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const images = [
        meetingImage1, meetingImage2, meetingImage3, meetingImage4,
        meetingImage5, meetingImage6, meetingImage8,
        meetingImage9, meetingImage10, meetingImage11, meetingImage12
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex(prevIndex => 
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
                setIsTransitioning(false);
            }, 100); // Half of the transition time
        }, 5000);

        return () => clearInterval(timer);
    }, [images.length]);

    const goToNextSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentImageIndex(prevIndex => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setIsTransitioning(false);
        }, 100);
    };

    const goToPreviousSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentImageIndex(prevIndex => 
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
            setIsTransitioning(false);
        }, 100);
    };

    return (
        <div className={style.slideshow}>
            <button className={style.prevButton} onClick={goToPreviousSlide}>
                &#10094;
            </button>
            <img 
                src={images[currentImageIndex]} 
                alt={`Slide ${currentImageIndex + 1}`} 
                className={`${style.slideshowImage} ${isTransitioning ? style.fadeOut : style.fadeIn}`}
            />
            <button className={style.nextButton} onClick={goToNextSlide}>
                &#10095;
            </button>
            <div className={style.dots}>
                {images.map((_, index) => (
                    <span 
                        key={index}
                        className={`${style.dot} ${index === currentImageIndex ? style.activeDot : ''}`}
                        onClick={() => {
                            setIsTransitioning(true);
                            setTimeout(() => {
                                setCurrentImageIndex(index);
                                setIsTransitioning(false);
                            }, 100);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slideshow;