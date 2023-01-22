import React from 'react'
import 'flowbite'
import image1 from './images/pic1.jpg';
import image2 from './images/pic2.jpg';
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
                
                {/* <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 d-none text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 d-none text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button> */}
            </div>

        </>
    )
}

export default Carousel
