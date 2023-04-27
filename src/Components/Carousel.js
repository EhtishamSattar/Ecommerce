import React from 'react'
import 'flowbite'
import image1 from './images/pic1.jpg';
import image3 from './images/pic3.jpg';
import image4 from './images/pic4.jpg';
import image5 from './images/pic5.jpg';
import image6 from './images/pic6.jpg';
import image7 from './images/pic7.jpg';
import image8 from './images/pic8.jpg';

const Carousel = () => {
    return (
        <>

            <div id="default-carousel" className="relative" data-carousel="slide">
                
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={image1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                    </div>
                    
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={image3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={image4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={image5} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={image6} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={image7} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src={image8} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>

                </div>
                
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="4"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="5"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="6"></button>
                    
                </div>
            </div>

        </>
    )
}

export default Carousel
