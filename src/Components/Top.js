import React from 'react'
import image from './images/topSec-image.jpg'
import {Link} from 'react-router-dom'


const Top = () => {
    return (
        <>
            <div id="top" className=''>
                <div className='text pl-20 pb-10 '>
                    <div className='sub-content1  lg:font-bold lg:text-5xl leading-tight text-white mb-6 sm:text-3xl sm:font-bold'>Start shopping at Clothify</div>
                    <div className='sub-content2 lg:font-light lg:text-2xl text-white sm:text-xl'>Shop at Clothify for stylish outfits that fit your personality and budget.
                    </div>
                    <div>
                        <Link to="/loginTrial">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-semibold mt-8 py-3 px-16 rounded ">
                            Start Free Trial
                        </button>
                        </Link>
                    </div>
                </div>
                <div className='topSec-Image'>
                    <div className="image">

                    {/* <img  src={image} alt='top-sec-image'></img> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Top
